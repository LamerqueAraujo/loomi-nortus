export type TicketPriority = 'Urgente' | 'Média' | 'Baixa'

export type TicketStatus = 'Aberto' | 'Em andamento' | 'Fechado'

export type Ticket = {
  id: string
  priority: TicketPriority
  client: string
  email: string
  subject: string
  status: TicketStatus
  createdAt: string
  responsible: string
}

export type TicketsResumo = {
  open: number
  inProgress: number
  solved: number
  timeAverageHours: number
}

export type TicketManagementResponse = {
  resumo: TicketsResumo
  status: TicketStatus[]
  priorities: TicketPriority[]
  tickets: Ticket[]
}
