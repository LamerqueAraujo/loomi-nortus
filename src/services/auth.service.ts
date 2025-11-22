import api from '@/services/api'
import type { LoginResponse } from '@/types/auth'

export async function loginRequest(username: string, password: string) {
  const { data }: { data: { data: LoginResponse } } =
    await api.get('/login.json')

  return data.data
}
