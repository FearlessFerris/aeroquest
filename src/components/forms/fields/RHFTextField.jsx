'use client';
// RHF TextField Component Implementation 


// Dependencies 
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


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
    const {control, formState: {errors}} = useFormContext();
    const fieldError = getError(errors, name);
    const showError = Boolean(fieldError);

    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    error={showError}
                    helperText={fieldError?.message ?? helperText ?? ' '}
                    {...textFieldProps}
                />
            )}
        />
    )
}