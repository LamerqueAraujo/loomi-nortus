'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import ImpactChartModal from './ImpactModalContent'
import {
  IMPACT_CHART_OPTIONS,
  IMPACT_CHART_SERIES,
} from '@/data/charts/impactCharts'
import SegmentChip from '@/components/ui/SegmentChip'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function ImpactChart() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className="w-full rounded-2xl bg-[#FFFFFF0D] border border-white/10 p-6 flex flex-col justify-between h-full">
      {/* modal */}
      <ImpactChartModal open={openModal} onClose={() => setOpenModal(false)} />

      {/* título */}
      <header>
        <h2 className="text-lg font-bold text-white">
          Mapa de impacto por segmento
        </h2>
      </header>

      {/* gráfico */}
      <div className="flex items-center justify-center mt-4 mb-2">
        <div className="w-[160px] h-[160px]">
          <Chart
            options={IMPACT_CHART_OPTIONS}
            series={IMPACT_CHART_SERIES}
            type="donut"
            height={160}
            width={160}
          />
        </div>
      </div>

      {/* chips */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <SegmentChip label="Automóvel" color="#3B82F6" />
        <SegmentChip label="Residencial" color="#60A5FA" />
        <SegmentChip label="Viagem" color="#1D4ED8" />
        <SegmentChip label="Combo resi + auto" color="#22D3EE" />
        <SegmentChip label="Profissional" color="#38BDF8" />
      </div>

      {/* botão */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="
            px-6 py-2 text-sm font-medium cursor-pointer
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
      </div>
    </section>
  )
}
