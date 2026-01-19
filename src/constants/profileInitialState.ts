import { UserProfileForm } from "@/lib/type/profile";


export const profileInitialState: UserProfileForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  jobTitle: '',
  companyName: '',
  websiteUrl: '',
  industryExperience: '',

  languagesSpoken: [],
  preferredToneOfVoice: [],
  salesChannels: [],
  primaryRegionsServed: '',
  productCategories: [],

  postingFrequency: '',
  averagePriceRange: '',

  customHeadline: '',
  portfolioPageSlug: '',
  qrCodeUrl: '',

  socialLinks: {
    linkedin: '',
    instagram: '',
  },

  profilePhoto: null,
  companyLogo: null,
  bannerImage: null,
}
