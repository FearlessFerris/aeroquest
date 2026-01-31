'use client';
// // GlobeOverlay Component Implementation 


// // Dependencies 
import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';


// // Components & Necessary Files 
import { toTitleLabel, formatValue } from './globe.utils';
import { myGlobeSx } from '../../styles/components/myGlobe.styles'; 


// // GlobeOverlay Component
export default function GloveOverlay({ informationPayload, onSetHoverInformation }) {
  const rows = useMemo(()=>{ 
    if(!informationPayload?.raw && !onSetHoverInformation?.raw){ 
      console.log('There is no information payload');
      return []; 
    }
    return Object.entries(informationPayload?.raw || onSetHoverInformation?.raw).map(([key, val])=>({ 
      key, 
      label: toTitleLabel(key), 
      value: formatValue(key, val) 
    }));
  },[informationPayload, onSetHoverInformation]); 
  // const rows = useMemo(() => {
  //   if (!informationPayload?.raw && onSetHoverInformation?.raw) return [];
    
  //   return Object.entries(informationPayload.raw).map(([key, val]) => ({
  //     key,
  //     label: toTitleLabel(key),
  //     value: formatValue(key, val),
  //   }));
  // }, [informationPayload]);

  // if (!informationPayload) return null;

  return (
    <Box
      sx={{...myGlobeSx.overlayCard}}
    >
      
      { informationPayload?.raw ?( 

        
        
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: '0.5rem' }}>
        {toTitleLabel(informationPayload?.raw.featureType)}
      </Typography>
        ): onSetHoverInformation?.raw ?( 
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: '0.5rem' }}>
        {toTitleLabel(onSetHoverInformation?.raw.featureType)}
      </Typography>
        ): null}
      
      
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
  );
}
