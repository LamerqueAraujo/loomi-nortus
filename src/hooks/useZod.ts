import { useState } from 'react'
import { ZodSchema, ZodError } from 'zod'

export function useZodForm<T extends Record<string, unknown>>(
  schema: ZodSchema<T>,
) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const validate = (data: unknown): T | null => {
    try {
      const parsed = schema.parse(data)
      setErrors({})
      return parsed
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Partial<Record<keyof T, string>> = {}

        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof T
          if (field) {
            formattedErrors[field] = issue.message
          }
        })

        setErrors(formattedErrors)
      }

      return null
    }
  }

  const clearFieldError = (field: keyof T) => {
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  return { validate, errors, clearFieldError }
}
