export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-[var(--auth-bg)] flex items-center justify-center">
      {children}
    </div>
  )
}
