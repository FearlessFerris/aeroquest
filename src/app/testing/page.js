import { Box, Container, Paper, Grid, Typography, Stack, Button, TextField } from '@mui/material';

export default function SplitAuthLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        px: { xs: 2, sm: 3 },
        py: { xs: 5, sm: 6 },

        // background “cinematic”
        backgroundColor: '#07090d',
        backgroundImage: `
          radial-gradient(1200px 800px at 15% 10%, rgba(74, 227, 255, 0.10) 0%, transparent 60%),
          radial-gradient(1200px 900px at 85% 0%, rgba(176, 124, 255, 0.10) 0%, transparent 60%),
          radial-gradient(900px 700px at 80% 85%, rgba(171, 0, 60, 0.10) 0%, transparent 55%)
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            overflow: 'hidden',
            borderRadius: '2rem',
            border: '1px solid rgba(255,255,255,0.14)',
            backgroundColor: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px) saturate(1.25)',
            boxShadow: `
              0 30px 120px rgba(0,0,0,0.28),
              inset 0 1px 0 rgba(255,255,255,0.14)
            `,
          }}
        >
          <Grid container sx={{ minHeight: { xs: 620, md: 640 } }}>
            {/* LEFT: media panel */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  position: 'relative',
                  p: { xs: 3, sm: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',

                  // image panel (swap url later)
                  backgroundImage:
                    'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zNV9hZXJpYWxfdG9wX2Rvd25fdmlld19vZl9haXJwbGFuZV9yZWFsaXN0aWNfcF9iOWVjYjI4NS0xNTlhLTQ1MGUtODkwMS04MWVlMzMyOWQ2NzZfMS5qcGc.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* glass veil + vignette */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.62) 75%, rgba(0,0,0,0.72) 100%)
                    `,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 120px rgba(0,0,0,0.65)',
                  }}
                />

                <Box sx={{ position: 'relative' }}>
                  <Typography sx={{ color: 'rgba(250,250,250,0.90)', fontWeight: 800 }}>
                    GenAI
                    <Box component="span" sx={{ ml: 1, fontSize: '0.85rem', opacity: 0.8 }}>
                      • Studio
                    </Box>
                  </Typography>
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'rgba(250,250,250,0.96)',
                      fontWeight: 860,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Create your account to
                    <br />
                    unleash your dreams
                  </Typography>
                  <Typography sx={{ mt: 1.5, color: 'rgba(250,250,250,0.70)', maxWidth: 420 }}>
                    Clean glass UI, rich focus glows, and a layout that feels alive.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT: form panel */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 3, sm: 4 },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ width: '100%', maxWidth: 420, mx: 'auto',  }}>
                  <Stack spacing={2.2}>
                    <Typography
                      variant="h4"
                      sx={{ color: 'rgba(250,250,250,0.96)', fontWeight: 860, letterSpacing: '-0.02em' }}
                    >
                      Sign up
                    </Typography>

                    <TextField label="Name" fullWidth />
                    <TextField label="Email" fullWidth />
                    <TextField label="Password" type="password" fullWidth />

                    <Button variant="contained" size="large">
                      Start Creating
                    </Button>

                    <Typography sx={{ color: 'rgba(250,250,250,0.55)', fontSize: '0.9rem' }}>
                      By signing in, you agree to the Terms of Service and Privacy Policy.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
