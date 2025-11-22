import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/providers/AuthProvider'

/* =========================
      NEXT FONTS
========================= */

// Fonte padrão
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Headers e Titulos
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

/* =========================
      SEO / METADATA
========================= */

export const metadata: Metadata = {
  title: 'Loomi Nortus',
  description:
    'Aplicação desenvolvida para o processo seletivo da empresa Loomi',
}

/* =========================
      ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <AuthProvider>
          <Toaster richColors position="top-left" />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
