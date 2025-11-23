'use client'

import type { Kpi } from '@/types/dashboard'

const colorMap: Record<Kpi['trendColor'], string> = {
  'neon-blue': 'text-[#3BA7F3]',
  'neon-green': 'text-[#22C55E]',
  'neon-cyan': 'text-[#38BDF8]',
  'neon-pink': 'text-[#FF2D75]',
}

export default function KpiCard({ label, value, trend, trendColor }: Kpi) {
  return (
    <div className="p-6 rounded-2xl bg-[#11192F] space-y-1 shadow-[0_0_12px_rgba(0,0,0,0.3)]">
      <span className="text-sm text-white/60">{label}</span>

      <p className="text-xl font-bold">{value}</p>

      <p className={`text-sm ${colorMap[trendColor]}`}>{trend} no período</p>
    </div>
  )
}
