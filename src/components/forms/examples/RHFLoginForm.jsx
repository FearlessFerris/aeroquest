'use client';
// Login Form Component Implementation 


// Dependencies 
import { Box, Button, Divider, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';


// Components & Necessary Files 
import RHFForm from "../RHFForm";
import RHFFormTextField from "../fields/RHFFormTextField";
import RHFFormSubmitButton from "../RHFFormSubmitButton";
import RHFFormAuthLinkButtons from '../RHFFormAuthLinkButtons';



// Login Form Component
const MotionText = motion.create(Typography);

export default function RHFLoginForm() {

    const methods = useForm({
        mode: 'onTouched',
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const username = methods.watch('username');
    const isUsernameValid = username.length >= 8;
    const greetingKey = isUsernameValid ? `wb-${username}` : 'wb';
    const greeting = isUsernameValid ? ( 
        <>
            Welcome back,{' '}
            <Box
                component='span'
                sx={{
                    color: '#ab003c'
                }}
            > 
            { username }
            </Box>
        </>
    ):(
        'Welcome back'
    );

    const onSubmit = async (data) => {
        console.log('Submitted:', data);
    }

    return (
        <RHFForm
            methods={methods}
            onSubmit={onSubmit}
        >
            <Box>
                <Box
                    sx={{
                        minHeight: '2.5rem'
                    }}
                >
                    <Box 
                        sx={{ 
                            minHeight: '.5rem', 
                            display: 'grid', 
                            placeItems: 'center',
                        }}
                    >
                        <AnimatePresence 
                            mode="wait">
                            <MotionText
                                key={greetingKey}
                                initial={{ opacity: 0, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, filter: 'blur(6px)' }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                sx={{
                                    color: 'rgba(250,250,250,0.82)',
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.01em',
                                    marginBottom: '2rem',
                                }}
                            >
                                {greeting}
                            </MotionText>
                        </AnimatePresence>
                    </Box>
                </Box>
                <RHFFormTextField
                    name='username'
                    label='Username'
                    fullWidth
                    rules={{
                        required: 'Please enter a valid Username',
                        minLength: { value: 8, message: 'Minimum 8 characters' },
                        maxLength: { value: 30, message: 'Maximum 30 characters' },
                        pattern: {
                            value: /^[a-zA-Z0-9_]+$/,
                            message: 'Only letters, numbers, and underscores',
                        },
                    }}
                    sanitize={(value) =>
                        value
                            .replace(/\s+/g, '')
                            .replace(/[^a-zA-Z0-9_]/g, '')
                            .slice(0, 30)
                    }           
                />
                <RHFFormTextField
                    name='password'
                    label='Password'
                    fullWidth
                    rules={{
                        required: 'Please enter a valid Password',
                        minLength: { value: 8, message: 'Minimum 8 characters' },
                        validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
                    }}
                    type='password'
                    sx={{
                        alignItems: 'center'
                    }}
                />
                <RHFFormAuthLinkButtons />
                <Box
                    sx={{
                        marginTop: '3rem'
                    }}
                >
                    <RHFFormSubmitButton
                        variant='contained'
                        startIcon={<LoginIcon />}
                        sx={{
                            fontSize: '1rem',
                            width: '14rem'
                        }}
                    >
                        Login
                    </RHFFormSubmitButton>
                </Box>
            </Box>
        </RHFForm>
    )
}
