'use client'

import type { TicketStatus } from '@/types/tickets'
import clsx from 'clsx'

type Props = {
  status: TicketStatus
}

export function StatusBadge({ status }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex rounded-full px-3 py-1 text-xs font-medium',
        status === 'Aberto' && 'bg-[#00C6AE] text-[#0B1020]',
        status === 'Em andamento' && 'bg-[#F4C95D] text-[#0B1020]',
        status === 'Fechado' && 'bg-[#718096] text-white',
      )}
    >
      {status}
    </span>
  )
}
