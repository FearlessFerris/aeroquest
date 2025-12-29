'use client';
// RHFFormSubmitButton Component Implementation 


// Dependencies 
import { Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';


// Components & Necessary Files 


// RHFFormSubmitButton Component 
export default function RHFFormSubmitButton({ 
    children, 
    ...props
}) {
    const { formState: { isSubmitting } } = useFormContext(); 

    return( 
        <Button
            disabled={isSubmitting}
            type='submit'
            {...props}
        >
            {isSubmitting ? 'Submitting...' : children}
        </Button>
    )
}