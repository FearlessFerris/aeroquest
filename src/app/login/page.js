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
function GoogleLogo({ size = 20, sx = {} }) {
    return (
        <Box
            component="span"
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                display: 'inline-grid',
                placeItems: 'center',
                ...sx,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
            >
                <path
                    fill="#EA4335"
                    d="M24 9.5c3.3 0 6.3 1.2 8.6 3.2l6.4-6.4C35 2.7 29.8 0 24 0 14.6 0 6.4 5.4 2.4 13.3l7.6 5.9C12 13.3 17.6 9.5 24 9.5z"
                />
                <path
                    fill="#4285F4"
                    d="M46.1 24.5c0-1.6-.1-2.7-.4-4H24v8.2h12.7c-.3 2-1.9 5-5.1 7l7.8 6.1c4.6-4.3 6.7-10.5 6.7-17.3z"
                />
                <path
                    fill="#FBBC05"
                    d="M10 28.3c-.5-1.4-.8-2.8-.8-4.3s.3-2.9.7-4.3l-7.6-5.9C.8 16.9 0 20.3 0 24s.8 7.1 2.3 10.2l7.7-5.9z"
                />
                <path
                    fill="#34A853"
                    d="M24 48c5.8 0 10.7-1.9 14.3-5.2l-7.8-6.1c-2.1 1.5-4.8 2.5-8.5 2.5-6.4 0-12-3.8-14-9.2l-7.7 5.9C6.4 42.6 14.6 48 24 48z"
                />
            </svg>
        </Box>
    );
}

function HoverSwapIcon({ defaultIcon, hoverIcon, size = 20 }) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: `${size}px`,
                height: `${size}px`,
                display: 'inline-block',
                flex: '0 0 auto',
                transform: 'translateZ(0)',
                transition: 'transform 180ms cubic-bezier(0.22,1,0.36,1)',
                willChange: 'transform',
                'button:hover &': { transform: 'scale(1.08)' },
                'button:active &': { transform: 'scale(0.96)' },
                '& .icon-default, & .icon-hover': {
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                    transition: 'opacity 160ms ease',
                    willChange: 'opacity',
                },
                '& .icon-default': { opacity: 1 },
                '& .icon-hover': { opacity: 0 },
                'button:hover & .icon-default': { opacity: 0 },
                'button:hover & .icon-hover': { opacity: 1 },
            }}
        >
            <Box className="icon-default">{defaultIcon}</Box>
            <Box className="icon-hover">{hoverIcon}</Box>
        </Box>
    );
}


const buttonSx = {
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(250, 250, 250, 0.06)',
    color: 'rgba(250,250,250,0.92)',
    border: '1px solid rgba(250, 250, 250, 0.14)',
    borderRadius: '0.75rem',
    boxShadow: '0 14px 28px rgba(0,0,0,0.45)',
    '& .MuiButton-startIcon': {
        marginRight: '0.55rem',
        marginLeft: 0,
        minWidth: '20px',
        display: 'inline-flex',
        alignItems: 'center',
    },
};


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
                            startIcon={
                                <HoverSwapIcon
                                    size={20}
                                    defaultIcon={<GoogleIcon sx={{ fontSize: '1.2rem', color: 'rgba(250,250,250,0.88)' }} />}
                                    hoverIcon={<GoogleLogo size={20} />}
                                />
                            }
                            sx={{ ...buttonSx, fontSize: '1rem', width: '14rem' }}
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
                            sx={{ ...buttonSx, fontSize: '1rem', width: '14rem' }}
                        >
                            Sign in with GitHub
                        </RHFFormSubmitButton>
                    </form>
                </Box>
            </MotionBox>
        </Box>
    )
}