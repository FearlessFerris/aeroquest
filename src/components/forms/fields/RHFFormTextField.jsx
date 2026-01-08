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

  const errorMessage = showError ? (fieldError?.message ?? '') : '';
  const hasInlineErrorChip = Boolean(errorMessage);

  const statusLabel = showError
    ? (fieldError?.type === 'required' ? 'Required' : 'Fix')
    : '';

  const adornmentIcon = showSuccess ? (
    <CheckCircleRoundedIcon
      sx={{
        color: 'rgba(245, 206, 138, 1)',
        fontSize: '1.5rem',
      }}
    />
  ) : showError ? (
    <ErrorRoundedIcon
      sx={{
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '1.5rem',
      }}
    />
  ) : null;

  const chipBaseSx = {
    height: '1.35rem',
    fontSize: '.9rem',
    borderRadius: '0.6rem',
    background: 'rgba(0, 0, 0, 1)',
    color: 'rgba(250,250,250,0.92)',
    border: '.1rem solid rgba(255, 255, 255, 1)',
    fontWeight: 500,
  };

  return (
    <Controller
      control = {control}
      name = {name}
      rules = {rules}
      render = {({ field }) => {
        return (
          <Box sx={{ display: 'grid', gap: '0.1rem' }}>
            <TextField
              {...field}
              variant = "outlined"
              fullWidth
              label = {label}
              error = {showError}
              // keep the helperText slot stable, but don't use it for chips anymore
              helperText = {showError ? '\u00A0' : (helperText ?? '\u00A0')}
              {...textFieldProps}
              onChange = {(e) => {
                const next = sanitize ? sanitize(e.target.value) : e.target.value;
                field.onChange(next);
              }}
              slotProps = {{
                input: {
                  endAdornment: adornmentIcon ? (
                    <InputAdornment position = "end">
                      {adornmentIcon}
                    </InputAdornment>
                  ) : null,
                },
              }}
            />

            {/* Pills BELOW the input */}
            {/* Pills BELOW the input (RIGHT-ALIGNED, NO GAPS) */}
<Box
  sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: '1.35rem', // keeps layout stable
    mt: '-0.15rem',       // optional: pulls pills closer to field
    opacity: showError ? 1 : 0,
    transform: showError ? 'translateY(-1.2rem)' : 'translateY(-2px)',
    transition: 'opacity 140ms ease, transform 140ms ease',
    pointerEvents: showError ? 'auto' : 'none',
  }}
>
  <Box
    sx={{
      display: 'flex',
      gap: '0.2rem',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
    }}
  >
    {showError && hasInlineErrorChip ? (
      <Chip
        label = {errorMessage}
        size = "small"
        sx={{
          ...chipBaseSx,
          maxWidth: '18rem',
          '& .MuiChip-label': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        }}
        title = {errorMessage}
      />
    ) : null}

    {showError ? (
      <Chip
        label = {statusLabel}
        size = "small"
        sx={chipBaseSx}
      />
    ) : null}
  </Box>
</Box>

          </Box>
        );
      }}
    />
  );
}