'use client'

import { OfferCard } from './OfferCard'

export default function OffersColumn() {
  return (
    <div className="flex flex-col gap-4">
      <OfferCard
        variant="primary"
        title="Seguro de vida individual"
        description="Proteção financeira completa com cobertura por morte e doenças graves."
        price="R$ 127,50/mês"
      />

      <OfferCard
        variant="secondary"
        title="Upgrade do seguro residencial"
        description="Plano completo com proteção contra danos elétricos e assistência 24h."
        price="R$ 127,50/mês"
      />
    </div>
  )
}
