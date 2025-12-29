'use client';
// RHFForm Example Component Implementation 


// Dependencies 
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFTextField from '../fields/RHFTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';


// RHFForm Example
export default function RHFFormExample() {
    const methods = useForm({ 
        defaultValues: { 
            username: 'Someone',
        },
        mode: 'onTouched',
    });

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
                <RHFFormSubmitButton>
                    Submit
                </RHFFormSubmitButton>
            </Box>
        </RHFForm>
    )
}