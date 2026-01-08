'use client';

import { Box, IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';

import RHFCreateForm from '@/components/forms/examples/RHFCreateForm';

export default function AuthRightPanelCreate() {
  const [resetFunction, setResetFunction] = useState(null);
  const [usernamePreview, setUsernamePreview] = useState('');

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <IconButton
        onClick = {() => resetFunction?.()}
        sx={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
      >
        <RefreshIcon sx={{ fontSize: '1.75rem' }} />
      </IconButton>

      <Box sx={{ mx: 'auto', maxWidth: '30rem', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <Typography variant = "h2">Create Account</Typography>

          <Typography
            sx={{
              mt: '0.65rem',
              mb: '2.0rem',
              color: 'rgba(250,250,250,0.62)',
              lineHeight: 1.25,
            }}
          >
            Start your Aeroquest journey
            {usernamePreview ? (
              <>
                {', '}
                <Box
                  component = "span"
                  sx={{
                    fontWeight: 650,
                    color: 'rgba(245,233,207,1)',
                    textShadow: `
                      0 0 6px rgba(245,233,207,0.30),
                      0 0 14px rgba(245,233,207,0.22)
                    `,
                  }}
                >
                  {usernamePreview}
                </Box>
              </>
            ) : null}
            .
          </Typography>
        </Box>
        <RHFCreateForm
          onRegisterReset = {setResetFunction}
          onSetUsernamePreview = {setUsernamePreview}
        />
      </Box>
    </Box>
  );
}
