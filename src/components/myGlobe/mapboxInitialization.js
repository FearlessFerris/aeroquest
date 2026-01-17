// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
import { handleFlightClickProperties } from './globe.utils';
import { LAYERS, toFeatureCollection } from './globe.utils';


// Mapbox Initialization 
export function MapboxInitialization({ 
    accessToken, 
    containerEl, 
    informationSource,
    onSelectedFlight,
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

    const flightLayerId = LAYERS.flights.layer.id; 
    map.on('click', flightLayerId, (e)=>{ 
        const feature = e.features?.[0];
        const p = feature?.properties;
        if(!p) return; 
        const selectedFlight = handleFlightClickProperties(p);
        onSelectedFlight(selectedFlight);
        console.log('Selected Flight Properties: ', selectedFlight);
    })
   
}