// // Login Form Component Implementation 


// // Dependencies 
import { Box, Divider, Typography } from '@mui/material';


// // Components & Necessary Files
import AuthShell from '@/components/layouts/shells/AuthShell';
import AuthHeroPanel from '@/components/layouts/shells/AuthHeroPanel';
import RHFLoginForm from '@/components/forms/examples/RHFLoginForm';


// // Login Component
function AuthRightPanel() {
    return (
        <Box
            sx={{
                mx: 'auto',
                maxWidth: '30rem',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant='h2'
                >
                    Sign in
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(250,250,250,0.70)',
                        mb: '2rem',
                        mt: '1rem',
                    }}
                >
                    Welcome back, enter your credentials to continue.
                </Typography>
            </Box>
            <RHFLoginForm />
        </Box>
    );
}

export default function LoginPage() {
    return <AuthShell left={<AuthHeroPanel />} right={<AuthRightPanel />} />;
}
