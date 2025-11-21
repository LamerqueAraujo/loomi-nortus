import { useState } from 'react'
import { ZodSchema, ZodError } from 'zod'

export function useZodForm<T>(schema: ZodSchema<T>) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: unknown): T | null => {
    try {
      const parsed = schema.parse(data)
      setErrors({})
      return parsed
    } catch (err) {
      if (err instanceof ZodError) {
        const formattedErrors: Record<string, string> = {}

        // ⚠️ USAR safeParse EVITA QUALQUER ERRO
        err.issues?.forEach((issue) => {
          const field = issue.path[0]
          if (field) formattedErrors[field] = issue.message
        })

        setErrors(formattedErrors)
      }

      return null
    }
  }

  const clearFieldError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  return { validate, errors, clearFieldError }
}
