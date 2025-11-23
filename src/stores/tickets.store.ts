// src/stores/tickets.store.ts
import { create } from 'zustand'
import { fetchTicketsData } from '@/services/tickets.service'
import type {
  Ticket,
  TicketManagementResponse,
  TicketPriority,
  TicketStatus,
} from '@/types/tickets'

export type TicketsFilters = {
  search: string
  status: TicketStatus | 'Todos'
  priority: TicketPriority | 'Todas'
  responsible: string | 'Todos'
}

type TicketsState = {
  loading: boolean
  error: string | null

  resumo: TicketManagementResponse['resumo'] | null
  tickets: Ticket[]
  filteredTickets: Ticket[]

  statusOptions: TicketStatus[]
  priorityOptions: TicketPriority[]
  responsiblesOptions: string[]

  filters: TicketsFilters
  page: number
  pageSize: number

  loadTickets: () => Promise<void>
  setFilters: (partial: Partial<TicketsFilters>) => void
  setPage: (page: number) => void
  addTicket: (ticket: Ticket) => void
  updateTicket: (ticket: Ticket) => void
}

function applyFilters(tickets: Ticket[], filters: TicketsFilters) {
  return tickets.filter((ticket) => {
    const search = filters.search.trim().toLowerCase()

    if (search) {
      const match =
        ticket.id.toLowerCase().includes(search) ||
        ticket.client.toLowerCase().includes(search) ||
        ticket.subject.toLowerCase().includes(search)

      if (!match) return false
    }

    if (filters.status !== 'Todos' && ticket.status !== filters.status) {
      return false
    }

    if (filters.priority !== 'Todas' && ticket.priority !== filters.priority) {
      return false
    }

    if (
      filters.responsible !== 'Todos' &&
      ticket.responsible !== filters.responsible
    ) {
      return false
    }

    return true
  })
}

export const useTicketsStore = create<TicketsState>((set, get) => ({
  loading: false,
  error: null,

  resumo: null,
  tickets: [],
  filteredTickets: [],

  statusOptions: [],
  priorityOptions: [],
  responsiblesOptions: [],

  filters: {
    search: '',
    status: 'Todos',
    priority: 'Todas',
    responsible: 'Todos',
  },

  page: 1,
  pageSize: 5,

  loadTickets: async () => {
    try {
      set({ loading: true, error: null })

      const data = await fetchTicketsData()

      const responsibles = Array.from(
        new Set(data.tickets.map((t) => t.responsible)),
      ).sort()

      const filters = get().filters
      const filteredTickets = applyFilters(data.tickets, filters)

      set({
        loading: false,
        resumo: data.resumo,
        tickets: data.tickets,
        filteredTickets,
        statusOptions: data.status,
        priorityOptions: data.priorities,
        responsiblesOptions: responsibles,
        page: 1,
      })
    } catch (error) {
      set({
        loading: false,
        error: 'Erro ao carregar tickets. Tente novamente.',
      })
    }
  },

  setFilters: (partial) => {
    const filters = { ...get().filters, ...partial }
    const filteredTickets = applyFilters(get().tickets, filters)

    set({
      filters,
      filteredTickets,
      page: 1,
    })
  },

  setPage: (page) => set({ page }),

  addTicket: (ticket) => {
    const tickets = [ticket, ...get().tickets]
    const filteredTickets = applyFilters(tickets, get().filters)

    set({
      tickets,
      filteredTickets,
      resumo: get().resumo
        ? {
            ...get().resumo!,
            open: get().resumo!.open + 1,
          }
        : null,
    })
  },

  updateTicket: (ticket) => {
    const tickets = get().tickets.map((t) => (t.id === ticket.id ? ticket : t))
    const filteredTickets = applyFilters(tickets, get().filters)
    set({ tickets, filteredTickets })
  },
}))
