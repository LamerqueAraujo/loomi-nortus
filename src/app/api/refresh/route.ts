import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get('refreshToken')?.value

  if (!refreshToken) {
    return NextResponse.json({ error: 'NO_REFRESH' }, { status: 401 })
  }

  const isValid = true
  if (!isValid) {
    return NextResponse.json({ error: 'INVALID_REFRESH' }, { status: 401 })
  }

  const newAccessToken = crypto.randomUUID() + '_access'

  return NextResponse.json({
    accessToken: newAccessToken,
  })
}
