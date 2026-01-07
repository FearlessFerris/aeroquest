'use client';


// AuthHeroPanel Component Implementation 


// Dependencies 
import { Box, Typography, Stack } from '@mui/material';


// Components & Necessary Files 


// AuthHeroPanel Component
export default function AuthHeroPanel({
    brand = 'Aeroquest',
    title = 'Create your account to\nexplore the world of avation',
    subtitle = 'Clean glass UI, rich focus glows, and a layout that feels alive.',
    imageSrc = '/aeroquest_wallpaper_02.jpg',
    badge,
}) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                overflow: 'hidden',
                p: { xs: 3, sm: 4 },
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `
            linear-gradient(180deg,
              rgba(0,0,0,0.15) 0%,
              rgba(0,0,0,0.55) 70%,
              rgba(0,0,0,0.70) 100%
            )
          `,
                }}
            />
            <Box
                sx={{
                    boxShadow: 'inset 0 0 140px rgba(0,0,0,0.70)',
                    inset: 0,
                    pointerEvents: 'none',
                    position: 'absolute',
                }}
            />
            <Box
                sx={{
                    backgroundImage: `
              radial-gradient(700px 500px at 18% 22%, rgba(74, 227, 255, 0.10) 0%, transparent 60%),
              radial-gradient(900px 700px at 82% 12%, rgba(176, 124, 255, 0.10) 0%, transparent 62%)
            `,
                    inset: 0,
                    pointerEvents: 'none',
                    position: 'absolute',
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between">
                    <Typography
                        sx={{
                            color: 'rgba(250,250,250,0.88)',
                            fontWeight: 800,
                            fontSize: '5rem',
                            letterSpacing: '0.01em',
                        }}
                    >
                        {brand}
                    </Typography>

                    {badge ? (
                        <Box
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(14px) saturate(1.2)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                borderRadius: '999px',
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10)',
                                color: 'rgba(250,250,250,0.82)',
                                fontSize: '0.82rem',
                                fontWeight: 750,
                                px: 1.2,
                                py: 0.55,
                            }}
                        >
                            {badge}
                        </Box>
                    ) : null}
                </Stack>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: 'rgba(250,250,250,0.96)',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                        textShadow: '0 18px 60px rgba(0,0,0,0.55)',
                        whiteSpace: 'pre-line',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(250,250,250,0.70)',
                        fontWeight: 550,
                        mt: 1.6,
                        maxWidth: 420,
                        textShadow: '0 16px 50px rgba(0,0,0,0.55)',
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
}