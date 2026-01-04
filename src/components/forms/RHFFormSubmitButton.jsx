'use client';
// RHFFormSubmitButton Component Implementation 


// Dependencies 
import { Button } from '@mui/material';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';


// Components & Necessary Files 


// RHFFormSubmitButton Component 
const MotionButton = motion(Button);


const RHFFormSubmitButton = forwardRef(function RHFFormSubmitButton(
    { children,
        sx,
        ...props
    },
    ref,
) {
    return (
        <MotionButton
            ref={ref}
            type="submit"
            variant="contained"
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.985, y: 0 }}
            transition={{ type: 'spring', stiffness: 520, damping: 34, mass: 0.55 }}
            sx={{
                ...sx,
            }}
            {...props}
        >
            {children}
        </MotionButton>
    );
})

export default RHFFormSubmitButton;