export function ImpactDetails() {
  const data = [
    { segmento: 'Automóvel', valor: '42%', cor: '#00C2FF' },
    { segmento: 'Residencial', valor: '26%', cor: '#007BFF' },
    { segmento: 'Viagem', valor: '18%', cor: '#0057D9' },
    { segmento: 'Combo resi + auto', valor: '9%', cor: '#66B8FF' },
    { segmento: 'Profissional', valor: '5%', cor: '#4ADE80' },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Detalhamento por segmento</h2>

      <ul className="space-y-3">
        {data.map((item) => (
          <li
            key={item.segmento}
            className="flex items-center justify-between bg-white/5 p-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.cor }}
              />
              <span>{item.segmento}</span>
            </div>

            <span className="font-semibold">{item.valor}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
