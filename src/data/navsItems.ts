import IconDashboard from '@/components/ui/icons/IconDashboard'
import IconTickets from '@/components/ui/icons/IconTickets'
import IconPlan from '@/components/ui/icons/IconPlan'
import IconCustomer360 from '@/components/ui/icons/IconCustomer360'
import IconChat from '@/components/ui/icons/IconChat'

import type { NavItem } from '@/types/ui/layout'

export const NAV_ITEMS: NavItem[] = [
  { page: 'dashboard', icon: IconDashboard, label: 'Dashboard' },
  { page: 'tickets', icon: IconTickets, label: 'Tickets' },
  { page: 'chat', icon: IconChat, label: 'Chat' },
  { page: 'customer-360', icon: IconCustomer360, label: 'Visão 360º' },
  { page: 'plans', icon: IconPlan, label: 'Simulador' },
]
