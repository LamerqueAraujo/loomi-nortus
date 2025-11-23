'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useNortusToastStore } from '@/stores/nortusToast.store'
import { useEffect } from 'react'

export function NortusToastContainer() {
  const { toasts, remove } = useNortusToastStore()

  const colors = {
    success: 'bg-blue-600 border-blue-300 shadow-blue-900/40',
    error: 'bg-red-600 border-red-300 shadow-red-900/40',
    info: 'bg-slate-600 border-slate-300 shadow-slate-900/40',
    warning: 'bg-yellow-600 border-yellow-300 shadow-yellow-900/40',
  } as const

  return (
    <div className="pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 z-[100000] w-full max-w-xl px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={() => remove(toast.id)}
            className={`pointer-events-auto mb-3 flex cursor-pointer items-start gap-3 rounded-xl px-5 py-4 text-white shadow-xl border backdrop-blur-xl ${colors[toast.type]}`}
          >
            {/* Ícone */}
            {toast.type === 'success' && (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}

            {toast.type === 'error' && (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}

            {toast.type === 'info' && (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}

            {toast.type === 'warning' && (
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 4h.01M10 3h4l7 12H3L10 3z"
                />
              </svg>
            )}

            {/* Texto */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{toast.title}</p>
              <p className="text-xs opacity-80">{toast.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
