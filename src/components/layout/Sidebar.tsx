'use client'

import { useUIStore } from '@/stores/ui.store'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/components/layout/NavItems'

export function Sidebar() {
  const activePage = useUIStore((s) => s.activePage)
  const setActivePage = useUIStore((s) => s.setActivePage)

  return (
    <aside
      className="
        hidden xl:flex
        h-screen w-24 flex-col items-center justify-between
        bg-[#050816]
        border-r border-white/5
        py-6
      "
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-8">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-2xl border border-white/10
            bg-gradient-to-br from-[#111827] via-[#020617] to-[#020617]
          "
        >
          <span className="text-lg font-semibold text-white">N</span>
        </div>

        {/* Navegação SPA */}
        <nav className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.page

            return (
              <button
                key={item.page}
                onClick={() => setActivePage(item.page)}
                className="group"
              >
                <div
                  className={cn(
                    `
                      flex h-11 w-11 items-center justify-center
                      rounded-2xl transition-all duration-200
                    `,
                    isActive
                      ? 'bg-[#111827] text-[#38bdf8] border border-[#38bdf8]/40 shadow-[0_0_18px_rgba(56,189,248,0.45)]'
                      : 'bg-[#0b1020] text-white/40 hover:text-white hover:bg-[#111827]',
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            bg-gradient-to-tr from-[#2563eb] via-[#38bdf8] to-[#22c55e]
            text-sm font-semibold text-white
          "
        >
          NN
        </button>
      </div>
    </aside>
  )
}
