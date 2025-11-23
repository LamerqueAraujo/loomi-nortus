'use client'

import { useEffect, useMemo, useState } from 'react'
import { useDashboardStore } from '@/stores/dashboard.store'
import ActiveClientsTable from './ActiveClientsTable'
import SelectWithIcon from '@/components/ui/SelectWithIcon' // 👈 importar aqui

export default function ActiveClients() {
  const {
    activeClients,
    activeClientsFilters,
    loadingActiveClients,
    errorActiveClients,
    fetchActiveClients,
  } = useDashboardStore()

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('Todos')
  const [secureType, setSecureType] = useState('Todos')
  const [location, setLocation] = useState('Todos')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  useEffect(() => {
    fetchActiveClients()
  }, [fetchActiveClients])

  const filteredData = useMemo(() => {
    const term = search.toLowerCase()

    let result = activeClients.filter((client) => {
      const matchesSearch =
        !term ||
        client.name.toLowerCase().includes(term) ||
        client.email.toLowerCase().includes(term)

      const matchesStatus = status === 'Todos' || client.status === status
      const matchesType =
        secureType === 'Todos' || client.product === secureType
      const matchesLocation = location === 'Todos' || client.region === location

      return matchesSearch && matchesStatus && matchesType && matchesLocation
    })

    result = result.sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    )

    return result
  }, [activeClients, search, status, secureType, location, sortOrder])

  // opções com fallback (evita quebrar enquanto a API não carregou)
  const statusOptions = activeClientsFilters?.status ?? ['Todos']
  const typeOptions = activeClientsFilters?.secureType ?? ['Todos']
  const locationOptions = activeClientsFilters?.locations ?? ['Todos']

  return (
    <section className="w-full rounded-2xl bg-[#FFFFFF0D] border border-white/10 px-6 py-8 flex flex-col gap-4">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-white">Clientes ativos</h2>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {/* busca */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-[#050816] border border-white/10 px-4 py-2 text-sm text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60"
            />
          </div>

          {/* filtros */}
          <div className="flex flex-wrap gap-2">
            <SelectWithIcon
              value={status}
              onChange={setStatus}
              options={statusOptions}
            />

            <SelectWithIcon
              value={secureType}
              onChange={setSecureType}
              options={typeOptions}
            />

            <SelectWithIcon
              value={location}
              onChange={setLocation}
              options={locationOptions}
            />
          </div>
        </div>
      </header>

      {loadingActiveClients && (
        <p className="text-sm text-white/60">Carregando clientes...</p>
      )}

      {errorActiveClients && !loadingActiveClients && (
        <p className="text-sm text-red-400">{errorActiveClients}</p>
      )}

      {!loadingActiveClients && !errorActiveClients && (
        <ActiveClientsTable
          data={filteredData}
          sortOrder={sortOrder}
          toggleSort={toggleSort}
        />
      )}
    </section>
  )
}
