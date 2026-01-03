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
          fontWeight: 600,
          fontSize: '1rem'
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
          borderRadius: '.75rem',
          background: 'rgba(0, 0, 0, 0.35)',
          fontWeight: 500,
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
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(171, 0, 60, 0.85)',
        boxShadow: '0 0 0 1px rgba(171, 0, 60, 0.45)',
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