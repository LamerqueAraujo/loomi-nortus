'use client'

const segments = [
  'Automóvel',
  'Residencial',
  'Viagem',
  'Combo casa + auto',
  'Profissional',
]

export default function SegmentButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      {segments.map((s) => (
        <button
          key={s}
          className="
            px-3 py-1 rounded-lg text-sm
            bg-[#0f172a] text-white/60
            hover:bg-[#1e293b] hover:text-white
            border border-white/10
            transition
          "
        >
          {s}
        </button>
      ))}
    </div>
  )
}
