export type ActiveClientStatus = 'Ativo' | 'Pendente' | 'Inativo'

export type ActiveClientApi = {
  id: string
  name: string
  email: string
  secureType: string
  monthValue: number
  status: string
  renewalDate: string
  location: string
}

export type ActiveClient = {
  id: string
  name: string
  email: string
  product: string
  valuePerMonth: number
  status: ActiveClientStatus
  renewal: string
  region: string
}

export type ActiveClientsFiltersOptions = {
  status: string[]
  secureType: string[]
  locations: string[]
}
