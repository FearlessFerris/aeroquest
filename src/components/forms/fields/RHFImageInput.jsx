'use client';
// RHFImageInput Component Implementation 


// Dependencies 
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


// Components & Necessary Files 
import RHFTextField from './RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';
import { isValidImageFile } from '@/lib/validators/isValidImageFile';
import { isValidImageUrl } from '@/lib/validators/isValidImageUrl';


// RHFImageInput Component
export default function RHFImageInput({ 
    urlName = 'imageUrl',
    fileName = 'imageFile',
    urlLabel = 'Profile Image URL (Optional)',
    fileLabel = 'Upload Image (Optional)',
    urlPlaceholder = 'https://example.com/profile.jpg',
    maxBytes = 2 * 1024 * 1024,
}){
    const {
        control,
        watch,
        setValue, 
        getValues
    } = useFormContext(); 

    const imageUrl = watch(urlName);
    const imageFile = watch(fileName);

    useEffect(() => { 
        if(imageUrl && imageFile){
            setValue(fileName, null, {shouldValidate: true, shouldDirty: true})
        }
    },[imageUrl])

    useEffect(() => { 
        if(imageFile && imageUrl){ 
            setValue(urlName, '', {shouldValidate: true, shouldDirty: true})
        }
    },[imageFile]);

    return( 
        <Box> 
            <RHFTextField  
                name={urlName}
                label={urlLabel}
                fullWidth
                placeholder={urlPlaceholder}
                sanitize={(v)=>v.trim()}
                rules={{ 
                    validate: (value)=> {
                        const file = getValues(fileName);
                        if(!value) return true;
                        if(file) return 'Please use either Image URL or Upload, not both';
                        return isValidImageUrl(value) || 'Enter a valid HTTPS image URL (jpg, png, webp, gif)'
                    },
                }}
            /> 
            <Controller 
                name={fileName}
                control={control}
                rules={{ 
                    validate: (file)=> { 
                        const url = getValues(urlName);
                        if(!file) return true;
                        if(url) return 'Please use either Upload or Image URL, not Both'
                        return isValidImageFile(file, {maxBytes});
                    }
                }}
                render={({field, fieldState})=> ( 
                    <Box> 
                        <RHFFormSubmitButton
                            component='label'
                            variant='contained'
                            startIcon={<ArrowUpwardIcon />}
                            sx={{ 
                                borderRadius: '.75rem',
                                justifySelf: 'center',
                                width: '16rem'
                            }}
                        >
                            {fileLabel}
                            <input 
                                hidden
                                type='file'
                                accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
                                onChange={(e) => {
                                    const nextFile = e.target.files?.[0] ?? null; 
                                    field.onChange(nextFile);
                                }}
                            />
                        </RHFFormSubmitButton>
                         <Typography 
                            sx={{ 
                                fontSize: '0.95rem', 
                                color: 'rgba(250,250,250,0.70)', 
                                textAlign: 'center' 
                            }}
                        >
                        {field.value?.name ? `Selected: ${field.value.name}` : 'No file selected'}
                        </Typography>
                        <Typography 
                            sx={{ 
                                minHeight: '1.25rem', 
                                fontSize: '0.9rem', 
                                textAlign: 'center', 
                                color: '#ab003c' 
                            }}
                        >
                        {fieldState.error?.message ?? ' '}
                        </Typography>
                    </Box>
                )}
            />
        </Box>
    )
    
}