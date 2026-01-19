'use client'

import React from "react"
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
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterFormStore } from "@/store/useRegisterFormStore"
import { Step2FormData, step2Schema } from "@/lib/schemas/profile"

const TONE_OF_VOICE_OPTIONS = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'casual', label: 'Casual' },
  { id: 'technical', label: 'Technical' },
]

interface Step2FormProps {
  onNext: () => void
  onPrevious: () => void
}

export function Step2Form({ onNext, onPrevious }: Step2FormProps) {
  const { form: storedForm, setField } = useRegisterFormStore()
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const form = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      websiteUrl: storedForm.websiteUrl,
      socialLinks: storedForm.socialLinks,
      preferredToneOfVoice: storedForm.preferredToneOfVoice,
      companyLogo: storedForm.companyLogo,
    },
  })

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setField('companyLogo', file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function onSubmit(data: Step2FormData) {
    setField('websiteUrl', data?.websiteUrl || '')
    setField('socialLinks', {
      linkedin: data?.socialLinks?.linkedin || '',
      instagram: data?.socialLinks?.instagram || '',
      facebook: data?.socialLinks?.facebook || '',
      twitter: data?.socialLinks?.twitter || '',
    })
    setField('preferredToneOfVoice', data.preferredToneOfVoice)

    onNext()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-600 text-center">Online Presence & Branding</h1>
          <p className="text-center text-gray-600 mt-2">Set up your digital presence and branding</p>
        </div>

        {/* Website URL */}
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.yourbrokerage.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Social Media Platforms */}
        <div>
          <h2 className="text-lg font-semibold mb-1">* Social Media Platforms (Required for Content Posting)</h2>
          <p className="text-sm text-gray-600 mb-4">Connect your social media accounts to enable content posting. At least one platform is required.</p>

          <div className="space-y-4">
            {/* LinkedIn */}
            <FormField
              control={form.control}
              name="socialLinks.linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Instagram */}
            <FormField
              control={form.control}
              name="socialLinks.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="https://instagram.com/youraccount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Facebook */}
            <FormField
              control={form.control}
              name="socialLinks.facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Page URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://facebook.com/yourpage" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Twitter */}
            <FormField
              control={form.control}
              name="socialLinks.twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter / X</FormLabel>
                  <FormControl>
                    <Input placeholder="https://twitter.com/youraccount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Tone of Voice */}
        <FormField
          control={form.control}
          name="preferredToneOfVoice"
          render={() => (
            <FormItem>
              <FormLabel>Preferred Tone of Voice *</FormLabel>
              <div className="space-y-3">
                {TONE_OF_VOICE_OPTIONS.map((option) => (
                  <FormField
                    key={option.id}
                    control={form.control}
                    name="preferredToneOfVoice"
                    render={({ field }) => {
                      return (
                        <FormItem key={option.id} className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(field.value?.filter((value) => value !== option.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">{option.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company Logo */}
        <FormItem>
          <FormLabel>Company Logo (Optional)</FormLabel>
          <FormControl>
            <div>
              <input
                type="file"
                accept="image/png,image/jpeg,image/svg+xml"
                onChange={handleLogoChange}
                className="hidden"
                id="company-logo"
              />
              <label htmlFor="company-logo" className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-emerald-600 transition">
                {logoPreview ? (
                  <img src={logoPreview || "/placeholder.svg"} alt="Logo" className="w-32 h-32 object-contain mx-auto rounded" />
                ) : (
                  <div>
                    <div className="text-3xl mb-2">📤</div>
                    <p className="text-gray-600">Upload your company logo</p>
                    <p className="text-sm text-gray-500">PNG, JPG, SVG up to 5MB</p>
                  </div>
                )}
              </label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between pt-6">
          <Button type="button" variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
