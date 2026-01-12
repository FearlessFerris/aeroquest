// Globe Styles Implementation 


// Dependencies 


// Components & Necessary Files 
import { TOKENS } from "../tokens/tokens";


// Globe Styles 
export const myGlobeSx = {
    root: {
        border: `.2rem solid ${TOKENS.border}`,
        borderRadius: '2rem',
        height: { xs: '72vh', md: '78vh' },
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    map: {
        inset: 0,
        position: 'absolute',
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
    },
    rim: {
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        borderRadius: '2rem',
    },



}