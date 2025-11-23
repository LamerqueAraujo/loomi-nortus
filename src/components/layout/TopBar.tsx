'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuthStore } from '@/stores/auth.store'
import { useUIStore } from '@/stores/ui.store'
import { NAV_TITLES } from '@/data/navTitles'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function TopBar() {
  const user = useAuthStore((s) => s.username)
  const clearAuth = useAuthStore((s) => s.clearAuth)
  const activePage = useUIStore((s) => s.activePage)
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const displayName = user ?? 'Usuário'
  const initials = displayName
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  function handleLogout() {
    clearAuth()
    router.push('/login')
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className="
        h-[88px] w-full flex items-center justify-between px-48 
        bg-[#20273E] border-b border-white/[0.04] z-10 relative
      "
    >
      <h1 className="text-white text-[20px] font-semibold tracking-wide">
        {NAV_TITLES[activePage]}
      </h1>

      {/* USER MENU */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-3 cursor-pointer select-none ml-auto"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-white/70 text-sm hidden sm:block">
            Olá, {displayName}
          </span>

          <div
            className="
              w-10 h-10 rounded-full flex items-center justify-center 
              text-white font-semibold cursor-pointer
              bg-gradient-to-tr from-[#3B82F6] via-[#38BDF8] to-[#22C55E]
              shadow-[0_0_18px_rgba(56,189,248,0.45)]
            "
          >
            {initials}
          </div>
        </div>

        {/* DROPDOWN */}
        {open && (
          <div
            className="
              absolute right-0 mt-3 w-40 
              bg-[#2B3247] border border-white/10
              rounded-xl shadow-lg py-2 animate-fadeIn
            "
          >
            <button
              onClick={handleLogout}
              className="
                w-full text-left px-4 py-2 text-sm text-white/80 
                hover:bg-white/10 flex items-center gap-2
              "
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
