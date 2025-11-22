'use client'

import KpiCards from './KpiCards'
import KpiEvolutionChart from './KpiEvolutionChart'
import ImpactChart from './ImpactChart'
import SegmentButtons from './SegmentButtons'
import RegionMap from './RegionMap'

export default function DashboardView() {
  return (
    <div className="space-y-8">
      {/* Evolução dos KPIs */}
      <KpiEvolutionChart />

      {/* Cards principais */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <KpiCards />
      </div>

      {/* Linha inferior: mapa + impacto */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RegionMap />
        <ImpactChart />
      </div>
    </div>
  )
}
