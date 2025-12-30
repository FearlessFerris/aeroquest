'use client';
// Login Form Component Implementation 


// Dependencies 
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from "../RHFForm";
import RHFFormTextField from "../fields/RHFFormTextField";
import RHFFormSubmitButton from "../RHFFormSubmitButton";


// Login Form Component
export default function RHFLoginForm(){

    const methods = useForm({
        mode: 'onTouched'
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
                <RHFFormTextField
                    name='username'
                    label='Username'
                    fullWidth
                    rules={{ 
                        required: 'Please enter a valid Username',
                    }}
                />
                <RHFFormTextField
                    name='password'
                    label='Password' 
                    fullWidth
                    rules={{ 
                        required: 'Please enter a valid Password',
                    }}
                />
            </Box>
        </RHFForm>
    )
}