'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTicketsStore } from '@/stores/tickets.store'
import { TicketsKpiCards } from './TicketsKpiCards'
import { TicketsTable } from './TicketsTable'
import { TicketModal } from './TicketModal'
import { ViewTicketModal } from './ViewTicketModal'
import type { Ticket } from '@/types/tickets'
import type { TicketFormValues } from '@/schemas/tickets'
import { useNortusToast } from '@/hooks/useNortusToast'
import PageContainer from '../layout/PageContainer'

export function TicketsView() {
  const { success } = useNortusToast()
  const {
    loading,
    error,
    resumo,
    filteredTickets,
    statusOptions,
    priorityOptions,
    responsiblesOptions,
    filters,
    page,
    pageSize,
    loadTickets,
    setFilters,
    setPage,
    addTicket,
    updateTicket,
  } = useTicketsStore()

  const [isCreateEditOpen, setIsCreateEditOpen] = useState(false)
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null)

  const [isViewOpen, setIsViewOpen] = useState(false)
  const [viewTicket, setViewTicket] = useState<Ticket | null>(null)

  useEffect(() => {
    loadTickets()
  }, [loadTickets])

  const totalCount = useMemo(() => filteredTickets.length, [filteredTickets])

  function handleOpenCreate() {
    setEditingTicket(null)
    setIsCreateEditOpen(true)
  }

  function handleOpenEdit(ticket: Ticket) {
    setEditingTicket(ticket)
    setIsCreateEditOpen(true)
  }

  function handleOpenView(ticket: Ticket) {
    setViewTicket(ticket)
    setIsViewOpen(true)
  }

  function handleSubmitTicket(values: TicketFormValues) {
    if (editingTicket) {
      const updated: Ticket = {
        ...editingTicket,
        ...values,
      }
      updateTicket(updated)
      success(
        'Ticket editado com sucesso!',
        'O ticket foi editado e já está na sua lista.',
      )
    } else {
      const newTicket: Ticket = {
        id: `TK${String(Date.now()).slice(-4)}`,
        createdAt: new Date().toLocaleDateString('pt-BR'),
        ...values,
      }
      addTicket(newTicket)
      success(
        'Ticket criado com sucesso!',
        'O ticket foi criado e já está na sua lista.',
      )
    }

    setIsCreateEditOpen(false)
    setEditingTicket(null)
  }

  return (
    <PageContainer>
      <main className="flex flex-col gap-6">
        <header className="flex items-center justify-end">
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-400"
          >
            + Novo Ticket
          </button>
        </header>

        <TicketsKpiCards resumo={resumo} />

        {loading && (
          <div className="rounded-3xl bg-[#020617] p-6 text-sm text-slate-400">
            Carregando tickets...
          </div>
        )}

        {error && !loading && (
          <div className="rounded-3xl bg-[#020617] p-6 text-sm text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <TicketsTable
            tickets={filteredTickets}
            filters={filters}
            statusOptions={statusOptions}
            priorityOptions={priorityOptions}
            responsiblesOptions={responsiblesOptions}
            page={page}
            pageSize={pageSize}
            totalCount={totalCount}
            onChangeFilters={setFilters}
            onChangePage={setPage}
            onEdit={handleOpenEdit}
            onView={handleOpenView}
          />
        )}

        {/* Modal criar/editar */}
        <TicketModal
          isOpen={isCreateEditOpen}
          title={editingTicket ? 'Editar Ticket' : 'Novo Ticket'}
          onClose={() => {
            setIsCreateEditOpen(false)
            setEditingTicket(null)
          }}
          onSubmit={handleSubmitTicket}
          defaultValues={
            editingTicket
              ? {
                  client: editingTicket.client,
                  email: editingTicket.email,
                  subject: editingTicket.subject,
                  priority: editingTicket.priority,
                  status: editingTicket.status,
                  responsible: editingTicket.responsible,
                }
              : undefined
          }
          priorities={priorityOptions}
          status={statusOptions}
        />

        {/* Modal visualizar */}
        <ViewTicketModal
          isOpen={isViewOpen}
          ticket={viewTicket}
          onClose={() => {
            setIsViewOpen(false)
            setViewTicket(null)
          }}
        />
      </main>
    </PageContainer>
  )
}
