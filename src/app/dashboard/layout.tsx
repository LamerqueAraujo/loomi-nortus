import type { ReactNode } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import TopBar from '@/components/layout/TopBar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-[#0B1125] text-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-20">
        <TopBar />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 px-48 pt-[128px]">{children}</main>
      </div>
    </div>
  )
}
