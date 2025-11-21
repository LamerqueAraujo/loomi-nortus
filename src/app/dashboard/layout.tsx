import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import SidebarClient from '@/components/layout/SidebarClient'

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    redirect('/login')
  }

  return (
    <div className="flex bg-[#0B1125] min-h-screen text-white">
      <SidebarClient />

      <div className="flex flex-col flex-1">
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
