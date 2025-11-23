'use client'

import Image from 'next/image'
import CardBase from './CardBase'

export default function IASuggestionCard() {
  return (
    <CardBase className="pt-5 pb-5">
      {/* brilho SVG */}
      <Image
        src="/icons/ia/brilho.svg"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute -right-10 -top-12 opacity-60"
      />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="max-w-[70%]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-sky-300">
            Sugestão da IA
          </p>
          <h3 className="mt-1 text-sm font-semibold">
            Oferta ideal para o momento do cliente
          </h3>

          <p className="mt-2 text-xs text-slate-200">
            Com base no histórico e no perfil de risco, recomendamos o{' '}
            <span className="font-semibold">Plano Premium</span> com 30% OFF.
          </p>
        </div>

        <div className="shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 ring-1 ring-sky-400/40 backdrop-blur-md">
            <Image
              src="/icons/ia/sugestao.svg"
              alt="Sugestão da IA"
              width={26}
              height={26}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 flex gap-3">
        <button className="flex-1 rounded-full bg-sky-500 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-sky-400 transition-colors">
          Utilizar sugestão
        </button>
        <button className="flex-1 rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/5 transition-colors">
          Ver detalhes
        </button>
      </div>
    </CardBase>
  )
}
