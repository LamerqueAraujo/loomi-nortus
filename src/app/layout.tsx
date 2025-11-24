import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/providers/AuthProvider'
import { NortusToastContainer } from '@/components/ui/NortusToast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Loomi Nortus',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Aplicação desenvolvida para o processo seletivo da empresa Loomi',
}

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
          <NortusToastContainer />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
