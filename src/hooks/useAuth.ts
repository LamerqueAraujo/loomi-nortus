'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/auth.store'
import { loginRequest } from '@/services/auth.service'
import type { LoginResponse } from '@/types/auth'

export function useAuth() {
  const router = useRouter()
  const setAuth = useAuthStore((s) => s.setAuth)

  async function login(username: string, password: string) {
    try {
      const data: LoginResponse = await loginRequest(username, password)

      setAuth({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken ?? crypto.randomUUID(),
        username: data.username,
      })

      toast.success('Login realizado com sucesso!')
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      toast.error('Erro ao fazer login. Tente novamente.')
    }
  }

  return { login }
}
