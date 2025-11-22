'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth.store'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const username = localStorage.getItem('username')
    if (username) {
      useAuthStore.setState({ username })
    }
  }, [])

  return <>{children}</>
}
