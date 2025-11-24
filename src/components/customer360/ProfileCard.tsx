'use client'

import type { Client360Response, Product } from '@/types/customer360'
import { Phone, Mail, MoreHorizontal, ExternalLink } from 'lucide-react'

type ProfileCardProps = {
  client: Client360Response['client']
  produtos: Product[]
}

export function ProfileCard({ client, produtos }: ProfileCardProps) {
  const initials = client.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const tags = ['Família com filhos', 'Profissional liberal', 'Investidor']

  const frases = [
    {
      text: 'Estava procurando um seguro de vida mais completo para minha família',
      date: 'Atendimento do dia 12/05/2025',
    },
    {
      text: 'O valor do meu seguro auto está muito caro comparado com outras empresas',
      date: 'Atendimento do dia 12/05/2025',
    },
  ]

  return (
    <div
      className="
      rounded-[28px] 
      bg-[#FFFFFF0D] 
      border border-white/10 
      px-8 py-8 
      flex flex-col gap-8"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="
          w-20 h-20 rounded-full
          bg-gradient-to-b from-[#4FA3FF] to-[#0059FF]
          flex items-center justify-center
          text-white text-2xl font-semibold
          shadow-[0_0_35px_rgba(59,130,246,0.6)]"
        >
          {initials}
        </div>

        <div>
          <p className="text-xl font-semibold text-white">{client.name}</p>
          <p className="text-sm text-white/60">{client.clientType}</p>
        </div>

        <div className="flex items-center gap-12 text-xs text-white/70">
          <ProfileAction icon={<Phone size={18} />} label="Telefonar" />
          <ProfileAction icon={<Mail size={18} />} label="Enviar e-mail" />
          <ProfileAction icon={<MoreHorizontal size={18} />} label="Ver mais" />
        </div>
      </div>

      <Divider />

      {/* Produtos */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-white text-sm">Produtos</p>
          <button className="text-white/40 hover:text-white text-lg leading-none">
            +
          </button>
        </div>

        <div className="space-y-3 text-sm">
          {produtos.map((p) => (
            <div key={p.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    p.status === 'Ativo' ? 'bg-[#00EC6A]' : 'bg-red-400'
                  }`}
                />
                <span
                  className={`${
                    p.status === 'Ativo'
                      ? 'text-white/90'
                      : 'text-white/40 line-through'
                  }`}
                >
                  {p.name}
                </span>
              </div>

              <div className="flex items-center gap-1 text-white/70">
                <span>R$ {p.value.toFixed(2).replace('.', ',')}/mês</span>
                <ExternalLink
                  size={16}
                  className="opacity-70 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Perfil tags */}
      <section>
        <p className="font-semibold text-white text-sm mb-3">Perfil</p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* Frases */}
      <section className="space-y-3">
        <p className="font-semibold text-white text-sm">Frases captadas</p>

        {frases.map((f) => (
          <div key={f.text} className="rounded-xl bg-white/[0.06] px-4 py-3">
            <p className="text-sm text-white/90">&quot;{f.text}&quot;</p>
            <p className="pt-2 text-[10px] text-white/40">{f.date}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

function ProfileAction({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  )
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />
}
