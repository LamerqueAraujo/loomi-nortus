import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Digite um e-mail válido'),
  password: z
    .string()
    .min(1, 'A senha é obrigatória')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  rememberUser: z.boolean().optional(),
})

export type LoginSchema = z.infer<typeof loginSchema>
