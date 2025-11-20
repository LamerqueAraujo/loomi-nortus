export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#0D1117] text-white">
      {/* Coluna 1: Formulário de Login (Ocupa 100% em telas pequenas) */}
      <div className="flex w-full items-center justify-center p-4 md:w-1/2 lg:w-2/5">
        <div className="w-full max-w-md space-y-8">
          {/* Cabeçalho do Formulário */}
          <div>
            <h1 className="text-3xl font-semibold text-white">Nortus</h1>
            <h2 className="mt-4 text-2xl font-bold">Login</h2>
            <p className="mt-2 text-gray-400">
              Entre com suas credenciais para acessar a sua conta.
            </p>
          </div>

          {/* Área do Formulário (Será preenchida nos próximos cards) */}
          <form className="space-y-6">
            {/* Input de E-mail/Usuário */}
            {/* Input de Senha */}
            {/* Checkbox / Botão / Link de Esqueci Senha */}
          </form>
        </div>
      </div>

      {/* Coluna 2: Ilustração (Ocupa 50% ou 60% e é Oculta em telas pequenas) */}
      <div className="hidden w-1/2 items-center justify-center bg-[#161B22] md:flex lg:w-3/5">
        {/* Aqui você colocará a imagem da ilustração, centralizada */}
        {/* Lembre-se de otimizar a imagem com o componente <Image> do Next.js */}
        <div className="p-8">
          <p className="text-sm text-gray-500 text-center mt-4">
            Nortus Intelligence
          </p>
        </div>
      </div>
    </div>
  )
}
