'use client';
// RHFForm Example Component Implementation 


// Dependencies 
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';


// RHFForm Example
export default function RHFCreateForm() {
    const methods = useForm({ 
        mode: 'onTouched',
    });

    const { getValues } = methods;

    const onSubmit = async (data) => {
        console.log('Submitted:', data);
    }

    return(
        <RHFForm
            methods={methods}
            onSubmit={onSubmit}
        >
            <Box>
                <RHFTextField
                    name='username'
                    label='Username'
                    fullWidth
                    rules={{
                        required: 'Username is required',
                        minLength: { value: 3, message: 'Minimum 3 Characters'}
                    }}
                />
                <RHFTextField 
                    name='password'
                    label='Password'
                    fullWidth
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Minimum 8 Characters'}
                    }}
                /> 
                <RHFTextField 
                    name='confirm-password'
                    label='Confirm Password'
                    fullWidth 
                    rules={{ 
                        required: 'Confirm Password is required',
                        validate: (value) => 
                            value === methods.getValues('password') || 'Passwords do not match'
                    }}
                />
                <RHFTextField
                    name='email'
                    label='Email'
                    fullWidth
                    rules={{ 
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address',
                        },
                    }}
                />
                <RHFFormSubmitButton
                    variant='contained'
                    sx={{
                        fontSize: '1rem',
                        width: '11.2rem'
                    }}
                >
                    Submit
                </RHFFormSubmitButton>
            </Box>
        </RHFForm>
    )
}