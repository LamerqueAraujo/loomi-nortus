export type LoginResponse = {
  accessToken: string
  username: string
  refreshToken?: string
}

export type RefreshResponse = {
  accessToken: string
  username: string
}
