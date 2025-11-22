import {
  LayoutDashboard,
  Ticket,
  Layers,
  UserSquare2,
  MessageCircle,
} from 'lucide-react'

import type { NavItem } from '@/types/layout'

export const NAV_ITEMS: NavItem[] = [
  { page: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { page: 'tickets', icon: Ticket, label: 'Tickets' },
  { page: 'plans', icon: Layers, label: 'Simulador' },
  { page: 'customer-360', icon: UserSquare2, label: 'Visão 360º' },
  { page: 'chat', icon: MessageCircle, label: 'Chat' },
]
