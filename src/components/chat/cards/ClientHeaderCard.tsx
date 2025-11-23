'use client'

import CardBase from './CardBase'

export default function ClientHeaderCard() {
  return (
    <CardBase className="pt-5 pb-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
            Visão do cliente
          </p>
          <h2 className="mt-1 text-lg font-semibold">Ricardo Leite</h2>
          <p className="text-xs text-slate-400">Cliente intermediário</p>

          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-300">
            <span className="text-slate-400">Telefone</span>
            <span>(81) 99999-9999</span>
            <span className="text-slate-400">E-mail</span>
            <span>ricardo@email.com</span>
            <span className="text-slate-400">Tempo de casa</span>
            <span>6 meses</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#22C55E] to-[#38BDF8] text-sm font-semibold shadow-[0_0_18px_rgba(56,189,248,0.7)]">
            RL
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-200">
            Score: 82 · Bom
          </span>
        </div>
      </div>
    </CardBase>
  )
}
