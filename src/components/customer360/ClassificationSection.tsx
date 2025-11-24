'use client'

import { ScoreBarCard } from './ScoreBarCard'

export function ClassificationSectionInsideIA() {
  return (
    <div className="mt-4 bg-[#FFFFFF0D] rounded-2xl border border-white/10 px-5 py-5 space-y-4">
      <h3 className="text-sm font-semibold text-white">
        Classificação inteligente
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Premium */}
        <div className="rounded-2xl bg-[#FFFFFF0D] border border-white/10 px-5 py-4">
          <p className="text-sm text-white/70">Premium</p>
          <p className="text-xs text-white/40 mt-1">Lifetime value</p>
          <p className="text-2xl font-bold text-white mt-1">R$ 24.580,00</p>
          <p className="mt-3 text-xs text-[#00EC6A]">
            11% probabilidade de churn
          </p>
        </div>

        <ScoreBarCard
          label="Score de expansão"
          level="Alto"
          colorClass="bg-[#00EC6A]"
        />
        <ScoreBarCard
          label="Score de retenção"
          level="Médio"
          colorClass="bg-[#FACC15]"
        />
      </div>
    </div>
  )
}
