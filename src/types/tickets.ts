export type Ticket = {
  id: string
  priority: string
  client: string
  email: string
  subject: string
  status: string
  createdAt: string
  responsible: string
}

export type TicketApiResponse = {
  resumo: {
    open: number
    inProgress: number
    solved: number
    timeAverageHours: number
  }
  status: string[]
  priorities: string[]
  tickets: Ticket[]
}

export type SummaryCardProps = {
  label: string
  value: number
}

export type SelectProps = {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}
