'use client';
// RHF TextField Component Implementation 


// Dependencies 
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
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
    sanitize, 
    ...textFieldProps
}) {
    const {
        control, 
        watch,
        formState: {errors, touchedFields}} = useFormContext();
    const fieldError = getError(errors, name);
    const value = watch(name);
    const isTouched = Boolean(touchedFields?.[name]);
    const hasError = Boolean(fieldError);
    const isFilled = String(value ?? '').length > 0;
    const showSuccess = isTouched && isFilled && !hasError;
    const showError = isTouched && hasError;
    const adornmentIcon = showSuccess ? ( 
        <CheckCircleRoundedIcon 
            sx={{ 
                color: '#fafafa',
                fontSize: '1.2rem'
            }}
        />
    ):showError ? (
        <ErrorRoundedIcon 
            sx={{
                color: '#ab003c',
                fontSize: '1.25rem'
            }}
        />
    ):null;

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
                    onChange={(e) => {
                        const next = sanitize ? sanitize(e.target.value) : e.target.value;
                        field.onChange(next);
                    }}
                    slotProps={{
                        input: {
                            endAdornment: adornmentIcon ? (
                                <InputAdornment position="end">{adornmentIcon}</InputAdornment>
                            ) : null,
                        }
                    }}
                />
            )}
        />
    )
}
