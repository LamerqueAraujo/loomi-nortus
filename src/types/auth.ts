export type LoginResponse = {
  accessToken: string
  username: string
  refreshToken?: string
}

export type RefreshResponse = {
  accessToken: string
  username: string
}

export type AuthState = {
  accessToken: string | null
  refreshToken: string | null
  username: string | null
  authenticated: boolean

  setAuth: (params: SetAuthParams) => void
  restoreAuth: () => void
  clearAuth: () => void
}

export type SetAuthParams = {
  accessToken: string
  refreshToken: string
  username: string
}
