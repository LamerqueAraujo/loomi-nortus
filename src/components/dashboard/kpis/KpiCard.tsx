'use client'

import Image from 'next/image'
import type { Kpi } from '@/types/dashboard/dashboard'

const colorMap: Record<Kpi['trendColor'], string> = {
  'neon-blue': 'text-[#3BA7F3]',
  'neon-green': 'text-[#22C55E]',
  'neon-cyan': 'text-[#38BDF8]',
  'neon-pink': 'text-[#FF2D75]',
}

const arrowIcons = {
  up: '/icons/kpi/arrow-up.svg',
  down: '/icons/kpi/arrow-down.svg',
} as const

export default function KpiCard({
  label,
  value,
  trend,
  trendColor,
  arrow,
}: Kpi) {
  return (
    <div className="p-6 rounded-2xl bg-[#FFFFFF0D] border border-white/10 relative min-h-[145px] flex flex-col justify-between">
      <span className="text-sm text-white">{label}</span>

      <p className="text-2xl font-bold text-white">{value}</p>

      <p
        className={`
          text-sm 
          ${colorMap[trendColor]} 
          ${trendColor === 'neon-green' ? 'drop-shadow-[0_0_8px_#22FF7A]' : ''}
        `}
      >
        {trend}
      </p>

      {arrow && (
        <Image
          src={arrowIcons[arrow]}
          alt={arrow === 'up' ? 'Indicador de alta' : 'Indicador de queda'}
          width={80}
          height={80}
          className={`
      absolute opacity-95
      ${arrow === 'up' ? 'right-2 bottom-2' : ''}
      ${arrow === 'down' ? 'right-0 bottom-2 w-25' : ''}
    `}
        />
      )}
    </div>
  )
}
