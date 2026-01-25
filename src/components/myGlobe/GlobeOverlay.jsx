'use client';
// // GlobeOverlay Component Implementation 


// // Dependencies 
import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';


// // Components & Necessary Files 
import { toTitleLabel, formatValue } from './globe.utils';

// // GlobeOverlay Component
export default function GloveOverlay({ informationPayload }) {
  const rows = useMemo(() => {
    if (!informationPayload?.raw) return [];
    return Object.entries(informationPayload.raw).map(([key, val]) => ({
      key,
      label: toTitleLabel(key),
      value: formatValue(key, val),
    }));
  }, [informationPayload]);

  if (!informationPayload) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '2rem',
        left: '1rem',
        zIndex: 6,
        p: '1rem',
        borderRadius: '1rem',
        bgcolor: 'rgba(0,0,0,0.35)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(245,233,207,0.15)',
        maxWidth: '28rem',
      }}
    >
      <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: '0.5rem' }}>
        {toTitleLabel(informationPayload.type || 'Details')}
      </Typography>

      <Box sx={{ display: 'grid', gap: '0.35rem' }}>
        {rows.map((row) => (
          <Box
            key={row.key}
            sx={{
              display: 'grid',
              gridTemplateColumns: '10rem 1fr',
              gap: '0.75rem',
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
