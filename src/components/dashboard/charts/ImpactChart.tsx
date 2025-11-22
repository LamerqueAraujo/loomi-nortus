'use client'

import type { ImpactChartProps } from '@/types/dashboard'

export default function ImpactChart({
  title = 'Mapa de impacto por segmento',
}: ImpactChartProps) {
  return (
    <div className="w-full h-[400px] rounded-2xl bg-[#111827] border border-white/10 p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {/* Área do gráfico — substituir quando for implementar */}
      <div className="flex-1 flex items-center justify-center text-white/40">
        (Gráfico de impacto)
      </div>

      <button
        type="button"
        className="
          mt-4 px-4 py-2 bg-[#1c7ef5]
          rounded-xl text-sm text-white
          hover:brightness-110 transition
        "
      >
        Analisar segmentos
      </button>
    </div>
  )
}
