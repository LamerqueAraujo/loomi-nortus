export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <KpiCard label="ARPU" value="R$ 320,50" trend="+12%" trendColor="green" />
      <KpiCard
        label="Conversão IA"
        value="68,5%"
        trend="+8,2%"
        trendColor="green"
      />
      <KpiCard label="Retenção" value="85%" trend="+2,5%" trendColor="green" />
      <KpiCard
        label="Taxa de Churn"
        value="3,2%"
        trend="-1,5%"
        trendColor="red"
      />
    </div>
  )
}

function KpiCard({ label, value, trend, trendColor }) {
  return (
    <div className="p-6 rounded-2xl bg-[#11192F] space-y-1">
      <span className="text-sm text-white/60">{label}</span>
      <p className="text-xl font-bold">{value}</p>
      <p
        className={`text-sm ${trendColor === 'green' ? 'text-green-400' : 'text-red-400'}`}
      >
        {trend} no período
      </p>
    </div>
  )
}
