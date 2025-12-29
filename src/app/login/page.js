// Login Form Component Implementation 


// Dependencies 
import { Box, Typography, Button } from '@mui/material';
import { signIn } from '@/lib/auth';


// Components & Necessary Files
import RHFFormExample from '@/components/forms/examples/RHFFormExample';


// Login Component
export default function LoginPage() {


   return (
    <Box
        sx={{
            display: 'grid',
            minHeight: '100vh',
            placeItems: 'center',
            textAlign: 'center'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontWeight: '700',
                    margin: '2rem'
                }}
            >
                Login
            </Typography>
            <RHFFormExample />
            <form
                action={async () => {
                    'use server';
                    await signIn('google', { redirectTo: '/' })
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
                    Sign in with Google
                </Button>
            </form>
            <form
                action={async () => {
                    'use server';
                    await signIn('github', { redirectTo: '/' })
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
                    Sign in with GitHub
                </Button>
            </form>
        </Box>
    </Box>
)
}
