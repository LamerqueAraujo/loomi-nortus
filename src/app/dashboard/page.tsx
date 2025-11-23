'use client'

import { useUIStore } from '@/stores/ui.store'
import DashboardView from '@/components/dashboard/DashboardView'
import TicketsView from '@/components/tickets/TicketsView'
import PlansView from '@/components/plans/PlansView'
import Customer360View from '@/components/customer360/Customer360View'
import ChatView from '@/components/chat/ChatView'
import { DashboardPageKey } from '@/types/dashboard/dashboard'
import { useDashboardStore } from '@/stores/dashboard.store'
import { useEffect } from 'react'

const views: Record<DashboardPageKey, React.ComponentType> = {
  dashboard: DashboardView,
  tickets: TicketsView,
  plans: PlansView,
  'customer-360': Customer360View,
  chat: ChatView,
}

export default function DashboardPage() {
  const activePage: DashboardPageKey = useUIStore((s) => s.activePage)
  const fetchData = useDashboardStore((s) => s.fetchData)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const View = views[activePage]

  return View ? <View /> : null
}
