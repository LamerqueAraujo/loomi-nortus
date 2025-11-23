'use client'

import type { TicketPriority } from '@/types/tickets'
import clsx from 'clsx'

type Props = {
  priority: TicketPriority
}

export function TicketBadge({ priority }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex rounded-full px-3 py-1 text-xs font-medium',
        priority === 'Urgente' && 'bg-[#E5484D] text-white',
        priority === 'Média' && 'bg-[#4CC9F0] text-[#0B1020]',
        priority === 'Baixa' && 'bg-[#D9E2EC] text-[#0B1020]',
      )}
    >
      {priority}
    </span>
  )
}
