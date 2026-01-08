'use client';


// AuthRightPanel Component Implementation 


// Dependencies 
import { Box, Divider, IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react'


// Components & Necessary Files
import RHFLoginForm from '@/components/forms/examples/RHFLoginForm';


// Login Component
export default function AuthRightPanel() {

    const [resetFunction, setResetFunction] = useState(null);
    const [username, setUsername] = useState(null);

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
                onClick={() => resetFunction?.()}
                sx={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                }}
            >
                <RefreshIcon
                    sx={{
                        fontSize: '1.75rem'
                    }}
                />
            </IconButton>
            <Box
                sx={{
                    mx: 'auto',
                    maxWidth: '30rem',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant='h2'
                    >
                        Sign In
                    </Typography>
                    <Box
                        sx={{
                            textAlign: 'center',
                            mt: '1rem',
                            mb: '2rem'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1.3rem',
                                color: 'rgba(250,250,250,0.85)',
                                mb: '0.4rem',
                            }}
                        >
                            Welcome back{' '}
                            <Box
                                component="span"
                                sx={{
                                    fontWeight: 600,
                                    color: 'rgba(245,233,207,1)',
                                    textShadow: `
                                        0 0 6px rgba(245,233,207,0.55),
                                        0 0 12px rgba(245,233,207,0.45)
                                    `,
                                }}
                            >
                                {username}
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '0.95rem',
                                color: 'rgba(250,250,250,0.60)',
                            }}
                        >
                            Enter your credentials to continue
                        </Typography>
                    </Box>
                </Box>
                <RHFLoginForm
                    onRegisterReset={setResetFunction}
                    onSetUsername={setUsername}
                />
            </Box>
        </Box>
    );
}