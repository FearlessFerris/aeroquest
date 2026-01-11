import { alpha } from '@mui/material/styles';
import { TOKENS } from '@/styles/tokens/tokens';
import { glassBar, focusRing } from '@/styles/patterns/glass';

export const appTopBarSx = {
  wrap: {
    mb: '2rem',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },

  inner: {
    mx: 'auto',
    maxWidth: '100rem',
    width: '100%',
  },

  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.25rem',
    px: { xs: '1rem', md: '1.25rem' },
    py: '0.9rem',
    borderRadius: '1.25rem',
    ...glassBar(),
  },

  brandBadge: {
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '0.95rem',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: TOKENS.shell2,
    border: `1px solid ${TOKENS.borderSoft}`,
    boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset`,
  },

  navRow: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: '0.6rem',
  },

  navPill: {
    backgroundColor: alpha(TOKENS.shell2, 1),
    border: `.2rem solid ${TOKENS.borderSoft}`,
    borderRadius: '1.05rem',
    boxShadow: `0 0 0 1px rgba(255,255,255,0.02) inset`,
    color: TOKENS.text2,

    fontSize: '1.8rem',
    fontWeight: 450,
    letterSpacing: '-0.01em',
    minWidth: '22rem',
    px: '1rem',
    py: '.4rem',
    textTransform: 'none',

    transition: 'transform 120ms ease, box-shadow 180ms ease, border-color 180ms ease',
    '&:hover': {
      borderColor: alpha(TOKENS.glow, 1),
      boxShadow: `0 0 22px ${alpha(TOKENS.glow, 1)}`,
      color: TOKENS.wheat,
      transform: 'translateY(-3px)',
    },
    '&:active': {
      transform: 'translateY(-1px) scale(0.99)',
      boxShadow: `0 0 18px ${alpha(TOKENS.glow, 0.65)}`,
    },
    ...focusRing(),
  },

  iconButton: {
    borderRadius: '1.05rem',
    border: `.2rem solid ${TOKENS.borderSoft}`,
    backgroundColor: alpha(TOKENS.shell2, 1),
    color: TOKENS.text2,
    transition: 'transform 120ms ease, box-shadow 180ms ease, border-color 180ms ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      color: TOKENS.wheat,
      borderColor: alpha(TOKENS.glow, 1),
      boxShadow: `0 0 22px ${alpha(TOKENS.glow, 1)}`,
      backgroundColor: alpha(TOKENS.shell2, 1),
    },
    ...focusRing(),
  },

  avatar: {
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '0.95rem',
    bgcolor: alpha(TOKENS.shell2, 1),
    color: TOKENS.wheat,
    boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset`,
  },
};
