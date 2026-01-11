'use client';


// AuthShell Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// Components & Necessary Files 
import GlowBorderParticles from '@/components/ui/GlowBorderParticles';


// AuthShell Component
export default function AuthShell({ left, right }) {
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
      {/* WRAPPER (not clipped) */}
      <Box
        sx={{
          position: 'relative',
          width: 'min(96rem, 96vw)',
        }}
      >
        {/* OUTSIDE EMBERS (can leave the edge) */}
        <GlowBorderParticles
          color = "#f5e9cf"
          expand = {90}                 // 👈 makes canvas extend past the shell
          clip = {false}                // 👈 do NOT clip, we want falloff
          density = {1.9}               // 👈 more embers
          intensity = {1.55}            // 👈 brighter
          outward = {1.25}
          gravity = {0.85}              // 👈 more “falling”
          blur = {10}                   // 👈 less blur = more ember-like
          sizeRange = {[0.7, 1.9]}      // 👈 tiny embers
          speedRange = {[0.6, 1.8]}
          lifeRange = {[40, 110]}
        />

        {/* THE ACTUAL SHELL (clipped glass) */}
        <Box
          sx={{
            position: 'relative',
            background: 'rgba(0,0,0,0.18)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(250, 250, 250, 0.10)',
            borderRadius: '2.2rem',
            boxShadow: '0 2.2rem 5rem rgba(0,0,0,0.55)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            minHeight: 'min(42rem, 86vh)',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 10 }}>
            {left}
          </Box>

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
