'use client';

import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { TOKENS } from '@/styles/tokens/tokens';

export default function FlightInspector({
  open = false,
  flight = null,
  onClose,
  onTrack,
  onOpenDetail,
}) {
  return (
    <AnimatePresence>
      {open && (
        <Box
          component = {motion.div}
          initial = {{ x: 420, opacity: 0 }}
          animate = {{ x: 0, opacity: 1 }}
          exit = {{ x: 420, opacity: 0 }}
          transition = {{ duration: 0.22, ease: 'easeOut' }}
          sx = {{
            position: 'absolute',
            top: { xs: '1rem', md: '1.15rem' },
            right: { xs: '1rem', md: '1.15rem' },
            width: { xs: 'calc(100% - 2rem)', sm: '24rem' },
            borderRadius: '1.6rem',
            border: '0.12rem solid rgba(250,250,250,0.12)',
            background: 'rgba(0,0,0,0.40)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 18px 60px rgba(0,0,0,0.55)',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          <Header
            title = {flight?.callsign || flight?.id || 'Flight'}
            subtitle = {flight?.airline || 'Unknown Airline'}
            onClose = {onClose}
          />

          <Box sx = {{ px: '1.25rem', pb: '1.15rem', pt: '0.85rem' }}>
            <Grid>
              <Item label = "Altitude" value = {formatFeet(flight?.altitude)} />
              <Item label = "Speed" value = {formatKnots(flight?.speed)} />
              <Item label = "Latitude" value = {formatNum(flight?.coordinates?.[1])} />
              <Item label = "Longitude" value = {formatNum(flight?.coordinates?.[0])} />
            </Grid>

            <Box sx = {{ display: 'flex', gap: '0.75rem', mt: '1.1rem' }}>
              <Button
                onClick = {onTrack}
                variant = "outlined"
                fullWidth
                sx = {btnSx}
              >
                Track
              </Button>

              <Button
                onClick = {onOpenDetail}
                variant = "contained"
                fullWidth
                sx = {{
                  ...btnSx,
                  border: '0.12rem solid rgba(171,0,60,0.35)',
                  background: 'rgba(171,0,60,0.22)',
                  '&:hover': {
                    background: 'rgba(171,0,60,0.28)',
                  },
                }}
              >
                Open Detail
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}

function Header({ title, subtitle, onClose }) {
  return (
    <Box
      sx = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '1.25rem',
        py: '1rem',
        borderBottom: '0.12rem solid rgba(250,250,250,0.08)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.05) 100%)',
      }}
    >
      <Box sx = {{ minWidth: 0 }}>
        <Typography sx = {{ fontWeight: 700, letterSpacing: '-0.01em' }}>
          {title}
        </Typography>
        <Typography sx = {{ opacity: 0.72, fontSize: '0.9rem' }}>
          {subtitle}
        </Typography>
      </Box>

      <Box
        role = "button"
        tabIndex = {0}
        onClick = {onClose}
        onKeyDown = {(e) => (e.key === 'Enter' || e.key === ' ') && onClose?.()}
        sx = {{
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: '999px',
          display: 'grid',
          placeItems: 'center',
          border: '0.12rem solid rgba(250,250,250,0.12)',
          background: 'rgba(0,0,0,0.22)',
          cursor: 'pointer',
          userSelect: 'none',
          '&:hover': {
            borderColor: 'rgba(171,0,60,0.35)',
          },
        }}
        aria-label = "Close inspector"
        title = "Close"
      >
        <Typography sx = {{ opacity: 0.85 }}>×</Typography>
      </Box>
    </Box>
  );
}

function Grid({ children }) {
  return (
    <Box
      sx = {{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.9rem',
      }}
    >
      {children}
    </Box>
  );
}

function Item({ label, value }) {
  return (
    <Box
      sx = {{
        px: '0.95rem',
        py: '0.85rem',
        borderRadius: '1.1rem',
        border: `0.1rem solid ${TOKENS.glow}`,
        background: 'rgba(0,0,0,0.22)',
      }}
    >
      <Typography sx = {{ fontSize: '0.78rem', opacity: 0.68 }}>
        {label}
      </Typography>
      <Typography sx = {{ fontWeight: 650, mt: '0.15rem' }}>
        {value}
      </Typography>
    </Box>
  );
}

const btnSx = {
  borderRadius: '999px',
  textTransform: 'none',
  border: '0.12rem solid rgba(250,250,250,0.14)',
  background: 'rgba(0,0,0,0.18)',
  '&:hover': {
    background: 'rgba(0,0,0,0.22)',
  },
};

function formatNum(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '—';
  return n.toFixed(4);
}
function formatFeet(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '—';
  return `${Math.round(n).toLocaleString()} ft`;
}
function formatKnots(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '—';
  return `${Math.round(n)} kt`;
}
