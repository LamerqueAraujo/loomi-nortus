'use client'

import { SummaryCardProps } from '@/types/tickets'

export default function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#020617] px-4 py-3">
      <p className="text-xs text-white/60">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  )
}
