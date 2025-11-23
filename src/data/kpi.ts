import { Kpi } from '@/types/dashboard/dashboard'

export const KPI_LIST: Kpi[] = [
  {
    label: 'ARPU',
    value: 'R$ 320,50',
    trend: '+12% no período',
    trendColor: 'neon-green',
    arrow: 'up',
  },
  {
    label: 'Conversão IA',
    value: '68,5%',
    trend: '+8,2% no período',
    trendColor: 'neon-green',
    arrow: null,
  },
  {
    label: 'Retenção',
    value: '85%',
    trend: '+2,5% no período',
    trendColor: 'neon-green',
    arrow: null,
  },
  {
    label: 'Taxa de Churn',
    value: '3,2%',
    trend: '-1,5% no período',
    trendColor: 'neon-pink',
    arrow: 'down',
  },
]
