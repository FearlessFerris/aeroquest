'use client';
// RHFForm Example Component Implementation 


// Dependencies 
import { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';
import RHFImageInput from '../fields/RHFImageInput';



// RHFCreateForm Component
export default function RHFCreateForm() {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      imageUrl: '',
      imageFile: null, 
    },
  });

  const { getValues } = methods; 
  
  const refreshForm = () => { 
    methods.reset(); 
  }

  const onSubmit = async (data) => {
    console.log('Submitted:', data);
    methods.reset(); 
  };

  return (
    <RHFForm 
        methods={methods} 
        onSubmit={onSubmit}
        >
      <Box>
        <Button
            onClick={refreshForm}
        > 
            Refresh
        </Button>
        <RHFTextField
          name="username"
          label="Username"
          fullWidth
          placeholder="JavarisJamarJavarisonLamar"
          rules={{
            required: 'Username is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
            maxLength: { value: 30, message: 'Maximum 30 characters' },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: 'Only letters, numbers, and underscores',
            },
          }}
          sanitize={(value) =>
            value
              .replace(/\s+/g, '')
              .replace(/[^a-zA-Z0-9_]/g, '')
              .slice(0, 30)
          }
        />
        <RHFTextField
          name="password"
          label="Password"
          fullWidth
          placeholder="...not password123"
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
            validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
          }}
          type="password"
        />
        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          fullWidth
          placeholder="Just like the last one ⬆"
          rules={{
            required: 'Confirm Password is required',
            validate: (value) => value === getValues('password') || 'Passwords do not match',
          }}
          type="password"
        />
        <RHFTextField
          name="email"
          label="Email"
          fullWidth
          placeholder="name@example.com"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          }}
        />
        <RHFImageInput />
        <Box 
            sx={{ 
                margin: '3rem' 
            }}
        >
          <RHFFormSubmitButton
            variant="contained"
            sx={{
              fontSize: '1rem',
              width: '14rem',
            }}
          >
            Create
          </RHFFormSubmitButton>
        </Box>
      </Box>
    </RHFForm>
  );
}
