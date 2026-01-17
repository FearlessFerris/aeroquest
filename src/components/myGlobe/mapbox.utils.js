// Mapbox Utilities Implementation


// Dependencies 


// Components & Necessary Files 
import {LAYERS, toFeatureCollection} from './globe.utils';


// Mapbox Utilies
export function updateMapInformationSource(map, informationSource){ 
    if(!map || !informationSource) return; 
    Object.entries(LAYERS).forEach(([layerName, layerConfig])=>{ 
        const src = map.getSource(layerConfig.sourceId);
        if(!src) return; 
        const geojson = toFeatureCollection(informationSource[layerName]);
        src.setData(geojson);
    });
}