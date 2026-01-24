// Mapbox Initialization Component Implementation 


// Dependencies 
import mapboxgl from 'mapbox-gl';


// Components & Necessary Files 
import { LAYERS, toFeatureCollection, attachMapClickHandler, attachMapMouseMoveHandler } from './globe.utils';


// Mapbox Initialization 
export function MapboxInitialization({ 
    accessToken, 
    containerEl, 
    informationSource,
    onSelectedInformation,
    onSetHoverInformation
}){ 
    mapboxgl.accessToken = accessToken; 
    let detachMapClickHandler;
    let detachMapMouseMoveHandler; 
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
    detachMapMouseMoveHandler = attachMapMouseMoveHandler(map, LAYERS, onSetHoverInformation); 

    const clean = ()=>{ 
      if(detachMapClickHandler) detachMapClickHandler(); 
      if(detachMapMouseMoveHandler) detachMapMouseMoveHandler(); 
      map.remove(); 
    }
    return{map, clean}
}

