import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

import AppTopBar from '@/components/layouts/AppTopBar';
import AppCenterContainer from '@/components/layouts/AppCenterContainer';

export default async function AppLayout({ children }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/user/login');
  }

  return (
    <>
      <AppTopBar user = { session.user } />
      <AppCenterContainer>
        {children}
      </AppCenterContainer>
    </>
  );
}
