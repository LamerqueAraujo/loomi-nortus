import { create } from 'zustand'
import Cookies from 'js-cookie'
import type { AuthState, SetAuthParams } from '@/types/auth'

const isClient = typeof window !== 'undefined'

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  username: null,
  authenticated: false,

  setAuth: ({ accessToken, refreshToken, username }: SetAuthParams) => {
    // Cookies
    Cookies.set('token', accessToken, {
      expires: 1,
      sameSite: 'strict',
      path: '/',
    })

    Cookies.set('refreshToken', refreshToken, {
      expires: 7,
      sameSite: 'strict',
      path: '/',
    })

    // LocalStorage (client only)
    if (isClient) {
      localStorage.setItem('username', username)
    }

    set({
      accessToken,
      refreshToken,
      username,
      authenticated: true,
    })
  },

  restoreAuth: () => {
    if (!isClient) return

    const token = Cookies.get('token')
    const refresh = Cookies.get('refreshToken')
    const username = localStorage.getItem('username')

    if (token && username) {
      set({
        accessToken: token,
        refreshToken: refresh ?? null,
        username,
        authenticated: true,
      })
    }
  },

  clearAuth: () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')

    if (isClient) {
      localStorage.removeItem('username')
    }

    set({
      accessToken: null,
      refreshToken: null,
      username: null,
      authenticated: false,
    })
  },
}))
