import { Box, Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={ { minHeight: '100vh', p: 6 } }>
      <Typography variant="h2" sx={ { mb: 2 } }>
        Aeroquest
      </Typography>

      <Typography sx={ { mb: 3, maxWidth: '48rem' } }>
        Explore airports, airlines, aircraft, and flights. Save favorites, compare aircraft, and view a live-sim globe.
      </Typography>

      <Button variant="contained">
        Get Started
      </Button>
    </Box>
  );
}
