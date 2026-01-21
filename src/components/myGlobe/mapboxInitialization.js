// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
// import { handleClickProperties } from './globe.utils';
import { LAYERS, toFeatureCollection, attachMapClickHandler } from './globe.utils';


// Mapbox Initialization 
export function MapboxInitialization({ 
    accessToken, 
    containerEl, 
    informationSource,
    onSelectedInformation,
}){ 
    mapboxgl.accessToken = accessToken; 
    let detachMapClickHandler;
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
      Object.entries(LAYERS).forEach(([key,cfg])=>{ 
        const geojson = toFeatureCollection(informationSource?.[key]); 
        if(!map.getSource(cfg.sourceId)){ 
          map.addSource(cfg.sourceId,{ 
            type: 'geojson', 
            data: geojson, 
          });
        }
        if(!map.getLayer(cfg.layer.id)){ 
          map.addLayer(cfg.layer);
        }
      });
    });

    detachMapClickHandler = attachMapClickHandler(map, LAYERS, onSelectedInformation); 

    return ()=>{ 
      if(detachMapClickHandler){ 
        detachMapClickHandler();
        map.remove(); 
      }
    }
}