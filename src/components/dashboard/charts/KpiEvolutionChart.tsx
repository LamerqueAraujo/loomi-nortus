'use client'

import dynamic from 'next/dynamic'
import type {
  KpiEvolutionSeries,
  KpiEvolutionOptions,
} from '@/types/dashboard/dashboard'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function KpiEvolutionChart() {
  const series: KpiEvolutionSeries[] = [
    {
      name: 'KPI',
      data: [120, 150, 170, 130, 180, 200, 240],
    },
  ]

  const chartConfig: KpiEvolutionOptions = {
    xaxisLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    color: '#3BA7F3',
  }

  const options = {
    chart: {
      type: 'area' as const,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' as const },
    xaxis: {
      categories: chartConfig.xaxisLabels,
    },
    colors: [chartConfig.color],
    fill: {
      type: 'gradient' as const,
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
  }

  return (
    <div className="bg-[#FFFFFF0D] p-6 border border-white/10 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-4">Evolução dos KPIs</h2>

      <Chart options={options} series={series} type="area" height={220} />
    </div>
  )
}
