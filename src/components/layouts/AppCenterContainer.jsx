'use client';

import { Box } from '@mui/material';

export default function AppCenterContainer({
  children,
  sx = {},
  maxWidth = '100rem',
}) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        px: { xs: '1.25rem', md: '2.5rem' },
        py: { xs: '1.25rem', md: '2.5rem' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '1.25rem', md: '1.75rem' },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
