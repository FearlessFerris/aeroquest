'use client';
// RHFForm Example Component Implementation 


// Dependencies 
import { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';


// Components & Necessary Files 
import RHFForm from '../RHFForm';
import RHFTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';


// RHFForm Example
// export default function RHFCreateForm() {

//     const methods = useForm({ 
//         mode: 'onTouched',
//         defaultValues: { 
//             username: '',
//             password: '', 
//             confirmPassword: '', 
//             email: '', 
//         }
//     });


//     const onSubmit = async (data) => {
//         console.log('Submitted:', data);
//     }

//     return(
//         <RHFForm
//             methods={methods}
//             onSubmit={onSubmit}
//         >
//             <Box>
//                 <RHFTextField
//                     name='username'
//                     label='Username'
//                     fullWidth
//                     placeholder='JavarisJamarJavarisonLamar'
//                     rules={{
//                         required: 'Username is required',
//                         minLength: {value: 8, message: 'Minimum 8 Characters'},
//                         maxLength: {value: 30, message: 'Minimum 30 Characters'},
//                         pattern: {
//                             value: /^[a-zA-Z0-9_]+$/,
//                             message: 'Only letters, numbers, and underscores',
//                         },
//                     }}
//                     sanitize={(value) =>
//                         value
//                             .replace(/\s+/g, '')
//                             .replace(/[^a-zA-Z0-9_]/g, '')
//                             .slice(0, 30)
//                     }
//                 />
//                 <RHFTextField 
//                     name='password'
//                     label='Password'
//                     fullWidth
//                     placeholder='...not password123'
//                     rules={{
//                         required: 'Password is required',
//                         minLength: { value: 8, message: 'Minimum 8 Characters'},
//                         validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
//                     }}
//                     type='password'
//                 /> 
//                 <RHFTextField 
//                     name='confirmPassword'
//                     label='Confirm Password'
//                     fullWidth 
//                     placeholder='Just like the last one ⬆'
//                     rules={{ 
//                         required: 'Confirm Password is required',
//                         validate: (value) => 
//                             value === methods.getValues('password') || 'Passwords do not match'
//                     }}
//                     type='password'
//                 />
//                 <RHFTextField
//                     name='email'
//                     label='Email'
//                     fullWidth
//                     rules={{ 
//                         required: 'Email is required',
//                         pattern: {
//                             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                             message: 'Enter a valid email address',
//                         },
//                     }}
//                 />
//                 <Box
//                     sx={{ 
//                         marginTop: '3rem'
//                     }}
//                 > 
//                     <RHFFormSubmitButton
//                         variant='contained'
//                         sx={{
//                             fontSize: '1rem',
//                             width: '14rem'
//                         }}
//                     >
//                     Create
//                     </RHFFormSubmitButton>
//                 </Box>
//             </Box>
//         </RHFForm>
//     )
// }

export default function RHFCreateForm() {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      imageUrl: '',
      imageFile: null, // File | null
    },
  });

  const { setValue, watch, getValues, control } = methods;

  const imageUrl = watch('imageUrl');
  const imageFile = watch('imageFile');

  // UX rule: if user types a URL, clear the file
  useEffect(() => {
    if (imageUrl && imageFile) {
      setValue('imageFile', null, { shouldValidate: true, shouldDirty: true });
    }
  }, [imageUrl]); // intentionally not depending on imageFile, we only react to URL changes

  const onSubmit = async (data) => {
    console.log('Submitted:', data);
    // data.imageFile will be File|null
    // data.imageUrl will be string
  };

  return (
    <RHFForm methods={methods} onSubmit={onSubmit}>
      <Box>
        <RHFTextField
          name="username"
          label="Username"
          fullWidth
          placeholder="JavarisJamarJavarisonLamar"
          rules={{
            required: 'Username is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
            maxLength: { value: 30, message: 'Maximum 30 characters' },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: 'Only letters, numbers, and underscores',
            },
          }}
          sanitize={(value) =>
            value
              .replace(/\s+/g, '')
              .replace(/[^a-zA-Z0-9_]/g, '')
              .slice(0, 30)
          }
        />

        <RHFTextField
          name="password"
          label="Password"
          fullWidth
          placeholder="...not password123"
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
            validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
          }}
          type="password"
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          fullWidth
          placeholder="Just like the last one ⬆"
          rules={{
            required: 'Confirm Password is required',
            validate: (value) => value === getValues('password') || 'Passwords do not match',
          }}
          type="password"
        />

        <RHFTextField
          name="email"
          label="Email"
          fullWidth
          placeholder="name@example.com"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          }}
        />

        {/* Optional image URL */}
        <RHFTextField
          name="imageUrl"
          label="Profile Image URL (Optional)"
          fullWidth
          placeholder="https://example.com/photo.png"
          rules={{
            validate: (v) => {
              const file = getValues('imageFile');

              // allow empty
              if (!v) return true;

              // mutual exclusivity safety net
              if (file) return 'Please use either Image URL or Upload, not both';

              // validate url format
              if (!isValidUrl(v)) return 'Please enter a valid URL (include https://)';

              return true;
            },
          }}
          sanitize={(v) => v.trim()}
        />

        {/* Optional upload (mutually exclusive with URL) */}
        <Controller
          name="imageFile"
          control={control}
          rules={{
            validate: (file) => {
              const url = getValues('imageUrl');

              // allow empty
              if (!file) return true;

              // mutual exclusivity safety net
              if (url) return 'Please use either Upload or Image URL, not both';

              // optional: basic file type check
              const okTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
              if (!okTypes.includes(file.type)) return 'Upload a PNG, JPG, WEBP, or GIF';

              // optional: size check (2MB example)
              const maxBytes = 2 * 1024 * 1024;
              if (file.size > maxBytes) return 'Max file size is 2MB';

              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <Box sx={{ mt: '0.75rem', display: 'grid', gap: '0.5rem' }}>
              <RHFFormSubmitButton
                component="label"
                variant="contained"
                startIcon={<ArrowUpwardIcon />}
                sx={{
                  width: '14rem',
                  justifySelf: 'center',
                  borderRadius: '0.75rem',
                }}
                onClick={() => {
                  // If user chooses upload, clear URL right away (best UX)
                  if (getValues('imageUrl')) {
                    setValue('imageUrl', '', { shouldValidate: true, shouldDirty: true });
                  }
                }}
              >
                Upload Image (Optional)
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const nextFile = e.target.files?.[0] ?? null;
                    field.onChange(nextFile);
                  }}
                />
              </RHFFormSubmitButton>

              {/* Show filename + error */}
              <Typography sx={{ fontSize: '0.95rem', color: 'rgba(250,250,250,0.70)', textAlign: 'center' }}>
                {field.value?.name ? `Selected: ${field.value.name}` : 'No file selected'}
              </Typography>

              <Typography sx={{ minHeight: '1.25rem', fontSize: '0.9rem', textAlign: 'center', color: '#ab003c' }}>
                {fieldState.error?.message ?? ' '}
              </Typography>
            </Box>
          )}
        />

        <Box sx={{ marginTop: '3rem' }}>
          <RHFFormSubmitButton
            variant="contained"
            sx={{
              fontSize: '1rem',
              width: '14rem',
            }}
          >
            Create
          </RHFFormSubmitButton>
        </Box>
      </Box>
    </RHFForm>
  );
}
