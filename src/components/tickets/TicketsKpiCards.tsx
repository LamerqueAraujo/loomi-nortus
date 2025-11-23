import { TicketsResumo } from '@/types/tickets'
import Image from 'next/image'

type Props = {
  resumo: TicketsResumo | null
}

export function TicketsKpiCards({ resumo }: Props) {
  if (!resumo) return null

  const cards = [
    {
      label: 'Tickets Abertos',
      value: resumo.open,
      icon: '/icons/kpi/tickets/ticketsAbertos.svg',
    },
    {
      label: 'Em andamento',
      value: resumo.inProgress,
      icon: '/icons/kpi/tickets/ticketsEmAndamento.svg',
    },
    {
      label: 'Resolvidos hoje',
      value: resumo.solved,
      icon: '/icons/kpi/tickets/ticketsResolvidos.svg',
    },
    {
      label: 'Tempo Médio',
      value: `${resumo.timeAverageHours}h`,
      icon: '/icons/kpi/tickets/ticketsTempo.svg',
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-4 bg-[#20273E] rounded-xl px-5 py-4 border border-white/5"
        >
          {/* Ícone */}
          <div className="p-3 rounded-lg bg-white/5 flex items-center justify-center w-12 h-12">
            <Image
              src={card.icon}
              alt={card.label}
              width={26}
              height={26}
              className="opacity-90"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col">
            <span className="text-sm text-white/60">{card.label}</span>
            <span className="text-lg font-bold text-white">{card.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
