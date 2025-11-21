import { create } from 'zustand'
import Cookies from 'js-cookie'

export const useAuthStore = create((set) => ({
  token: null,
  username: null,
  authenticated: false,

  // Carrega token/username do cookie/localStorage ao iniciar
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
    Cookies.set('token', token, { expires: 1 }) // 1 dia
    localStorage.setItem('username', username)

    set({
      token,
      username,
      authenticated: true,
    })
  },

  // Logout
  clearAuth: () => {
    Cookies.remove('token')
    localStorage.removeItem('username')

    set({
      token: null,
      username: null,
      authenticated: false,
    })
  },
}))
