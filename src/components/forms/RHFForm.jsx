'use client';
// RHF Form Component Implementation 


// Dependencies 
import { Box, Paper } from '@mui/material';
import { FormProvider } from 'react-hook-form';


// Components & Necessary Files 


// RHF Form Component
export default function RHFForm({
    methods,
    onSubmit,
    children, 
    ...boxProps
}) {

    return(
        <FormProvider
            {...methods}
        >
            <Box
                component='form'
                noValidate
                onSubmit={methods.handleSubmit(onSubmit)}
                {...boxProps}
                sx={{
                    padding: '1rem'
                }}
            > 
                {children}
            </Box>
        </FormProvider>
    );
}

