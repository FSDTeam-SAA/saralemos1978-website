import { z } from 'zod'

// Step 1: Welcome to Lime Pitch
export const step1Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  jobTitle: z.string().min(2, 'Job title is required'),
  phoneNumber: z.string().regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  companyName: z.string().min(2, 'Company name is required'),
  industryExperience: z.string().min(10, 'Please describe your experience'),
  languagesSpoken: z.array(z.string()).min(1, 'Select at least one language'),
  profilePhoto: z.instanceof(File).nullable().optional(),
})

// Step 2: Online Presence & Branding
export const step2Schema = z.object({
  websiteUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  socialLinks: z.object({
    linkedin: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
    instagram: z.string().url('Please enter a valid Instagram URL').optional().or(z.literal('')),
    facebook: z.string().url('Please enter a valid Facebook URL').optional().or(z.literal('')),
    twitter: z.string().url('Please enter a valid Twitter URL').optional().or(z.literal('')),
  }),
  preferredToneOfVoice: z.array(z.string()).min(1, 'Select your preferred tone of voice'),
  companyLogo: z.instanceof(File).nullable().optional(),
})

// Step 3: Product & Sales Preferences
export const step3Schema = z.object({
  productCategories: z.array(z.string()).min(1, 'Select at least one product category'),
  averagePriceRange: z.string().min(1, 'Select a price range'),
  primaryRegionsServed: z.string().min(10, 'Please describe your primary regions'),
  salesChannels: z.array(z.string()).min(1, 'Select at least one sales channel'),
})

// Step 4: QR Portfolio Page
export const step4Schema = z.object({
  customHeadline: z.string().min(10, 'Please provide a headline').max(200, 'Headline must be less than 200 characters'),
  postingFrequency: z.string().min(1, 'Select your posting frequency'),
  bannerImage: z.instanceof(File).nullable().optional(),
})

// Complete form schema
export const completeProfileSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)

export type Step1FormData = z.infer<typeof step1Schema>
export type Step2FormData = z.infer<typeof step2Schema>
export type Step3FormData = z.infer<typeof step3Schema>
export type Step4FormData = z.infer<typeof step4Schema>
export type CompleteProfileData = z.infer<typeof completeProfileSchema>
