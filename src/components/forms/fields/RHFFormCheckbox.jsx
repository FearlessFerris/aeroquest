'use client';
// RHFForm Checkbox Component Implementation 


// Dependencies 
import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


// Components & Necessary Files 


// RHFForm Checkbox Component
export default function RHFFormCheckbox({
    name, 
    label, 
    rules, 
    checkboxProps = {}, 
    formControlLabelProps = {},
}){ 

    const { control } = useFormContext(); 

    return( 
            <Controller
                name={ name }
                control={control}
                rules={rules}
                render={({field}) => (
                    <FormControlLabel
                        label={label}
                        {...formControlLabelProps}
                        control={
                            <Checkbox 
                                {...checkboxProps}
                                checked={!!field.value}
                                onChange={(e)=> field.onChange(e.target.checked)}
                                slotProps={{
                                    input: {
                                        ref: field.ref
                                    }
                                }}
                            />
                        }
                    />
                )}
            /> 
    );
}