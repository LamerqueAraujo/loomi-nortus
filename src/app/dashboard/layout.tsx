import type { ReactNode } from 'react'
import SidebarClient from '@/components/layout/SidebarClient'
import TopBar from '@/components/layout/TopBar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-[#0B1125] text-white min-h-screen">
      <SidebarClient />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
