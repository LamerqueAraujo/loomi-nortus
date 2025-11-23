import { create } from 'zustand'
import type {
  ActiveClient,
  ActiveClientsFiltersOptions,
} from '@/types/dashboard/active-clients'
import { fetchDashboardActiveClients } from '@/services/dashboard.service'

type DashboardState = {
  activeClients: ActiveClient[]
  activeClientsFilters: ActiveClientsFiltersOptions | null
  loadingActiveClients: boolean
  errorActiveClients: string | null
  fetchData: () => Promise<void>
  fetchActiveClients: () => Promise<void>
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  activeClients: [],
  activeClientsFilters: null,
  loadingActiveClients: false,
  errorActiveClients: null,

  fetchActiveClients: async () => {
    try {
      set({ loadingActiveClients: true })
      const { clients, filters } = await fetchDashboardActiveClients()
      set({
        activeClients: clients,
        activeClientsFilters: filters,
        loadingActiveClients: false,
      })
    } catch (err) {
      console.error(err)
      set({
        loadingActiveClients: false,
        errorActiveClients: 'Erro ao carregar clientes ativos',
      })
    }
  },

  fetchData: async () => {
    const { fetchActiveClients } = get()
    await fetchActiveClients()
  },
}))
