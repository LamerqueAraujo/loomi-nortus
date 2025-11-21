'use client'

export default function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold">{title}</h2>

      <div className="flex items-center gap-4">
        <span className="text-white/70">Olá, Usuário</span>
        <div className="w-10 h-10 bg-gray-500 rounded-full" />
      </div>
    </header>
  )
}
