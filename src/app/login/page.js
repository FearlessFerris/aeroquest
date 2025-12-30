// Login Form Component Implementation 


// Dependencies 
import { Box, Typography, Button } from '@mui/material';
import { signIn } from '@/lib/auth';
import { motion } from 'motion/react';


// Components & Necessary Files
import RHFLoginForm from '@/components/forms/examples/RHFLoginForm';
import { googleSignIn, githubSignIn } from './actions';


// Login Component
export default function LoginPage() {

   const MotionBox = motion.div;


   return (
    <Box
        sx={{
            display: 'grid',
            minHeight: '100vh',
            placeItems: 'center',
            textAlign: 'center'
        }}
    >
        <MotionBox 
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >

        <Box
            sx={{
                width: 'min(32rem, 92vw)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                p: '2rem',
                borderRadius: '2rem',
                backdropFilter: 'blur(14px)',
                background: 'rgba(10, 20, 24, 0.55)',
                border: '1px solid rgba(255,255,255,0.10)',
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
            <RHFLoginForm />
            <form
                action={googleSignIn}
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
                action={githubSignIn}
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
                    </MotionBox>
    </Box>
)
}
