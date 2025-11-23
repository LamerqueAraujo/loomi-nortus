'use client'

import { Phone, Mail, MoreHorizontal, ExternalLink } from 'lucide-react'
import type { Product } from '@/types/customer360'

/* Tipos internos para evitar ANY */
type Frase = {
  text: string
  date: string
}

type Cliente = {
  name: string
  clientType: string
  tags: string[]
}

type Props = {
  client: Cliente
  produtos: Array<
    Product & {
      color?: 'green' | 'yellow' | 'red'
    }
  >
  frases: Frase[]
}

export default function CustomerInfoCard({ client, produtos, frases }: Props) {
  const initials = client.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="rounded-3xl bg-[#0C1222] border border-white/10 p-6 w-full shadow-[0_0_40px_rgba(0,0,0,0.3)] space-y-6">
      {/* AVATAR + NOME */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#4FA3FF] to-[#0059FF] flex items-center justify-center text-white text-xl font-semibold shadow-lg">
          {initials}
        </div>

        <p className="mt-4 text-lg font-semibold text-white">{client.name}</p>
        <p className="text-sm text-white/60">{client.clientType}</p>

        <div className="flex items-center gap-10 mt-5 text-white/70 text-xs">
          <Action icon={<Phone size={18} />} label="Telefonar" />
          <Action icon={<Mail size={18} />} label="Enviar e-mail" />
          <Action icon={<MoreHorizontal size={18} />} label="Ver mais" />
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* PRODUTOS */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold">Produtos</p>
          <button className="text-white/40 hover:text-white">+</button>
        </div>

        <div className="space-y-3 text-sm">
          {produtos.map((p, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    p.color === 'green'
                      ? 'bg-[#00EC6A]'
                      : p.color === 'yellow'
                        ? 'bg-yellow-400'
                        : 'bg-red-400'
                  }`}
                />
                <span className="text-white/80">{p.name}</span>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <span>{p.value}</span>
                <ExternalLink
                  size={14}
                  className="opacity-70 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* TAGS */}
      <section>
        <p className="font-semibold mb-3">Perfil</p>

        <div className="flex flex-wrap gap-2">
          {client.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* FRASES CAPTADAS */}
      <section>
        <p className="font-semibold mb-3">Frases captadas</p>

        <div className="space-y-3">
          {frases.map((f, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4">
              <p className="text-sm text-white/90">&quot;{f.text}&quot;</p>
              <p className="text-[10px] text-white/40 mt-2">{f.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ACTION BUTTON */
function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-white">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />
}
