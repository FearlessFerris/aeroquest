// RHFForm Image Field Component Implementation 


// Dependencies 
import { Controller, useFormContext } from 'react-hook-form';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';


// Components & Necessary Files 


// RHFFormImageField Component
export default function RHFFormImageField({
    name, 
    label, 
    rules, 
    helperText, 
    sanitize, 
    ...textFieldProps
}){
    const {
        control, 
        watch,
        formState: {errors, touchedFields},
    } = useFormContext(); 

    // Remember: 'touched' - did the user interact with and blur the field at least once? 
    const isTouched = Boolean(touchedFields?.[name]); 

    // Error Message for Field
    const fieldError = errors?.[name];
    const errorMessage = fieldError?.message; 

    // Value: Remember that 'watch' lets you reactively read it
    const value = watch(name);
    const isFilled = String(value ?? '').trim().length > 0; 

    // Decide what icon to show
    const showError = isTouched && Boolean(errorMessage);
    const showSuccess = isTouched && isFilled && !showError;
    const endAdornment = showSuccess ? ( 
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
                fontSize: '1.2rem'
            }}
        />
    ):null;

    return( 
        <Box> 
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field})=>(
                    <TextField
                        {...field}
                        label={label}
                        error={showError}
                        helperText={fieldError?.message ?? helperText ?? ' '}
                        {...textFieldProps}
                        onChange={(e)=>{
                            const next = sanitize ? sanitize(e.target.value) : e.target.value;
                            field.onChange(next);
                        }}
                        slotProps={{
                            input: { 
                                endAdornment: endAdornment ? ( 
                                    <InputAdornment
                                        position='end'
                                    >
                                    {endAdornment}
                                    </InputAdornment>
                                ):undefined,
                            }
                        }}
                    />
                )}
            /> 
        </Box>
    )
}