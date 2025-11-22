import { create } from 'zustand'
import Cookies from 'js-cookie'

type AuthState = {
  accessToken: string | null
  username: string | null
  authenticated: boolean

  setAuth: (data: {
    accessToken: string
    username: string
    refreshToken: string
  }) => void

  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  username: null,
  authenticated: false,

  setAuth: ({ accessToken, username, refreshToken }) => {
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

    localStorage.setItem('username', username)

    set({
      accessToken,
      username,
      authenticated: true,
    })
  },

  clearAuth: () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    localStorage.removeItem('username')

    set({
      accessToken: null,
      username: null,
      authenticated: false,
    })
  },
}))
