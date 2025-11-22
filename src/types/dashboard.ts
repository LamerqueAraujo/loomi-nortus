export type DashboardPageKey =
  | 'dashboard'
  | 'tickets'
  | 'plans'
  | 'customer-360'
  | 'chat'

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
