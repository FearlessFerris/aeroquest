// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
import { handleClickProperties } from './globe.utils';
import { LAYERS, toFeatureCollection } from './globe.utils';


// Mapbox Initialization 
export function MapboxInitialization({ 
    accessToken, 
    containerEl, 
    informationSource,
    onSelectedInformation,
}){ 
    mapboxgl.accessToken = accessToken; 

    const map = new mapboxgl.Map({ 
        container: containerEl, 
        center: [-90, 34],
        zoom: 4,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        projection: 'globe', 
        antialias: true, 
        cooperativeGestures: false,
    }); 
    
    map.on('style.load', ()=>{ 
        Object.entries(LAYERS).forEach(([layerName, layerConfig]) =>{ 
            const geojson = toFeatureCollection(informationSource?.[layerName]);
            console.log(geojson);
            if(!map.getSource(layerConfig.sourceId)){ 
                map.addSource(layerConfig.sourceId,{ 
                    type: 'geojson',
                    data: geojson
                });
            }

            if(!map.getLayer(layerConfig.layer.id)){ 
                map.addLayer(layerConfig.layer);
            }
        });
    });

    const airlineLayerId = LAYERS.airlines.layer.id;
    const airportLayerId = LAYERS.airports.layer.id;  
    const flightLayerId = LAYERS.flights.layer.id; 
   
    map.on('click', airlineLayerId, (e)=> { 
        const feature = e.features?.[0]
        const p = feature?.properties; 
        if(!p) return
        const selectedAirline = handleClickProperties(p)
        onSelectedInformation(selectedAirline);
        console.log('Selected Airline Properties: ', selectedAirline);
    })

    map.on('click', flightLayerId, (e)=>{ 
        const feature = e.features?.[0];
        const p = feature?.properties;
        if(!p) return; 
        const selectedFlight = handleClickProperties(p);
        onSelectedInformation(selectedFlight);
        console.log('Selected Flight Properties: ', selectedFlight);
    });

    map.on('click', airportLayerId, (e)=>{
        const feature = e.features?.[0];
        const p = feature?.properties;
        if(!p) return;
        const selectedAirport = handleClickProperties(p);
        onSelectedInformation(selectedAirport);
        console.log('Selected Airport Properties: ', selectedAirport);
    });

    return map; 
}

// Mapbox Initialization (luxury motion tuned)

// mapboxInitialization.js
// import mapboxgl from 'mapbox-gl';

// import { LAYERS, handleClickProperties, toFeatureCollection } from './globe.utils';
// import { applyLuxuryControls, focusSelection, stopAllCamera } from './mapbox.motion';

// export function MapboxInitialization({
//   accessToken,
//   containerEl,
//   informationSource,
//   onSelectedInformation,
// }) {
//   mapboxgl.accessToken = accessToken;

//   const map = new mapboxgl.Map({
//     container: containerEl,
//     style: 'mapbox://styles/mapbox/satellite-streets-v12',
//     center: [-90, 34],
//     zoom: 3.9,
//     projection: 'globe',
//     antialias: true,
//     cooperativeGestures: false,
//   });

//   map.once('load', () => {
//     applyLuxuryControls(map);

//     // Optional: atmosphere polish (safe try/catch)
//     // try {
//     //   map.setFog({
//     //     range: [0.8, 9],
//     //     'horizon-blend': 0.12,
//     //     'high-color': '#0b1416',
//     //     'space-color': '#000000',
//     //     'star-intensity': 0.35,
//     //   });
//     // } catch (_) {}

//     // ---- SOURCES (must exist before layers) ----
//     const safeAirlines = toFeatureCollection(informationSource?.airlines);
//     const safeAirports = toFeatureCollection(informationSource?.airports);
//     const safeFlights = toFeatureCollection(informationSource?.flights);

//     if (!map.getSource(LAYERS.airlines.sourceId)) {
//       map.addSource(LAYERS.airlines.sourceId, { type: 'geojson', data: safeAirlines });
//     }
//     if (!map.getSource(LAYERS.airports.sourceId)) {
//       map.addSource(LAYERS.airports.sourceId, { type: 'geojson', data: safeAirports });
//     }
//     if (!map.getSource(LAYERS.flights.sourceId)) {
//       map.addSource(LAYERS.flights.sourceId, { type: 'geojson', data: safeFlights });
//     }

//     // ---- LAYERS (sources alone won’t render anything) ----
//     if (!map.getLayer(LAYERS.airlines.layerId)) {
//       map.addLayer({
//         id: LAYERS.airlines.layerId,
//         type: 'circle',
//         source: LAYERS.airlines.sourceId,
//         paint: {
//           'circle-radius': 4,
//           'circle-color': '#f5e9cf',
//           'circle-opacity': 0.85,
//           'circle-blur': 0.2,
//           'circle-stroke-width': 1,
//           'circle-stroke-color': 'rgba(0,0,0,0.45)',
//         },
//       });
//     }

//     if (!map.getLayer(LAYERS.airports.layerId)) {
//       map.addLayer({
//         id: LAYERS.airports.layerId,
//         type: 'circle',
//         source: LAYERS.airports.sourceId,
//         paint: {
//           'circle-radius': 5,
//           'circle-color': '#fafafa',
//           'circle-opacity': 0.9,
//           'circle-stroke-width': 1.2,
//           'circle-stroke-color': 'rgba(0,0,0,0.55)',
//         },
//       });
//     }

//     if (!map.getLayer(LAYERS.flights.layerId)) {
//       map.addLayer({
//         id: LAYERS.flights.layerId,
//         type: 'circle',
//         source: LAYERS.flights.sourceId,
//         paint: {
//           'circle-radius': 3.5,
//           'circle-color': '#ab003c',
//           'circle-opacity': 0.95,
//           'circle-blur': 0.15,
//         },
//       });
//     }

//     // Cursor polish
//     const clickableLayers = [
//       LAYERS.airlines.layerId,
//       LAYERS.airports.layerId,
//       LAYERS.flights.layerId,
//     ];

//     clickableLayers.forEach((id) => {
//       map.on('mouseenter', id, () => (map.getCanvas().style.cursor = 'pointer'));
//       map.on('mouseleave', id, () => (map.getCanvas().style.cursor = ''));
//     });

//     // Click only rendered layers you care about (faster + deterministic)
//     map.on('click', (e) => {
//       const features = map.queryRenderedFeatures(e.point, { layers: clickableLayers });
//       if (!features?.length) return;

//       const f = features[0];
//       const props = { ...(f.properties || {}) };

//       const featureType = props.featureType || props.type || props.kind || null;

//       const selected = handleClickProperties({
//         ...props,
//         featureType,
//         lng: e.lngLat.lng,
//         lat: e.lngLat.lat,
//         geometry: f.geometry,
//       });

//       if (!selected) return;

//       onSelectedInformation?.(selected);

//       stopAllCamera(map);
//       focusSelection(map, selected);
//     });
//   });

//   return map;
// }
