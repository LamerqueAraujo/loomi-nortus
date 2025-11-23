'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import { fetchKpiTrend } from '@/services/kpiTrend.service'
import { KPI_TREND_OPTIONS } from '@/data/charts/kpiTrendOptions'
import type { KpiKey } from '@/types/dashboard/dashboard'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BUTTONS: Record<KpiKey, string> = {
  arpu: 'ARPU',
  retention: 'Retenção',
  conversion: 'Conversação',
  churn: 'Churn',
}

export default function KpiEvolutionChart() {
  const [active, setActive] = useState<KpiKey>('arpu')
  const [labels, setLabels] = useState<string[]>([])
  const [data, setData] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const trend = await fetchKpiTrend()

      setLabels(trend.labels)
      setData(trend[active].data)

      setTimeout(() => setLoading(false), 300)
    }
    load()
  }, [active])

  const options = KPI_TREND_OPTIONS({
    xaxisLabels: labels,
    color: '#14F0FF',
  })

  return (
    <section className="w-full rounded-2xl bg-[ #ffffff0d] border border-white/10 p-6 flex flex-col gap-8 shadow-[0_0_25px_rgba(20,240,255,0.08)]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Evolução dos KPI&apos;s
        </h2>

        <div className="flex gap-2">
          {Object.entries(BUTTONS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key as KpiKey)}
              className={clsx(
                'px-4 py-2 text-xs rounded-full transition border border-white/10',
                active === key
                  ? 'bg-[#14A7FF] text-white shadow-[0_0_12px_rgba(20,167,255,0.6)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Skeleton */}
      {loading ? (
        <div className="w-full h-[260px] animate-pulse bg-[#0A0F1C] rounded-xl" />
      ) : (
        <div className="w-full h-[260px]">
          <Chart
            type="area"
            height="100%"
            series={[{ name: BUTTONS[active], data }]}
            options={options}
          />
        </div>
      )}
    </section>
  )
}
