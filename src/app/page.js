// Home Page Component Implementation 


// Dependencies 
import { Box, Typography, Button } from '@mui/material';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';


// Components & Necessary Files 


// Home Page Component
export default async function HomePage() {
  const session = await auth();

  if (!session) redirect('/login');

 return (
    <Box
        sx={{
            display: 'grid',
            minHeight: '100vh',
            placeItems: 'center',
            textAlign: 'center',
        }}
    >
        <Typography
            variant='h1'
        >
            Aeroquest
        </Typography>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <Typography>
                Signed in as {session.user?.email}
            </Typography>

            <form
                action={async () => {
                    'use server';
                    await signOut({ redirectTo: '/login' });
                }}
            >
                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        fontSize: '1rem',
                        width: 'auto'
                    }}
                >
                    Sign Out
                </Button>
            </form>
        </Box>
    </Box>
)
}
