import { useNortusToastStore } from '@/stores/nortusToast.store'
import { v4 as uuid } from 'uuid'

export function useNortusToast() {
  const add = useNortusToastStore((s) => s.add)

  function push(
    type: 'success' | 'error' | 'info' | 'warning',
    title: string,
    message: string,
  ) {
    add({
      id: uuid(),
      type,
      title,
      message,
    })
  }

  return {
    success: (t: string, m: string) => push('success', t, m),
    error: (t: string, m: string) => push('error', t, m),
    info: (t: string, m: string) => push('info', t, m),
    warning: (t: string, m: string) => push('warning', t, m),
  }
}
