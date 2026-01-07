'use client';


// RHFFormSubmitButton Component Implementation 


// Dependencies 
import { Button } from '@mui/material';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';


// Components & Necessary Files 


// RHFFormSubmitButton Component
const MotionButton = motion.create(Button);

const RHFFormSubmitButton = forwardRef(function RHFFormSubmitButton({
    children,
    sx,
    type = 'submit',
    variant = 'outlined',
    ...props },
    ref
) {
    return (
        <MotionButton
            ref={ref}
            type={type}
            variant={variant}
            whileHover={{
                y: -6,
                scale: 1,
            }}
            whileTap={{
                scale: 1.1,
                y: 0
            }}
            transition={{
                type: 'spring',
                stiffness: 900,
                damping: 38,
                mass: .2,
            }}
            sx={{
                fontWeight: 600,
                ...sx,
            }}
            {...props}
        >
            {children}
        </MotionButton>
    );
});

export default RHFFormSubmitButton;