'use client'

import type { CustomCheckboxProps } from '@/types/ui/checkbox'

export default function CustomCheckbox({
  id,
  label,
  checked,
  onChange,
}: CustomCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer select-none text-white text-sm gap-2"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`
          flex items-center justify-center 
          h-5 w-5 rounded border-2 border-white
          transition-all duration-200 ease-in-out
          ${checked ? 'bg-white' : 'bg-transparent'}
        `}
      >
        {checked && (
          <span className="h-2.5 w-1.5 border-black border-b-2 border-r-2 rotate-45 transform" />
        )}
      </span>

      {label}
    </label>
  )
}
