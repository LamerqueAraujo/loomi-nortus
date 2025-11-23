'use client'

import { ChevronDown } from 'lucide-react'

type Props = {
  value: string
  onChange: (value: string) => void
  options: string[]
  transparent?: boolean
}

export default function SelectWithIcon({
  value,
  onChange,
  options,
  transparent,
}: Props) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          appearance-none
          text-white text-sm
          pr-8 pl-3 py-2
          rounded-full
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-blue-600/40
          ${
            transparent
              ? 'bg-transparent border-none'
              : 'bg-[#050816] border border-white/10'
          }
        `}
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
      />
    </div>
  )
}
