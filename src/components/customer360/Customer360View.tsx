'use client'

import { useEffect, useState } from 'react'
import axios from '@/services/api'
import type { Client360Response, Product, Metric } from '@/types/customer360'

export default function Customer360View() {
  const [data, setData] = useState<Client360Response | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchView() {
      try {
        const res = await axios.get('/360-view.json')
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
    <div className="space-y-6">
      {/* Cabeçalho */}
      <header>
        <h1 className="text-2xl font-semibold">Visão 360º do Cliente</h1>
        <p className="text-sm text-white/60">
          Perfil, produtos contratados e insights inteligentes.
        </p>
      </header>

      {/* Perfil */}
      <ProfileSection client={client} />

      {/* Produtos */}
      <ProductsSection produtos={produtos} />

      {/* Sugestões de IA */}
      <InsightsSection />
    </div>
  )
}

/* ================================
      SUBCOMPONENTES ORGANIZADOS
================================ */

function ProfileSection({ client }: { client: Client360Response['client'] }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Dados do cliente */}
      <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-[#020617] p-4 space-y-3">
        <p className="text-xs text-white/60 uppercase">Perfil do cliente</p>
        <p className="text-xl font-semibold">{client.name}</p>
        <p className="text-sm text-white/70">{client.clientType}</p>
      </div>

      {/* Métricas */}
      <div className="rounded-2xl border border-white/10 bg-[#020617] p-4 space-y-2">
        <p className="text-xs text-white/60 uppercase">Indicadores</p>

        <MetricRow label="Lifetime value" value="R$ 2.450,00" />
        <MetricRow label="Score de expansão" value="Alto" />
        <MetricRow label="Risco de churn" value="Baixo" />
      </div>
    </section>
  )
}

function ProductsSection({ produtos }: { produtos: Product[] }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#020617] p-4 space-y-3">
      <p className="text-sm font-semibold">Produtos vinculados</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtos.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-white/10 bg-[#020617] px-3 py-3 space-y-1"
          >
            <p className="text-sm font-semibold">{p.name}</p>

            <p className="text-xs text-white/60">
              R$ {p.value.toFixed(2).replace('.', ',')}
            </p>

            <span
              className={`
                inline-flex mt-1 rounded-full px-2 py-1 text-[10px] font-medium
                ${
                  p.status === 'Ativo'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-white/10 text-white/60'
                }
              `}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function InsightsSection() {
  return (
    <section className="rounded-2xl border border-[#38bdf8]/40 bg-[#020617] p-4 space-y-3">
      <p className="text-xs text-white/60 uppercase">
        Sugestões da IA para expansão
      </p>

      <p className="text-sm text-white/80">
        Com base no perfil atual, sugerimos reforçar coberturas de{' '}
        <span className="font-semibold">auto + residência</span> e explorar
        oportunidades em <span className="font-semibold">seguro viagem</span>.
      </p>

      <ul className="list-disc list-inside text-xs text-white/60 space-y-1">
        <li>
          Cliente com bom histórico de pagamento e múltiplos produtos ativos.
        </li>
        <li>Alta probabilidade de aceitar upsell com desconto progressivo.</li>
        <li>Risco de churn baixo, porém sensível a aumentos de mensalidade.</li>
      </ul>
    </section>
  )
}

/* ================================
    COMPONENTE MÉTRICA SEPARADO
================================ */

function MetricRow({ label, value }: Metric) {
  return (
    <div className="flex items-center justify-between text-xs text-white/70">
      <span>{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  )
}
