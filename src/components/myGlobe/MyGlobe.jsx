// Globe Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material'; 
import { useEffect, useRef, useState } from 'react';


// Components & Necessary Files 
import { myGlobeSx } from '@/styles/components/myGlobe.styles';
import { MapboxInitialization } from './mapboxInitialization';
import { updateMapInformationSource } from './mapbox.utils';
import { LAYERS, informationSourceJSON } from './globe.utils';
import GlowBorderParticles from '../ui/GlowBorderParticles';


// Globe Component
export default function Globe({ 
  setSelectedInformation,
}){ 
  const [onHoverInformation, setOnHoverInformation] = useState(); 
  const containerRef = useRef(null); 
  const mapRef = useRef(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
  useEffect(()=>{ 
    if(!token || !containerRef.current) return; 
    const {map, clean} = MapboxInitialization({ 
      accessToken: token, 
      containerEl: containerRef.current, 
      informationSource: informationSourceJSON, 
      onSelectedInformation: setSelectedInformation, 
      onSetHoverInformation: setOnHoverInformation, 
    });
    
    mapRef.current = map;
    return clean; 

  }, [setSelectedInformation, setOnHoverInformation]); 

const EXPAND = 250; 
return (
    <Box sx={{ position: 'relative' }}>
        <Box
            sx={{
                position: 'absolute',
                inset: `-${EXPAND}px`,
                pointerEvents: 'none',
                zIndex: 2,
            }}
        >
            <GlowBorderParticles
                color="#f5e9cf"
                spawnInset={EXPAND}
                clip={false}
                fps={24}
                dprMax={1}
                density={1.1}
                intensity={2.0}
                blur={5}
                maxParticles={190}
                composite="screen"
                blurEvery={3}
            />
        </Box>
        <Box sx={{ ...myGlobeSx.root, position: 'relative', zIndex: 5 }}>
            <Box ref={containerRef} sx={myGlobeSx.map} />
            <Box sx={myGlobeSx.vignette} />
            <Box sx={myGlobeSx.rim} />
        </Box>
        <Box>
           <Typography sx={myGlobeSx.typography}> {onHoverInformation ? `Selected ${onHoverInformation.layerId}` : ''} </Typography>
        </Box>
    </Box>
)
}