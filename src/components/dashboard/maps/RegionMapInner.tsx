'use client'

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import { fetchMapData } from '@/services/map.service'
import type { MapLocation } from '@/types/dashboard/map'
import SelectWithIcon from '@/components/ui/SelectWithIcon'

export default function RegionMapInner() {
  const [locations, setLocations] = useState<MapLocation[]>([])
  const [center, setCenter] = useState<[number, number]>([-8.0539, -34.8811])
  const [zoom, setZoom] = useState(12)

  const [filterLocal, setFilterLocal] = useState('Todos os locais')
  const [filterType, setFilterType] = useState('Todos os tipos')

  useEffect(() => {
    async function load() {
      const data = await fetchMapData()

      // API → invertendo (lng, lat) para (lat, lng)
      setCenter([data.center[1], data.center[0]])
      setZoom(data.zoom)
      setLocations(data.locations)
    }
    load()
  }, [])

  const filtered = locations.filter((loc) => {
    const matchLocal =
      filterLocal === 'Todos os locais' || loc.name.includes(filterLocal)
    const matchType =
      filterType === 'Todos os tipos' || loc.category === filterType
    return matchLocal && matchType
  })

  return (
    <section className="w-full flex flex-col gap-4 p-6 rounded-2xl bg-[#FFFFFF0D] border border-white/10 ">
      {/* header */}
      <header className="flex flex-wrap items-center justify-between">
        <h2 className="text-lg font-bold text-white ">
          Mapa de clientes por região
        </h2>

        <div className="flex gap-3 ">
          <SelectWithIcon
            value={filterLocal}
            onChange={setFilterLocal}
            options={['Todos os locais', ...locations.map((l) => l.name)]}
          />

          <SelectWithIcon
            value={filterType}
            onChange={setFilterType}
            options={[
              'Todos os tipos',
              ...Array.from(new Set(locations.map((l) => l.category))),
            ]}
          />
        </div>
      </header>

      {/* mapa */}
      <div className="relative h-[420px] rounded-xl overflow-hidden border border-white/5">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom
          className="w-full h-full"
        >
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {filtered.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.coordinates[1], loc.coordinates[0]]}
              icon={L.divIcon({
                className: '',
                html: `<div style="
                    width:14px;
                    height:14px;
                    background:${loc.color};
                    border-radius:50%;
                    border:2px solid white;
                    box-shadow:0 0 6px rgba(0,0,0,0.4);" ></div>`,
              })}
            >
              <Tooltip>
                <b>{loc.name}</b>
                <br />
                {loc.category}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
