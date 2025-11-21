'use client'

import { useUIStore } from '@/stores/ui.store'
import DashboardView from '@/components/dashboard/DashboardView'
import TicketsView from '@/components/tickets/TicketsView'
import PlansView from '@/components/plans/PlansView'
import Customer360View from '@/components/customer360/Customer360View'
import ChatView from '@/components/chat/ChatView'

export default function DashboardPage() {
  const activePage = useUIStore((s) => s.activePage)

  if (activePage === 'dashboard') return <DashboardView />
  if (activePage === 'tickets') return <TicketsView />
  if (activePage === 'plans') return <PlansView />
  if (activePage === 'customer-360') return <Customer360View />
  if (activePage === 'chat') return <ChatView />

  return null
}
