'use client';
// RHF TextField Component Implementation 


// Dependencies 
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';


// Components & Necessary Files 


// RHF TextField Component 
function getError(errors, name) {
  return name.split('.').reduce((acc, key) => acc?.[key], errors);
}

export default function RHFTextField({
    name,
    label, 
    rules, 
    helperText, 
    ...textFieldProps
}) {
    const {
        control, 
        watch,
        formState: {errors, touchFields}} = useFormContext();
    const fieldError = getError(errors, name);
    const showError = Boolean(fieldError);
    
    const value = watch(name);
    const isTouched = Boolean(touchFields?.[name]);

    return(
        <Controller
            control={control}
            name={name}
            label={label}
            rules={rules}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    // error={showError}
                    helperText={fieldError?.message ?? helperText ?? ' '}
                    {...textFieldProps}
                />
            )}
        />
    )
}
