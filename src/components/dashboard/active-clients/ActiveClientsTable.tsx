'use client'

import type { ActiveClient } from '@/types/dashboard/active-clients'
import { useEffect, useState } from 'react'

type Props = {
  data: ActiveClient[]
  sortOrder: 'asc' | 'desc'
  toggleSort: () => void
}

export default function ActiveClientsTable({
  data,
  sortOrder,
  toggleSort,
}: Props) {
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsChanging(true)
    const timeout = setTimeout(() => setIsChanging(false), 150)
    return () => clearTimeout(timeout)
  }, [data])

  return (
    <div
      className="
        overflow-x-auto 
        rounded-2xl 
        bg-[#FFFFFF1F] 
        border border-white/5
        min-h-[480px]
        transition-all duration-300
      "
    >
      <table className="w-full text-left text-sm text-white/80">
        <thead className="text-xs uppercase text-white/40 border-b border-white/10">
          <tr>
            <th
              className="px-6 py-3 font-medium cursor-pointer"
              onClick={toggleSort}
            >
              <div className="flex items-center gap-1">
                Nome
                <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
              </div>
            </th>

            <th className="px-6 py-3 font-medium">E-mail</th>
            <th className="px-6 py-3 font-medium">Tipo de Seguro</th>
            <th className="px-6 py-3 font-medium">Valor mensal</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Renovação</th>
            <th className="px-6 py-3 font-medium">Região</th>
          </tr>
        </thead>

        <tbody
          className={`
            transition-opacity duration-300 
            ${isChanging ? 'opacity-40' : 'opacity-100'}
          `}
        >
          {data.map((client) => (
            <tr
              key={client.id}
              className="border-t border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="px-6 py-3">
                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    {client.name}
                  </span>
                  <span className="font-semibold text-white/50">
                    {client.email}
                  </span>
                </div>
              </td>

              <td className="px-6 py-3 font-semibold hidden lg:table-cell">
                {client.email}
              </td>

              <td className="px-6 py-3 font-semibold">{client.product}</td>

              <td className="px-6 py-3 font-semibold">
                {client.valuePerMonth.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </td>

              <td className="px-6 py-3 font-semibold">
                <span
                  className={
                    'inline-flex rounded-full px-3 py-1 text-xs font-semibold ' +
                    (client.status === 'Ativo'
                      ? 'bg-emerald-500/10 text-emerald-300'
                      : client.status === 'Pendente'
                        ? 'bg-amber-500/10 text-amber-300'
                        : 'bg-red-500/10 text-red-300')
                  }
                >
                  {client.status}
                </span>
              </td>

              <td className="px-6 py-3 font-semibold">{client.renewal}</td>
              <td className="px-6 py-3 font-semibold">{client.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
