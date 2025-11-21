'use client'

import { useState, useEffect } from 'react'
import { Headphones, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function TopBarLogin() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')

  // Carrega idioma salvo (sem setState dentro do efeito)
  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved === 'pt' || saved === 'en') {
      // Ajuste correto — usando microtask para evitar alerta do React
      queueMicrotask(() => setLanguage(saved))
    }
  }, [])

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    setOpen(false)
  }

  return (
    <div
      className="
        absolute top-0 right-0 z-20
        flex items-center gap-4
        bg-[#0B1125]
        rounded-bl-[32px] rounded-tr-[32px]
        px-6 py-6
      "
    >
      {/* ============================
          BOTÃO AJUDA
      ============================= */}
      <button
        className="
          flex items-center gap-2
          w-[130px]         /* largura fixa */
          justify-center
          px-6 py-3
          rounded-full
          bg-[#11192F]
          text-white/90 text-sm font-medium
          whitespace-nowrap
        "
      >
        <Headphones size={18} className="text-white/80" />
        Ajuda
      </button>

      {/* ============================
          IDIOMA
      ============================= */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2
            w-[130px]           /* largura fixa */
            justify-center
            px-6 py-3
            rounded-full
            bg-[#11192F]
            text-white/90 text-sm font-medium
            whitespace-nowrap
          "
        >
          <Image
            src={language === 'pt' ? '/flags/br.svg' : '/flags/usa.svg'}
            alt={language === 'pt' ? 'Brasil' : 'USA'}
            width={18}
            height={18}
            className="rounded-full"
          />

          {language === 'pt' ? 'PT-br' : 'EN-us'}

          <ChevronDown size={16} className="text-white/70" />
        </button>

        {/* Dropdown de idiomas */}
        {open && (
          <div
            className="
              absolute right-0 mt-2 
              bg-[#11192F]
              rounded-xl
              py-2 w-36
              shadow-lg z-30
            "
          >
            <button
              onClick={() => changeLanguage('pt')}
              className="
                flex items-center gap-2
                px-4 py-2
                hover:bg-[#1A2340]
                text-white/90 text-sm
                w-full whitespace-nowrap
              "
            >
              <Image
                src="/flags/br.svg"
                alt="Brasil"
                width={18}
                height={18}
                className="rounded-full"
              />
              PT-br
            </button>

            <button
              onClick={() => changeLanguage('en')}
              className="
                flex items-center gap-2
                px-4 py-2
                hover:bg-[#1A2340]
                text-white/90 text-sm
                w-full whitespace-nowrap
              "
            >
              <Image
                src="/flags/usa.svg"
                alt="USA"
                width={18}
                height={18}
                className="rounded-full"
              />
              EN-us
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
