'use client'

import { useState, useRef, useEffect } from 'react'
import axios from '@/services/api'
import Cookies from 'js-cookie'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import CustomCheckbox from '@/components/ui/CustomCheckbox'

export default function LoginForm() {
  const router = useRouter()

  const [rememberUser, setRememberUser] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const usernameRef = useRef(null)

  useEffect(() => {
    if (usernameRef.current && usernameRef.current.value) {
      setUsername(usernameRef.current.value)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!username.includes('@')) {
      toast.error('Digite um e-mail válido')
      return
    }

    if (!password) {
      toast.error('Digite a senha')
      return
    }

    setLoading(true)

    try {
      const { data } = await axios.get('/login.json')
      const { accessToken, username: user } = data.data

      Cookies.set('token', accessToken, { expires: 1 })
      localStorage.setItem('username', user)

      if (rememberUser) {
        localStorage.setItem('rememberUser', user)
      } else {
        localStorage.removeItem('rememberUser')
      }

      toast.success('Login realizado com sucesso!')

      setTimeout(() => {
        router.push('/dashboard')
      }, 800)
    } catch (err) {
      console.error(err)
      toast.error('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* =========================
          USUÁRIO 
      ============================ */}
      <div className="relative mt-6">
        <label
          htmlFor="username"
          className={`
            absolute left-6 px-2 transition-all duration-200 pointer-events-none
            ${
              username
                ? '-top-5 bg-black text-xs text-white'
                : 'top-1/2 -translate-y-1/2 text-[18px] text-[#E3E3E3]'
            }
          `}
        >
          Usuário <span className="text-red-500">*</span>
        </label>

        <input
          ref={usernameRef}
          id="username"
          type="text"
          value={username}
          required
          autoComplete="email"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-[20px] border border-[#E3E3E3] bg-transparent
             py-5 pl-6 pr-6 text-[18px] text-[#E3E3E3] focus:outline-none"
        />
      </div>

      <p className="text-white/60 pl-2 text-sm -mt-2">
        Insira o seu e-mail, CPF ou passaporte.
      </p>

      {/* =========================
          SENHA
      ============================ */}
      <div className="relative mt-6">
        <label
          htmlFor="password"
          className={`
            absolute left-6 px-2 transition-all duration-200 pointer-events-none
            ${
              password
                ? '-top-5 bg-black text-xs text-white'
                : 'top-1/2 -translate-y-1/2 text-[18px] text-[#E3E3E3]'
            }
          `}
        >
          Senha <span className="text-red-500">*</span>
        </label>

        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-[20px] border border-[#E3E3E3] bg-transparent
                     py-5 pl-6 pr-12 text-[18px] text-[#E3E3E3] focus:outline-none"
        />

        {/* Botão do olho */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex 
                     items-center justify-center text-white/60 hover:text-white group"
        >
          {/* Hover circle */}
          <span
            className="absolute w-full h-full rounded-full bg-white/20 scale-0 
                           transition-transform duration-200 group-hover:scale-[1.6]"
          ></span>

          {showPassword ? (
            // Ícone olho cortado
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-4.48 0-8.27-2.94-9.54-7 
    a9.97 9.97 0 0 1 1.66-3.02"
              />
              <path d="M1 1l22 22" />
              <path d="M10.58 10.58A2 2 0 0 0 12 14a2 2 0 0 0 1.42-.58" />
              <path
                d="M9.88 4.24A9.93 9.93 0 0 1 12 4c4.48 0 8.27 2.94 9.54 7 
    a10.07 10.07 0 0 1-4.12 5.02"
              />
            </svg>
          ) : (
            // Ícone olho normal
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12c0-.556.06-1.097.174-1.618C3.53 6.53 7.337 3.75 
                   12 3.75c4.662 0 8.47 2.78 9.576 6.632.115.521.174 1.062.174 
                   1.618 0 .556-.06 1.097-.174 1.618C20.47 17.47 16.663 20.25 
                   12 20.25c-4.662 0-8.47-2.78-9.576-6.632A10.4 10.4 0 012.25 12z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Checkbox + Esqueci senha */}
      <div className="flex items-center justify-between text-sm mt-2">
        <CustomCheckbox
          id="remember-user"
          label="Lembrar meu usuário"
          checked={rememberUser}
          onChange={(e) => setRememberUser(e.target.checked)}
        />

        <button
          type="button"
          className="relative flex items-center justify-center 
             text-sm font-medium text-[#4c9efc] hover:text-white 
             transition-colors px-3 py-1 rounded-md group"
        >
          {/* Círculo animado */}
          <span
            className="absolute inset-0 rounded-full bg-white/10 
               scale-0 group-hover:scale-125 
               transition-transform duration-200 ease-out"
          />

          {/* Texto acima do círculo */}
          <span className="relative z-10">Esqueci minha senha</span>
        </button>
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-[24px] bg-[#1c7ef5] py-4 text-base font-semibold text-white 
                   shadow-[0_18px_42px_rgba(28,126,245,.3)] hover:brightness-110 transition 
                   disabled:opacity-50 mt-4"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  )
}
