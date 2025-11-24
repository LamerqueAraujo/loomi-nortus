type ScoreBarCardProps = {
  label: string
  level: string
  colorClass: string
}

export function ScoreBarCard({ label, level, colorClass }: ScoreBarCardProps) {
  return (
    <div
      className="
        rounded-2xl 
        bg-[#FFFFFF0D]
        border border-white/5 
        px-6 py-5
        flex flex-col gap-4
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-white font-medium text-[15px]">{label}</p>

        <span
          className="
            px-3 py-0.5 rounded-full 
            bg-white/5 border border-white/10 
            text-[11px] font-medium text-white/80
          "
        >
          {level}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden relative">
        <div
          className={`
            ${colorClass} 
            h-full 
            rounded-full 
            transition-all 
            duration-500 
            ease-out
          `}
          style={{ width: '68%' }}
        />
      </div>
    </div>
  )
}
