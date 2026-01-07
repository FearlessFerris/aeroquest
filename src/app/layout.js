// Layout Configuration Inplementation


// Dependencies 
import Providers from './providers';
import { Box } from '@mui/material';


// Components & Necessary Files 


// Layout Configuration
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
              minHeight: '100vh',
              // backgroundImage: "url('/aeroquest_wallpaper_03.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundColor: 'rgba(6, 10, 12, 0.86)'
            }}
          > 
          {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
