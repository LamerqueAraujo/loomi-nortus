// src/components/tickets/TicketModal.tsx
'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { TicketFormValues } from '@/schemas/tickets'
import { ticketFormSchema } from '@/schemas/tickets'
import type { TicketPriority, TicketStatus } from '@/types/tickets'

type Props = {
  isOpen: boolean
  title: string
  onClose: () => void
  onSubmit: (values: TicketFormValues) => void
  defaultValues?: Partial<TicketFormValues>
  priorities: TicketPriority[]
  status: TicketStatus[]
}

export function TicketModal({
  isOpen,
  title,
  onClose,
  onSubmit,
  defaultValues,
  priorities,
  status,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TicketFormValues>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues,
  })

  useEffect(() => {
    if (isOpen) {
      reset(defaultValues)
    }
  }, [isOpen, defaultValues, reset])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-xl rounded-3xl bg-[#020617] p-6 text-slate-50 shadow-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-slate-400">
              Preencha os dados abaixo para registrar um novo ticket na
              plataforma.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          >
            ✕
          </button>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="mb-1 block text-xs text-slate-300">
              Nome do cliente
            </label>
            <input
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#020617] px-4 text-sm outline-none focus:border-sky-500"
              placeholder="Nome da pessoa ou empresa que está solicitando o suporte"
              {...register('client')}
            />
            {errors.client && (
              <p className="mt-1 text-xs text-red-400">
                {errors.client.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-xs text-slate-300">Email</label>
            <input
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#020617] px-4 text-sm outline-none focus:border-sky-500"
              placeholder="E-mail de contato para atualizações e resposta"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs text-slate-300">
                Prioridade
              </label>
              <select
                className="h-11 w-full rounded-xl border border-slate-700 bg-[#020617] px-4 text-sm outline-none focus:border-sky-500"
                defaultValue=""
                {...register('priority')}
              >
                <option value="" disabled>
                  Selecione o nível de urgência do atendimento
                </option>
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
              {errors.priority && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.priority.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="mb-1 block text-xs text-slate-300">
                Responsável
              </label>
              <input
                className="h-11 w-full rounded-xl border border-slate-700 bg-[#020617] px-4 text-sm outline-none focus:border-sky-500"
                placeholder="Quem será o responsável por esse ticket"
                {...register('responsible')}
              />
              {errors.responsible && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.responsible.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs text-slate-300">Status</label>
            <select
              className="h-11 w-full rounded-xl border border-slate-700 bg-[#020617] px-4 text-sm outline-none focus:border-sky-500"
              defaultValue=""
              {...register('status')}
            >
              <option value="" disabled>
                Selecione o status do atendimento
              </option>
              {status.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="mt-1 text-xs text-red-400">
                {errors.status.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-xs text-slate-300">Assunto</label>
            <textarea
              className="min-h-[96px] w-full rounded-xl border border-slate-700 bg-[#020617] px-4 py-3 text-sm outline-none focus:border-sky-500"
              placeholder="Resumo breve do problema ou solicitação"
              {...register('subject')}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mt-5 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-full border border-slate-600 px-6 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 rounded-full bg-sky-500 px-6 text-sm font-semibold text-slate-900 hover:bg-sky-400 disabled:opacity-60"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
