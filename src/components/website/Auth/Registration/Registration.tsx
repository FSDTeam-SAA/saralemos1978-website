import React, { useState } from 'react'
import { RegistrationFormContainer } from './RegistrationFormContainer'
import { useRegisterFormStore } from '@/store/useRegisterFormStore'
import { useRouter } from 'next/navigation'

const Registration = () => {
    const { form } = useRegisterFormStore()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleFormComplete = () => {
    setIsSubmitted(true)
    console.log('[v0] Complete form data:', form)
    // Here you would typically send the data to your backend
  }

  const handleClose = () => {
    router.push('/')
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-emerald-600 mb-2">Success!</h1>
            <p className="text-gray-600 mb-6">Your profile has been successfully created.</p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 text-left text-sm">
              <p className="text-emerald-900">
                <strong>Name:</strong> {form.firstName} {form.lastName}
              </p>
              <p className="text-emerald-900 mt-1">
                <strong>Email:</strong> {form.email}
              </p>
              <p className="text-emerald-900 mt-1">
                <strong>Company:</strong> {form.companyName}
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false)
                window.location.href = '/'
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg w-full transition"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='hide-scrollbar'>
      <RegistrationFormContainer onComplete={handleFormComplete} onClose={handleClose} />
    </div>
  )
}

export default Registration