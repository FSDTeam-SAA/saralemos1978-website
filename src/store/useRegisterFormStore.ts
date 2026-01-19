import { create } from 'zustand'

import { profileInitialState } from '@/constants/profileInitialState'
import { UserProfileForm } from '@/lib/type/profile'

type RegisterFormStore = {
  form: UserProfileForm

  setField: <K extends keyof UserProfileForm>(
    field: K,
    value: UserProfileForm[K]
  ) => void

  resetForm: () => void
}

export const useRegisterFormStore = create<RegisterFormStore>((set) => ({
  form: profileInitialState,

  setField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),

  resetForm: () => set({ form: profileInitialState }),
}))
