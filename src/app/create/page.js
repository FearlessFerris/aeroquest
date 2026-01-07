// Create Form Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material';


// Components & Necessary Files 
import RHFCreateForm from "@/components/forms/examples/RHFCreateForm";
import MotionBox from '@/components/motion/MotionBox';


// Create Form Component
export default function CreatePage() {


    return (
        <Box
            sx={{
                display: 'grid',
                minHeight: '100vh',
                placeItems: 'center',
                textAlign: 'center'
            }}
        >
            <MotionBox>
                <Box
                    sx={{
                        width: 'min(35rem, 92vw)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        p: '2rem',
                        borderRadius: '1rem',
                        // background: 'rgba(18, 19, 22, 1)',
                        // // backdropFilter: 'blur(14px)',
                        // border: '1px solid rgba(255,255,255,0.10)',
                    }}
                >
                    <Typography
                        variant='h4'
                    >
                        Aeroquest
                    </Typography>
                    <Typography
                        variant='h1'
                        sx={{
                            fontWeight: '600',
                            margin: '2rem'
                        }}
                    >
                        Sign Up
                    </Typography>
                    <RHFCreateForm />
                </Box>
            </MotionBox>
        </Box>
    )
}