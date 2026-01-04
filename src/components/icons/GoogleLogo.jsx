'use client';
// Google Logo Icon Component Implementation 


// Dependencies 
import { Box } from '@mui/material';


// Components & Necessary Files 


// Google Logo Icon Component 
export default function GoogleLogo({ size = 20, sx = {} }) {
    return (
        <Box
            component="span"
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                display: 'inline-grid',
                placeItems: 'center',
                ...sx,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
            >
                <path
                    fill="#EA4335"
                    d="M24 9.5c3.3 0 6.3 1.2 8.6 3.2l6.4-6.4C35 2.7 29.8 0 24 0 14.6 0 6.4 5.4 2.4 13.3l7.6 5.9C12 13.3 17.6 9.5 24 9.5z"
                />
                <path
                    fill="#4285F4"
                    d="M46.1 24.5c0-1.6-.1-2.7-.4-4H24v8.2h12.7c-.3 2-1.9 5-5.1 7l7.8 6.1c4.6-4.3 6.7-10.5 6.7-17.3z"
                />
                <path
                    fill="#FBBC05"
                    d="M10 28.3c-.5-1.4-.8-2.8-.8-4.3s.3-2.9.7-4.3l-7.6-5.9C.8 16.9 0 20.3 0 24s.8 7.1 2.3 10.2l7.7-5.9z"
                />
                <path
                    fill="#34A853"
                    d="M24 48c5.8 0 10.7-1.9 14.3-5.2l-7.8-6.1c-2.1 1.5-4.8 2.5-8.5 2.5-6.4 0-12-3.8-14-9.2l-7.7 5.9C6.4 42.6 14.6 48 24 48z"
                />
            </svg>
        </Box>
    );
}