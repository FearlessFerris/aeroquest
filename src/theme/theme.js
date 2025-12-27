// Theme Component Implementation 


// Dependencies 
import { createTheme } from '@mui/material/styles';


// Components & Necessary Files 


// Theme Implementation
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ab003c' },
    background: {
      default: '#021012',
      paper: '#0b0f14',
    },
    text: {
      primary: '#fafafa',
      secondary: '#c7c7c7',
    },
  },
  shape: { borderRadius: 16 },
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 20 },
      },
    },
  },
});

export default theme;
