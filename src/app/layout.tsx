import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/providers/AuthProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Loomi Nortus',
  description:
    'Aplicação desenvolvida para o processo seletivo da empresa Loomi',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="pt-BR">
      <body>
        <Toaster richColors position="top-left" />

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
