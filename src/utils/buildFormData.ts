import { UserProfileForm } from "@/lib/type/profile"


export const buildFormData = (data: UserProfileForm) => {
  const formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v))
    } else if (value instanceof File) {
      formData.append(key, value)
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        formData.append(`${key}[${subKey}]`, subValue as string)
      })
    } else if (value !== null && value !== undefined) {
      formData.append(key, value as string)
    }
  })

  // Add combined name for backend compatibility
  if (data.firstName || data.lastName) {
    formData.append('name', `${data.firstName || ''} ${data.lastName || ''}`.trim())
  }

  return formData
}
