'use client';
// Google Sign In Form Component Implementation 


// Dependencies 
import GoogleIcon from '@mui/icons-material/Google';


// Components & Necessary Files 
import RHFFormSubmitButton from "./RHFFormSubmitButton";
import { googleSignIn } from "@/app/login/actions";
import HoverSwapIcon from "../ui/HoverSwapIcon";
import GoogleLogo from '../icons/GoogleLogo';



// Google Sign In Component
export default function GoogleSignInForm(){ 

    return( 
        <form
            action={googleSignIn}
        > 
            <RHFFormSubmitButton
                type='submit'
                startIcon={
                    <HoverSwapIcon
                        size={20}
                        defaultIcon={
                            <GoogleIcon
                                sx={{
                                    color: 'rgba(250,250,250,0.88)',
                                    fontSize: '1.2rem',
                                }}
                            />
                        }
                        hoverIcon={
                            <GoogleLogo 
                                size={20}
                            />
                        }
                    />
                }
                sx={{
                    fontSize: '1rem',
                    width: '23rem'
                }}
            > 
            Sign in with Google
            </RHFFormSubmitButton>
        </form>
    )
}