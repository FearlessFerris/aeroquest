'use client';
// GitHub Sign In Form Component Implementation 


// Dependencies 
import GitHubIcon from '@mui/icons-material/GitHub';


// Components & Necessary Files 
import RHFFormSubmitButton from "./RHFFormSubmitButton";
import { githubSignIn } from "@/app/login/actions";
import HoverSwapIcon from "../ui/HoverSwapIcon";



// Google Sign In Component
export default function GitHubSignInForm(){ 

    return( 
        <form
            action={githubSignIn}
        > 
            <RHFFormSubmitButton
                type='submit'
                startIcon={
                    <HoverSwapIcon
                        size={20}
                        defaultIcon={
                            <GitHubIcon
                                sx={{
                                    color: 'rgba(250,250,250,0.88)',
                                    fontSize: '1.2rem',
                                }}
                            />
                        }
                        hoverIcon={
                            <GitHubIcon 
                                sx={{ 
                                    fontSize: '20px', 
                                    color: '#ffffff' 
                                }}
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