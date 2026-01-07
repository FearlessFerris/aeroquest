'use client';


// Google Sign In Form Component Implementation 


// Dependencies 
import { Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';


// Components & Necessary Files 
import GoogleLogo from '../icons/GoogleLogo';
import { googleSignIn } from '@/app/login/actions';
import RHFFormSubmitButton from './RHFFormSubmitButton';
import HoverSwapIcon from '../ui/HoverSwapIcon';


// GoogleSignInForm Component
export default function GoogleSignInForm() {
    return (
        <Box
            component="form"
            action={googleSignIn}
            sx={{
                width: '100%'
            }}
        >
            <RHFFormSubmitButton
                type="submit"
                variant="outlined"
                fullWidth
                startIcon={
                    <HoverSwapIcon
                        size={20}
                        defaultIcon={
                            <GoogleIcon
                                sx={{
                                    color: 'rgba(250,250,250,0.86)',
                                    fontSize: '1.2rem'
                                }} />
                        }
                        hoverIcon={<GoogleLogo size={20} />}
                    />
                }
            >
                Continue with Google
            </RHFFormSubmitButton>
        </Box>
    );
}