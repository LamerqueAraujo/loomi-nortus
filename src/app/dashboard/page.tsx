'use client'

import { useUIStore } from '@/stores/ui.store'
import PageContainer from '@/components/layout/PageContainer'
import DashboardView from '@/components/dashboard/DashboardView'
import { TicketsView } from '@/components/tickets/TicketsView'
import PlansView from '@/components/plans/PlansView'
import Customer360View from '@/components/customer360/Customer360View'
import ChatPage from '@/components/chat/ChatPage'

const views = {
  dashboard: DashboardView,
  tickets: TicketsView,
  plans: PlansView,
  'customer-360': Customer360View,
  chat: ChatPage,
}

export default function DashboardPage() {
  const activePage = useUIStore((s) => s.activePage)
  const View = views[activePage]

  return (
    <PageContainer>
      <View />
    </PageContainer>
  )
}
