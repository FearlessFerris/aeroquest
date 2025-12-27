import Providers from './providers';

export const metadata = {
  title: 'Aeroquest',
  description: 'Aviation dashboard + explorer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
