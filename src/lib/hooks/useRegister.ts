'use client'

import { useMutation } from '@tanstack/react-query'
import { registerForm } from '../api'

export function useRegister() {
  return useMutation({
    mutationFn: (data: FormData) => registerForm(data),
  })
}
