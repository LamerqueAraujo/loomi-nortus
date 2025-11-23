export type DashboardPageKey =
  | 'dashboard'
  | 'tickets'
  | 'plans'
  | 'customer-360'
  | 'chat'

export type KpiColor = 'neon-blue' | 'neon-green' | 'neon-cyan' | 'neon-pink'

export interface Kpi {
  label: string
  value: string
  trend: string
  trendColor: KpiColor
}

export type KpiSeries = {
  name: string
  data: number[]
}

export type KpiTrend = {
  labels: string[]
  arpu: KpiSeries
  churn: KpiSeries
  retention: KpiSeries
  conversion: KpiSeries
}

export interface ImpactChartProps {
  title?: string
}

export interface KpiEvolutionSeries {
  name: string
  data: number[]
}

export interface KpiEvolutionOptions {
  xaxisLabels: string[]
  color?: string
}
