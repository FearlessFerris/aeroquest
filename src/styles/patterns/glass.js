// GlassBar Styling Component Implementation 


// Dependencies 


// Components & Necessary Files
import { alpha } from '@mui/material/styles';
import { TOKENS } from '@/styles/tokens/tokens';


// GlassBar Component
export function glassBar() {
  return {
    backgroundImage: `
      radial-gradient(900px 240px at 22% -40%, ${alpha(TOKENS.glow, 0.10)} 0%, transparent 60%),
      radial-gradient(760px 240px at 84% -45%, ${alpha(TOKENS.glow, 0.06)} 0%, transparent 65%),
      linear-gradient(180deg, ${TOKENS.shell} 0%, ${TOKENS.shell2} 100%)
    `,
    border: `.2rem solid ${TOKENS.borderSoft}`,
    backdropFilter: 'blur(14px)',
    boxShadow: `
      0 18px 60px rgba(0,0,0,0.55),
      0 0 0 1px rgba(255,255,255,0.03) inset
    `,
  };
}

export function glassCard() {
  return {
    border: `.2rem solid ${TOKENS.borderSoft}`,
    backgroundColor: alpha(TOKENS.shell2, 0.55),
    backdropFilter: 'blur(14px)',
    boxShadow: `
      0 14px 40px rgba(0,0,0,0.45),
      0 0 0 1px rgba(255,255,255,0.02) inset
    `,
  };
}

export function focusRing() {
  return {
    '&.Mui-focusVisible': {
      borderColor: alpha(TOKENS.glow, 0.9),
      boxShadow: `0 0 0 4px ${alpha(TOKENS.glow, 0.14)}, 0 0 22px ${alpha(TOKENS.glow, 0.75)}`,
    },
  };
}
