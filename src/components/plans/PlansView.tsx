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
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Simulador de Planos</h1>
        <p className="text-sm text-white/60">
          Ajuste os parâmetros para encontrar a melhor recomendação.
        </p>
      </header>
      {/* Seleção de plano */}
      <div className="flex flex-wrap gap-4">
        {data.plansIndicators.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setSelectedPlan(p.name)}
            className={`
              rounded-2xl border px-4 py-3 text-left min-w-[180px]
              ${
                selectedPlan === p.name
                  ? 'border-[#38bdf8] bg-[#0b1120]'
                  : 'border-white/10 bg-[#020617] hover:bg-[#020617]/80'
              }
            `}
          >
            <p className="text-xs text-white/60 uppercase tracking-wide">
              Plano
            </p>
            <p className="text-lg font-semibold">{p.name}</p>
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sliders */}
        <div className="rounded-2xl border border-white/10 bg-[#020617] p-4 space-y-4">
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

          <div className="mt-4">
            <p className="text-xs text-white/60 mb-1">Benefícios inclusos</p>
            <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
              {data.includedBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Extras */}
        <div className="rounded-2xl border border-white/10 bg-[#020617] p-4 space-y-3">
          <p className="text-sm font-semibold">Coberturas adicionais</p>
          <div className="space-y-2">
            {extras.map((extra) => {
              const checked = selectedExtras.includes(extra.id)
              return (
                <label
                  key={extra.id}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <div className="flex items-center gap-2">
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

        {/* Resultado */}
        <div className="rounded-2xl border border-[#38bdf8]/40 bg-[#020617] p-4 space-y-3">
          <p className="text-xs text-white/60 uppercase">
            Cotação sugerida pela IA
          </p>
          <p className="text-3xl font-semibold">
            R$ {finalPrice.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-sm text-white/70">
            Com base no perfil do cliente, sugerimos o plano{' '}
            <span className="font-semibold">{selectedPlan}</span> com as
            coberturas selecionadas.
          </p>
          <ul className="text-xs text-white/60 list-disc list-inside space-y-1">
            <li>Considera risco por valor do veículo</li>
            <li>Ajusta o prêmio conforme a idade do cliente</li>
            <li>Aplica extras escolhidos de forma incremental</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
