'use client';


// AuthHeroPanel Component Implementation 


// Dependencies 
import { Box, Typography, Stack } from '@mui/material';


// Components & Necessary Files 


// AuthHeroPanel Component
const wheat = 'rgba(245, 233, 207, 1)';

const wheatGlow = `
  0 0 6px rgba(245, 233, 207, 0.30),
  0 0 14px rgba(245, 233, 207, 0.20),
  0 0 26px rgba(245, 233, 207, 0.12),
  0 0 34px rgba(171, 0, 60, 0.10),
  0 18px 60px rgba(0, 0, 0, 0.55)
`;

export default function AuthHeroPanel({
    brand = 'Aeroquest',
    title = 'Above the Noise. \nBeyond the Clouds.',
    subtitle = 'Aircraft, systems, and the incredible forces that connect them.',
    imageSrc = '/aeroquest_wallpaper_03.jpg',
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
        <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Typography
            sx={{
              color: wheat,
              fontWeight: 750,
              fontSize: { xs: '3.2rem', sm: '4.3rem', md: '5.6rem' },
              letterSpacing: '-0.02em',
              textShadow: wheatGlow,
            }}
          >
            {brand}
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            color: wheat,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            textShadow: wheatGlow,
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: 'rgba(245, 233, 207, 0.78)',
            fontWeight: 550,
            mt: 1.6,
            maxWidth: 450,
            textShadow: '0 10px 35px rgba(0,0,0,0.55)',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
    );
}