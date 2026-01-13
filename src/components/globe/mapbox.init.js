import mapboxgl from 'mapbox-gl';
import { setupCtrlScrollZoom, setupSlowCtrlRotate } from './globe.utils';

export function initGlobeMap({
  containerEl,
  accessToken,
  flightsGeoJSON,
  onFlightClick,
  onRegionChange,
  onReady,
}) {
  mapboxgl.accessToken = accessToken;

  const map = new mapboxgl.Map({
    container: containerEl,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    initialView: { center: [-90, 34], zoom: 4,},
    center: initialView.center,
    zoom: initialView.zoom,
    projection: 'globe',
    antialias: true,
    cooperativeGestures: false,
  });

  const updateRegion = () => {
    const c = map.getCenter();
    onRegionChange?.(c.lat, c.lng);
  };

  let cleanupGestures = null;
  let cleanupRotation = null;
  let handlersAttached = false;

  const onEnterFlights = () => (map.getCanvas().style.cursor = 'pointer', console.log('We are entering flights'));
  const onLeaveFlights = () => (map.getCanvas().style.cursor = '');
  const onClickFlights = (e) => {
    const f = e.features?.[0];
    if (!f) return;
    onFlightClick?.(f);
  };

  map.on('style.load', () => {
    map.setFog({
      range: [0.6, 10],
      color: 'rgba(2, 16, 18, 0.95)',
      'high-color': 'rgba(6, 25, 30, 0.95)',
      'space-color': 'rgba(2, 10, 12, 1)',
      'horizon-blend': 0.18,
    });

    if (!map.getSource('flights')) {
      map.addSource('flights', { type: 'geojson', data: flightsGeoJSON });
    }

    if (!map.getLayer('flights-dot')) {
      map.addLayer({
        id: 'flights-dot',
        type: 'circle',
        source: 'flights',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 2.5, 4, 5.5, 6, 7.5],
          'circle-color': 'rgba(171, 0, 60, 0.95)',
          'circle-blur': 0.35,
          'circle-stroke-width': 1,
          'circle-stroke-color': 'rgba(250, 250, 250, 0.35)',
          'circle-stroke-opacity': 0.8,
        },
      });
    }

    if (!handlersAttached) {
      handlersAttached = true;

      map.on('mouseenter', 'flights-dot', onEnterFlights);
      map.on('mouseleave', 'flights-dot', onLeaveFlights);
      map.on('click', 'flights-dot', onClickFlights);
    }

    cleanupGestures = setupCtrlScrollZoom(map);
    cleanupRotation = setupSlowCtrlRotate(map);

    updateRegion();
    map.on('moveend', updateRegion);

    onReady?.(map);
  });

  return {
    map,
    destroy() {
      map.off('moveend', updateRegion);
      try {
        map.off('mouseenter', 'flights-dot', onEnterFlights);
        map.off('mouseleave', 'flights-dot', onLeaveFlights);
        map.off('click', 'flights-dot', onClickFlights);
      } catch (e) {

      }
      cleanupGestures?.();
      cleanupRotation?.();
      map.remove();
    },
  };
}
