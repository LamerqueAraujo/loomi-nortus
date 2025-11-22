'use client'

import { useAuthStore } from '@/stores/auth.store'

export default function TopBar() {
  const user = useAuthStore((s) => s.username)
  const displayName = user ?? 'Usuário'
  const initials = displayName
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header
      className="
        h-[80px] 
        w-full 
        flex 
        items-center 
        justify-between 
        px-8
        bg-[#1D2436]
        border-b border-white/[0.04]
      "
    >
      <h1 className="text-white text-lg font-semibold tracking-wide">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-white/70 text-sm">Olá, {displayName}</span>

        <div
          className="
            w-10 h-10 rounded-full
            flex items-center justify-center 
            text-white font-semibold
            bg-gradient-to-tr
            from-[#3B82F6] via-[#38BDF8] to-[#22C55E]
            shadow-[0_0_18px_rgba(56,189,248,0.45)]
          "
        >
          {initials}
        </div>
      </div>
    </header>
  )
}
