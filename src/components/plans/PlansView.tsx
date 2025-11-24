'use client'

import { useEffect, useState, useMemo } from 'react'
import axios from '@/services/api'
import type { PlanApiResponse, ExtraCoverage } from '@/types/plan'
import SliderField from './SliderField'

const extras: ExtraCoverage[] = [
  { id: 'glass', label: 'Cobertura de vidros', price: 15.9 },
  { id: 'car-reserve', label: 'Carro reserva', price: 29.9 },
  { id: 'third-party', label: 'Danos a terceiros', price: 39.9 },
]

// TAG BENEFÍCIOS (ESTILO Figma)
function BenefitTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs">
      <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
      {label}
    </div>
  )
}

function IndicatorCard({
  name,
  conversion,
  roi,
  value,
}: {
  name: string
  conversion: number
  roi: number
  value: number
}) {
  return (
    <div className="rounded-2xl bg-[#FFFFFF0D] border border-white/5 p-4 flex items-center justify-between w-full">
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-white/60 mt-1">
          Conversão: <span className="text-green-400">{conversion}%</span> ·
          ROI: <span className="text-green-400">{roi}%</span>
        </p>
      </div>

      <p className="text-lg font-semibold text-white">
        R$ {value.toFixed(2).replace('.', ',')}
      </p>
    </div>
  )
}

export default function PlansView() {
  const [data, setData] = useState<PlanApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  const [selectedPlan, setSelectedPlan] = useState('Básico')
  const [vehicleValue, setVehicleValue] = useState(50000)
  const [age, setAge] = useState(30)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('/plan.json')
        setData(response.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [])

  const plan = useMemo(
    () => data?.plansIndicators.find((p) => p.name === selectedPlan),
    [data, selectedPlan],
  )

  const extrasTotal = useMemo(
    () =>
      extras
        .filter((e) => selectedExtras.includes(e.id))
        .reduce((acc, item) => acc + item.price, 0),
    [selectedExtras],
  )

  const basePrice = plan?.value ?? 0

  const riskFactor = useMemo(() => {
    const vehicleFactor = vehicleValue / 100000
    const ageFactor = age < 25 ? 1.2 : age < 40 ? 1 : 0.9
    return vehicleFactor * ageFactor
  }, [vehicleValue, age])

  const finalPrice = useMemo(
    () => Number((basePrice * (1 + riskFactor) + extrasTotal).toFixed(2)),
    [basePrice, riskFactor, extrasTotal],
  )

  if (loading)
    return <p className="text-sm text-white/60">Carregando simulador...</p>
  if (!data)
    return <p className="text-sm text-red-400">Falha ao carregar planos.</p>

  return (
    <div className="w-full space-y-8 p-8 rounded-3xl">
      {/* SEÇÃO PRINCIPAL */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* COLUNA GRANDE — PLANOS + SLIDERS */}
        <div className="xl:col-span-2 space-y-6">
          {/* Seleção de planos */}
          <div className="rounded-3xl bg-[#FFFFFF0D] border border-white/10 p-6 space-y-4 shadow-lg">
            <p className="text-white font-semibold text-lg">
              Planos personalizados
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.plansIndicators.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setSelectedPlan(p.name)}
                  className={`
                    relative rounded-2xl border px-6 py-4 text-left min-w-[180px] transition-all
                    ${
                      selectedPlan === p.name
                        ? 'border-[#38bdf8] bg-[#0b1120]'
                        : 'border-white/10 bg-[#020617] hover:bg-[#0b1120]/40'
                    }
                  `}
                >
                  {p.name === 'Premium' && (
                    <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/20">
                      Recomendado
                    </span>
                  )}

                  <p className="text-xs text-white/60 uppercase tracking-wide">
                    Plano
                  </p>
                  <p className="text-lg font-semibold text-white">{p.name}</p>
                  <p className="text-sm text-white/70 mt-1">
                    Conversão {p.conversion}% · ROI {p.roi}%
                  </p>
                  <p className="text-sm mt-2">
                    A partir de{' '}
                    <span className="font-semibold">
                      R$ {p.value.toFixed(2).replace('.', ',')}
                    </span>
                  </p>
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 gap-6 pt-6">
              <SliderField
                label="Valor do veículo"
                min={20000}
                max={200000}
                step={5000}
                value={vehicleValue}
                onChange={setVehicleValue}
                format={(v) =>
                  `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`
                }
              />

              <SliderField
                label="Idade do cliente"
                min={18}
                max={80}
                step={1}
                value={age}
                onChange={setAge}
                format={(v) => `${v} anos`}
              />
            </div>

            {/* Benefícios inclusos */}
            <div className="mt-6">
              <p className="text-white mb-5">Benefícios inclusos</p>
              <div className="flex flex-wrap gap-2">
                {data.includedBenefits.map((b) => (
                  <BenefitTag key={b} label={b} />
                ))}
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="rounded-3xl bg-[#FFFFFF0D] border border-white/10 p-6 space-y-4">
            <p className="text-white font-semibold">Coberturas adicionais</p>

            <div className="space-y-3">
              {extras.map((extra) => {
                const checked = selectedExtras.includes(extra.id)
                return (
                  <label
                    key={extra.id}
                    className="flex items-center justify-between gap-2 text-sm text-white/80"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedExtras((prev) => [...prev, extra.id])
                          } else {
                            setSelectedExtras((prev) =>
                              prev.filter((id) => id !== extra.id),
                            )
                          }
                        }}
                        className="accent-[#38BDF8]"
                      />
                      <span>{extra.label}</span>
                    </div>

                    <span className="text-white/70">
                      + R$ {extra.price.toFixed(2).replace('.', ',')}
                    </span>
                  </label>
                )
              })}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — INDICADORES + IA */}
        <div className="space-y-6">
          {data.plansIndicators.map((p) => (
            <IndicatorCard
              key={p.name}
              name={p.name}
              conversion={p.conversion}
              roi={p.roi}
              value={p.value}
            />
          ))}

          {/* Resultado IA */}
          <div className="rounded-3xl bg-[#FFFFFF0D] border border-[#38bdf8]/40 p-6 space-y-3 shadow-lg">
            <p className="text-xs text-white/60 uppercase">
              Cotação sugerida pela IA
            </p>

            <p className="text-3xl font-semibold text-white">
              R$ {finalPrice.toFixed(2).replace('.', ',')}
            </p>

            <p className="text-sm text-white/70">
              Recomendamos o plano{' '}
              <span className="font-semibold text-white">{selectedPlan}</span>{' '}
              considerando análise de perfil e coberturas adicionais.
            </p>

            <ul className="text-xs text-white/60 list-disc list-inside space-y-1">
              <li>Ajuste baseado no valor do veículo</li>
              <li>Consideração de risco conforme idade</li>
              <li>Aplicação incremental das coberturas extras</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
