'use client';
// Form Render Component Implementation 


// Dependencies 
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';


// Components & Necessary Files 
import FormTextFieldRender from './FormTextFieldRender';


// Form Render
export default function FormRender() { 

    const { 
        control, 
        handleSubmit, 
        formState:{ errors, isSubmitting },
        } = useForm({ 
            defaultValues: {
        username: 'Someone'
    }})


    return( 
        <Box
            component='form'
        > 
            <Controller
          name="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              autoComplete="current-password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message ?? ' '}
              fullWidth
            />
          )}
        />
            <FormTextFieldRender label='username'/>
        </Box>
    )
}