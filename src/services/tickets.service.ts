import api from './api'
import type { TicketManagementResponse } from '@/types/tickets'

export async function fetchTicketsData() {
  const { data } = await api.get<TicketManagementResponse>(
    '/ticket-management.json',
  )
  return data
}
