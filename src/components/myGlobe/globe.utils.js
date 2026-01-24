// Globe Utilities Implementation 


// Dependencies 


// Components & Necessary Files 


// Globe Utilities 
export const LAYERS = { 
    airlines: { 
        sourceId: 'airlines',
        layerId: 'airlines-marker',
        layer:{ 
            id: 'airlines-marker',
            type: 'circle',
            source: 'airlines',
            paint:{
                'circle-radius': 4,
                'circle-opacity': 0.75,
            }
        },
    },
    airports: { 
        sourceId: 'airports',
        layerId: 'airports-marker',
        layer:{ 
            id: 'airports-marker',
            type: 'circle',
            source: 'airports',
            paint: { 
                 'circle-radius': 5,
                'circle-opacity': 0.85,
            }
        },
    },
    flights:{ 
        sourceId: 'flights',
        layerId: 'flights-marker',
        layer:{ 
            id: 'flights-marker',
            type: 'circle', 
            source: 'flights',
            paint: {
                'circle-radius': 4,
                'circle-opacity': 0.9,
            }
        },
    }
}

export const informationSourceJSON = {
  airlines: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'DAL',
          airlineName: 'Delta Air Lines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-84.4277, 33.6407] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'UAL',
          airlineName: 'United Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-87.9073, 41.9742] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'AAL',
          airlineName: 'American Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-97.0403, 32.8998] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'SWA',
          airlineName: 'Southwest Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-112.0116, 33.4342] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'JBU',
          airlineName: 'JetBlue Airways',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-71.0052, 42.3656] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'ASA',
          airlineName: 'Alaska Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-122.3088, 47.4502] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'FFT',
          airlineName: 'Frontier Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-104.6737, 39.8561] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'NKS',
          airlineName: 'Spirit Airlines',
          country: 'United States',
        },
        geometry: { type: 'Point', coordinates: [-80.2906, 25.7933] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'BAW',
          airlineName: 'British Airways',
          country: 'United Kingdom',
        },
        geometry: { type: 'Point', coordinates: [-0.4543, 51.4700] },
      },
      {
        type: 'Feature',
        properties: {
          featureType: 'airline',
          airlineCode: 'AFR',
          airlineName: 'Air France',
          country: 'France',
        },
        geometry: { type: 'Point', coordinates: [2.55, 49.0097] },
      },
    ],
  },

  airports: {
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'ATL', airportName: 'Hartsfield–Jackson Atlanta International Airport', city: 'Atlanta', country: 'United States' }, geometry: { type: 'Point', coordinates: [-84.4277, 33.6407] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'LAX', airportName: 'Los Angeles International Airport', city: 'Los Angeles', country: 'United States' }, geometry: { type: 'Point', coordinates: [-118.4085, 33.9416] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'ORD', airportName: "O'Hare International Airport", city: 'Chicago', country: 'United States' }, geometry: { type: 'Point', coordinates: [-87.9073, 41.9742] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'DFW', airportName: 'Dallas/Fort Worth International Airport', city: 'Dallas–Fort Worth', country: 'United States' }, geometry: { type: 'Point', coordinates: [-97.0403, 32.8998] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'DEN', airportName: 'Denver International Airport', city: 'Denver', country: 'United States' }, geometry: { type: 'Point', coordinates: [-104.6737, 39.8561] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'SEA', airportName: 'Seattle–Tacoma International Airport', city: 'Seattle', country: 'United States' }, geometry: { type: 'Point', coordinates: [-122.3088, 47.4502] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'MIA', airportName: 'Miami International Airport', city: 'Miami', country: 'United States' }, geometry: { type: 'Point', coordinates: [-80.2906, 25.7933] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'BOS', airportName: 'Logan International Airport', city: 'Boston', country: 'United States' }, geometry: { type: 'Point', coordinates: [-71.0052, 42.3656] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'LHR', airportName: 'Heathrow Airport', city: 'London', country: 'United Kingdom' }, geometry: { type: 'Point', coordinates: [-0.4543, 51.4700] } },
      { type: 'Feature', properties: { featureType: 'airport', airportCode: 'CDG', airportName: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' }, geometry: { type: 'Point', coordinates: [2.55, 49.0097] } },
    ],
  },

  flights: {
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', properties: { featureType: 'flight', id: 'DAL219', callsign: 'DAL219', airline: 'Delta', airlineCode: 'DAL', origin: 'ATL', destination: 'LAX', altitude: 39000, speed: 485 }, geometry: { type: 'Point', coordinates: [-95.3698, 36.1627] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'AAL672', callsign: 'AAL672', airline: 'American', airlineCode: 'AAL', origin: 'DFW', destination: 'ORD', altitude: 36000, speed: 455 }, geometry: { type: 'Point', coordinates: [-101.8552, 38.8568] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'UAL118', callsign: 'UAL118', airline: 'United', airlineCode: 'UAL', origin: 'ORD', destination: 'SEA', altitude: 40000, speed: 500 }, geometry: { type: 'Point', coordinates: [-110.5542, 41.9983] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'SWA331', callsign: 'SWA331', airline: 'Southwest', airlineCode: 'SWA', origin: 'PHX', destination: 'DEN', altitude: 35000, speed: 445 }, geometry: { type: 'Point', coordinates: [-107.2903, 37.9981] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'JBU214', callsign: 'JBU214', airline: 'JetBlue', airlineCode: 'JBU', origin: 'BOS', destination: 'MIA', altitude: 34000, speed: 430 }, geometry: { type: 'Point', coordinates: [-84.7818, 33.1204] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'ASA551', callsign: 'ASA551', airline: 'Alaska', airlineCode: 'ASA', origin: 'SEA', destination: 'LAX', altitude: 37000, speed: 470 }, geometry: { type: 'Point', coordinates: [-120.0, 43.0] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'FFT882', callsign: 'FFT882', airline: 'Frontier', airlineCode: 'FFT', origin: 'DEN', destination: 'LAS', altitude: 33000, speed: 420 }, geometry: { type: 'Point', coordinates: [-112.5, 38.2] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'NKS190', callsign: 'NKS190', airline: 'Spirit', airlineCode: 'NKS', origin: 'MIA', destination: 'ATL', altitude: 35000, speed: 440 }, geometry: { type: 'Point', coordinates: [-83.5, 30.8] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'BAW287', callsign: 'BAW287', airline: 'British Airways', airlineCode: 'BAW', origin: 'LHR', destination: 'ATL', altitude: 41000, speed: 510 }, geometry: { type: 'Point', coordinates: [-45.0, 50.0] } },
      { type: 'Feature', properties: { featureType: 'flight', id: 'AFR065', callsign: 'AFR065', airline: 'Air France', airlineCode: 'AFR', origin: 'CDG', destination: 'JFK', altitude: 42000, speed: 520 }, geometry: { type: 'Point', coordinates: [-30.0, 48.0] } },
    ],
  },
};


export const toFeatureCollection = (input)=>{ 
    if(input?.type === 'FeatureCollection' && Array.isArray(input.features)){ 
      return input; 
    }
    if(!input){ 
        return{ 
            type:'FeatureCollection',
            features:[],
        }
    }
    if(input?.type === 'FeatureCollection'){ 
        return input; 
    }
    if(Array.isArray(input)){
        return{ 
            type:'FeatureCollection',
            features:input,
        }
    }
    return{ 
        type:'FeatureCollection',
        features:[]
    }
}


export function updateMapInformationSource(map, informationSource) {
  if (!map || !informationSource) return;

  Object.entries(LAYERS).forEach(([key, cfg]) => {
    const src = map.getSource(cfg.sourceId);
    if (!src) return;

    const fc = toFeatureCollection(informationSource[key]);
    src.setData(fc);
  });
}

export function attachMapClickHandler(map, LAYERS, onSelectedInformation){ 
  const convertIdToType = Object.fromEntries(Object.entries(LAYERS).map(([type, cfg]) => [cfg.layer.id, type]));
  const layerIds = Object.values(LAYERS).map((value) => value?.layer?.id);
  const onClick = (e) => { 
    const features = map.queryRenderedFeatures(e.point,{
      layers: layerIds,                                 
    });
    const feature = features?.[0];
    if(!feature?.properties) return; 
    const type = convertIdToType[feature.layer.id];  
    if(!type) return; 
    const payload = { 
      type, 
      layerId: feature.layer.id,
      source: feature.source, 
      lngLat: e.lngLat,
      raw: feature.properties, 
      id: feature.id ?? feature.properties.id, 
    };
    onSelectedInformation(payload);
  };
  map.on('click', onClick);
  return ()=>{ 
    map.off('click', onClick); 
  }
}


export function attachMapMouseMoveHandler(map, LAYERS, setOnMouseMoveInformation){ 
  const layerIds = Object.values(LAYERS).map((value)=> value?.layer?.id).filter(Boolean); 
  let lastKey = null; 
  const onMove = (e)=>{ 
    const features = map.queryRenderedFeatures(e.point, { 
      layers: layerIds, 
    });
    if(!features.length){ 
      if(lastKey !== null){ 
        lastKey = null; 
        setOnMouseMoveInformation(null);
      }
      return; 
    }
    const feature = features[0];
    const key = `${feature.layer.id}`;
    if(key === lastKey) return; 
    lastKey = key; 
    const payload = { 
      layerId: feature.layer.id, 
      source: feature.source, 
      lngLat: e.lngLat, 
      raw: feature.properties, 
      id: feature.id ?? feature.properties.id, 
    }
    setOnMouseMoveInformation(payload); 
  }

  map.on('mousemove', onMove); 
  return ()=>{ 
    map.off('mousemove', onMove); 
  }
}
  
