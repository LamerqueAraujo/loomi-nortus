'use client'

import { Home, BarChart2, Ticket, UserCircle, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 bg-[#11192F] p-8 flex flex-col justify-between">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-[#3BA7F3]">Nortus</h1>

        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 text-white/80 hover:text-white"
          >
            <Home size={20} /> Dashboard
          </Link>

          <Link
            href="/tickets"
            className="flex items-center gap-3 text-white/80 hover:text-white"
          >
            <Ticket size={20} /> Tickets
          </Link>

          <Link
            href="/clientes"
            className="flex items-center gap-3 text-white/80 hover:text-white"
          >
            <UserCircle size={20} /> Clientes
          </Link>

          <Link
            href="/kpis"
            className="flex items-center gap-3 text-white/80 hover:text-white"
          >
            <BarChart2 size={20} /> KPIs
          </Link>
        </nav>
      </div>

      <button className="flex items-center gap-3 text-red-400 hover:text-red-300">
        <LogOut size={20} /> Sair
      </button>
    </aside>
  )
}
