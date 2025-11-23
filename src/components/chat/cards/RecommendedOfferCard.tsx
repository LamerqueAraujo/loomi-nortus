'use client'

import { useUIStore } from '@/stores/ui.store'
import CardBase from './CardBase'

export default function RecommendedOfferCard() {
  return (
    <CardBase className="pt-5 pb-5 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617]">
      <p className="text-[11px] uppercase tracking-[0.15em] text-sky-300">
        Ofertas recomendadas
      </p>

      <h3 className="mt-1 text-sm font-semibold text-slate-50">
        Plano de proteção completa
      </h3>

      <p className="mt-2 text-xs text-slate-200">
        Combo Auto + Residencial + Proteção de renda.
      </p>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] text-slate-400">Valor com desconto</p>
          <p className="text-lg font-semibold text-sky-300">
            R$ 185,00
            <span className="text-sm text-slate-300">/mês</span>
          </p>
          <p className="text-[11px] text-emerald-300">
            Economia anual: R$ 230,00
          </p>
        </div>

        <button
          onClick={() => useUIStore.setState({ activePage: 'plans' })}
          className="w-full bg-[#2563eb] text-white rounded-xl py-2 mt-4 hover:bg-[#1d4ed8] transition"
        >
          Fazer Simulação
        </button>
      </div>
    </CardBase>
  )
}
