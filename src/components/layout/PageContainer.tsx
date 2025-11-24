'use client'

export default function PageContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="
        w-full
        max-w-[1480px]
        mx-auto
        px-6
        overflow-x-hidden
      "
    >
      {children}
    </div>
  )
}
