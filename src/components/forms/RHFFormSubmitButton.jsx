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
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(250, 250, 250, 0.06)',
                color: 'rgba(250,250,250,0.92)',
                border: '1px solid rgba(250, 250, 250, 0.14)',
                borderRadius: '.75rem',
                boxShadow: '0 14px 28px rgba(0,0,0,0.45)',

                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '0rem',
                    height: '100%',
                    background: '#ab003c',
                    transform: 'translateX(-120%)',
                    transition: 'transform 180ms cubic-bezier(0.22,1,0.36,1)',
                },

                '&:hover::before': {
                    transform: 'translateX(0)',
                },

                '&:active::before': {
                    width: '.5rem',
                },
                ...sx,
            }}
            {...props}
        >
            {children}
        </MotionButton>
    );
})

export default RHFFormSubmitButton;