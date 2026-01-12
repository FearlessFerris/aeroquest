'use client';
// MissionHUD Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';


// Components & Necessary Files 


// MissionHUD
export default function MissionHUD({
  flightsCount = 0,
  regionLabel = 'Unknown',
  lastSyncAt = Date.now(),
}) {
  const [now, setNow] = useState(Date.now());

  // Only HUD rerenders each second (NOT the map)
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const lastSyncSeconds = useMemo(() => {
    const diff = Math.max(0, Math.floor((now - lastSyncAt) / 1000));
    return diff;
  }, [now, lastSyncAt]);

  return (
    <Box
      sx = {{
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        px: '1rem',
        py: '0.7rem',
        borderRadius: '999px',
        border: '0.12rem solid rgba(250,250,250,0.12)',
        background: 'rgba(0,0,0,0.32)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        userSelect: 'none',
      }}
    >
      <HudItem label = "Live Flights" value = { flightsCount.toLocaleString() } />
      <Divider />
      <HudItem label = "Focused Region" value = { regionLabel } />
      <Divider />
      <HudItem label = "Last Sync" value = { `${lastSyncSeconds}s` } />
    </Box>
  );
}

function HudItem({ label, value }) {
  return (
    <Box sx = {{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
      <Typography sx = {{ fontSize: '0.78rem', opacity: 0.72 }}>
        {label}
      </Typography>
      <Typography sx = {{ fontSize: '0.98rem', fontWeight: 650, opacity: 0.92 }}>
        {value}
      </Typography>
    </Box>
  );
}

function Divider() {
  return (
    <Box
      sx = {{
        width: '1px',
        height: '1.8rem',
        background: 'rgba(250,250,250,0.10)',
      }}
    />
  );
}
