type Props = {
  status: string
}

const colorMap: Record<string, string> = {
  Ativo: 'bg-emerald-500/20 text-emerald-400',
  Inativo: 'bg-red-500/20 text-red-400',
  Pendente: 'bg-yellow-500/20 text-yellow-400',
}

export default function StatusBadge({ status }: Props) {
  return (
    <span
      className={`
        px-3 py-1 rounded-full text-xs font-medium
        ${colorMap[status] ?? 'bg-white/20 text-white'}
      `}
    >
      {status}
    </span>
  )
}
