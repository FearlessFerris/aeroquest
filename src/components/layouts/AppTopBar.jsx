'use client';
// AppTopBar Component Implementation 


// Dependencies 
import Link from 'next/link';
import { Box, Button, IconButton, Typography, Avatar, Tooltip } from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


// Components & Necessary Files 
import { TOKENS } from '@/styles/tokens/tokens';
import { appTopBarSx } from '@/styles/components/appTopBar.styles';


// AppTopBar Component
export default function AppTopBar({ user }) {
    return (
        <Box sx={appTopBarSx.wrap}>
            <Box sx={appTopBarSx.inner}>
                <Box sx={appTopBarSx.bar}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            gap: '0.8rem',
                            minWidth: 0
                        }}
                    >
                        <Box sx={{ minWidth: 0 }}>
                            <Typography
                                sx={{
                                    color: TOKENS.text,
                                    fontWeight: 720,
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.1,
                                    fontSize: '2rem'
                                }}
                            >
                                Aeroquest
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={appTopBarSx.navRow}>
                        <Button
                            component={Link}
                            href="/dashboard"
                            startIcon={<DashboardRoundedIcon fontSize="large" />}
                            sx={appTopBarSx.navPill}
                        >
                            Dashboard
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            gap: '0.6rem',
                        }}
                    >
                        <Tooltip title="Settings">
                            <IconButton sx={appTopBarSx.iconButton}>
                                <SettingsRoundedIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Sign out">
                            <IconButton sx={appTopBarSx.iconButton}>
                                <LogoutRoundedIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Profile'>
                            <IconButton
                                sx={{
                                    ...appTopBarSx.iconButton,
                                    p: '0rem'
                                }}
                            >
                                <Avatar sx={appTopBarSx.avatar}>
                                    {(user?.name?.[0] || user?.email?.[0] || 'U').toUpperCase()}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}