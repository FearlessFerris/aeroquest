'use client';


// RHFFormTextField Component Implementation 


// Dependencies 
import { Box, Chip, TextField, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';


// Components & Necessary Files 


// RHFFormTextField Component
function getError(errors, name) {
  return name.split('.').reduce((acc, key) => acc?.[key], errors);
}

export default function RHFFormTextField({
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
    formState: { errors, touchedFields },
  } = useFormContext();

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
            color: 'rgba(245, 206, 138, 1)', 
            fontSize: '1.5rem' 
        }} />
  ) : showError ? (
    <ErrorRoundedIcon 
        sx={{ 
            color: 'rgba(255, 255, 255, 1)', 
            fontSize: '1.5rem' 
        }} />
  ) : null;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        const errorMessage = showError ? (fieldError?.message ?? '') : '';
        const hasInlineErrorChip = Boolean(errorMessage);
        const chipSx = {
          height: '1.35rem',
          fontSize: '.9rem',
          borderRadius: '0.6rem',
          background: 'rgba(0, 0, 0, 1)',
          color: 'rgba(250,250,250,0.92)',
          border: '.1rem solid rgba(255, 255, 255, 1)',
          fontWeight: 500,
        };
        const leftErrorChip = hasInlineErrorChip ? (
          <Chip
            label={errorMessage}
            size="small"
            sx={{
              ...chipSx,
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
            label={fieldError?.type === 'required' ? 'Required' : 'Fix'}
            size="small"
            sx={chipSx}
          />
        ) : null;
        const endAdornment = showError ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', pr: '0.25rem' }}>
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
            onChange={(e) => {
              const next = sanitize ? sanitize(e.target.value) : e.target.value;
              field.onChange(next);
            }}
            slotProps={{
              input: {
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


