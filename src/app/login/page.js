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
import GoogleLogo from '@/components/icons/GoogleLogo';
import HoverSwapIcon from '@/components/ui/HoverSwapIcon';


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
                    <form
                        action={googleSignIn}
                    >
                        <RHFFormSubmitButton
                            type='submit'
                            variant='contained'
                            startIcon={
                                <HoverSwapIcon
                                    size={20}
                                    defaultIcon={<GoogleIcon sx={{ fontSize: '1.2rem', color: 'rgba(250,250,250,0.88)' }} />}
                                    hoverIcon={<GoogleLogo size={20} />}
                                />
                            }
                            sx={{ 
                                fontSize: '1rem', 
                                width: '23rem' 
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
                            startIcon={
                                <HoverSwapIcon
                                    size={20}
                                    defaultIcon={<GitHubIcon sx={{ fontSize: '1.2rem', color: 'rgba(250,250,250,0.78)' }} />}
                                    hoverIcon={<GitHubIcon sx={{ fontSize: '20px', color: '#ffffff' }} />}
                                />
                            }
                            sx={{ 
                                fontSize: '1rem', 
                                width: '23rem' 
                            }}
                        >
                            Sign in with GitHub
                        </RHFFormSubmitButton>
                    </form>
                </Box>
            </MotionBox>
        </Box>
    )
}