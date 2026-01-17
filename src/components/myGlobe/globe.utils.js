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
          airlineCode: 'DAL',
          airlineName: 'Delta Air Lines',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-84.4277, 33.6407], // ATL hub
        },
      },
      {
        type: 'Feature',
        properties: {
          airlineCode: 'UAL',
          airlineName: 'United Airlines',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-87.9073, 41.9742], // ORD hub
        },
      },
      {
        type: 'Feature',
        properties: {
          airlineCode: 'AAL',
          airlineName: 'American Airlines',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-97.0403, 32.8998], // DFW hub
        },
      },
      {
        type: 'Feature',
        properties: {
          airlineCode: 'SWA',
          airlineName: 'Southwest Airlines',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-112.0116, 33.4342], // PHX hub
        },
      },
      {
        type: 'Feature',
        properties: {
          airlineCode: 'JBU',
          airlineName: 'JetBlue Airways',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-71.0052, 42.3656], // BOS hub
        },
      },
    ],
  },

  airports: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          airportCode: 'ATL',
          airportName: 'Hartsfield–Jackson Atlanta International Airport',
          city: 'Atlanta',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-84.4277, 33.6407],
        },
      },
      {
        type: 'Feature',
        properties: {
          airportCode: 'LAX',
          airportName: 'Los Angeles International Airport',
          city: 'Los Angeles',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-118.4085, 33.9416],
        },
      },
      {
        type: 'Feature',
        properties: {
          airportCode: 'ORD',
          airportName: "O'Hare International Airport",
          city: 'Chicago',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-87.9073, 41.9742],
        },
      },
      {
        type: 'Feature',
        properties: {
          airportCode: 'DFW',
          airportName: 'Dallas/Fort Worth International Airport',
          city: 'Dallas–Fort Worth',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-97.0403, 32.8998],
        },
      },
      {
        type: 'Feature',
        properties: {
          airportCode: 'SEA',
          airportName: 'Seattle–Tacoma International Airport',
          city: 'Seattle',
          country: 'United States',
        },
        geometry: {
          type: 'Point',
          coordinates: [-122.3088, 47.4502],
        },
      },
    ],
  },

  flights: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          id: 'DAL219',
          callsign: 'DAL219',
          airline: 'Delta',
          airlineCode: 'DAL',
          origin: 'ATL',
          destination: 'LAX',
          altitude: 39000,
          speed: 485,
        },
        geometry: {
          type: 'Point',
          coordinates: [-95.3698, 36.1627],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'AAL672',
          callsign: 'AAL672',
          airline: 'American',
          airlineCode: 'AAL',
          origin: 'DFW',
          destination: 'ORD',
          altitude: 36000,
          speed: 455,
        },
        geometry: {
          type: 'Point',
          coordinates: [-101.8552, 38.8568],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'UAL118',
          callsign: 'UAL118',
          airline: 'United',
          airlineCode: 'UAL',
          origin: 'SFO',
          destination: 'SEA',
          altitude: 40000,
          speed: 500,
        },
        geometry: {
          type: 'Point',
          coordinates: [-120.5542, 41.9983],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'SWA331',
          callsign: 'SWA331',
          airline: 'Southwest',
          airlineCode: 'SWA',
          origin: 'PHX',
          destination: 'DEN',
          altitude: 35000,
          speed: 445,
        },
        geometry: {
          type: 'Point',
          coordinates: [-107.2903, 37.9981],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 'JBU214',
          callsign: 'JBU214',
          airline: 'JetBlue',
          airlineCode: 'JBU',
          origin: 'BOS',
          destination: 'MIA',
          altitude: 34000,
          speed: 430,
        },
        geometry: {
          type: 'Point',
          coordinates: [-84.7818, 33.1204],
        },
      },
    ],
  },
};

export const toFeatureCollection = (input)=>{ 
    if(!input){ 
        return{ 
            type:'FeatureCollection',
            features:[],
        }
    }
    if(input.type === 'FeatureCollection'){ 
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
export const handleFlightClickProperties = (flightProperties) => { 
    return{ 
        id: flightProperties.id, 
        callsign: flightProperties.callsign, 
        airline: flightProperties.airline,
        altitude: flightProperties.altitude, 
        speed: flightProperties.speed,
    }
};