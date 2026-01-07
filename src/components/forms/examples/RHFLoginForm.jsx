// 'use client';
// // Login Form Component Implementation 


// // Dependencies 
// import { Box, Button, Checkbox, Divider, Typography } from '@mui/material';
// import LoginIcon from '@mui/icons-material/Login';
// import { useForm } from 'react-hook-form';
// import { AnimatePresence, motion } from 'framer-motion';


// // Components & Necessary Files 
// import RHFForm from "../RHFForm";
// import RHFFormTextField from "../fields/RHFFormTextField";
// import RHFFormSubmitButton from "../RHFFormSubmitButton";
// import RHFFormAuthLinkButtons from '../RHFFormAuthLinkButtons';
// import RHFFormCheckbox from '../fields/RHFFormCheckbox';
// import GoogleSignInForm from '../GoogleSignInForm';



// // Login Form Component
// const MotionText = motion.create(Typography);

// export default function RHFLoginForm() {

//     const methods = useForm({
//         mode: 'onTouched',
//         defaultValues: {
//             username: '',
//             password: '',
//             rememberMe: false,
//         },
//     });

//     const username = methods.watch('username');
//     const isUsernameValid = username.length >= 8;
//     const greetingKey = isUsernameValid ? `wb-${username}` : 'wb';
//     // const greeting = isUsernameValid ? ( 
//     //     <>
//     //         Welcome back,{' '}
//     //         <Box
//     //             component='span'
//     //             sx={{
//     //                 color: '#ab003c'
//     //             }}
//     //         > 
//     //         { username }
//     //         </Box>
//     //     </>
//     // ):(
//     //     'Welcome back'
//     // );

//     const onSubmit = async (data) => {
//         console.log('Submitted:', data);
//     }

//     return (
//         <RHFForm
//             methods={methods}
//             onSubmit={onSubmit}
//         >
//             <Box>
//                 <Box
//                     // sx={{
//                     //     minHeight: '2.5rem',
//                     // }}
//                 >
//                     {/* <Box 
//                         // sx={{ 
//                         //     minHeight: '.5rem', 
//                         //     display: 'grid', 
//                         //     placeItems: 'center',
//                         // }}
//                     >
//                         <AnimatePresence 
//                             mode="wait">
//                             <MotionText
//                                 key={greetingKey}
//                                 initial={{ opacity: 0, filter: 'blur(6px)' }}
//                                 animate={{ opacity: 1, filter: 'blur(0px)' }}
//                                 exit={{ opacity: 0, filter: 'blur(6px)' }}
//                                 transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
//                                 sx={{
//                                     color: 'rgba(250,250,250,0.82)',
//                                     fontSize: '1.3rem',
//                                     fontWeight: 600,
//                                     marginBottom: '2rem',
//                                 }}
//                             >
//                                 {/* {greeting} */}
//                             {/* </MotionText>
//                         </AnimatePresence>
//                     </Box>  */}
//                 </Box>
//                 <RHFFormTextField
//                     name='username'
//                     label='Username'
//                     fullWidth
//                     rules={{
//                         required: 'Please enter a valid Username',
//                         minLength: { value: 8, message: 'Minimum 8 characters' },
//                         maxLength: { value: 23, message: 'Maximum 23 characters' },
//                         pattern: {
//                             value: /^[a-zA-Z0-9_]+$/,
//                             message: 'Only letters, numbers, and underscores',
//                         },
//                     }}
//                     sanitize={(value) =>
//                         value
//                             .replace(/\s+/g, '')
//                             .replace(/[^a-zA-Z0-9_]/g, '')
//                             .slice(0, 23)
//                     }           
//                 />
//                 <RHFFormTextField
//                     name='password'
//                     label='Password'
//                     fullWidth
//                     rules={{
//                         required: 'Please enter a valid Password',
//                         minLength: { value: 8, message: 'Minimum 8 characters' },
//                         validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
//                     }}
//                     type='password'
//                     // sx={{
//                     //     alignItems: 'center'
//                     // }}
//                 />
//                 <Box> 
//                     <RHFFormCheckbox
//                         name='rememberMe'
//                         label='Remember Me'
//                     />
//                 </Box>
//                 <RHFFormAuthLinkButtons />
//                 <Box
//                     sx={{
//                         marginTop: '3rem'
//                     }}
//                 >
//                     <RHFFormSubmitButton
//                         variant='contained'
//                         startIcon={<LoginIcon />}
//                         // sx={{
//                         //     fontSize: '1rem',
//                         //     width: '23rem'
//                         // }}
//                     >
//                         Login
//                     </RHFFormSubmitButton>
//                 </Box>
//             </Box>
//         </RHFForm>
//     )
// }

'use client';

import { Box, Divider, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from 'react-hook-form';

import RHFForm from '../RHFForm';
import RHFFormTextField from '../fields/RHFFormTextField';
import RHFFormSubmitButton from '../RHFFormSubmitButton';
import RHFFormAuthLinkButtons from '../RHFFormAuthLinkButtons';
import RHFFormCheckbox from '../fields/RHFFormCheckbox';

import GoogleSignInForm from '../GoogleSignInForm';
import GitHubSignInForm from '../GitHubSignInForm';

export default function RHFLoginForm() {
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    console.log('Submitted:', data);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
      {/* ✅ Only ONE form here */}
      <RHFForm methods={methods} onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
          <RHFFormTextField
            name="username"
            label="Username"
            rules={{
              required: 'Please enter a valid Username',
              minLength: { value: 8, message: 'Minimum 8 characters' },
              maxLength: { value: 23, message: 'Maximum 23 characters' },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: 'Only letters, numbers, and underscores',
              },
            }}
            sanitize={(value) =>
              value
                .replace(/\s+/g, '')
                .replace(/[^a-zA-Z0-9_]/g, '')
                .slice(0, 23)
            }
          />

          <RHFFormTextField
            name="password"
            label="Password"
            type="password"
            rules={{
              required: 'Please enter a valid Password',
              minLength: { value: 8, message: 'Minimum 8 characters' },
              validate: (v) => (!/\s/.test(v) ? true : 'No spaces allowed'),
            }}
          />

          <RHFFormCheckbox name="rememberMe" label="Remember Me" />

          <RHFFormAuthLinkButtons />

          <RHFFormSubmitButton startIcon={<LoginIcon />}>
            Login
          </RHFFormSubmitButton>
        </Box>
      </RHFForm>

      <Box sx={{ pt: '0.35rem' }}>
        <Divider sx={{ mb: '0.9rem' }}>
          <Typography sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
            OR
          </Typography>
        </Divider>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <GoogleSignInForm />
          <GitHubSignInForm />
        </Box>
      </Box>
    </Box>
  );
}
