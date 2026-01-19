'use client';


// AuthShell Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// Components & Necessary Files 
import GlowBorderParticles from '@/components/ui/GlowBorderParticles';


// AuthShell Component
export default function AuthShell({ left, right }) {
  const EXPAND = 300;

  return (
    <Box
      sx={{
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        px: '2rem',
        py: '3rem',
      }}
    >
      <Box sx={{ position: 'relative', width: 'min(96rem, 96vw)' }}>
        {/* Particle stage expands outward */}
        <Box
          sx={{
            position: 'absolute',
            inset: `-${EXPAND}px`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <GlowBorderParticles
  color = "#f5e9cf"
  spawnInset = {EXPAND}
  clip = {false}
  fps = {24}
  dprMax = {1.0}
  density = {1.1}
  intensity = {2}
  blur = {5}
  maxParticles = {160}
  composite = "screen"
  blurEvery = {3}
/>

        </Box>

        {/* Card */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            background: 'rgba(0,0,0,0.18)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(250, 250, 250, 0.10)',
            borderRadius: '2.2rem',
            // boxShadow: '0 2.2rem 5rem rgba(0,0,0,0.55)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            minHeight: 'min(42rem, 86vh)',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 10 }}>{left}</Box>

          <Box
            sx={{
              background: 'rgba(0,0,0,0.30)',
              borderLeft: { md: '1px solid rgba(250,250,250,0.08)' },
              p: { xs: '2rem', md: '3rem' },
              position: 'relative',
              zIndex: 10,
            }}
          >
            {right}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}