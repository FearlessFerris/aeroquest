// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 



// Mapbox Initialization Component
export function mapboxInitialization({ 
    accessToken, 
    containerEl, 
    projection = 'globe', 
    initialView = { center: [-90, 34], zoom: 4,}, 
    style = 'mapbox://styles/mapbox/satellite-streets-v12',
    antialias = true, 
    cooperativeGestures = false,
    flightsGeoJSON,
}){ 
    mapboxgl.accessToken = accessToken; 
    const map = new mapboxgl.Map({ 
        container: containerEl, 
        center: initialView.center, 
        zoom: initialView.zoom, 
        style: style,
        projection: projection, 
        antialias: antialias,
        cooperativeGestures: cooperativeGestures, 
    });

    const onEnterFlights = () => (map.getCanvas().style.cursor = 'pointer');
    const onExitFlights = () => (map.getCanvas().style.cursor = ''); 
    const onClickFlights = (e) => { 
        const flight = e.features?.[0]; 
        
    }
    map.on('style.load', () => {
        map.setFog({
          range: [0.6, 10],
          color: 'rgba(2, 16, 18, 0.95)',
          'high-color': 'rgba(6, 25, 30, 0.95)',
          'space-color': 'rgba(2, 10, 12, 1)',
          'horizon-blend': 0.18,
        });
        if (!map.getSource('flights')) {
          map.addSource('flights', { 
                type: 'geojson', 
                data: flightsGeoJSON 
            });
        }
    
        if (!map.getLayer('flights-dot')) {
          map.addLayer({
            id: 'flights-dot',
            type: 'circle',
            source: 'flights',
            paint: {
              'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 2.5, 4, 5.5, 6, 7.5],
              'circle-color': 'rgba(171, 0, 60, .95)',
              'circle-blur': 0.35,
              'circle-stroke-width': 1,
              'circle-stroke-color': 'rgba(250, 250, 250, 0.35)',
              'circle-stroke-opacity': 0.8,
            },
          });
        }
      });
    
    return map;
}