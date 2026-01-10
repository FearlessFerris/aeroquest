'use client';


// Login Form Component Implementation 


// Dependencies 
import { Box, Divider, IconButton, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useForm, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";




// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFFormTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';
import RHFFormAuthLinkButtons from '../RHFFormAuthLinkButtons';
import RHFFormCheckbox from '../fields/RHFFormCheckbox';
import GoogleSignInForm from '../GoogleSignInForm';
import GitHubSignInForm from '../GitHubSignInForm';




// Login Form Component
export default function RHFLoginForm({
  onRegisterReset, 
  onSetEmailPreview,
}) {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  const router = useRouter();
  const { handleSubmit, control, getValues, reset, formState } = methods; 
  const email = useWatch({control, name: 'email'})

  useEffect(() => { 
    if(!onSetEmailPreview) return;
    onSetEmailPreview(email?.trim() || '');
  },[email, onSetEmailPreview]);

  useEffect(() => { 
    if(!onRegisterReset) return; 
    onRegisterReset(() => reset );
  },[onRegisterReset, reset]);

  const onSubmit = async (data) => {
    console.log('Logging in User:', data);

    const res = await signIn("credentials", {
  email: data.email,
  password: data.password,
  redirectTo: '/'
});

console.log("signIn result:", res);

  if (res?.ok) {
    router.push(res.url ?? "/");
    router.refresh(); // important for server components to re-read cookies/session
    return;
  }

  // res?.error will be set on failure
  console.error(res?.error ?? "Login failed");

  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.2rem' 
      }}
    >
      <RHFForm 
        methods={methods} 
        onSubmit={onSubmit}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem' 
          }}
        >
          <RHFFormTextField
            name="email"
            label="Email"
            placeholder='Email'
            rules={{
              required: 'Please enter a valid Email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            }}
             sanitize={(value) =>
              value.replace(/\s+/g, '').toLowerCase()
            }
          />
          <RHFFormTextField
            name="password"
            label="Password"
            placeholder='Password'
            type="password"
            rules={{
              required: 'Please enter a valid Password',
              minLength: { value: 8, message: 'Minimum 8 characters' },
              validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
            }}
          />
          <RHFFormCheckbox 
            name="rememberMe" 
            label="Remember Me" 
          />
          <RHFFormAuthLinkButtons />
          <RHFFormSubmitButton 
            startIcon={<LoginIcon />}
          >
            Login
          </RHFFormSubmitButton>
        </Box>
      </RHFForm>
      <Box 
        sx={{ 
          pt: '0.35rem' 
        }}
      >
        <Divider 
          sx={{ 
            mb: '0.9rem' 
          }}
        >
          <Typography 
            sx={{ 
              fontSize: '0.85rem', 
              opacity: 0.7 
            }}
          >
            OR
          </Typography>
        </Divider>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.85rem' 
          }}
        >
          <GoogleSignInForm />
          <GitHubSignInForm />
        </Box>
      </Box>
    </Box>
  );
}
