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

    shape: { borderRadius: 24 },

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
                    borderRadius: '.75rem',
                    textTransform: 'none',
                    fontWeight: 700,
                },
                contained: {
                    backgroundColor: '#ab003c',
                    boxShadow: '0 10px 22px rgba(0, 0, 0, 0.35)',
                    '&:hover': {
                        backgroundColor: 'rgba(171, 0, 60, 0.90)',
                        boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.35)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(250, 250, 250, 0.12)',
                    },

                    '& .MuiOutlinedInput-notchedOutline legend': {
                        width: 0,
                        padding: 0,
                    },

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(250, 250, 250, 0.20)',
                    },

                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ab003c',
                        boxShadow: '0 0 0 1px rgba(171, 0, 60, 0.80)',
                    },
                },

                input: {
                    color: '#fafafa',
                },

            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'rgba(250, 250, 250, 0.60)',
                    transform: 'translate(1.1rem, 1.15rem) scale(1)',
                    transformOrigin: 'top left',
                    transition: 'transform 180ms ease, color 180ms ease',

                    '&.Mui-focused': {
                        color: '#ab003c',
                    },

                    '&.MuiInputLabel-shrink': {
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        transform: 'translate(1.1rem, -1.5rem) scale(0.85)',
                    },
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginBottom: '.5rem',
                    textAlign: 'center'
                }
            }
        }


    },
});

export default theme;