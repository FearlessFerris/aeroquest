// Globe Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material'; 
import { useEffect, useRef } from 'react';


// Components & Necessary Files 
import { myGlobeSx } from '@/styles/components/myGlobe.styles';
import { mapboxInitialization } from './myMapbox.init';
import { DEMO_FLIGHTS_JSON } from '../globe/globe.utils';
import { onFlightClick } from './globe.utils';

// Globe Component
export default function Globe({ 
    initialView = { 
        center: [-90, 34], 
        zoom: 4
    }
}){ 
    const containerRef = useRef(null); 
    const initialViewRef = useRef(initialView);
    const mapRef = useRef(null); 
    useEffect(() => { 
        if(!containerRef.current) return;
        if(mapRef.current) return; 
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
        if(!token) return; 
        const map = mapboxInitialization({ 
            accessToken: token,
            containerEl: containerRef.current, 
            initialView: initialViewRef.current, 
            flightsGeoJSON: DEMO_FLIGHTS_JSON,
            // onFlightClick: onFlightClick,
        });

        mapRef.current = map

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);
    return( 
        <Box sx={myGlobeSx.root}> 
            <Box ref={containerRef} sx={myGlobeSx.map} />
                <Box sx={myGlobeSx.vignette} />
                    <Box sx={myGlobeSx.rim} /> 
        </Box>
    )
}