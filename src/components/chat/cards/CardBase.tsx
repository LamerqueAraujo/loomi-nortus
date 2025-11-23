export default function CardBase({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/10
        bg-gradient-to-b from-[#141b32] to-[#050816]
        px-5 py-4 text-sm text-slate-100
        ${className}
      `}
    >
      {children}
    </div>
  )
}
