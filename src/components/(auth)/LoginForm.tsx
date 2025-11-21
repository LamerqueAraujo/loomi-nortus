'use client'

import { useState, useRef, useEffect } from 'react'
import axios from '@/services/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth.store'
import CustomCheckbox from '@/components/ui/CustomCheckbox'
import { loginSchema } from '@/schemas/login'
import { useZodForm } from '@/hooks/useZod'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const { setAuth } = useAuthStore()
  const { validate, errors, clearFieldError } = useZodForm(loginSchema)
  const [rememberUser, setRememberUser] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const usernameRef = useRef<HTMLInputElement | null>(null)
  const [userFocused, setUserFocused] = useState(false)

  useEffect(() => {
    if (usernameRef.current?.value) {
      setUsername(usernameRef.current.value)
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const validated = validate({ username, password, rememberUser })
    if (!validated) {
      toast.error('Verifique os campos acima.')
      return
    }

    setLoading(true)

    try {
      const { data } = await axios.get('/login.json')
      const { accessToken, username: user } = data.data

      setAuth(accessToken, user)

      if (rememberUser) {
        localStorage.setItem('rememberUser', user)
      } else {
        localStorage.removeItem('rememberUser')
      }

      toast.success('Login realizado com sucesso!')
      setTimeout(() => router.push('/dashboard'), 800)
    } catch (err) {
      console.error(err)
      toast.error('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="relative mt-6">
        <label
          htmlFor="username"
          className={`
            absolute left-6 px-2 transition-all duration-200 pointer-events-none
            ${
              username || userFocused
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
          autoComplete="email"
          required
          onFocus={() => setUserFocused(true)}
          onBlur={() => setUserFocused(false)}
          onChange={(e) => {
            setUsername(e.target.value)
            clearFieldError('username', e.target.value)
          }}
          className={`
    h-[60px]                       /* altura fixa */
    rounded-[20px] border border-[#E3E3E3] bg-transparent
    pl-6 pr-6 text-[18px] text-[#E3E3E3] focus:outline-none
    transition-all duration-300
      
    ${username || userFocused ? 'w-[50%]' : 'w-full'}
  `}
        />
      </div>

      {errors.username && (
        <p className="text-red-400 text-sm pl-2 -mt-3">{errors.username}</p>
      )}

      <p className="text-white/60 pl-2 text-sm -mt-2">
        Insira o seu e-mail, CPF ou passaporte.
      </p>

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
          onChange={(e) => {
            setPassword(e.target.value)
            clearFieldError('password', e.target.value)
          }}
          className="w-full rounded-[20px] border border-[#E3E3E3]
                     bg-transparent py-5 pl-6 pr-12 text-[18px]
                     text-[#E3E3E3] focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="group absolute right-4 top-1/2 -translate-y-1/2 
                     h-10 w-10 flex items-center justify-center
                     text-white/60 hover:text-white transition"
        >
          <span
            className="absolute w-full h-full rounded-full bg-white/20 
                       scale-0 group-hover:scale-[1.6] transition-transform duration-200"
          />

          {/* Ícones */}
          {showPassword ? (
            <EyeOff size={22} className="relative z-10" />
          ) : (
            <Eye size={22} className="relative z-10" />
          )}
        </button>
      </div>

      {errors.password && (
        <p className="text-red-400 text-sm pl-2 -mt-3">{errors.password}</p>
      )}

      <div className="flex items-center justify-between text-sm mt-2">
        <CustomCheckbox
          id="remember-user"
          label="Lembrar meu usuário"
          checked={rememberUser}
          onChange={(e) => setRememberUser(e.target.checked)}
        />

        <button
          type="button"
          className="group relative px-3 py-1 rounded-md text-[#4c9efc] hover:text-white transition-colors"
        >
          <span
            className="absolute inset-0 bg-white/10 rounded-full scale-0 
                       group-hover:scale-125 transition-transform duration-300"
          />
          <span className="relative z-10">Esqueci minha senha</span>
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-[24px] bg-[#1c7ef5] py-4 text-base font-semibold 
                   text-white hover:brightness-110 disabled:opacity-50"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  )
}
