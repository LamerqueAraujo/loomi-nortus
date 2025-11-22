'use client'

import { useUIStore } from '@/stores/ui.store'
import DashboardView from '@/components/dashboard/DashboardView'
import TicketsView from '@/components/tickets/TicketsView'
import PlansView from '@/components/plans/PlansView'
import Customer360View from '@/components/customer360/Customer360View'
import ChatView from '@/components/chat/ChatView'
import { DashboardPageKey } from '@/types/dashboard'

const views = {
  dashboard: DashboardView,
  tickets: TicketsView,
  plans: PlansView,
  'customer-360': Customer360View,
  chat: ChatView,
}

export default function DashboardPage() {
  const activePage: DashboardPageKey = useUIStore((s) => s.activePage)

  const View = views[activePage]

  return View ? <View /> : null
}
