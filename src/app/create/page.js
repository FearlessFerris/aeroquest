'use client';
// Create Form Component Implementation 


// Dependencies 


// Components & Necessary Files 
import AuthShell from '@/components/layouts/shells/AuthShell';
import AuthHeroPanel from '@/components/layouts/shells/AuthHeroPanel';
import AuthRightPanelCreate from '@/components/layouts/shells/AuthRightPanelCreate';


// Create Form Component
export default function CreatePage() {


    return( 
           <AuthShell 
               left={<AuthHeroPanel />}
               right={<AuthRightPanelCreate />}
           />
       )
}