// Login Form Component Implementation 


// Dependencies 
import { Box, Typography, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';


// Components & Necessary Files
import RHFLoginForm from '@/components/forms/examples/RHFLoginForm';
import { googleSignIn, githubSignIn } from './actions';
import MotionBox from '@/components/motion/MotionBox';
import RHFFormSubmitButton from '@/components/forms/RHFFormSubmitButton';


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
            <MotionBox>

                <Box
                    sx={{
                        width: 'min(32rem, 92vw)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        p: '2rem',
                        borderRadius: '2rem',
                        background: 'rgba(2, 10, 12, 0.90)',
                        backdropFilter: 'blur(14px)',
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
                        <RHFFormSubmitButton
                            type='submit'
                            variant='contained'
                            startIcon={<GoogleIcon />}
                            sx={{
                                fontSize: '1rem',
                                width: 'auto'
                            }}
                        >
                            Sign in with Google
                        </RHFFormSubmitButton>
                    </form>
                    <form
                        action={githubSignIn}
                    >
                        <RHFFormSubmitButton
                            type='submit'
                            variant='contained'
                            sx={{
                                fontSize: '1rem',
                                width: 'auto'
                            }}
                            startIcon={<GitHubIcon />}
                        >
                            Sign in with GitHub
                        </RHFFormSubmitButton>
                    </form>
                </Box>
            </MotionBox>
        </Box>
    )
}
