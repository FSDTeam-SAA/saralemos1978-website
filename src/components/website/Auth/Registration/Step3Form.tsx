'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { useRegisterFormStore } from '@/store/useRegisterFormStore'
import { Step3FormData, step3Schema } from '@/lib/schemas/profile'

const PRODUCT_CATEGORIES = [
  { id: 'gates', label: 'Gates (Portones)' },
  { id: 'railings', label: 'Railings (Barandas)' },
  { id: 'stairs', label: 'Stairs (Escaleras)' },
  { id: 'window-grills', label: 'Window Grills (Rejas)' },
  { id: 'pergolas', label: 'Pergolas' },
  { id: 'furniture', label: 'Custom Furniture (Muebles)' },
  { id: 'structures', label: 'Structural Steel' },
  { id: 'decorative', label: 'Decorative Ironwork' },
  { id: 'fences', label: 'Fences (Cercos)' },
  { id: 'doors', label: 'Iron Doors' },
  { id: 'other', label: 'Other Custom Work' },
]

const PRICE_RANGES = [
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1500', label: '$500 - $1,500' },
  { value: '1500-5000', label: '$1,500 - $5,000' },
  { value: '5000-15000', label: '$5,000 - $15,000' },
  { value: 'over-15000', label: 'Over $15,000' },
]

const SALES_CHANNELS = [
  { id: 'website', label: 'Official Website' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'whatsapp', label: 'WhatsApp Business' },
  { id: 'google', label: 'Google My Business' },
  { id: 'archiproducts', label: 'Archiproducts' },
  { id: 'pinterest', label: 'Pinterest' },
  { id: 'local-showroom', label: 'Local Showroom' },
  { id: 'word-of-mouth', label: 'Referrals / Word of Mouth' },
  { id: 'other', label: 'Other' },
]

interface Step3FormProps {
  onNext: () => void
  onPrevious: () => void
}

export function Step3Form({ onNext, onPrevious }: Step3FormProps) {
  const { form: storedForm, setField } = useRegisterFormStore()

  const form = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      productCategories: storedForm.productCategories,
      averagePriceRange: storedForm.averagePriceRange,
      primaryRegionsServed: storedForm.primaryRegionsServed,
      salesChannels: storedForm.salesChannels,
    },
  })

  async function onSubmit(data: Step3FormData) {
    setField('productCategories', data.productCategories)
    setField('averagePriceRange', data.averagePriceRange)
    setField('primaryRegionsServed', data.primaryRegionsServed)
    setField('salesChannels', data.salesChannels)

    onNext()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-emerald-600 text-center">Work Details</h1>
          <p className="text-center text-gray-600 mt-2">Tell us about your metalwork specialities and operations</p>
        </div>

        {/* Product Categories */}
        <FormField
          control={form.control}
          name="productCategories"
          render={() => (
            <FormItem>
              <FormLabel>Product Categories You Specialize In *</FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRODUCT_CATEGORIES.map((category) => (
                  <FormField
                    key={category.id}
                    control={form.control}
                    name="productCategories"
                    render={({ field }) => {
                      return (
                        <FormItem key={category.id} className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(category.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), category.id])
                                  : field.onChange(field.value?.filter((value: string) => value !== category.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer text-sm">{category.label}</FormLabel>
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

        {/* Average Price Range */}
        <FormField
          control={form.control}
          name="averagePriceRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Typical Project Budget Range *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your typical project budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PRICE_RANGES.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Primary Regions Served */}
        <FormField
          control={form.control}
          name="primaryRegionsServed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Regions Served *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., Madrid, Barcelona, Valencia, International Shipping..."
                  className="resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sales Channels */}
        <FormField
          control={form.control}
          name="salesChannels"
          render={() => (
            <FormItem>
              <FormLabel>Active Sales & Marketing Channels *</FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SALES_CHANNELS.map((channel) => (
                  <FormField
                    key={channel.id}
                    control={form.control}
                    name="salesChannels"
                    render={({ field }) => {
                      return (
                        <FormItem key={channel.id} className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(channel.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), channel.id])
                                  : field.onChange(field.value?.filter((value: string) => value !== channel.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer text-sm">{channel.label}</FormLabel>
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
