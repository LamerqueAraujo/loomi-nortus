'use client'

import SegmentButtons from './SegmentButtons'
import KpiEvolutionChart from './charts/KpiEvolutionChart'
import KpiCards from './kpis/KpiCards'
import RegionMap from './maps/RegionMap'
import ImpactChart from './charts/ImpactChart'

export default function DashboardView() {
  return (
    <div className="space-y-10">
      <SegmentButtons />

      <section>
        <KpiEvolutionChart />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <KpiCards />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RegionMap />
        <ImpactChart />
      </section>
    </div>
  )
}
