'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ImpactChartModalProps = {
  open: boolean
  onClose: () => void
}

const SEGMENTS = [
  { label: 'Automóvel', value: 42 },
  { label: 'Residencial', value: 26 },
  { label: 'Viagem', value: 18 },
  { label: 'Combo resi + auto', value: 9 },
  { label: 'Profissional', value: 5 },
]

export default function ImpactChartModal({
  open,
  onClose,
}: ImpactChartModalProps) {
  useEffect(() => {
    if (!open) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="
              w-full max-w-lg rounded-3xl
              bg-[#020617] border border-white/10
              p-6 sm:p-7
              shadow-[0_24px_80px_rgba(15,23,42,0.9)]
              flex flex-col gap-4
            "
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho */}
            <header className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xl uppercase tracking-wide text-sky-400/80">
                  Análise detalhada
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  Impacto por segmento
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  Distribuição percentual do impacto dos segmentos no portfólio
                  atual de clientes.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  ml-2 inline-flex h-8 w-8 items-center justify-center 
                  rounded-full bg-white/5 text-white/60 text-sm
                  hover:bg-white/10 hover:text-white
                  transition
                "
                aria-label="Fechar análise"
              >
                ×
              </button>
            </header>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SEGMENTS.map((segment) => (
                <div
                  key={segment.label}
                  className="
                    rounded-2xl border border-white/10 bg-[#020617]
                    px-3 py-3 flex flex-col gap-1
                  "
                >
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    {segment.label}
                  </p>
                  <p className="text-xl font-semibold text-sky-400">
                    {segment.value}%
                  </p>
                  <p className="text-[11px] text-white/60">
                    Representa {segment.value}% do impacto total dos segmentos
                    monitorados neste painel.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-[11px] text-white/50 max-w-[260px]">
                Use esta análise para priorizar argumentos comerciais e ofertas
                para os segmentos com maior impacto.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  inline-flex items-center justify-center
                  rounded-full px-5 py-2 text-xs font-medium
                  bg-sky-500 text-white
                  hover:brightness-110
                  transition
                "
              >
                Entendi, fechar análise
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
