'use client';
// Login Form Component Implementation 


// Dependencies 


// Components & Necessary Files
import AuthShell from '@/components/layouts/shells/AuthShell';
import AuthHeroPanel from '@/components/layouts/shells/AuthHeroPanel';
import AuthRightPanel from '@/components/layouts/shells/AuthRightPanelLogin';


// Login Component
export default function LoginPage() {
    

    return( 
        <AuthShell 
            left={<AuthHeroPanel />}
            right={<AuthRightPanel />}
        />
    )
}
