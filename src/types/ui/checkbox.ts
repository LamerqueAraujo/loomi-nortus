import type { ChangeEvent } from 'react'

export type CustomCheckboxProps = {
  id: string
  label: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
