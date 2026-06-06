'use client'

import React, { useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useRegisterFormStore } from '@/store/useRegisterFormStore'
import {
  User,
  Building2,
  Briefcase,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Tag,
  DollarSign,
  Languages,
  Megaphone,
  ShoppingBag,
  CalendarClock,
  Sparkles,
} from 'lucide-react'

interface ShowroomPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const PRODUCT_CATEGORY_LABELS: Record<string, string> = {
  gates: 'Sail Yachts',
  railings: 'Motor Yachts',
  stairs: 'Sail Catamarans',
  'window-grills': 'Motor Catamarans',
  pergolas: 'Trimarans',
  furniture: 'Motor Catamarans',
  structures: 'Trawlers',
  decorative: 'Express Cruisers',
  fences: 'Sport Fishing Yachts',
  doors: 'Houseboats',
  'pleasure-boats': 'Pleasure Boats (Under 24m)',
  'commercial-vessels': 'Commercial Vessels',
  'personal-watercraft': 'Personal Watercraft (PWC)',
}

const PRICE_RANGE_LABELS: Record<string, string> = {
  'under-500k': 'Under $500,000',
  '500k-1m': '$500,000 - $1 Million',
  '1m-5m': '$1 Million - $5 Million',
  '5m-10m': '$5 Million - $10 Million',
  '10m-25m': '$10 Million - $25 Million',
  '25m-50m': '$25 Million - $50 Million',
  'over-50m': 'Over $50 Million',
}

const FREQUENCY_LABELS: Record<string, string> = {
  daily: 'Daily',
  '3-4-times-weekly': '3-4 times per week',
  'twice-weekly': 'Twice weekly',
  weekly: 'Weekly',
  'bi-weekly': 'Bi-weekly',
  monthly: 'Monthly',
  'as-needed': 'As needed',
}

const LANGUAGE_LABELS: Record<string, string> = {
  english: 'English',
  spanish: 'Spanish',
  french: 'French',
  italian: 'Italian',
  german: 'German',
  portuguese: 'Portuguese',
  dutch: 'Dutch',
  russian: 'Russian',
  japanese: 'Japanese',
  mandarin: 'Mandarin',
  arabic: 'Arabic',
  other: 'Other',
}

const TONE_LABELS: Record<string, string> = {
  professional: 'Professional',
  friendly: 'Friendly',
  luxury: 'Luxury',
  casual: 'Casual',
  technical: 'Technical',
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string | undefined
}) {
  if (!value) return null
  return (
    <div className="flex items-start gap-3 py-2">
      <Icon className="w-4 h-4 text-[#65A30D] mt-0.5 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{label}</p>
        <p className="text-sm text-gray-800 break-words">{value}</p>
      </div>
    </div>
  )
}

function TagList({ items, labelMap }: { items: string[]; labelMap?: Record<string, string> }) {
  if (!items || items.length === 0) return <span className="text-sm text-gray-400 italic">Not specified</span>
  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#65A30D]/10 text-[#65A30D] border border-[#65A30D]/20"
        >
          {labelMap?.[item] || item}
        </span>
      ))}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold text-[#65A30D] uppercase tracking-wider mb-3 flex items-center gap-2">
      <span>{children}</span>
      <span className="h-px flex-1 bg-[#65A30D]/20" />
    </h3>
  )
}

export function ShowroomPreviewModal({ open, onOpenChange }: ShowroomPreviewModalProps) {
  const { form } = useRegisterFormStore()

  const profilePhotoUrl = useMemo(() => {
    if (form.profilePhoto instanceof File) {
      return URL.createObjectURL(form.profilePhoto)
    }
    return null
  }, [form.profilePhoto])

  const bannerUrl = useMemo(() => {
    if (form.bannerImage instanceof File) {
      return URL.createObjectURL(form.bannerImage)
    }
    return null
  }, [form.bannerImage])

  const logoUrl = useMemo(() => {
    if (form.companyLogo instanceof File) {
      return URL.createObjectURL(form.companyLogo)
    }
    return null
  }, [form.companyLogo])

  const fullName = [form.firstName, form.lastName].filter(Boolean).join(' ') || 'Your Name'

  const socialLinks = [
    { icon: Linkedin, url: form.socialLinks?.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: form.socialLinks?.instagram, label: 'Instagram' },
    { icon: Facebook, url: form.socialLinks?.facebook, label: 'Facebook' },
    { icon: Twitter, url: form.socialLinks?.twitter, label: 'Twitter / X' },
  ].filter((s) => s.url)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 text-gray-900 p-0 shadow-2xl rounded-xl">
        {/* Banner & Overlays Container */}
        <div className="relative">
          {/* Banner Image wrapper with overflow-hidden */}
          <div className="w-full h-56 bg-gray-50 border-b border-gray-100 overflow-hidden flex items-center justify-center relative">
            {bannerUrl ? (
              <>
                {/* Blurred background matching image */}
                <img src={bannerUrl} alt="" className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-30 scale-110" />
                {/* Sharp centered image */}
                <img src={bannerUrl} alt="Banner" className="relative z-10 max-w-full max-h-full object-contain" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#65A30D]/10 via-gray-50 to-[#65A30D]/5">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 mx-auto text-[#65A30D]/40 mb-1" />
                  <p className="text-xs text-gray-400 font-medium">Digital Showroom Banner</p>
                </div>
              </div>
            )}
          </div>

          {/* Profile photo overlay - outside overflow-hidden */}
          <div className="absolute -bottom-10 left-6 z-20">
            <div className="w-24 h-24 rounded-xl border-4 border-white overflow-hidden bg-white shadow-lg flex items-center justify-center">
              {profilePhotoUrl ? (
                <img src={profilePhotoUrl} alt="Profile" className="w-full h-full object-contain bg-white" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#65A30D]/10">
                  <User className="w-10 h-10 text-[#65A30D]" />
                </div>
              )}
            </div>
          </div>

          {/* Company logo - outside overflow-hidden */}
          {logoUrl && (
            <div className="absolute -bottom-8 right-6 z-20">
              <div className="w-16 h-16 rounded-xl border-2 border-white overflow-hidden bg-white shadow-lg flex items-center justify-center">
                <img src={logoUrl} alt="Logo" className="w-full h-full object-contain p-0.5" />
              </div>
            </div>
          )}
        </div>

        {/* Header Info */}
        <div className="px-6 pt-12 pb-2">
          <DialogHeader className="mb-0">
            <DialogTitle className="text-2xl font-bold text-gray-900 text-left">{fullName}</DialogTitle>
            <DialogDescription className="text-[#65A30D] font-semibold text-left text-base mt-0.5">
              {form.customHeadline || form.jobTitle || 'Your Professional Headline'}
            </DialogDescription>
          </DialogHeader>

          {form.companyName && (
            <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{form.companyName}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-8 space-y-5">
          {/* Contact & Basic Info */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
            <SectionTitle>Contact Information</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <InfoRow icon={Mail} label="Email" value={form.email} />
              <InfoRow icon={Phone} label="Phone" value={form.phoneNumber} />
              <InfoRow icon={Briefcase} label="Job Title" value={form.jobTitle} />
              <InfoRow icon={Globe} label="Website" value={form.websiteUrl} />
            </div>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
              <SectionTitle>Social Media</SectionTitle>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => (
                  <div
                    key={social.label}
                    className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-3.5 py-2 text-sm text-gray-700 shadow-sm"
                  >
                    <social.icon className="w-4 h-4 text-[#65A30D]" />
                    <span className="truncate max-w-[180px] font-medium">{social.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience & Languages */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
            <SectionTitle>Professional Profile</SectionTitle>
            {form.industryExperience && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Industry Experience</p>
                <p className="text-sm text-gray-700 leading-relaxed">{form.industryExperience}</p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {form.languagesSpoken && form.languagesSpoken.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Languages className="w-4 h-4 text-[#65A30D]" />
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Languages</p>
                  </div>
                  <TagList items={form.languagesSpoken} labelMap={LANGUAGE_LABELS} />
                </div>
              )}
              {form.preferredToneOfVoice && form.preferredToneOfVoice.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Megaphone className="w-4 h-4 text-[#65A30D]" />
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tone of Voice</p>
                  </div>
                  <TagList items={form.preferredToneOfVoice} labelMap={TONE_LABELS} />
                </div>
              )}
            </div>
          </div>

          {/* Listing Preferences */}
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
            <SectionTitle>Listing Preferences</SectionTitle>
            {form.productCategories && form.productCategories.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Tag className="w-4 h-4 text-[#65A30D]" />
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Yacht Types</p>
                </div>
                <TagList items={form.productCategories} labelMap={PRODUCT_CATEGORY_LABELS} />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <InfoRow
                icon={DollarSign}
                label="Price Range"
                value={PRICE_RANGE_LABELS[form.averagePriceRange] || form.averagePriceRange}
              />
              <InfoRow icon={MapPin} label="Regions Served" value={form.primaryRegionsServed} />
              <InfoRow
                icon={CalendarClock}
                label="Posting Frequency"
                value={FREQUENCY_LABELS[form.postingFrequency] || form.postingFrequency}
              />
            </div>
            {form.salesChannels && form.salesChannels.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShoppingBag className="w-4 h-4 text-[#65A30D]" />
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Listing Platforms</p>
                </div>
                <TagList items={form.salesChannels} />
              </div>
            )}
          </div>

          {/* Preview Note */}
          <div className="text-center pt-2">
            <p className="text-xs text-gray-400">
              This is a preview of how your digital showroom will look. Complete your registration to publish it.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
