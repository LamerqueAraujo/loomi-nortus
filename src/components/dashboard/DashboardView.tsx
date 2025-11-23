'use client'

import PageContainer from '@/components/layout/PageContainer'
import KpiEvolutionChart from './charts/KpiEvolutionChart'
import KpiCards from './kpis/KpiCards'
import RegionMap from './maps/RegionMap'
import ImpactChart from './charts/ImpactChart'
import ActiveClients from './active-clients/ActiveClients'

export default function DashboardView() {
  return (
    <PageContainer>
      <div className="space-y-10 w-full my-5">
        <div className="grid gap-10 xl:grid-cols-[1.7fr_1fr] items-start">
          <KpiEvolutionChart />
          <KpiCards />
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.7fr_1fr] items-start">
          <RegionMap />
          <ImpactChart />
        </div>

        <ActiveClients />
      </div>
    </PageContainer>
  )
}
