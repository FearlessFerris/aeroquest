// Theme Component Implementation 


// Dependencies 
import { createTheme } from '@mui/material/styles';


// Components & Necessary Files 


// Theme Implementation
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: '#ab003cff' },
//     background: {
//       default: '#021012',
//       paper: '#0b0f14',
//     },
//     text: {
//       primary: '#fafafa',
//       secondary: '#c7c7c7',
//     },
//   },
//   // shape: { borderRadius: 16 },
//   typography: {
//     fontFamily: [
//       'system-ui',
//       '-apple-system',
//       'Segoe UI',
//       'Roboto',
//       'Helvetica',
//       'Arial',
//       'sans-serif',
//     ].join(','),
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           // borderRadius: 16,
//           textTransform: 'none',
//           fontWeight: 700,
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: { borderRadius: 20 },
//       },
//     },
//   },
// });
// theme.js


// const ACCENT = '#ab003c';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: ACCENT },
//     background: {
//       default: '#021012',
//       paper: 'rgba(0,0,0,0.35)',
//     },
//     text: {
//       primary: '#fafafa',
//       secondary: '#c7c7c7',
//     },
//   },

//   typography: {
//     fontFamily: [
//       'Inter',
//       'system-ui',
//       '-apple-system',
//       'Segoe UI',
//       'Roboto',
//       'Helvetica',
//       'Arial',
//       'sans-serif',
//     ].join(','),
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 700,
//   },

//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           textRendering: 'optimizeLegibility',
//         },
//       },
//     },
//     MuiTextField: {
//       defaultProps: {
//         variant: 'outlined',
//       },
//       styleOverrides: {
//         root: {
//           marginBottom: '.75rem',
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           fontFamily: 'inherit',
//           fontWeight: 500,
//           letterSpacing: '0.02em',
//           color: 'rgba(250,250,250,0.78)',

//           '&.Mui-focused': {
//             color: '#fafafa',
//           },

//           '&.Mui-error': {
//             color: 'rgba(250,250,250,0.78)',
//           },
//           '&.MuiInputLabel-shrink': {
//             fontSize: '0.75rem',
//             fontWeight: 600,
//             letterSpacing: '0.08em',
//             textTransform: 'uppercase',
//             opacity: 0.78,
//             transform: 'translate(14px, -18px) scale(0.75)',
//           },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           backgroundColor: 'rgba(0, 0, 0, 0.28)',
//           backdropFilter: 'blur(14px)',
//           WebkitBackdropFilter: 'blur(14px)',
//           borderRadius: 16,
//           boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
//           transform: 'translateY(0)',
//           transition:
//             'transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, border-color 160ms ease',
//           '& .MuiOutlinedInput-notchedOutline': {
//             borderColor: 'rgba(250, 250, 250, 0.28)',
//             padding: 0,
//           },
//           '& .MuiOutlinedInput-notchedOutline legend': {
//             width: 0,
//             padding: 0,
//             margin: 0,
//             visibility: 'hidden',
//           },
//           '&:hover': {
//             transform: 'translateY(-1px)',
//             boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
//             backgroundColor: 'rgba(0, 0, 0, 0.34)',
//           },
//           '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//             borderColor: ACCENT,
//             borderWidth: 2,
//           },
//           '&.Mui-focused': {
//             boxShadow:
//               '0 0 0 6px rgba(171, 0, 60, 0.18), 0 18px 45px rgba(0,0,0,0.45)',
//           },
//           '&.Mui-error .MuiOutlinedInput-notchedOutline': {
//             borderColor: 'rgba(250, 250, 250, 0.28)',
//           },
//           '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
//             borderColor: ACCENT,
//           },
//         },

//         input: {
//           color: '#fafafa',
//           padding: '1.15rem 1.1rem',
//         },
//       },
//     },
//     MuiFormHelperText: {
//       styleOverrides: {
//         root: {
//           fontFamily: 'inherit',
//           fontSize: '0.8rem',
//           fontWeight: 500,
//           letterSpacing: '0.02em',
//           marginLeft: 8,
//           marginRight: 8,
//           marginTop: '0.35rem',
//           marginBottom: 0,
//           lineHeight: 1.2,
//           minHeight: '1.25rem', 
//           color: 'rgba(250,250,250,0.75)',
//           '&.Mui-error': {
//             color: ACCENT,
//             fontWeight: 600,
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 700,
//           borderRadius: '.5rem',
//         },
//       },
//     },
//   },
// });


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
          borderRadius: '1.25rem',
          textTransform: 'none',
          fontWeight: 700,
          padding: '0.9rem 1.2rem',
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
          background: 'rgba(0, 0, 0, 0.18)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(250, 250, 250, 0.10)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(250, 250, 250, 0.18)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ab003c',
            boxShadow: '0 0 0 1px rgba(171, 0, 60, 0.80)',
          },
        },
        input: {
          padding: '1.05rem 1.1rem',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(250, 250, 250, 0.60)',
          '&.Mui-focused': { color: '#ab003c' },
        },
      },
    },
  },
});

export default theme;
