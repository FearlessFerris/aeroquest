// RHFFormAuthLinkButtons Component Implementation 


// Dependencies 
import Link from 'next/link';
import { Box } from '@mui/material';


// Components & Necessary Files 
import RHFFormSubmitButton from './RHFFormSubmitButton';


//RHFFormAuthLinkButtons Component
export default function RHFFormAuthLinkButtons() {
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '1.1rem',
        mt: '0.25rem',
        mb: '0.6rem',
      }}
    >
      <RHFFormSubmitButton
        component={Link}
        href="/user/forgot-password"
        variant="outlined"
        sx={{ 
          width: '11rem'
        }}
      >
        Forgot password?
      </RHFFormSubmitButton>
      <RHFFormSubmitButton
        component={Link}
        href="/user/register"
        variant="outlined"
        sx={{ 
          width: '11rem'
        }}
      >
        Create account
      </RHFFormSubmitButton>
    </Box>
  );
}

