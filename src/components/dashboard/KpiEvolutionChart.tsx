'use client'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function KpiEvolutionChart() {
  const series = [
    {
      name: 'KPI',
      data: [120, 150, 170, 130, 180, 200, 240],
    },
  ]

  const options = {
    chart: {
      type: 'area' as const,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    },
    colors: ['#3BA7F3'],
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
    <div className="bg-[#111C33] p-6 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4">Evolução dos KPIs</h2>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  )
}
