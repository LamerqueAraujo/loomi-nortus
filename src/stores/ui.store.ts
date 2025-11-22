import { create } from 'zustand'

type Page = 'dashboard' | 'tickets' | 'plans' | 'customer-360' | 'chat'

interface UIState {
  sidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void

  activePage: Page
  setActivePage: (page: Page) => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),

  activePage: 'dashboard',
  setActivePage: (page) => set({ activePage: page }),
}))
