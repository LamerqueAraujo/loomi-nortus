'use client'

import { KPI_LIST } from '@/data/kpi'
import KpiCard from './KpiCard'

export default function KpiCards() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
      {KPI_LIST.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  )
}
