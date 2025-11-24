'use client'

import type { JSX } from 'react'
import LoginForm from '@/components/(auth)/LoginForm'
import { TopBarLogin } from '@/components/(auth)/TopBarLogin'

export default function LoginPage() {
  return (
    <main
      className="
      min-h-screen w-full bg-[var(--bg-auth)] text-[#E3E3E3]
      flex items-center justify-center
      px-6 lg:px-12 py-10
    "
    >
      <div
        className="
        w-full max-w-[1440px]
        grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]
        gap-12 lg:gap-16 items-center
      "
      >
        {/* COLUNA DO LOGIN */}
        <section className="w-full max-w-[640px] mx-auto lg:mx-0">
          <div className="mb-16">
            <h2
              className="text-[56px] leading-none text-[#1876D2] font-semibold
              text-center lg:text-left text-[42px] sm:text-[56px]
            "
            >
              Nortus
            </h2>
          </div>

          <div className="space-y-3 mb-10 text-center lg:text-left">
            <h1 className="text-[36px] font-space text-[28px] sm:text-[36px]">
              Login
            </h1>

            <p className="text-base lg:text-lg text-white/80 max-w-[460px] mx-auto lg:mx-0">
              Entre com suas credenciais para acessar a sua conta.
            </p>
          </div>

          <LoginForm />
        </section>

        {/* COLUNA DA IMAGEM */}
        <section className="relative flex w-full lg:justify-end mt-10 lg:mt-0">
          <TopBarLogin />

          <div
            className="
              w-full overflow-hidden rounded-[38px]
              bg-[url('/images/login/interacao_cliente_consultor.png')]
              bg-cover bg-center
              p-8 h-full
              min-h-[280px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[800px]
              shadow-neon-lg
            "
          />
        </section>
      </div>
    </main>
  )
}
