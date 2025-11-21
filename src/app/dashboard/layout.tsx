import SidebarClient from '@/components/layout/SidebarClient'

export default async function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#0B1125] min-h-screen text-white">
      <SidebarClient />
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}
