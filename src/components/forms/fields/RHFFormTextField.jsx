'use client';
// RHF TextField Component Implementation 


// Dependencies 
import { Box, Chip, TextField } from '@mui/material';
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
        formState: {
            errors, 
            touchedFields
        }} = useFormContext();
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

return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const errorMessage = showError ? (fieldError?.message ?? '') : '';
        const hasInlineErrorChip = Boolean(errorMessage);
        const chipLabel = showError
          ? fieldError?.type === 'required'
            ? 'Required'
            : 'Fix'
          : '';
        const chipSx = {
          height: '1.35rem',
          fontSize: '0.70rem',
          borderRadius: '0.6rem',
          background: 'rgba(171, 0, 60, 0.18)',
          color: '#fafafa',
          border: '1px solid rgba(171, 0, 60, 0.40)',
        };
        const leftErrorChip = hasInlineErrorChip ? (
          <Chip
            label={errorMessage}
            size="small"
            sx={{
              ...chipSx,
              background: 'rgba(171, 0, 60, 0.12)',
              border: '1px solid rgba(171, 0, 60, 0.32)',
              maxWidth: '15rem', 
              '& .MuiChip-label': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
            }}
            title={errorMessage}
          />
        ) : null;
        const rightStatusChip = showError ? (
          <Chip 
            label={chipLabel} 
            size="small" 
            sx={chipSx} 
            />
        ) : null;
        const endAdornment = showError ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              pr: '0.25rem',
              maxWidth: '100%',
            }}
          >
            {leftErrorChip}
            {rightStatusChip}
          </Box>
        ) : adornmentIcon ? (
          adornmentIcon
        ) : null;

        return (
          <TextField
            {...field}
            variant="outlined"
            fullWidth
            label={label}
            error={showError}
            helperText={showError ? '\u00A0' : (helperText ?? '\u00A0')}
            {...textFieldProps}
            sx={{
              '& .MuiFormHelperText-root': {
                marginTop: '0.5rem',
                marginBottom: 0,
                minHeight: '0.9rem',
                lineHeight: 1.1,
                fontSize: '0.75rem',
                textAlign: 'center',
              },
              ...textFieldProps?.sx,
            }}
            onChange={(e) => {
              const next = sanitize ? sanitize(e.target.value) : e.target.value;
              field.onChange(next);
            }}
            slotProps={{
              input: {
                notched: false, 
                endAdornment: endAdornment ? (
                  <InputAdornment position="end">{endAdornment}</InputAdornment>
                ) : null,
              },
            }}
          />
        );
      }}
    />
  );
}
