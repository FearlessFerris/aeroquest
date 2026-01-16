// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
import { handleFlightClickProperties } from './globe.utils';
import { LAYERS } from './globe.utils';


// Mapbox Initialization 
export function MapboxInitialization({ 
    accessToken, 
    containerEl, 
    informationSource,
    informationSourceState,
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
        if(!informationSourceState.airlines && !map.getSource('airlines')){ 
            map.addSource(LAYERS.airlines.sourceId,{
                type: 'geojson',
                data: informationSource,
            });
            
        }
        if(!informationSourceState.airports && !map.getSource('airports')){
            map.addSource('airports',{
                type: 'geojson',
                data: informationSource, 
            });
        }
        if(!informationSourceState.flights && !map.getSource('flights')){ 
            map.addSource('flights',{ 
                type: 'geojson',
                data: informationSource,
            });
            map.addLayer({
                id: 'flights-marker',
                type: 'circle',
                source: 'flights',
                paint: {

                },
            });
        }
        map.addInteraction('flights-marker-click',{
            type: 'click',
            target: {layerId: 'flights-marker'},
            handler: (e)=>{ 
                console.log('You Clicked Me!!!');
                const p = e.feature?.properties;
                const selectedFlight = handleFlightClickProperties(p)
                console.log(selectedFlight);
            },
        });
    })
}