// Theme Component Implementation 


// Dependencies 
import { createTheme, alpha } from '@mui/material/styles';



// Components & Necessary Files 


// Theme Implementation
const TOKENS = {
    bg: '#010607',
    shell: 'rgba(6, 10, 12, 0.86)',
    shell2: 'rgba(4, 8, 10, 0.78)',
    border: 'rgba(250, 250, 250, 0.12)',
    borderSoft: 'rgba(250, 250, 250, 0.08)',
    text: 'rgba(250, 250, 250, 0.90)',
    text2: 'rgba(250, 250, 250, 0.68)',
    wheat: 'rgba(245, 233, 207, 0.92)',
    glow: 'rgba(245, 206, 138, 0.92)',
    glowSoft: 'rgba(245, 206, 138, 0.18)',
    accent: '#ab003c',
    error: '#ffffffff',
};

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: TOKENS.accent },
        error: { main: TOKENS.error },
        background: {
            default: TOKENS.bg,
            paper: TOKENS.shell,
        },
        text: {
            primary: TOKENS.text,
            secondary: TOKENS.text2,
        },
        divider: TOKENS.borderSoft,
    },

    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
        ].join(','),

        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,

        button: {
            textTransform: 'none',
            fontWeight: 520,
            letterSpacing: '0.01em',
            fontSize: '1rem',
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: TOKENS.text,
                    backgroundColor: TOKENS.bg,
                    backgroundImage: `
            radial-gradient(900px 520px at 22% 18%, ${alpha(TOKENS.glow, 0.08)} 0%, transparent 60%),
            radial-gradient(760px 520px at 84% 68%, ${alpha(TOKENS.accent, 0.08)} 0%, transparent 62%),
            linear-gradient(180deg, ${TOKENS.bg} 0%, #000304 100%)
          `,
                    backgroundAttachment: 'fixed',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: TOKENS.text2,
                    fontSize: '1.5rem',
                    fontWeight: 520,
                    '&.Mui-focused': { color: TOKENS.text2 },
                    '&.Mui-error': { color: TOKENS.text2 },
                },
                shrink: {
                    transform: 'translate(14px, -32px) scale(0.84)',
                    transformOrigin: 'top left',
                    fontWeight: 520,
                    color: TOKENS.text2,
                    '&.Mui-focused': { color: TOKENS.text2 },
                    '&.Mui-error': { color: TOKENS.text2 },
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                InputLabelProps: { shrink: true },
            },
        },

        MuiCheckbox: {
            defaultProps: { disableRipple: true },
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                    borderRadius: '999px',
                    position: 'relative',
                    color: alpha(TOKENS.glow, 0.65),
                    transition: 'color 140ms ease, transform 140ms ease',
                    '& svg': { fontSize: '1.5rem' },
                    backgroundImage: 'none',
                    '&:hover': {
                        color: alpha(TOKENS.glow, 0.9),
                        backgroundColor: 'transparent',
                        backgroundImage: `radial-gradient(circle, ${alpha(TOKENS.glow, 0.95)} 0%, transparent 70%)`,
                    },
                    '&.Mui-checked': {
                        color: alpha(TOKENS.glow, 1),
                        backgroundImage: `radial-gradient(circle, ${alpha(TOKENS.glow, 0.75)} 0%, transparent 70%)`,
                    },

                    '&.Mui-checked:hover': {
                        backgroundImage: `radial-gradient(circle, ${alpha(TOKENS.glow, 0.9)} 0%, transparent 60%)`,
                    },

                    '&.Mui-focusVisible': {
                        backgroundImage: `radial-gradient(circle, ${alpha(TOKENS.glow, 0.65)} 0%, transparent 60%)`,
                    },
                },
            },
        },

        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    gap: '0.6rem',
                    marginLeft: 0,
                    alignItems: 'center',

                    '&:hover .MuiFormControlLabel-label': {
                        color: TOKENS.text,
                    },
                },
                label: {
                    fontSize: '1.15rem',
                    fontWeight: 520,
                    letterSpacing: '0.015em',
                    color: TOKENS.wheat,
                    transition: 'color 160ms ease',
                },
            },
        },

        MuiOutlinedInput: {
            defaultProps: {
                notched: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: '1rem',
                    backgroundColor: TOKENS.shell2,
                    fontSize: '1.5rem',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: TOKENS.border,
                        transition: 'border-color 140ms ease, box-shadow 180ms ease',
                    },
                    // ✅ kill the notch cut-out (no gap, full border)
                    // '& .MuiOutlinedInput-notchedOutline legend': {
                    //   width: 0,
                    //   padding: 0,
                    // },
                    // REMEMBER THIS FERRIS!!!! - SUPER USEFUL!!!!
                    '& .MuiOutlinedInput-notchedOutline legend > span': {
                        display: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: `.2rem solid ${alpha(TOKENS.glow, 0.80)}`,
                    },
                    '&:hover': {
                        boxShadow: `0 0 22px ${alpha(TOKENS.glow, 0.80)}`,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: alpha(TOKENS.glow, 1),
                    },
                    '&.Mui-focused': {
                        boxShadow: `0 0 22px ${alpha(TOKENS.glow, 1)}`,
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        border: `.2rem solid ${alpha(TOKENS.error, 0.80)}`,
                    },
                    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: alpha(TOKENS.error, 0.80),
                        boxShadow: `0 0 22px ${alpha(TOKENS.error, 0.80)}`
                    },
                    '&.Mui-error.Mui-focused': {
                        boxShadow: `0 0 18px ${alpha(TOKENS.error, 0.80)}`,
                    },
                },

                input: {
                    padding: '1rem 1rem',
                    fontWeight: 440,
                    color: TOKENS.wheat,
                },
            },
        },

        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: {
                    borderRadius: '1.05rem',
                    padding: '0.85rem 1.1rem',
                    fontWeight: 520,
                    letterSpacing: '0.01em',
                },
                contained: {
                    backgroundColor: 'rgba(250, 250, 250, 0.08)',
                    border: `.2rem solid ${TOKENS.border}`,
                    color: TOKENS.wheat,

                    '&:hover': {
                        backgroundColor: 'rgba(250, 250, 250, 0.12)',
                        boxShadow: `0 0 18px ${alpha(TOKENS.glow, 0.14)}`,
                        borderColor: alpha(TOKENS.glow, 0.35),
                    },

                    '&.Mui-focusVisible ensure': {
                        boxShadow: `0 0 22px ${alpha(TOKENS.glow, 0.18)}`,
                    },
                },
                outlined: {
                    borderColor: TOKENS.border,
                    color: 'rgba(250, 250, 250, 0.82)',
                    backgroundColor: 'rgba(4, 8, 10, 0.45)',
                    border: `.2rem solid ${TOKENS.border}`,

                    '&:hover': {
                        borderColor: alpha(TOKENS.glow, 1),
                        backgroundColor: 'rgba(4, 8, 10, 0.60)',
                        boxShadow: `0 0 22px ${alpha(TOKENS.glow, 0.80)}`,
                    },

                    '&.Mui-focusVisible': {
                        boxShadow: `0 0 22px ${alpha(TOKENS.glow, 0.16)}`,
                    },
                },
            },
        },
    },
});
