'use client';


// GitHubSignInForm Component Implementation 


// Dependencies 
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


// Components & Necessary Files 
import HoverSwapIcon from '../ui/HoverSwapIcon';
import RHFFormSubmitButton from './RHFFormSubmitButton';
import { githubSignIn } from '@/app/login/actions';


// GitHubSignInForm Component
export default function GitHubSignInForm() {
    return (
        <Box
            component="form"
            action={githubSignIn}
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
                            <GitHubIcon
                                sx={{
                                    color: 'rgba(250,250,250,0.86)',
                                    fontSize: '1.2rem'
                                }} />
                        }
                        hoverIcon={<GitHubIcon
                            sx={{
                                color: '#ffffff',
                                fontSize: '1.2rem'
                            }}
                        />}
                    />
                }
            >
                Continue with GitHub
            </RHFFormSubmitButton>
        </Box>
    );
}
