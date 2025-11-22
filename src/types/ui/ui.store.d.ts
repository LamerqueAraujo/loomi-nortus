import type { SidebarPage } from './layout.d'

export interface UIState {
  sidebarOpen: boolean
  activePage: SidebarPage

  toggleSidebar: () => void
  closeSidebar: () => void
  setActivePage: (page: SidebarPage) => void
}
