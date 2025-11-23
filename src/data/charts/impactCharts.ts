import type { ApexOptions } from 'apexcharts'

export const IMPACT_CHART_SERIES = [42, 26, 18, 9, 5]

export const IMPACT_CHART_OPTIONS: ApexOptions = {
  chart: {
    type: 'donut',
    toolbar: { show: false },
  },
  labels: [
    'Automóvel',
    'Residencial',
    'Viagem',
    'Combo resi + auto',
    'Profissional',
  ],
  legend: { show: false },
  dataLabels: { enabled: false },
  stroke: { width: 0 },

  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          name: { show: false },
          value: {
            show: true,
            fontSize: '18px',
            fontWeight: 600,
            color: '#F9FAFB',
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: 'Impacto',
            fontSize: '12px',
            color: '#9CA3AF',
            formatter: () => '100%',
          },
        },
      },
    },
  },

  colors: ['#22D3EE', '#3B82F6', '#1D4ED8', '#60A5FA', '#4ADE80'],

  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'diagonal1',
      shadeIntensity: 0.7,
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 50, 100],
    },
  },

  tooltip: {
    theme: 'dark',
    y: { formatter: (val) => `${val}%` },
  },
}
