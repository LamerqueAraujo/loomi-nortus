'use client'

import { useEffect, useState } from 'react'
import api from '@/services/api'
import type { Client360Response, Product } from '@/types/customer360'
import { Phone, Mail, MoreHorizontal, ExternalLink } from 'lucide-react'

export default function Customer360View() {
  const [data, setData] = useState<Client360Response | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchView() {
      try {
        const res = await api.get<Client360Response>('/360-view.json')
        setData(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchView()
  }, [])

  if (loading) {
    return <p className="text-sm text-white/60">Carregando visão 360º...</p>
  }

  if (!data) {
    return <p className="text-sm text-red-400">Falha ao carregar visão 360º.</p>
  }

  const { client, produtos } = data

  return (
    <div className="h-[calc(100vh-88px)] w-full overflow-hidden bg-[#020617]">
      <div className="h-full w-full overflow-y-auto pr-1">
        <header className="px-6 pt-6">
          <h1 className="text-2xl font-semibold text-white">Visão 360º</h1>
          <p className="text-sm text-white/60 mt-1">
            Visão integrada do cliente, produtos contratados e insights
            inteligentes.
          </p>
        </header>

        <main className="px-6 pb-8 pt-6 space-y-6">
          {/* GRID PRINCIPAL */}
          <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1fr)] gap-6">
            <ProfileCard client={client} produtos={produtos} />
            <AISuggestionCard />
            <RightOffersColumn />
          </section>

          <ClassificationSection />
        </main>
      </div>
    </div>
  )
}

type ProfileCardProps = {
  client: Client360Response['client']
  produtos: Product[]
}

function ProfileCard({ client, produtos }: ProfileCardProps) {
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
    <div className="rounded-[28px] bg-[#0B1221] border border-white/10 px-6 py-6 shadow-[0_0_32px_rgba(0,0,0,0.55)] flex flex-col gap-6">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#4FA3FF] to-[#0059FF] flex items-center justify-center text-white text-xl font-semibold shadow-[0_0_24px_rgba(59,130,246,0.7)]">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{client.name}</p>
          <p className="text-sm text-white/60">{client.clientType}</p>
        </div>

        <div className="flex items-center gap-10 mt-2 text-xs text-white/70">
          <ProfileAction icon={<Phone size={18} />} label="Telefonar" />
          <ProfileAction icon={<Mail size={18} />} label="Enviar e-mail" />
          <ProfileAction icon={<MoreHorizontal size={18} />} label="Ver mais" />
        </div>
      </div>

      <Divider />

      <section>
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-white text-sm">Produtos</p>
          <button className="text-white/40 hover:text-white transition-colors text-lg leading-none">
            +
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {produtos.map((p) => (
            <div key={p.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
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
                  size={14}
                  className="opacity-70 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section>
        <p className="font-semibold text-white text-sm mb-2">Perfil</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      <section className="space-y-3">
        <p className="font-semibold text-white text-sm">Frases captadas</p>
        {frases.map((f) => (
          <div key={f.text} className="rounded-xl bg-white/[0.06] px-4 py-3">
            <p className="text-xs text-white/90">&quot;{f.text}&quot;</p>
            <p className="mt-2 text-[10px] text-white/40">{f.date}</p>
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

function AISuggestionCard() {
  return (
    <div className="rounded-[28px] bg-[#0B1221] border border-white/10 px-6 py-6 shadow-[0_0_32px_rgba(0,0,0,0.55)] flex flex-col gap-4">
      {/* Header com tabs NBX / NBA / NBO */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Sugestão da IA</h2>

        <div className="flex items-center gap-2 text-[11px]">
          <SuggestionTab label="NBX" active={false} />
          <SuggestionTab label="NBA" active={false} />
          <SuggestionTab label="NBO" active />
        </div>
      </div>

      {/* Card interno */}
      <div className="mt-2 rounded-2xl bg-gradient-to-br from-[#151A2C] to-[#111827] border border-white/10 px-5 py-5 space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">Oferta recomendada</p>
          <p className="text-xs text-white/70">
            Seguro de vida individual com cobertura para doenças graves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mt-1">
          <div>
            <p className="text-white/50 uppercase text-[10px] tracking-wide">
              Valor recomendado
            </p>
            <p className="text-lg font-bold text-white mt-1">R$ 127,50/mês</p>
          </div>
          <div>
            <p className="text-white/50 uppercase text-[10px] tracking-wide">
              Probabilidade de conversão
            </p>
            <p className="text-lg font-bold text-[#00EC6A] mt-1">78%</p>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/10 mt-1">
          <p className="text-sm font-semibold text-white">Reason Why</p>
          <ul className="list-disc list-inside text-xs text-white/70 space-y-1">
            <li>
              Cliente tem perfil “profissional liberal” compatível com produto
            </li>
            <li>Idade em faixa de preço competitiva</li>
            <li>Já demonstrou preocupação com família em atendimentos</li>
            <li>Produto complementa portfólio atual sem sobreposição</li>
          </ul>
        </div>

        <div className="pt-3">
          <button className="px-6 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-sm text-white font-medium shadow-[0_0_18px_rgba(37,99,235,0.6)]">
            Simular conversa com IA
          </button>
        </div>
      </div>
    </div>
  )
}

function SuggestionTab({ label, active }: { label: string; active?: boolean }) {
  if (active) {
    return (
      <button className="px-4 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-semibold shadow-[0_0_14px_rgba(37,99,235,0.7)]">
        {label}
      </button>
    )
  }

  return (
    <button className="px-4 py-1 rounded-full bg-white/5 text-white/70 text-[11px] hover:bg-white/10 transition-colors">
      {label}
    </button>
  )
}

function RightOffersColumn() {
  return (
    <div className="flex flex-col gap-4">
      <OfferCard
        variant="primary"
        title="Seguro de vida individual"
        description="Proteção financeira completa com cobertura por morte e doenças graves."
        price="R$ 127,50/mês"
      />
      <OfferCard
        variant="secondary"
        title="Upgrade do seguro residencial"
        description="Plano completo com proteção contra danos elétricos e assistência 24h."
        price="R$ 127,50/mês"
      />
    </div>
  )
}

type OfferCardProps = {
  variant: 'primary' | 'secondary'
  title: string
  description: string
  price: string
}

function OfferCard({ variant, title, description, price }: OfferCardProps) {
  const isPrimary = variant === 'primary'

  return (
    <div
      className={
        isPrimary
          ? 'rounded-[24px] bg-gradient-to-br from-[#1FB1FF] via-[#1A7DFF] to-[#0F57FF] px-5 py-5 text-white shadow-[0_0_28px_rgba(37,99,235,0.8)]'
          : 'rounded-[24px] bg-[#0F172A] border border-white/15 px-5 py-5 text-white shadow-[0_0_24px_rgba(0,0,0,0.5)]'
      }
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs mt-2 opacity-90">{description}</p>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex flex-col">
          <span className="text-[11px] opacity-80 mb-1">Por apenas:</span>
          <span className="font-bold text-base">{price}</span>
        </div>

        <button
          className={
            isPrimary
              ? 'px-5 py-2 rounded-full bg-[#0B1221] text-xs font-semibold shadow-[0_0_14px_rgba(15,23,42,0.8)]'
              : 'px-5 py-2 rounded-full border border-white/50 text-xs font-semibold hover:bg-white/10 transition-colors'
          }
        >
          Simular
        </button>
      </div>
    </div>
  )
}

function ClassificationSection() {
  return (
    <section className="rounded-[28px] bg-[#0B1221] border border-white/10 px-6 py-6 shadow-[0_0_32px_rgba(0,0,0,0.6)] space-y-5">
      <h2 className="text-xl font-semibold text-white">
        Classificação inteligente
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Premium / Lifetime value */}
        <div className="rounded-2xl bg-gradient-to-b from-[#151A2C] to-[#0F172A] border border-white/10 px-5 py-4 flex flex-col justify-between">
          <div>
            <p className="text-sm text-white/70">Premium</p>
            <p className="text-xs text-white/40 mt-1">Lifetime value</p>
            <p className="text-2xl font-bold text-white mt-1">R$ 24.580,00</p>
          </div>
          <p className="mt-3 text-xs text-[#00EC6A]">
            11% probabilidade de churn
          </p>
        </div>

        {/* Score de expansão */}
        <ScoreBarCard
          label="Score de expansão"
          level="Alto"
          colorClass="bg-[#00EC6A]"
        />

        {/* Score de retenção */}
        <ScoreBarCard
          label="Score de retenção"
          level="Médio"
          colorClass="bg-[#FACC15]"
        />
      </div>
    </section>
  )
}

type ScoreBarCardProps = {
  label: string
  level: string
  colorClass: string
}

function ScoreBarCard({ label, level, colorClass }: ScoreBarCardProps) {
  return (
    <div className="rounded-2xl bg-[#111827] border border-white/10 px-5 py-4 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-white/80">{label}</p>
        <span className="px-3 py-0.5 rounded-full bg-white/10 text-[11px] text-white/80">
          {level}
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
        <div className={`${colorClass} h-full w-2/3`} />
      </div>
    </div>
  )
}
