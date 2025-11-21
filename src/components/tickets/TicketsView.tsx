'use client'

import { useEffect, useMemo, useState } from 'react'
import axios from '@/services/api'

type Ticket = {
  id: string
  priority: string
  client: string
  email: string
  subject: string
  status: string
  createdAt: string
  responsible: string
}

type TicketApiResponse = {
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

export default function TicketsView() {
  const [data, setData] = useState<TicketApiResponse | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('Todos')
  const [priorityFilter, setPriorityFilter] = useState<string>('Todos')
  const [responsibleFilter, setResponsibleFilter] = useState<string>('Todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/ticket-management.json')
        setData(response.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTickets()
  }, [])

  const responsibles = useMemo(() => {
    if (!data) return []
    const unique = Array.from(new Set(data.tickets.map((t) => t.responsible)))
    return unique
  }, [data])

  const filteredTickets = useMemo(() => {
    if (!data) return []
    return data.tickets.filter((t) => {
      const statusOk =
        statusFilter === 'Todos' ||
        t.status.toLowerCase() === statusFilter.toLowerCase()
      const priorityOk =
        priorityFilter === 'Todos' ||
        t.priority.toLowerCase() === priorityFilter.toLowerCase()
      const responsibleOk =
        responsibleFilter === 'Todos' || t.responsible === responsibleFilter
      return statusOk && priorityOk && responsibleOk
    })
  }, [data, statusFilter, priorityFilter, responsibleFilter])

  if (loading) {
    return <p className="text-sm text-white/60">Carregando tickets...</p>
  }

  if (!data) {
    return <p className="text-sm text-red-400">Falha ao carregar tickets.</p>
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Gestão de Tickets</h1>
          <p className="text-sm text-white/60">
            Gerencie tickets por prioridade, status e responsável.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-[#2563eb] px-4 py-2 text-sm font-medium hover:brightness-110"
        >
          + Novo ticket
        </button>
      </header>

      {/* Resumo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard label="Abertos" value={data.resumo.open} />
        <SummaryCard label="Em andamento" value={data.resumo.inProgress} />
        <SummaryCard label="Resolvidos" value={data.resumo.solved} />
        <SummaryCard
          label="Tempo médio (h)"
          value={data.resumo.timeAverageHours}
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 items-center">
        <Select
          label="Status"
          value={statusFilter}
          onChange={setStatusFilter}
          options={['Todos', ...data.status]}
        />
        <Select
          label="Prioridade"
          value={priorityFilter}
          onChange={setPriorityFilter}
          options={['Todos', ...data.priorities]}
        />
        <Select
          label="Responsável"
          value={responsibleFilter}
          onChange={setResponsibleFilter}
          options={['Todos', ...responsibles]}
        />
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#020617]">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <Th>ID</Th>
              <Th>Prioridade</Th>
              <Th>Cliente</Th>
              <Th>Assunto</Th>
              <Th>Status</Th>
              <Th>Responsável</Th>
              <Th>Criado em</Th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((t) => (
              <tr
                key={t.id}
                className="border-t border-white/5 hover:bg-white/5"
              >
                <Td>{t.id}</Td>
                <Td>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-white/10">
                    {t.priority}
                  </span>
                </Td>
                <Td>
                  <div>
                    <p>{t.client}</p>
                    <p className="text-xs text-white/50">{t.email}</p>
                  </div>
                </Td>
                <Td>{t.subject}</Td>
                <Td>{t.status}</Td>
                <Td>{t.responsible}</Td>
                <Td>{t.createdAt}</Td>
              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <Td colSpan={7}>
                  <p className="text-center text-white/60 py-4">
                    Nenhum ticket encontrado com os filtros selecionados.
                  </p>
                </Td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#020617] px-4 py-3">
      <p className="text-xs text-white/60">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-white/60">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl bg-[#020617] border border-white/10 px-3 py-2 text-sm text-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-xs font-medium uppercase">{children}</th>
}

function Td({
  children,
  colSpan,
}: {
  children: React.ReactNode
  colSpan?: number
}) {
  return (
    <td className="px-4 py-3 align-top text-sm" colSpan={colSpan}>
      {children}
    </td>
  )
}
