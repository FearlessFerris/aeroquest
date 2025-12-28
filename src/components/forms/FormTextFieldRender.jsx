// Form Text Field Render Component Implementation 


// Dependencies 
import { Box, TextField, Typography } from '@mui/material';


// Components & Necessary Files 


// Form Text Field Render 
export default function FormTextFieldRender({ label, type, field }) { 

    const capitalFirst = (label) => label.charAt( 0 ).toUpperCase() + label.slice( 1 );

    return( 
        <TextField
            label={ capitalFirst( label ) } 
            type={ type }
              
        /> 
    )
}