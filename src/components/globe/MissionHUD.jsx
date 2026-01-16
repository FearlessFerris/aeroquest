'use client';
// MissionHUD Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlightInspector from '../flights/FlightInspector';


// Components & Necessary Files 


// MissionHUD
export default function MissionHUD({
  hoverFlight = null,
  selectedFlight = null,
  trackingFlightId = null,
  onClearSelected,
  onTrackSelected,
  onOpenDetail,
}) {
  const mode = selectedFlight ? 'focus' : (hoverFlight ? 'peek' : 'idle');
  const flight = selectedFlight ?? hoverFlight;

  const open = Boolean(flight);
  const isFocus = mode === 'focus';

  const statusText = useMemo(() => {
    if (trackingFlightId && selectedFlight?.id === trackingFlightId) return 'Tracking';
    if (selectedFlight) return 'Selected';
    if (hoverFlight) return 'Preview';
    return '';
  }, [trackingFlightId, selectedFlight, hoverFlight]);

  return (
    <Box
      sx = {{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 20,
      }}
    >
      {/* Top HUD Row (status pill) */}
      <Box
        sx = {{
          position: 'absolute',
          top: { xs: '0.85rem', md: '1rem' },
          right: { xs: '1rem', md: '1.15rem' },
          display: 'flex',
          gap: '0.65rem',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {statusText && (
            <Box
              component = {motion.div}
              initial = {{ y: -6, opacity: 0 }}
              animate = {{ y: 0, opacity: 1 }}
              exit = {{ y: -6, opacity: 0 }}
              transition = {{ duration: 0.18, ease: 'easeOut' }}
              sx = {{
                px: '0.85rem',
                py: '0.45rem',
                borderRadius: '999px',
                border: isFocus
                  ? '0.12rem solid rgba(171,0,60,0.28)'
                  : '0.12rem solid rgba(250,250,250,0.12)',
                background: 'rgba(0,0,0,0.30)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.42)',
              }}
            >
              <Typography sx = {{ fontSize: '0.82rem', opacity: 0.78 }}>
                {statusText}
              </Typography>
            </Box>
          )}
        </AnimatePresence>
      </Box>

      {/* Flight Inspector (peek/focus) */}
      <FlightInspector
        open = {open}
        mode = {mode === 'idle' ? 'peek' : mode}
        flight = {flight}
        onClose = {onClearSelected}
        onTrack = {onTrackSelected}
        onOpenDetail = {onOpenDetail}
      />

      {/* Bottom Hint Bar (optional, always visible but subtle) */}
      <BottomHintBar />
    </Box>
  );
}

