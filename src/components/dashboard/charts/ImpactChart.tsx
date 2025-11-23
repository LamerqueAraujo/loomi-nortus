'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import {
  IMPACT_CHART_OPTIONS,
  IMPACT_CHART_SERIES,
} from '@/data/charts/impactCharts'
import SegmentChip from '@/components/ui/SegmentChip'
import ImpactChartModal from './ImpactModalContent'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function ImpactChart() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="w-full rounded-2xl bg-[#111827] border border-white/10 p-6 flex flex-col">
        {/* título */}
        <header className="mb-4">
          <h2 className="text-sm font-semibold text-white">
            Mapa de impacto por segmento
          </h2>
        </header>

        {/* gráfico */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[260px]">
            <Chart
              options={IMPACT_CHART_OPTIONS}
              series={IMPACT_CHART_SERIES}
              type="donut"
              height={260}
            />
          </div>
        </div>

        {/* chips */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <SegmentChip label="Automóvel" />
          <SegmentChip label="Residencial" />
          <SegmentChip label="Viagem" />
          <SegmentChip label="Combo resi + auto" />
          <SegmentChip label="Profissional" />
        </div>

        {/* botão */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="
            mt-5 mx-auto px-6 py-2 text-sm font-medium
            rounded-full
            bg-[#0B63F6]
            text-white
            hover:brightness-110
            transition
            shadow-[0_10px_30px_rgba(37,99,235,0.45)]
          "
        >
          Analisar segmentos
        </button>
      </section>

      <ImpactChartModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
