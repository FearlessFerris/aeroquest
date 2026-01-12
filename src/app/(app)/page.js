
'use client';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Globe from '@/components/globe/Globe';
import GlassCard from '@/components/dashboard/GlassCard';
import MyGlobe from '../../components/myGlobe/MyGlobe';


export default function AppHomePage() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <Box sx = {{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* <Globe onSelectFlight = { setSelectedFlight } /> */}
      <MyGlobe /> 
      <GlassCard
        title = { selectedFlight ? 'Flight Selected' : 'Explore Live Airspace' }
        subtitle = {
          selectedFlight
            ? `${selectedFlight.callsign} • ${selectedFlight.airline}`
            : 'Click a flight marker to inspect telemetry and drill down into aircraft, airline, and route.'
        }
      >
        <Typography sx = {{ opacity: 0.9, lineHeight: 1.7 }}>
          {selectedFlight
            ? `Altitude: ${selectedFlight.altitude.toLocaleString()} ft • Speed: ${selectedFlight.speed} kts`
            : 'Next: add filters, hover inspect, and a right-side glass panel for deep details.'}
        </Typography>
      </GlassCard>
    </Box>
  );
}
