type Props = {
  name: string
  color: string
  top: string
  left: string
}

export type MapLocation = {
  id: string
  name: string
  description: string
  coordinates: [number, number]
  category: string
  address: string
  icon: string
  color: string
}

export type MapDataBlock = {
  center: [number, number]
  zoom: number
  locations: MapLocation[]
}

export type MapApiResponse = {
  data: MapDataBlock
}
