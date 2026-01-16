// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
import { handleFlightClickProperties } from './globe.utils';


// Mapbox Initialization Component
export function mapboxInitialization({ 
    accessToken, 
    containerEl, 
    initialView,
    flightDotCoordinates, 
}){ 
    mapboxgl.accessToken = accessToken; 
    const map = new mapboxgl.Map({ 
        container: containerEl, 
        initialView: { center: [-90, 34], zoom: 4,},
        center: initialView.center, 
        zoom: initialView.zoom, 
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        projection: 'globe', 
        antialias: true,
        cooperativeGestures: false, 
    });

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
                data: flightDotCoordinates, 
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

        map.addInteraction('flights-dot-enter', { 
            type: 'mouseenter', 
            target:{ layerId: 'flights-dot'},
            handler:({}) => { 
                console.log('Changing Mouse to Pointer');
                map.getCanvas().style.cursor = 'pointer'; 
            }
        });

        map.addInteraction('flights-dot-leave', { 
            type: 'mouseleave', 
            target:{layerId: 'flights-dot'}, 
            handler:({}) => { 
                console.log('Changing Mouse back to Cursor'); 
                map.getCanvas().style.cursor = '';
            }
        });

        map.addInteraction('flights-dot-click', { 
            type:'click',
            target:{layerId: 'flights-dot'}, 
            handler:(e)=>{ 
                const p = e.feature?.properties;
                if(!p) return; 
                const selP = handleFlightClickProperties(p);
                console.log(selP);
            }
        })

      });
    
    return map;
}

