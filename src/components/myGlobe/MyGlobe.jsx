// Globe Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material'; 
import { useEffect, useRef, useState } from 'react';


// Components & Necessary Files 
import { myGlobeSx } from '@/styles/components/myGlobe.styles';
import { MapboxInitialization } from './mapboxInitialization';
import { DEMO_FLIGHTS_JSON } from '../globe/globe.utils';
import GlobeInformationDisplay from '../myGlobe/GlobeInformationDisplay'; 


// Globe Component
export default function Globe({ 

}){ 
    const features = DEMO_FLIGHTS_JSON;
    const containerRef = useRef(null); 
    const mapRef = useRef(null); 
    const [ informationSourceState, setInformationSourceState ] = useState({ 
        airlines: false, 
        airports: false, 
        flights: false, 
    })
    useEffect(() => { 
        if(!containerRef.current) return;
        if(mapRef.current) return; 
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
        if(!token) return;
        const map = MapboxInitialization({ 
            accessToken: token, 
            containerEl: containerRef.current,
            informationSource: features,
            informationSourceState: informationSourceState,
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