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

            }
        }
    },
    airports: { 
        sourceId: 'airports',
        layerId: 'airports-marker',
        layer:{ 
            id: 'airports-marker',
            type: 'circle',
            source: 'airports',
            paint: { 

            }
        }
    },
    flights:{ 
        sourceId: 'flights',
        layerId: 'flights-marker',
        layer:{ 
            id: 'flights-marker',
            type: 'circle', 
            source: 'flights',
            paint: {

            }
        }
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