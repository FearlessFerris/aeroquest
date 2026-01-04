// Hover Swap Icon Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// Components & Necessary Files 


// Hover Swap Icon Component
export default function HoverSwapIcon({ defaultIcon, hoverIcon, size = 20 }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-block',
        flex: '0 0 auto',
        transform: 'translateZ(0)',
        transition: 'transform 140ms cubic-bezier(0.2, 0.9, 0.2, 1)',
        willChange: 'transform',
        'button:hover &': { transform: 'scale(1.08)' },
        'button:active &': { transform: 'scale(0.96)' },
        '& .icon-default, & .icon-hover': {
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          transition: 'opacity 120ms cubic-bezier(0.2, 0.9, 0.2, 1)',
          willChange: 'opacity',
        },
        '& .icon-default': { opacity: 1 },
        '& .icon-hover': { opacity: 0 },
        'button:hover & .icon-default': { opacity: 0 },
        'button:hover & .icon-hover': { opacity: 1 },
      }}
    >
      <Box className="icon-default">{defaultIcon}</Box>
      <Box className="icon-hover">{hoverIcon}</Box>
    </Box>
  );
}