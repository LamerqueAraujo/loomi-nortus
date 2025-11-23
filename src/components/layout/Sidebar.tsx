'use client'

import Image from 'next/image'
import { useUIStore } from '@/stores/ui.store'
import { NAV_ITEMS } from '@/data/navsItems'
import { cn } from '@/lib/cn'

export function Sidebar() {
  const activePage = useUIStore((s) => s.activePage)
  const setActivePage = useUIStore((s) => s.setActivePage)

  return (
    <aside
      className="
        hidden xl:flex
        h-screen w-37.5 flex-col items-center justify-between
        bg-[#20273E]
        border-r border-white/5
        py-10
        rounded-tr-[40px]
        rounded-br-[40px]
        z-[50]
        relative
        shadow-xl shadow-black/60
      "
    >
      {/* LOGO */}
      <Image
        src="/LogoNortus.svg"
        width={40}
        height={40}
        alt="Logo"
        className="opacity-90"
      />

      <div className="flex flex-col mt-8 gap-10 items-center">
        {NAV_ITEMS.map(({ page, icon: Icon }) => {
          const active = activePage === page

          return (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={cn(
                'flex items-center justify-center w-17 h-16 rounded-2xl transition-all',
                active
                  ? 'bg-[#1876D2] text-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                  : 'bg-[#FFFFFF0D] text-white/25 hover:text-white/60 hover:bg-[#1C2A48]',
              )}
            >
              <Icon width={20} height={20} />
            </button>
          )
        })}
      </div>

      {/* AVATAR */}
      <div
        className="
          w-14 h-14 rounded-full 
          bg-gradient-to-tr from-[#3B82F6] via-[#38BDF8] to-[#22C55E]
          flex items-center justify-center text-white font-semibold
        "
      >
        AC
      </div>
    </aside>
  )
}
