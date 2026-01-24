// Globe Styles Implementation 


// Dependencies 


// Components & Necessary Files 
import { TOKENS } from "../tokens/tokens";


// Globe Styles 
export const myGlobeSx = {
 outer: {
    position: 'relative',
    width: '100%',
  },

  // your existing root, clipped
  root: {
    border: `.2rem solid ${TOKENS.glow}`,
    borderRadius: '2rem',
    height: { xs: '72vh', md: '78vh' },
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    zIndex: 5, // make sure globe is above particles
    background: 'rgba(0,0,0,0.25)', // optional: helps contrast
  },

  map: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
  },

  typography: { 
    minHeight: '1.5rem', 
    transition: 'opacity 120ms ease', 
    pointerEvents: 'none',
    userSelect: 'none',
  },

  vignette: {
    background: `
      radial-gradient(1200px 680px at 50% 55%,
        rgba(0,0,0,0.05) 0%,
        rgba(0,0,0,0.64) 92%,
        rgba(0,0,0,0.78) 100%
      ),
      linear-gradient(180deg,
        rgba(2,16,18,0.01) 0%,
        rgba(2,16,18,0.30) 100%
      )
    `,
    inset: 0,
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 3,
  },

  rim: {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    borderRadius: '2rem',
    zIndex: 4,
    // (optional) if you want the rim to visually pop:
    // boxShadow: `inset 0 0 0 .15rem ${TOKENS.borderSoft}`,
  },
};
