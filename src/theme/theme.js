// Theme Component Implementation 


// Dependencies 
import { createTheme } from '@mui/material/styles';


// Components & Necessary Files 


// Theme Implementation
export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#ab003c' },
        background: {
            default: '#021012',
            paper: 'rgba(250, 250, 250, 0.05)',
        },
        text: {
            primary: '#fafafa',
            secondary: 'rgba(250, 250, 250, 0.70)',
        },
        divider: 'rgba(250, 250, 250, 0.10)',
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
    },

    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    border: '1px solid rgba(250, 250, 250, 0.10)',
                    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                    backdropFilter: 'blur(18px)',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.9rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#fafafa',
                    backdropFilter: 'blur(10px)',
                    willChange: 'transform, box-shadow, background-color, border-color',
                    transition:
                        'transform 140ms cubic-bezier(0.2, 0.9, 0.2, 1), ' +
                        'background-color 140ms cubic-bezier(0.2, 0.9, 0.2, 1), ' +
                        'border-color 140ms cubic-bezier(0.2, 0.9, 0.2, 1), ' +
                        'box-shadow 160ms cubic-bezier(0.2, 0.9, 0.2, 1)',
                },

                contained: {
                    background: 'rgba(250, 250, 250, 0.06)',
                    border: '1px solid rgba(250, 250, 250, 0.14)',
                    boxShadow: '0 10px 26px rgba(0, 0, 0, 0.45)',

                    '&:hover': {
                        background: 'rgba(171, 0, 60, 0.18)',
                        borderColor: 'rgba(171, 0, 60, 0.45)',
                        boxShadow:
                            '0 16px 36px rgba(0, 0, 0, 0.62), 0 0 0 2px rgba(171, 0, 60, 0.14)',
                        transform: 'translateY(-2px) scale(1.01)',
                    },

                    '&:active': {
                        transition: 'transform 80ms cubic-bezier(0.2, 0.9, 0.2, 1)',
                        transform: 'translateY(0px) scale(0.98)',
                    },
                },

                outlined: {
                    background: 'rgba(250, 250, 250, 0.04)',
                    border: '1px solid rgba(250, 250, 250, 0.16)',

                    '&:hover': {
                        background: 'rgba(171, 0, 60, 0.12)',
                        borderColor: 'rgba(171, 0, 60, 0.45)',
                        boxShadow: '0 14px 32px rgba(0, 0, 0, 0.55)',
                        transform: 'translateY(-2px) scale(1.01)',
                    },

                    '&:active': {
                        transition: 'transform 80ms cubic-bezier(0.2, 0.9, 0.2, 1)',
                        transform: 'translateY(0px) scale(0.985)',
                    },
                },

                text: {
                    background: 'rgba(250, 250, 250, 0.02)',

                    '&:hover': {
                        background: 'rgba(171, 0, 60, 0.10)',
                        transform: 'translateY(-2px)',
                    },

                    '&:active': {
                        transition: 'transform 80ms cubic-bezier(0.2, 0.9, 0.2, 1)',
                        transform: 'translateY(0px) scale(0.99)',
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '.75rem',
                    background: 'rgba(0, 0, 0, 0.32)',
                    fontWeight: 500,
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',

                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(250, 250, 250, 0.12)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(250, 250, 250, 0.20)',
                    },

                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(171, 0, 60, 0.60)',
                        boxShadow: '0 0 0 2px rgba(171, 0, 60, 0.18)',
                    },

                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(171, 0, 60, 0.45)',
                        boxShadow: '0 0 0 1px rgba(171, 0, 60, 0.25)',
                    },
                },

                input: {
                    color: '#fafafa',
                    padding: '.3rem 1.25rem',
                    fontSize: '1.3rem',
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'rgba(250, 250, 250, 0.60)',
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    transform: 'translate(1rem, 0.10rem) scale(1)',
                    transformOrigin: 'top left',
                    transition: 'transform 180ms ease, color 180ms ease',
                    '&.Mui-focused': {
                        color: '#ab003c',
                    },
                    '&.Mui-error': {
                        color: 'rgba(171, 0, 60, 0.95)',
                    },
                    '&.MuiInputLabel-shrink': {
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        transform: 'translate(1.1rem, -1.5rem) scale(0.85)',
                    },
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: '0.15rem',
                    marginRight: '0.15rem',
                    marginTop: '0.35rem',
                    marginBottom: '.5rem',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    letterSpacing: '0.01em',
                    color: 'rgba(250,250,250,0.62)',
                    '&.Mui-error': {
                        color: 'rgba(171, 0, 60, 0.90)',
                    },
                },
            },
        },
    },
});

export default theme;