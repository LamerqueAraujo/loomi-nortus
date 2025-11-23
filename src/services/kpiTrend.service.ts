import { KPI_TREND_DATA } from '@/data/charts/kpiTrend'
import type { KpiTrend } from '@/types/dashboard/dashboard'

export async function fetchKpiTrend(): Promise<KpiTrend> {
  await new Promise((r) => setTimeout(r, 150))
  return KPI_TREND_DATA
}
