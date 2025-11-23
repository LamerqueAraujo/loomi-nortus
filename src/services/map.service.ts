import api from './api'
import type { MapApiResponse } from '@/types/dashboard/map'

export async function fetchMapData() {
  const { data } = await api.get<MapApiResponse>('/map.json')
  return data.data
}
