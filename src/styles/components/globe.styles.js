export const globeSx = {
  root: {
    position: 'relative',
    width: '100%',
    height: { xs: '72vh', md: '78vh' },
    borderRadius: '2rem',
    overflow: 'hidden',
    border: '0.2rem solid rgba(250,250,250,0.10)',
    background: 'rgba(0,0,0,0.25)',
    boxShadow: `
      0 18px 70px rgba(0,0,0,0.55),
      0 0 0 1px rgba(171,0,60,0.08) inset
    `,
  },

  map: {
    position: 'absolute',
    inset: 0,
  },

  // ✅ Cinematic vignette + subtle “glass lens”
  vignette: {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(1200px 680px at 50% 55%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.78) 100%),
      linear-gradient(180deg, rgba(2,16,18,0.10) 0%, rgba(2,16,18,0.35) 100%)
    `,
  },

  // ✅ Soft inner rim for “premium card” feel
  rim: {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    borderRadius: '2rem',
    boxShadow: `
      0 0 0 1px rgba(250,250,250,0.10) inset,
      0 0 0 2px rgba(171,0,60,0.05) inset
    `,
  },

  // ✅ Help chip placement (inside map card)
  helpWrap: {
    position: 'absolute',
    top: { xs: '1rem', md: '1.15rem' },
    left: { xs: '1rem', md: '1.15rem' },
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    zIndex: 5,
  },

  helpChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
    px: '0.85rem',
    py: '0.55rem',
    borderRadius: '999px',
    border: '0.12rem solid rgba(250,250,250,0.12)',
    background: 'rgba(0,0,0,0.32)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
  },

  helpDot: {
    width: '0.55rem',
    height: '0.55rem',
    borderRadius: '999px',
    background: 'rgba(171,0,60,0.85)',
    boxShadow: '0 0 0 1px rgba(250,250,250,0.18) inset',
  },

  helpText: {
    fontSize: '0.95rem',
    opacity: 0.88,
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },

  helpBtn: {
    width: '2.2rem',
    height: '2.2rem',
    borderRadius: '999px',
    border: '0.12rem solid rgba(250,250,250,0.12)',
    background: 'rgba(0,0,0,0.32)',
    backdropFilter: 'blur(12px)',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    transition: 'transform 140ms ease, border-color 180ms ease, box-shadow 180ms ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'rgba(171,0,60,0.35)',
      boxShadow: '0 0 0 1px rgba(171,0,60,0.10) inset, 0 10px 26px rgba(0,0,0,0.38)',
    },
  },

  loading: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(900px 520px at 20% 20%, rgba(171,0,60,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(2,16,18,0.92) 0%, rgba(0,0,0,0.80) 100%)',
  },

  hudWrap: {
  position: 'absolute',
  top: { xs: '1rem', md: '1.15rem' },
  right: { xs: '1rem', md: '1.15rem' },
  zIndex: 5,
},

};
