'use client';

// RHFForm Example Component Implementation 


// Dependencies 
import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useRouter } from "next/navigation";



// Components & Necessary Files 
import RHFForm from '@/components/forms/RHFForm';
import RHFTextField from '@/components/forms/fields/RHFFormTextField';
import RHFFormSubmitButton from '@/components/forms/RHFFormSubmitButton';
import GoogleSignInForm from '../GoogleSignInForm';
import GitHubSignInForm from '../GitHubSignInForm';
import { signIn } from 'next-auth/react';




// // RHFCreateForm Component
export default function RHFCreateForm({
    onRegisterReset,
    onSetUsernamePreview,
}) {
    const router = useRouter();
    const methods = useForm({
        mode: 'onTouched',
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    const { handleSubmit, control, getValues, reset, formState } = methods;
    const { isSubmitting } = formState;
    const username = useWatch({ control, name: 'username' });

    useEffect(() => {
        if (!onSetUsernamePreview) return;
        onSetUsernamePreview(username?.trim() || '');
    }, [username, onSetUsernamePreview]);

    useEffect(() => {
        if (!onRegisterReset) return;
        onRegisterReset(() => () => reset());
        return () => onRegisterReset(null);
    }, [onRegisterReset, reset]);

    const onSubmit = async (data) => {
        console.log('Create Submitted:', data);
        const res = await fetch('/api/auth/register',{ 
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: data.username, 
                email: data.email,
                password: data.password, 
                confirmPassword: data.confirmPassword,
            }),
        });

        const json = await res.json(); 
        if(!res.ok || !json?.ok){ 
            console.log(json?.error || 'Registration Failed')
            return;
        } 

        const result = await signIn("credentials", {
  email: data.email,
  password: data.password,
  redirect: false, // keep false so YOU control navigation
});

console.log("SIGNIN RESULT:", result);

if (result?.ok) {
  router.replace("/"); // or "/dashboard"
} else {
  console.log(result?.error || "Sign-in failed");
}
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.7rem'
            }}
        >
            <RHFForm 
                methods={methods} 
                onSubmit={handleSubmit(onSubmit)}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: '.65rem'
                    }}
                >
                    <RHFTextField
                        name="username"
                        label="Username"
                        placeholder="Choose a username"
                        autoComplete="username"
                        rules={{
                            required: 'Username is required.',
                            minLength: { value: 8, message: 'Must be at least 8 characters' },
                            maxLength: { value: 24, message: 'Username must be 24 characters or less.' },
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: 'Use only letters, numbers, and underscores.',
                            },
                        }}
                    />
                    <RHFTextField
                        name="email"
                        label="Email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        rules={{
                            required: 'Email is required.',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Please enter a valid email address.',
                            },
                        }}
                    />
                    <RHFTextField
                        name="password"
                        label="Password"
                        placeholder="Create a password"
                        type="password"
                        autoComplete="new-password"
                        rules={{
                            required: 'Password is required.',
                            minLength: { value: 8, message: 'Password must be at least 8 characters.' },
                        }}
                    />
                    <RHFTextField
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Re-enter your password"
                        type="password"
                        autoComplete="new-password"
                        rules={{
                            required: 'Please confirm your password.',
                            validate: (value) =>
                                value === getValues('password') || 'Passwords do not match.',
                        }}
                    />
                    <Box sx={{ display: 'flex', gap: '1rem', m: '0' }}>
                        <RHFFormSubmitButton
                            fullWidth
                            disabled={isSubmitting}
                            sx={{
                                py: '0.95rem',
                            }}
                        >
                            Create account
                        </RHFFormSubmitButton>
                    </Box>
                    <Box sx={{ display: 'grid', gap: '0.9rem' }}>
                    </Box>
                </Box>
            </RHFForm>
            <Box
                sx={{
                    pt: '0.35rem'
                }}
            >
                <Divider
                    sx={{
                        mb: '0.9rem'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '0.85rem',
                            opacity: 0.7
                        }}
                    >
                        OR
                    </Typography>
                </Divider>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem'
                    }}
                >
                    <GoogleSignInForm />
                    <GitHubSignInForm />
                </Box>
            </Box>
            <Typography
                sx={{
                    mt: '0.25rem',
                    textAlign: 'center',
                    color: 'rgba(250,250,250,0.55)',
                    fontSize: '0.92rem',
                }}
            >
                By creating an account, you agree to our Terms and Privacy Policy.
            </Typography>
        </Box>
    );
}
