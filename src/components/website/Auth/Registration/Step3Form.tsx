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
  { id: 'gates', label: 'Sail Yachts' },
  { id: 'railings', label: 'Motor Yachts' },
  { id: 'stairs', label: 'Sail Catamarans' },
  { id: 'window-grills', label: 'Motor Catamarans)' },
  { id: 'pergolas', label: 'Trimarans' },
  { id: 'furniture', label: 'Motor Catamarans' },
  { id: 'structures', label: 'Trawlers' },
  { id: 'decorative', label: 'Express Cruisers' },
  { id: 'fences', label: 'Sport Fishing Yachts' },
  { id: 'doors', label: 'Houseboats' },
  { id: 'pleasure-boats', label: 'Pleasure Boats (Under 24m)' },
  { id: 'commercial-vessels', label: 'Commercial Vessels' },
  { id: 'personal-watercraft', label: 'Personal Watercraft (PWC)' },
]

const PRICE_RANGES = [
  { value: 'under-500k', label: 'Under $500,000' },
  { value: '500k-1m', label: '$500,000 - $1 Million' },
  { value: '1m-5m', label: '$1 Million - $5 Million' },
  { value: '5m-10m', label: '$5 Million - $10 Million' },
  { value: '10m-25m', label: '$10 Million - $25 Million' },
  { value: '25m-50m', label: '$25 Million - $50 Million' },
  { value: 'over-50m', label: 'Over $50 Million' },
];

const SALES_CHANNELS = [
  { id: 'YachtWorld', label: 'YachtWorld' },
  { id: 'Boat-Trader', label: 'Boat Trader' },
  { id: 'Boats-com', label: 'Boats.com' },
  { id: 'YachtCloser', label: 'YachtCloser' },
  { id: 'SuperYacht-com', label: 'SuperYacht.com' },
  { id: 'Trawler-Yachts', label: 'Trawler-Yachts' },
  { id: 'IYBA', label: 'IYBA' },
  { id: 'Yachtbroker.net', label: 'Yachtbroker.net' },
  { id: 'Yacht-Sales-America', label: 'Yacht-Sales-America' },
  { id: 'Other', label: 'Other' },
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
          <h1 className="text-3xl font-bold text-[#65A30D] text-center">Listing Preferences</h1>
          <p className="text-center text-gray-600 mt-2">Let&apos;S Set up your to Create amazing yacnt marketing</p>
        </div>

        {/* Product Categories */}
        <FormField
          control={form.control}
          name="productCategories"
          render={() => (
            <FormItem>
              <FormLabel>Yacht Types Typically Handled *</FormLabel>
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
              <FormLabel>Average Price Range of Listings</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
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
              <FormLabel>Listing Platforms Used</FormLabel>
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
          <Button type="button" variant="outline" className="border-[#65A30D] text-[#65A30D] bg-transparent cursor-pointer" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit" className="bg-[#65A30D] hover:bg-[#65A30D] cursor-pointer">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
