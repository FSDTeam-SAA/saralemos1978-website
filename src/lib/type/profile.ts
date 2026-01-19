export type UserProfileForm = {
  firstName: string
  lastName?: string
  email: string
  password: string
  phoneNumber: string
  jobTitle: string
  companyName: string
  websiteUrl: string
  industryExperience: string

  languagesSpoken: string[]
  preferredToneOfVoice: string[]
  salesChannels: string[]
  primaryRegionsServed: string
  productCategories: string[]

  postingFrequency: string
  averagePriceRange: string

  customHeadline: string
  portfolioPageSlug: string
  qrCodeUrl: string

  socialLinks: {
    linkedin?: string
    instagram?: string
    facebook?: string
    twitter?: string
  }

  profilePhoto: File | null
  companyLogo: File | null
  bannerImage: File | null
}
