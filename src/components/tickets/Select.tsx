'use client'

import { SelectProps } from '@/types/tickets'

export default function Select({
  label,
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-white/60">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="custom-select rounded-xl bg-[#020617] border border-white/10 px-3 py-2 text-sm text-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
