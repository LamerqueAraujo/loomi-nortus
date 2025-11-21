'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth.store'

export function AuthProvider({ children }) {
  const loadFromStorage = useAuthStore((s) => s.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  return <>{children}</>
}
