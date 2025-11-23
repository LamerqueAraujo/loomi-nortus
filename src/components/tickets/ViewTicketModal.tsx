'use client'

import type { Ticket } from '@/types/tickets'
import { StatusBadge } from './StatusBadge'
import { TicketBadge } from './TicketBadge'

type Props = {
  isOpen: boolean
  ticket: Ticket | null
  onClose: () => void
}

export function ViewTicketModal({ isOpen, ticket, onClose }: Props) {
  if (!isOpen || !ticket) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-xl rounded-3xl bg-[#020617] p-6 text-slate-50 shadow-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">Detalhes do Ticket</h2>
            <p className="mt-1 text-sm text-slate-400">{ticket.id}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <TicketBadge priority={ticket.priority} />
            <StatusBadge status={ticket.status} />
          </div>

          <div>
            <p className="text-xs text-slate-400">Cliente</p>
            <p className="text-sm">{ticket.client}</p>
            <p className="text-xs text-slate-400">{ticket.email}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Assunto</p>
            <p className="text-sm">{ticket.subject}</p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-xs text-slate-400">Criado em</p>
              <p>{ticket.createdAt}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Responsável</p>
              <p>{ticket.responsible}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="h-10 rounded-full border border-slate-600 px-6 text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
