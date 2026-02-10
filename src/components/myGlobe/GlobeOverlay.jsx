'use client';
// // GlobeOverlay Component Implementation 


// // Dependencies 
import { Box, Typography } from '@mui/material';
import { useMemo, useState } from 'react';


// // Components & Necessary Files 
import { toTitleLabel, formatValue } from './globe.utils';
import { myGlobeSx } from '../../styles/components/myGlobe.styles'; 


// // GlobeOverlay Component
export default function GloveOverlay({ informationPayload, onSetHoverInformation }) {
  const [interaction, setInteraction] = useState({ 
    
  })
  const rows = useMemo(()=>{ 
    if(!informationPayload?.raw && !onSetHoverInformation?.raw) return []; 
    return Object.entries(informationPayload?.raw || onSetHoverInformation?.raw).map(([key, val])=>({ 
      key, 
      label: toTitleLabel(key), 
      value: formatValue(key, val) 
    }));
  },[informationPayload, onSetHoverInformation]); 

  
  return (
    <>
    { informationPayload?.raw ? ( 

      <Box
      sx={{...myGlobeSx.overlayCard}}
      >
      <Box sx={{ display: 'grid', gap: '0.35rem' }}>
        {rows.map((row) => (
          <Box
          key={row.key}
          sx={{
            display: 'grid',
            gridTemplateColumns: '10rem 1fr',
            gap: '0.5rem',
            alignItems: 'baseline',
          }}
          >
            <Typography sx={{ opacity: 0.75, fontSize: '0.9rem' }}>
              {row.label}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem' }}>
              {row.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    )}
    </>
  );
}
