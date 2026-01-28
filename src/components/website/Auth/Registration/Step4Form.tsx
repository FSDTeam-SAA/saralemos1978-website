'use client'

import React from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { AlertCircle, Eye } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useRegisterFormStore } from "@/store/useRegisterFormStore"
import { Step4FormData, step4Schema } from "@/lib/schemas/profile"

const POSTING_FREQUENCY = [
  { value: 'daily', label: 'Daily' },
  { value: '3-4-times-weekly', label: '3-4 times per week' },
  { value: 'twice-weekly', label: 'Twice weekly' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'bi-weekly', label: 'Bi-weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'as-needed', label: 'As needed' },
]

interface Step4FormProps {
  onNext: () => void
  onPrevious: () => void
  isLoading?: boolean
}

export function Step4Form({ onNext, onPrevious, isLoading = false }: Step4FormProps) {
  const { form: storedForm, setField } = useRegisterFormStore()
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  const form = useForm<Step4FormData>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      customHeadline: storedForm.customHeadline,
      postingFrequency: storedForm.postingFrequency,
      bannerImage: storedForm.bannerImage,
    },
  })

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setField('bannerImage', file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function onSubmit(data: Step4FormData) {
    setField('customHeadline', data.customHeadline)
    setField('postingFrequency', data.postingFrequency)

    onNext()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#65A30D] text-center">QR Project Portfolio</h1>
      <p className="text-center text-gray-600 mt-2">Finalize your professional profile and digital portfolio</p>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Custom Headline */}
        <FormField
          control={form.control}
          name="customHeadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Headline or Service Motto *</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Master craftsmanship in custom ironwork for your home"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is the first thing clients will see on your portfolio</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Banner Image */}
        <FormItem>
          <FormLabel>Portfolio Banner Image (Optional)</FormLabel>
          <FormControl>
            <div>
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleBannerChange}
                className="hidden"
                id="banner-image"
              />
              <label htmlFor="banner-image" className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#65A30D] transition">
                {bannerPreview ? (
                  <img src={bannerPreview || "/placeholder.svg"} alt="Banner" className="w-full h-40 object-cover rounded" />
                ) : (
                  <div>
                    <div className="text-3xl mb-2">📤</div>
                    <p className="text-gray-600">Upload a banner image showing your best work</p>
                    <p className="text-sm text-gray-500">Recommended: Architectural shots of installations</p>
                  </div>
                )}
              </label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Posting Frequency */}
        <FormField
          control={form.control}
          name="postingFrequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How often do you showcase new projects? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select showcase frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {POSTING_FREQUENCY.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>This helps us manage your catalog updates</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* QR Code Section */}
        <Alert className="border-[#65A30D]/30 bg-[#65A30D]/10">
          <AlertCircle className="h-4 w-4 text-[#65A30D]" />
          <AlertDescription className="text-[#65A30D]">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold mb-1">✨ Your Professional QR Portfolio</h3>
                <p className="text-sm">
                  Your portfolio will be accessible via a unique QR code. You can print it on business cards or display it at your workshop to show clients your full range of custom metalwork.
                </p>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        {/* Info Box */}
        <div className="bg-[#65A30D]/10 border border-[#65A30D]/30 rounded-lg p-4">
          <h3 className="font-semibold text-[#65A30D] mb-2">✨ Your Portfolio is Ready!</h3>
          <p className="text-sm text-[#65A30D] mb-4">
            We&apos;ve automatically generated your digital showroom using your provided details. It will showcase your services, specialties, and contact information.
          </p>
          <Button
            type="button"
            variant="outline"
            className="border-[#65A30D] text-[#65A30D] w-full hover:bg-[#65A30D]/10 bg-transparent cursor-pointer"
            onClick={() => {
              /* Handle preview */
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview Your Digital Showroom
          </Button>
        </div>

        <div className="flex gap-4 justify-between pt-6">
          <Button type="button" variant="outline" className="border-[#65A30D] text-[#65A30D] bg-transparent cursor-pointer disabled:cursor-not-allowed" onClick={onPrevious} disabled={isLoading}>
            Previous
          </Button>
          <Button type="submit" className="bg-[#65A30D] hover:bg-[#65A30D] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Complete Setup"}
          </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}
