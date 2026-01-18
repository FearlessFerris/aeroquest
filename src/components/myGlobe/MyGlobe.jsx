// Globe Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material'; 
import { useEffect, useRef, useState } from 'react';


// Components & Necessary Files 
import { myGlobeSx } from '@/styles/components/myGlobe.styles';
import { MapboxInitialization } from './mapboxInitialization';
import { updateMapInformationSource } from './mapbox.utils';
import { LAYERS, informationSourceJSON } from './globe.utils';


// Globe Component
export default function Globe({ 
    setSelectedInformation,
}){ 
    const containerRef = useRef(null); 
    const mapRef = useRef(null); 
    const [ informationSource, setInformationSource ] = useState(informationSourceJSON)
    useEffect(() => { 
        if(!containerRef.current) return;
        if(mapRef.current) return; 
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
        if(!token) return;
        const map = MapboxInitialization({ 
            accessToken: token, 
            containerEl: containerRef.current,
            informationSource: informationSource, 
            onSelectedInformation: setSelectedInformation,
        });

        mapRef.current = map

        return () => {
            mapRef?.current?.remove(); 
            mapRef.current = null;
        };
    }, [setSelectedInformation]);
    useEffect(()=>{ 
        if(!mapRef.current) return; 
        updateMapInformationSource(mapRef.current, informationSource);
    },[informationSource]);

    return( 
        <Box sx={myGlobeSx.root}> 
            <Box ref={containerRef} sx={myGlobeSx.map} />
                <Box sx={myGlobeSx.vignette} />
                    <Box sx={myGlobeSx.rim} /> 
        </Box>
    )
}