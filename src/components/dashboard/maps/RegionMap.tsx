'use client'

import { RegionMapData } from '@/types/region-maps'

type RegionMapProps = {
  data?: RegionMapData
}

export default function RegionMap({ data }: RegionMapProps) {
  return (
    <div className="w-full h-[400px] rounded-2xl bg-[#0F1629] border border-white/10 p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">
        Mapa de clientes por região
      </h2>

      {/* Placeholder enquanto não implementamos o mapa */}
      <div className="flex-1 flex items-center justify-center text-white/40">
        (Mapa interativo será renderizado aqui)
      </div>
    </div>
  )
}
