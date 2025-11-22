'use client'

import { SliderFieldProps } from '@/types/plan'

export default function SliderField({
  label,
  min,
  max,
  step,
  value,
  onChange,
  format,
}: SliderFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>{label}</span>
        <span className="text-white/80">{format(value)}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex justify-between text-[10px] text-white/40">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}
