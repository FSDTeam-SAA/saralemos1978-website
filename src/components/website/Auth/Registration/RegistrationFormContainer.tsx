'use client'

import { useState } from 'react'

import { useRegisterFormStore } from '@/store/useRegisterFormStore'
import { Step1Form } from './Step1Form'
import { Step2Form } from './Step2Form'
import { Step3Form } from './Step3Form'
import { Step4Form } from './Step4Form'

type FormStep = 1 | 2 | 3 | 4

interface RegistrationFormContainerProps {
  onComplete?: () => void
}

export function RegistrationFormContainer({ onComplete }: RegistrationFormContainerProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1)
  const { form } = useRegisterFormStore()

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as FormStep)
      window.scrollTo(0, 0)
    } else {
      // Form is complete
      console.log('[v0] Form submission complete:', form)
      onComplete?.()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Progress Bar */}
      {/* <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step === currentStep
                      ? 'bg-emerald-600 text-white'
                      : step < currentStep
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-colors ${
                      step < currentStep ? 'bg-emerald-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-gray-600">
            <span>Personal Info</span>
            <span>Branding</span>
            <span>Preferences</span>
            <span>Portfolio</span>
          </div>
        </div>
      </div> */}

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 ">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 1 && <Step1Form onNext={handleNext} />}
          {currentStep === 2 && <Step2Form onNext={handleNext} onPrevious={handlePrevious} />}
          {currentStep === 3 && <Step3Form onNext={handleNext} onPrevious={handlePrevious} />}
          {currentStep === 4 && <Step4Form onNext={handleNext} onPrevious={handlePrevious} />}
        </div>
      </div>
    </div>
  )
}
