'use client'

export default function SegmentChip({
  label,
  color = '#3B82F6',
}: {
  label: string
  color?: string
}) {
  return (
    <div
      className="
        flex items-center gap-2
        px-4 py-3
        rounded-full
        text-[11px]
        bg-[#0F1629]
        text-white/80
        border border-white/10
      "
    >
      {/* bolinha */}
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />

      {label}
    </div>
  )
}
