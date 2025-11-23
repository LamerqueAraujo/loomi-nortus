import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastItem {
  id: string
  type: ToastType
  title: string
  message: string
}

interface ToastStore {
  toasts: ToastItem[]
  add: (toast: ToastItem) => void
  remove: (id: string) => void
}

export const useNortusToastStore = create<ToastStore>((set) => ({
  toasts: [],

  add: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),

  remove: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}))
