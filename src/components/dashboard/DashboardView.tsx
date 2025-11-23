'use client'

import KpiEvolutionChart from './charts/KpiEvolutionChart'
import KpiCards from './kpis/KpiCards'
import RegionMap from './maps/RegionMap'
import ImpactChart from './charts/ImpactChart'

export default function DashboardView() {
  return (
    <div className="space-y-8 max-w-6xl xl:max-w-7xl mx-auto w-full">
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
