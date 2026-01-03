// Create Form Component Implementation 


// Dependencies 
import { Box, Typography } from '@mui/material';


// Components & Necessary Files 
import RHFCreateForm from "@/components/forms/examples/RHFCreateForm";


// Create Form Component
export default function CreatePage(){ 


    return( 
        <Box
            sx={{
                display: 'grid',
                minHeight: '100vh',
                placeItems: 'center',
                textAlign: 'center'
            }}
        > 
            <Box
                sx={{
                    width: 'min(32rem, 92vw)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    p: '2rem',
                    borderRadius: '1rem',
                    background: 'rgba(2, 10, 12, 0.90)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.10)',
                }}
            > 
                <Typography
                    variant='h4'
                > 
                Aeroquest
                </Typography>
                    <Typography
                        variant='h3'
                        sx={{
                            fontWeight: '700',
                            margin: '2rem'
                        }}
                    >
                        Sign Up
                    </Typography>
                <RHFCreateForm />
            </Box>
        </Box>
    )
}