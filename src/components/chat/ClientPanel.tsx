'use client'

import ClientHeaderCard from './cards/ClientHeaderCard'
import IASuggestionCard from './cards/IASuggestionCard'
import IAAnalysisCard from './cards/IAAnalysisCard'
import NextStepsCard from './cards/NextStepsCard'
import RecommendedOfferCard from './cards/RecommendedOfferCard'

export default function ClientPanel() {
  return (
    <div className="flex flex-col gap-5">
      <ClientHeaderCard />
      <IASuggestionCard />
      <IAAnalysisCard />
      <NextStepsCard />
      <RecommendedOfferCard />
    </div>
  )
}
