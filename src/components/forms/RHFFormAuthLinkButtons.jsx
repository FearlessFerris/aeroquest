// RHFFormAuthLinkButtons Component Implementation 


// Dependencies 
import Link from 'next/link';
import { Box, Button } from '@mui/material';


// Components & Necessary Files 
import RHFFormSubmitButton from './RHFFormSubmitButton';


//RHFFormAuthLinkButtons Component

const buttonSx = {
    position: 'relative',
    overflow: 'hidden',
    background: 'rgba(250, 250, 250, 0.06)',
    color: 'rgba(250,250,250,0.92)',
    border: '1px solid rgba(250, 250, 250, 0.14)',
    borderRadius: '0.75rem',
    boxShadow: '0 14px 28px rgba(0,0,0,0.45)',
    '& .MuiButton-startIcon': {
        marginRight: '0.55rem',
        marginLeft: 0,
        minWidth: '20px',
        display: 'inline-flex',
        alignItems: 'center',
    },
};

const linkButtonSx = {
  ...buttonSx,
  width: 'auto',
  minWidth: 'auto',
  borderRadius: '0.75rem',
  fontSize: '0.9rem',
  fontWeight: 700,
  letterSpacing: '0.01em',
  px: '0.9rem',
  py: '0.55rem',
  lineHeight: 1,
  textTransform: 'none',
  boxShadow: '0 12px 22px rgba(0,0,0,0.38)',
  background: 'rgba(250, 250, 250, 0.04)',
  '&:hover': {
    background: 'rgba(250, 250, 250, 0.06)',
    filter: 'brightness(1.05)',
  },
};

const linkButtonPrimarySx = {
  ...linkButtonSx,
  color: '#ab003c',
  border: '1px solid rgba(171, 0, 60, 0.35)',
  background: 'rgba(171, 0, 60, 0.06)',
  '&:hover': {
    background: 'rgba(171, 0, 60, 0.10)',
    border: '1px solid rgba(171, 0, 60, 0.50)',
    filter: 'brightness(1.06)',
  },
};

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
    variant="contained"
    sx={linkButtonSx}
  >
    Forgot password?
  </RHFFormSubmitButton>

  <RHFFormSubmitButton
    component={Link}
    href="/user/register"
    variant="contained"
    sx={linkButtonPrimarySx}
  >
    Create account
  </RHFFormSubmitButton>
</Box>

  );
}

