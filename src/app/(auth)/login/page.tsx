'use client'

import type { JSX } from 'react'
import LoginForm from '@/components/LoginForm'
import { TopBarLogin } from '@/components/ui/TopBarLogin'

export default function LoginPage(): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-[#0B1125] text-[#E3E3E3] flex items-center justify-center px-6 lg:px-12 py-10">
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <section className="w-full max-w-[640px] lg:justify-self-start">
          <div className="mb-16">
            <h2 className="text-[56px] leading-none text-[#1876D2] font-semibold">
              Nortus
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            <h1 className="text-[36px] font-space">Login</h1>
            <p className="text-base lg:text-lg text-white/80 max-w-[460px]">
              Entre com suas credenciais para acessar a sua conta.
            </p>
          </div>

          <LoginForm />
        </section>

        <section className="relative flex w-full lg:justify-end">
          <TopBarLogin />

          <div
            className="
      w-full 
      overflow-hidden rounded-[38px] 
      bg-[url('/images/login/interacao_cliente_consultor.png')] bg-cover bg-center 
      p-8 
      h-full min-h-[400px] lg:min-h-[800px]
      shadow-neon-lg 
    "
          />
        </section>
      </div>
    </main>
  )
}
