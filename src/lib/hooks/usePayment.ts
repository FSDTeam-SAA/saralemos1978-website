'use client'

import { useMutation } from '@tanstack/react-query'
import { Payment } from '../api'

export type PaymentVariables = { userId: string; planId: string }

export function usePayment() {
  return useMutation({
    mutationFn: ({ userId, planId }: PaymentVariables) => 
      Payment(userId, planId),
  })
}


