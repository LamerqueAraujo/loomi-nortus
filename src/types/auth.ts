export type LoginResponse = {
  data: {
    accessToken: string
    username: string
    refreshToken?: string
  }
}

export type RefreshResponse = {
  accessToken: string
  username: string
}
