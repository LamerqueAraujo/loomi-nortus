import { create } from 'zustand'
import Cookies from 'js-cookie'
import path from 'path'

export const useAuthStore = create((set) => ({
  token: null,
  username: null,
  authenticated: false,

  loadFromStorage: () => {
    const token = Cookies.get('token')
    const username = localStorage.getItem('username')

    if (token && username) {
      set({
        token,
        username,
        authenticated: true,
      })
    }
  },

  // Login bem-sucedido
  setAuth: (token, username) => {
    Cookies.set('token', token, {
      expires: 1,
      path: '/',
      sameSite: 'strict',
      secure: false,
    })
    localStorage.setItem('username', username)

    set({
      token,
      username,
      authenticated: true,
    })
  },

  // Logout
  clearAuth: () => {
    Cookies.remove('token', { path: '/' })
    localStorage.removeItem('username')

    set({
      token: null,
      username: null,
      authenticated: false,
    })
  },
}))
