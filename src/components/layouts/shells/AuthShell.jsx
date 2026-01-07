'use client';


// AuthShell Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// AuthShell Component
export default function AuthShell({ left, right }) {
    return (
        <Box
            sx={{
                display: 'grid',
                minHeight: '100vh',
                placeItems: 'center',
                px: '2rem',
                py: '3rem',
            }}
        >
            <Box
                sx={{
                    background: 'rgba(0,0,0,0.18)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(250, 250, 250, 0.10)',
                    borderRadius: '2.2rem',
                    boxShadow: '0 2.2rem 5rem rgba(0,0,0,0.55)',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    minHeight: 'min(42rem, 86vh)',
                    overflow: 'hidden',
                    width: 'min(96rem, 96vw)',
                }}
            >
                <Box
                    sx={{
                        position: 'relative'
                    }}
                >
                    {left}
                </Box>

                <Box
                    sx={{
                        background: 'rgba(0,0,0,0.30)',
                        borderLeft: { md: '1px solid rgba(250,250,250,0.08)' },
                        p: { xs: '2rem', md: '3rem' },
                        position: 'relative',
                    }}
                >
                    {right}
                </Box>
            </Box>
        </Box>
    );
}