import Providers from './providers';
import { Box } from '@mui/material';

export const metadata = {
  title: 'Aeroquest',
  description: 'Aviation dashboard + explorer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            sx={{
              minHeight: '100vh'
            }}
          > 
          {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
