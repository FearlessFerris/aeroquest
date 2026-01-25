'use server';
// Login Actions Implementation


// Dependencies 



// Components & Necessary Files 
import { signIn } from '@/lib/auth';



// Login Actions 
export async function googleSignIn() {
  await signIn('google', { redirectTo: '/' });
}

export async function githubSignIn() {
  await signIn('github', { redirectTo: '/' });
}

