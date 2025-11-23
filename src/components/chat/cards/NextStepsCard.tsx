'use client'

import Image from 'next/image'
import CardBase from './CardBase'

export default function NextStepsCard() {
  return (
    <CardBase className="pt-5 pb-5">
      <div className="relative flex items-start gap-3">
        <div className="shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 ring-1 ring-cyan-400/40 backdrop-blur-md">
            <Image
              src="/icons/ia/pin.svg"
              alt="Próximos passos"
              width={22}
              height={22}
            />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-cyan-300">
            Próximos passos
          </p>
          <h3 className="mt-1 text-sm font-semibold">
            Jornada sugerida para o operador
          </h3>

          <ol className="mt-3 space-y-1 text-xs text-slate-200">
            <li>1. Confirmar dados do cliente.</li>
            <li>2. Apresentar comparação de planos.</li>
            <li>3. Destacar benefícios relevantes.</li>
            <li>4. Registrar objeções.</li>
          </ol>
        </div>
      </div>
    </CardBase>
  )
}
