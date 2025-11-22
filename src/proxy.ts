import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get('token')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value
  const path = request.nextUrl.pathname
  const isPublic = path.startsWith('/login') || path.startsWith('/api')

  if (isPublic) return NextResponse.next()
  if (accessToken) return NextResponse.next()
  if (refreshToken) {
    const refreshUrl = new URL('/api/refresh', request.url)

    const refreshRes = await fetch(refreshUrl, {
      method: 'GET',
      headers: { Cookie: request.headers.get('cookie') ?? '' },
    })

    if (refreshRes.ok) {
      const { accessToken: newAccessToken } = await refreshRes.json()

      const res = NextResponse.next()
      res.cookies.set('token', newAccessToken, {
        sameSite: 'strict',
        path: '/',
      })
      return res
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
    '/dashboard(.*)',
    '/tickets(.*)',
    '/plans(.*)',
    '/customer-360(.*)',
    '/chat(.*)',
  ],
}
