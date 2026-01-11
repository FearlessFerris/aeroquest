// DashboardView Styles Component Implementation 


// Dependencies 


// Components & Necessary Files 
import { alpha } from '@mui/material/styles';
import { TOKENS } from '@/styles/tokens/tokens';


// DashboardView Styles Component
export const dashboardSx = {
    root: {
        position: 'relative',
        display: 'grid',
        gap: '1.75rem',
    },

    starfield: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.28,
        filter: 'blur(0.2px)',
        backgroundImage: `
      radial-gradient(1px 1px at 12% 20%, rgba(255,255,255,0.22) 50%, transparent 55%),
      radial-gradient(1px 1px at 28% 62%, rgba(255,255,255,0.14) 50%, transparent 55%),
      radial-gradient(1px 1px at 55% 28%, rgba(255,255,255,0.12) 50%, transparent 55%),
      radial-gradient(1px 1px at 72% 46%, rgba(255,255,255,0.10) 50%, transparent 55%),
      radial-gradient(1px 1px at 84% 74%, rgba(255,255,255,0.16) 50%, transparent 55%)
    `,
        backgroundSize: '520px 420px',
    },

    content: {
        position: 'relative',
        display: 'grid',
        gap: '1.75rem',
    },

    gridRow: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
        gap: '1.25rem',
    },

    heroWrap: {
        display: 'flex',
        justifyContent: 'center'
    }
};

export const glassHeroSx = {
    root: {
        borderRadius: '1.6rem',
        px: '1.35rem',
        py: '1.15rem',
        border: `.2rem solid ${TOKENS.borderSoft}`,
        backgroundColor: alpha(TOKENS.shell2, 0.55),
        backgroundImage: `
      radial-gradient(520px 240px at 25% 0%, ${alpha(TOKENS.glow, 0.06)} 0%, transparent 62%),
      linear-gradient(180deg, ${alpha(TOKENS.shell, 0.10)} 0%, transparent 70%)
    `,
        backdropFilter: 'blur(14px)',
        boxShadow: `
      0 14px 40px rgba(0,0,0,0.45),
      0 0 0 1px rgba(255,255,255,0.02) inset
    `,
        transition: 'transform 140ms ease, box-shadow 180ms ease, border-color 180ms ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: alpha(TOKENS.glow, 1),
            boxShadow: `
        0 0 22px ${alpha(TOKENS.glow, 1)},
        0 18px 52px rgba(0,0,0,0.52),
        0 0 0 1px rgba(255,255,255,0.03) inset
      `,
        },
    },
    title: {
        color: TOKENS.wheat,
        fontWeight: 660,
        letterSpacing: '-0.02em',
        fontSize: '2rem',
        textAlign: 'center'
    },

    divider: {
        my: '0.8rem',
        borderColor: TOKENS.borderSoft,
    },

    subtitle: {
        color: TOKENS.text2,
        fontSize: '1rem',
        lineHeight: 1.55,
    },
};

export const glassCardSx = {
    root: {
        borderRadius: '1.6rem',
        px: '1.35rem',
        py: '1.15rem',
        border: `.2rem solid ${TOKENS.borderSoft}`,
        backgroundColor: alpha(TOKENS.shell2, 0.55),
        backgroundImage: `
      radial-gradient(520px 240px at 25% 0%, ${alpha(TOKENS.glow, 0.06)} 0%, transparent 62%),
      linear-gradient(180deg, ${alpha(TOKENS.shell, 0.10)} 0%, transparent 70%)
    `,
        backdropFilter: 'blur(14px)',
        boxShadow: `
      0 14px 40px rgba(0,0,0,0.45),
      0 0 0 1px rgba(255,255,255,0.02) inset
    `,
        transition: 'transform 140ms ease, box-shadow 180ms ease, border-color 180ms ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: alpha(TOKENS.glow, 1),
            boxShadow: `
        0 0 22px ${alpha(TOKENS.glow, 1)},
        0 18px 52px rgba(0,0,0,0.52),
        0 0 0 1px rgba(255,255,255,0.03) inset
      `,
        },
    },

    title: {
        color: TOKENS.wheat,
        fontWeight: 660,
        letterSpacing: '-0.02em',
        fontSize: '1.05rem',
        textAlign: 'center'
    },

    divider: {
        my: '0.8rem',
        borderColor: TOKENS.borderSoft,
    },

    subtitle: {
        color: TOKENS.text2,
        fontSize: '0.98rem',
        lineHeight: 1.55,
    },
};