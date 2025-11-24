'use client'

type SuggestionTabProps = {
  label: string
  active?: boolean
}

function SuggestionTab({ label, active }: SuggestionTabProps) {
  if (active) {
    return (
      <button className="px-4 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-semibold shadow-[0_0_14px_rgba(37,99,235,0.7)]">
        {label}
      </button>
    )
  }

  return (
    <button className="px-4 py-1 rounded-full bg-white/5 text-white/70 text-[11px] hover:bg-white/10 transition-colors">
      {label}
    </button>
  )
}

export function AISuggestionCardContent() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Sugestão da IA</h2>
        <div className="flex items-center gap-2 text-[11px]">
          <SuggestionTab label="NBX" />
          <SuggestionTab label="NBA" />
          <SuggestionTab label="NBO" active />
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-[#FFFFFF0D] border border-white/10 px-5 py-5 space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">Oferta recomendada</p>
          <p className="text-xs text-white/70">
            Seguro de vida individual com cobertura para doenças graves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <p className="text-white/50 uppercase text-[10px] tracking-wide">
              Valor recomendado
            </p>
            <p className="text-lg font-bold text-white mt-1">R$ 127,50/mês</p>
          </div>
          <div>
            <p className="text-white/50 uppercase text-[10px] tracking-wide">
              Probabilidade de conversão
            </p>
            <p className="text-lg font-bold text-[#00EC6A] mt-1">78%</p>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/10">
          <p className="text-sm font-semibold text-white">Reason Why</p>
          <ul className="list-disc list-inside text-xs text-white/70 space-y-1">
            <li>Perfil “profissional liberal” compatível</li>
            <li>Idade competitiva</li>
            <li>Preocupação com família</li>
            <li>Complementa portfólio sem sobreposição</li>
          </ul>
        </div>

        <button className="mt-3 px-6 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-sm text-white font-medium shadow-[0_0_18px_rgba(37,99,235,0.6)]">
          Simular conversa com IA
        </button>
      </div>
    </div>
  )
}
