import { create } from 'zustand'
import type { UIState } from '@/types/ui/ui.store'
import type { SidebarPage } from '@/types/ui/layout.d'

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  activePage: 'dashboard',

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  closeSidebar: () => set(() => ({ sidebarOpen: false })),

  setActivePage: (page: SidebarPage) => set(() => ({ activePage: page })),
}))
