import { z } from 'zod'

export const ticketFormSchema = z.object({
  client: z.string().min(1, 'Nome do cliente é obrigatório'),
  email: z.string().email('Informe um email válido'),
  subject: z.string().min(1, 'Assunto é obrigatório'),

  priority: z
    .enum(['Urgente', 'Média', 'Baixa'])
    .refine((v) => !!v, 'Prioridade é obrigatória'),

  status: z
    .enum(['Aberto', 'Em andamento', 'Fechado'])
    .refine((v) => !!v, 'Status é obrigatório'),

  responsible: z.string().min(1, 'Responsável é obrigatório'),
})

export type TicketFormValues = z.infer<typeof ticketFormSchema>
