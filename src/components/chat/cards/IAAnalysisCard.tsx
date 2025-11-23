'use client'

import Image from 'next/image'
import CardBase from './CardBase'

export default function IAAnalysisCard() {
  return (
    <CardBase className="pt-5 pb-5">
      <div className="relative flex items-start gap-3">
        <div className="shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-400/40 backdrop-blur-md">
            <Image
              src="/icons/ia/analise.svg"
              alt="Análise da IA"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-indigo-300">
            Análise da IA
          </p>
          <h3 className="mt-1 text-sm font-semibold">
            Insights sobre comportamento e expansão
          </h3>

          <ul className="mt-3 space-y-1 text-xs text-slate-200">
            <li>• Alta propensão a upgrade.</li>
            <li>• Boa retenção nos últimos 6 meses.</li>
            <li>• Cross-sell recomendado.</li>
            <li>• Segmento converte em média 63%.</li>
          </ul>
        </div>
      </div>
    </CardBase>
  )
}
