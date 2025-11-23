import type { Kpi } from '@/types/dashboard'

export const KPI_LIST: Kpi[] = [
  {
    label: 'ARPU',
    value: 'R$ 320,50',
    trend: '+12%',
    trendColor: 'neon-blue',
  },
  {
    label: 'Conversão IA',
    value: '68,5%',
    trend: '+8,2%',
    trendColor: 'neon-green',
  },
  {
    label: 'Retenção',
    value: '85%',
    trend: '+2,5%',
    trendColor: 'neon-cyan',
  },
  {
    label: 'Taxa de Churn',
    value: '3,2%',
    trend: '-1,5%',
    trendColor: 'neon-pink',
  },
]
