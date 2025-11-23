import type { KpiEvolutionOptions } from '@/types/dashboard/dashboard'
import type { ApexOptions } from 'apexcharts'

export const KPI_TREND_OPTIONS = (opts: KpiEvolutionOptions): ApexOptions => {
  const color = opts.color ?? '#14F0FF'

  return {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: {
        enabled: true,
        dynamicAnimation: { speed: 300 },
      },
    },

    stroke: {
      width: 4,
      curve: 'smooth',
      colors: [color],
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [color],
        shadeIntensity: 0.8,
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
      colors: [color],
    },

    markers: {
      size: 6,
      colors: ['#0A1222'], // fundo
      strokeColors: color,
      strokeWidth: 3,
      hover: { size: 7 },
    },

    grid: {
      borderColor: 'rgba(255,255,255,0.08)',
      strokeDashArray: 4,
    },

    tooltip: {
      theme: 'dark',
      y: {
        formatter: (value: number) => `${value}k`,
      },
    },

    xaxis: {
      categories: opts.xaxisLabels,
      labels: { style: { colors: '#FFFFFF90' } },
    },

    yaxis: {
      labels: { style: { colors: '#FFFFFF50' } },
    },
  }
}
