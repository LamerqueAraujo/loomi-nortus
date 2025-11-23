import type { KpiTrend } from '@/types/dashboard/dashboard'

// mock realista baseado em ARPU e demais KPIs do dashboard
export const KPI_TREND_DATA: KpiTrend = {
  labels: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],

  arpu: {
    name: 'ARPU',
    data: [120, 130, 150, 175, 190, 160, 170, 185, 210, 240, 260, 250],
  },

  churn: {
    name: 'Churn',
    data: [5, 6, 5, 4, 6, 5, 5, 4, 3, 4, 3, 2],
  },

  retention: {
    name: 'Retenção',
    data: [68, 70, 69, 72, 73, 74, 75, 77, 78, 79, 80, 82],
  },

  conversion: {
    name: 'Conversão',
    data: [8, 10, 12, 14, 15, 16, 17, 18, 20, 22, 25, 27],
  },
}
