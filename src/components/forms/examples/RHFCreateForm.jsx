'use client';
// RHFForm Example Component Implementation 


// Dependencies 
import { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';
import RHFImageInput from '../fields/RHFImageInput';



// RHFCreateForm Component
export default function RHFCreateForm() {
    const methods = useForm({
        mode: 'onTouched',
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            imageUrl: '',
            imageFile: null,
        },
    });

    const { getValues } = methods;

    const refreshForm = () => {
        methods.reset();
    }

    const onSubmit = async (data) => {
        console.log('Submitted:', data);
        methods.reset();
    };

    const glassIconButtonSx = {
        width: '3rem',
        height: '3rem',
        borderRadius: '0.85rem',

        background: 'rgba(250, 250, 250, 0.06)',
        color: '#fafafa',
        border: '1px solid rgba(250, 250, 250, 0.14)',
        boxShadow: '0 10px 26px rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(10px)',

        transition: 'transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',

        '&:hover': {
            background: 'rgba(171, 0, 60, 0.18)',
            borderColor: 'rgba(171, 0, 60, 0.40)',
            boxShadow: '0 14px 34px rgba(0, 0, 0, 0.58), 0 0 0 2px rgba(171, 0, 60, 0.12)',
            transform: 'translateY(-1px) rotate(90deg)',
        },

        '&:active': {
            transform: 'scale(0.96)',
        },
    };

    return (
        <RHFForm
            methods={methods}
            onSubmit={onSubmit}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        mb: '1.25rem',
                    }}
                >
                    <IconButton
                        onClick={refreshForm}
                        sx={glassIconButtonSx}
                    >
                        <RefreshIcon sx={{ fontSize: '1.75rem' }} />
                    </IconButton>


                </Box>
                <RHFTextField
                    name="username"
                    label="Username"
                    fullWidth
                    placeholder="JavarisJamarJavarisonLamar"
                    rules={{
                        required: 'Username is required',
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
                <RHFTextField
                    name="password"
                    label="Password"
                    fullWidth
                    placeholder="...not password123"
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Minimum 8 characters' },
                        validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
                    }}
                    type="password"
                />
                <RHFTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    fullWidth
                    placeholder="Just like the last one ⬆"
                    rules={{
                        required: 'Confirm Password is required',
                        validate: (value) => value === getValues('password') || 'Passwords do not match',
                    }}
                    type="password"
                />
                <RHFTextField
                    name="email"
                    label="Email"
                    fullWidth
                    placeholder="name@example.com"
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address',
                        },
                    }}
                />
                <RHFImageInput />
                <Box
                    sx={{
                        margin: '3rem'
                    }}
                >
                    <RHFFormSubmitButton
                        variant="contained"
                        sx={{
                            fontSize: '1rem',
                            width: '14rem',
                        }}
                    >
                        Create
                    </RHFFormSubmitButton>
                </Box>
            </Box>
        </RHFForm>
    );
}