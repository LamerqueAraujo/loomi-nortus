'use client'

const SEGMENTS: string[] = [
  'Automóvel',
  'Residencial',
  'Viagem',
  'Combo casa + auto',
  'Profissional',
]

export default function SegmentButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      {SEGMENTS.map((segment) => (
        <button
          key={segment}
          className="
            px-3 py-1 rounded-lg text-sm
            bg-[#0f172a] text-white/60
            hover:bg-[#1e293b] hover:text-white
            border border-white/10
            transition
          "
        >
          {segment}
        </button>
      ))}
    </div>
  )
}
