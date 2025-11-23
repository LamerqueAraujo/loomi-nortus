import api from './api'
import type {
  ActiveClientApi,
  ActiveClient,
  ActiveClientsFiltersOptions,
  ActiveClientStatus,
} from '@/types/dashboard/active-clients'

type DashApiResponse = {
  activeClients: {
    filters: ActiveClientsFiltersOptions
    data: ActiveClientApi[]
  }
}

export async function fetchDashboardActiveClients(): Promise<{
  clients: ActiveClient[]
  filters: ActiveClientsFiltersOptions
}> {
  const { data } = await api.get<DashApiResponse>('/dash.json')

  const apiBlock = data.activeClients

  const clients: ActiveClient[] = apiBlock.data.map((client) => ({
    id: client.id,
    name: client.name,
    email: client.email,
    product: client.secureType,
    valuePerMonth: client.monthValue,
    status: client.status as ActiveClientStatus,
    renewal: client.renewalDate,
    region: client.location,
  }))

  return {
    clients,
    filters: apiBlock.filters,
  }
}
