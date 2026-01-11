// src/app/(app)/dashboard/page.js
import { auth } from '@/lib/auth';
import DashboardView from '@/components/dashboard/DashboardView';

export default async function DashboardPage() {
  const session = await auth();
  return <DashboardView user = {session?.user} />;
}
