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
// export default function Globe({ 
//     setSelectedInformation,
// }){ 
//     const containerRef = useRef(null); 
//     const mapRef = useRef(null); 
//     const [ informationSource, setInformationSource ] = useState(informationSourceJSON)
//     useEffect(() => { 
//         if(!containerRef.current) return;
//         if(mapRef.current) return; 
//         const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
//         if(!token) return;
//         const map = MapboxInitialization({ 
//             accessToken: token, 
//             containerEl: containerRef.current,
//             informationSource: informationSource, 
//             onSelectedInformation: setSelectedInformation,
//         });

//         mapRef.current = map

//         return () => {
//             mapRef?.current?.remove(); 
//             mapRef.current = null;
//         };
//     }, [setSelectedInformation]);
//     useEffect(()=>{ 
//         if(!mapRef.current) return; 
//         updateMapInformationSource(mapRef.current, informationSource);
//     },[informationSource]);

//     const EXPAND = 200;

//   return (
//     <Box sx={{ position: 'relative' }}>
//       {/* Particle stage */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: `-${EXPAND}px`,
//           pointerEvents: 'none',
//           zIndex: 2,
//         }}
//       >
//      <GlowBorderParticles
//   color = "#f5e9cf"
//   spawnInset = {EXPAND}
//   clip = {false}
//   fps = {24}
//   dprMax = {1}
//   density = {1.1}
//   intensity = {2.0}
//   blur = {5}
//   maxParticles = {190}
//   composite = "screen"
//   blurEvery = {3}
// />

//       </Box>

//       {/* Globe card */}
//       <Box sx={{ ...myGlobeSx.root, position: 'relative', zIndex: 5 }}>
//         <Box ref={containerRef} sx={myGlobeSx.map} />
//         <Box sx={myGlobeSx.vignette} />
//         <Box sx={myGlobeSx.rim} />
//       </Box>
//     </Box>
//   );

// }


export default function Globe({ 
  setSelectedInformation,
}){ 
  const containerRef = useRef(null); 
  const mapRef = useRef(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
  if(!token) return; 
  useEffect(()=>{ 
    const map = MapboxInitialization({ 
      accessToken: token, 
      containerEl: containerRef.current, 
      informationSource: informationSourceJSON, 
      onSelectedInformation: setSelectedInformation, 
    });

  }, [setSelectedInformation]); 

  mapRef.current = map; 

  const EXPAND = 200; 
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
    </Box>
)
}