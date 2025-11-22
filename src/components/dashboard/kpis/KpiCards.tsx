'use client'

import { KPI_LIST } from '@/data/kpi'
import type { Kpi } from '@/types/dashboard'

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {KPI_LIST.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  )
}

function KpiCard({ label, value, trend, trendColor }: Kpi) {
  return (
    <div className="p-6 rounded-2xl bg-[#11192F] space-y-1">
      <span className="text-sm text-white/60">{label}</span>

      <p className="text-xl font-bold">{value}</p>

      <p
        className={`text-sm ${
          trendColor === 'green' ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {trend} no período
      </p>
    </div>
  )
}
