export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0B1125] px-6 py-10 text-[#E3E3E3]">
      <div className="w-full max-w-[1840px] rounded-[36px] lg:px-16 lg:py-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Coluna esquerda */}
          <section className="w-full max-w-[770px] lg:space-y-10">
            <div className="lg:mb-20">
              <h2 className="text-[56px] text-[#1876D2] font-semibold">
                Nortus
              </h2>
            </div>
            <div className="space-y-2 lg:pt-14 mb-8 lg:mb-16">
              <h1 className="text-[36px] text-[#E3E3E3] font-space">Login</h1>
              <p className="text-[#E3E3E3] text-xl tracking-wider">
                Entre com suas credenciais para acessar a sua conta.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="rounded-[20px] border flex items-center border-[#E3E3E3] pl-6 pr-20 py-5">
                    <input
                      id="username"
                      type="text"
                      placeholder="Usuário"
                      className="w-full required bg-transparent font-light text-[18px] text-[#E3E3E3] placeholder:text-[#E3E3E3] focus:outline-none"
                    />
                  </div>
                  <p className=" text-white/60 pl-5">
                    Insira o seu e-mail, CPF ou passaporte.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="rounded-[20px] flex items-center relative border border-[#E3E3E3] pl-6 pr-12 py-5">
                    <input
                      id="password"
                      type="password"
                      placeholder="Senha*"
                      className="w-full bg-transparent pr-12 font-light text-[18px] text-[#E3E3E3] placeholder:text-[#E3E3E3] focus:outline-none"
                    />

                    {/* Botão com grupo */}
                    <button
                      type="button"
                      aria-label="Mostrar senha"
                      className="absolute top-[16px] right-[20px] w-10 h-10 flex items-center justify-center text-white/50 hover:text-white group"
                    >
                      {/* Círculo animado que reage ao hover do grupo */}
                      <span className="absolute w-full h-full rounded-full bg-white/50 scale-0 transition-transform duration-300 ease-out group-hover:scale-[1.6]"></span>

                      {/* Ícone do olho */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-7 w-7 relative"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.183c.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 text-sm text-[#E3E3E3] sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 cursor-pointer rounded border border-white/40 bg-transparent accent-[#1c7ef5]"
                  />
                  Lembrar meu usuário
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-[#4c9efc] transition hover:text-white"
                >
                  Esqueci minha senha
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-[24px] bg-[#1c7ef5] py-4 text-base font-semibold text-white shadow-[0_18px_42px_rgba(28,126,245,.3)] transition hover:brightness-110"
              >
                Entrar
              </button>
            </form>
          </section>

          {/* Coluna direita */}
          <section className="relative flex w-full justify-end">
            <div className="relative w-full max-w-[820px] overflow-hidden rounded-[38px] bg-[url('/images/login/interacao_cliente_consultor.png')] bg-cover bg-center p-8 shadow-[0_32px_90px_rgba(3,8,26,.75)] lg:p-10">
              <div className="absolute right-0 top-0 p-5 flex gap-3 text-sm font-medium bg-[#0B1125]">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-8 py-4 text-white/80 backdrop-blur">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#5dd6a8]" />
                  Ajuda
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-8 py-4 text-white/80 backdrop-blur  ">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#67e07c]" />
                  PT-br
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
