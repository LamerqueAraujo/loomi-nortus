'use client'

import { StatusBadge } from './StatusBadge'
import { TicketBadge } from './TicketBadge'
import type { Ticket, TicketPriority, TicketStatus } from '@/types/tickets'
import type { TicketsFilters } from '@/stores/tickets.store'

type Props = {
  tickets: Ticket[]
  filters: TicketsFilters
  statusOptions: TicketStatus[]
  priorityOptions: TicketPriority[]
  responsiblesOptions: string[]

  page: number
  pageSize: number
  totalCount: number

  onChangeFilters: (filters: Partial<TicketsFilters>) => void
  onChangePage: (page: number) => void

  onEdit: (ticket: Ticket) => void
  onView: (ticket: Ticket) => void
}

export function TicketsTable({
  tickets,
  filters,
  statusOptions,
  priorityOptions,
  responsiblesOptions,
  page,
  pageSize,
  totalCount,
  onChangeFilters,
  onChangePage,
  onEdit,
  onView,
}: Props) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize))

  const pageTickets = tickets.slice((page - 1) * pageSize, page * pageSize)

  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <section className="rounded-3xl bg-[#ffffff0d] p-4 shadow-lg shadow-black/40">
      {/* Header + filtros */}
      <div className="mb-4 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-1/3">
          <input
            className="h-10 w-full rounded-full border border-slate-700 bg-[#020617] pl-10 pr-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-500"
            placeholder="Buscar por ID, cliente ou assunto..."
            value={filters.search}
            onChange={(e) => onChangeFilters({ search: e.target.value })}
          />
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            🔍
          </span>
        </div>

        {/* Selects */}
        <div className="flex gap-3">
          {/* STATUS */}
          <div className="relative">
            <select
              className="
                h-10 rounded-full border border-slate-700 bg-[#020617]
                pl-4 pr-10 text-sm text-slate-100 outline-none
                focus:border-sky-500 appearance-none
              "
              value={filters.status}
              onChange={(e) =>
                onChangeFilters({
                  status: e.target.value as TicketsFilters['status'],
                })
              }
            >
              <option value="Todos">Todos os status</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Ícone */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </span>
          </div>

          {/* PRIORIDADE */}
          <div className="relative">
            <select
              className="
                h-10 rounded-full border border-slate-700 bg-[#020617]
                pl-4 pr-10 text-sm text-slate-100 outline-none
                focus:border-sky-500 appearance-none
              "
              value={filters.priority}
              onChange={(e) =>
                onChangeFilters({
                  priority: e.target.value as TicketsFilters['priority'],
                })
              }
            >
              <option value="Todas">Todas as prioridades</option>
              {priorityOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            {/* Ícone */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </span>
          </div>

          {/* RESPONSÁVEL */}
          <div className="relative">
            <select
              className="
                h-10 rounded-full border border-slate-700 bg-[#020617]
                pl-4 pr-10 text-sm text-slate-100 outline-none
                focus:border-sky-500 appearance-none
              "
              value={filters.responsible}
              onChange={(e) =>
                onChangeFilters({
                  responsible: e.target.value as TicketsFilters['responsible'],
                })
              }
            >
              <option value="Todos">Todos os responsáveis</option>
              {responsiblesOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {/* Ícone */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[#020617] text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Prioridade</th>
              <th className="px-6 py-3">Cliente</th>
              <th className="px-6 py-3">Assunto</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Criado em</th>
              <th className="px-6 py-3">Responsável</th>
              <th className="px-6 py-3 text-right">Ações</th>
            </tr>
          </thead>

          <tbody>
            {pageTickets.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-10 text-center text-sm text-slate-400"
                >
                  Nenhum ticket encontrado com os filtros atuais.
                </td>
              </tr>
            ) : (
              pageTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-slate-800 text-slate-100"
                >
                  <td className="px-6 py-4 text-xs font-semibold">
                    {ticket.id}
                  </td>

                  <td className="px-6 py-4">
                    <TicketBadge priority={ticket.priority} />
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm">{ticket.client}</div>
                    <div className="text-xs text-slate-400">{ticket.email}</div>
                  </td>

                  <td className="px-6 py-4 text-sm">{ticket.subject}</td>

                  <td className="px-6 py-4">
                    <StatusBadge status={ticket.status} />
                  </td>

                  <td className="px-6 py-4 text-sm">{ticket.createdAt}</td>

                  <td className="px-6 py-4 text-sm">
                    <span className="font-medium">{ticket.responsible}</span>
                  </td>

                  <td className="px-6 py-4 text-right text-xs">
                    <button
                      className="mr-3 text-sky-400 hover:underline"
                      onClick={() => onEdit(ticket)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-slate-300 hover:underline"
                      onClick={() => onView(ticket)}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <div>
          Página <span className="font-semibold text-slate-100">{page}</span> de{' '}
          <span className="font-semibold text-slate-100">{totalPages}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={!canPrev}
            onClick={() => onChangePage(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 disabled:opacity-40"
          >
            «
          </button>

          <button
            disabled={!canPrev}
            onClick={() => onChangePage(page - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 disabled:opacity-40"
          >
            ‹
          </button>

          <button
            disabled={!canNext}
            onClick={() => onChangePage(page + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 disabled:opacity-40"
          >
            ›
          </button>

          <button
            disabled={!canNext}
            onClick={() => onChangePage(totalPages)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 disabled:opacity-40"
          >
            »
          </button>
        </div>
      </div>
    </section>
  )
}
