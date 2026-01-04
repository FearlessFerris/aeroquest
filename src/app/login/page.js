// Login Form Component Implementation 


// Dependencies 
import { Box, Typography, Button } from '@mui/material';


// Components & Necessary Files
import RHFLoginForm from '@/components/forms/examples/RHFLoginForm';
import MotionBox from '@/components/motion/MotionBox';
import GoogleSignInForm from '@/components/forms/GoogleSignInForm';
import GitHubSignInForm from '@/components/forms/GitHubSignInForm';


// Login Component
export default function LoginPage() {



    return (
        <Box
            sx={{
                display: 'grid',
                minHeight: '100dvh',
                placeItems: 'center',
                textAlign: 'center'
            }}
        >
            <MotionBox>
                <Box
                    sx={{
                        width: 'min(32rem, 92vw)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        p: '2rem',
                        borderRadius: '1rem',
                        background: 'rgba(2, 10, 12, 0.90)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255,255,255,0.10)',
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            fontWeight: '600',
                            margin: '2rem'
                        }}
                    >
                        Login
                    </Typography>
                    <RHFLoginForm />
                    <GoogleSignInForm />
                    <GitHubSignInForm />
                </Box>
            </MotionBox>
        </Box>
    )
}