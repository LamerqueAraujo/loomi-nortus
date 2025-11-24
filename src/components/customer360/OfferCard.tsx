'use client'

type OfferCardProps = {
  variant: 'primary' | 'secondary'
  title: string
  description: string
  price: string
}

export function OfferCard({
  variant,
  title,
  description,
  price,
}: OfferCardProps) {
  const isPrimary = variant === 'primary'

  return (
    <div
      className={
        isPrimary
          ? 'rounded-[24px] bg-gradient-to-br from-[#1FB1FF] px-5 py-5 text-white'
          : 'rounded-[24px] bg-[#FFFFFF0D] border border-white/15 px-5 py-5 text-white"'
      }
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs mt-2 opacity-90">{description}</p>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex flex-col">
          <span className="text-[11px] opacity-80 mb-1">Por apenas:</span>
          <span className="font-bold text-base">{price}</span>
        </div>

        <button
          className={
            isPrimary
              ? 'px-5 py-2 rounded-full bg-[#FFFFFF0D] text-xs font-semibold'
              : 'px-5 py-2 rounded-full border border-white/50 text-xs font-semibold hover:bg-white/10 transition-colors'
          }
        >
          Simular
        </button>
      </div>
    </div>
  )
}
