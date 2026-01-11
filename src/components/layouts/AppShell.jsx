'use client';
// AppShell Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// Components & Necessary Files 
import AppTopBar from '@/components/layouts/AppTopBar';


// AppShell Component 
export default function AppShell({ user, children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: '1.25rem', md: '2.25rem' },
        pt: { xs: '1.25rem', md: '1.75rem' },
        pb: '3rem',
      }}
    >
      <AppTopBar user = {user} />

      <Box
        sx={{
          mt: { xs: '1.25rem', md: '1.75rem' },
          mx: 'auto',
          width: '100%',
          maxWidth: '100rem', 
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
