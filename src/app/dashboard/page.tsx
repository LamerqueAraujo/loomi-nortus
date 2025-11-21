import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import KpiEvolutionChart from '@/components/dashboard/KpiEvolutionChart'
import KpiCards from '@/components/dashboard/KpiCards'

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#0B1125] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <div className="flex-1 p-8 space-y-8">
        <Header title="Dashboard" />

        {/* Evolução dos KPIs */}
        <KpiEvolutionChart />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <KpiCards />
        </div>
      </div>
    </main>
  )
}
