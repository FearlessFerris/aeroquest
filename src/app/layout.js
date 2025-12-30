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
              minHeight: '100vh',
              backgroundImage: "url('/aeroquest_wallpaper_03.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          > 
          {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}

// import Providers from './providers';
// import { Box } from '@mui/material';
// import { Inter } from 'next/font/google';

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
// });

// export const metadata = {
//   title: 'Aeroquest',
//   description: 'Aviation dashboard + explorer',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body style={{ margin: 0, minHeight: '100vh' }}>
//         <Providers>
//           <Box
//             sx={{
//               minHeight: '100vh',
//               width: '100%',
//               backgroundImage: "url('/aeroquest_wallpaper_03.jpg')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               backgroundAttachment: 'fixed',
//               // keeps things clean on different aspect ratios
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             {children}
//           </Box>
//         </Providers>
//       </body>
//     </html>
//   );
// }
