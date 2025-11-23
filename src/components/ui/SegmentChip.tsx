'use client'

export default function SegmentChip({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="
        px-3 py-1 rounded-full text-[11px]
        bg-[#0B1120] text-white/70
        border border-white/10
        hover:bg-[#111827] hover:text-white
        transition
      "
    >
      {label}
    </button>
  )
}
