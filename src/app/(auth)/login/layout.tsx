export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="
        min-h-screen w-full bg-[var(--auth-bg)]
        flex items-center justify-center

        /* Apenas para mobile — NÃO afeta o desktop */
        px-4 sm:px-6 lg:px-0
      "
    >
      {children}
    </div>
  )
}
