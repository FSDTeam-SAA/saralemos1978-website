"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterFormStore } from "@/store/useRegisterFormStore";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Step1FormData, step1Schema } from "@/lib/schemas/profile";

const LANGUAGES = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "italian", label: "Italian" },
  { id: "german", label: "German" },
  { id: "portuguese", label: "Portuguese" },
  { id: "dutch", label: "Dutch" },
  { id: "russian", label: "Russian" },
  { id: "japanese", label: "Japanese" },
  { id: "mandarin", label: "Mandarin" },
  { id: "arabic", label: "Arabic" },
  { id: "other", label: "Other" },
];

interface Step1FormProps {
  onNext: () => void;
}

export function Step1Form({ onNext }: Step1FormProps) {
  const { form: storedForm, setField } = useRegisterFormStore();
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const form = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: storedForm.firstName,
      lastName: storedForm.lastName || "",
      email: storedForm.email,
      password: storedForm.password,
      jobTitle: storedForm.jobTitle,
      phoneNumber: storedForm.phoneNumber,
      companyName: storedForm.companyName,
      industryExperience: storedForm.industryExperience,
      languagesSpoken: storedForm.languagesSpoken,
      profilePhoto: storedForm.profilePhoto,
    },
  });

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setField("profilePhoto", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(data: Step1FormData) {
    // Update store with all fields
    setField("firstName", data.firstName);
    setField("lastName", data.lastName || "");
    setField("email", data.email);
    setField("password", data.password);
    setField("jobTitle", data.jobTitle);
    setField("phoneNumber", data.phoneNumber);
    setField("companyName", data.companyName);
    setField("industryExperience", data.industryExperience);
    setField("languagesSpoken", data.languagesSpoken);

    onNext();
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <div>
            <h1 className="text-3xl font-bold text-[#65A30D] text-center">
              Welcome to Hierro A Medida
            </h1>
            <p className="text-center text-gray-600 mt-2">
              Let&apos;s set up your profile to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Job Title */}
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Sales Manager" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="hello@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Must be at least 8 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormDescription>Must be at least 8 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Industry Experience */}
          <FormField
            control={form.control}
            name="industryExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry Experience *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your experience, qualifications, and professional associations..."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Languages Spoken */}
          <FormField
            control={form.control}
            name="languagesSpoken"
            render={() => (
              <FormItem>
                <FormLabel>Languages Spoken *</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {LANGUAGES.map((language) => (
                    <FormField
                      key={language.id}
                      control={form.control}
                      name="languagesSpoken"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={language.id}
                            className="flex items-center space-x-2"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(language.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        language.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== language.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              {language.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profile Photo */}
          <FormItem>
            <FormLabel>Profile Photo</FormLabel>
            <FormControl>
              <div>
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleProfilePhotoChange}
                  className="hidden"
                  id="profile-photo"
                />
                <label
                  htmlFor="profile-photo"
                  className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#65A30D] transition"
                >
                  {profilePreview ? (
                    <img
                      src={profilePreview || "/placeholder.svg"}
                      alt="Profile"
                      className="w-32 h-32 object-cover mx-auto rounded"
                    />
                  ) : (
                    <div>
                      <div className="text-3xl mb-2">📤</div>
                      <p className="text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>

          <div className="flex gap-4 justify-end pt-6">
            <Button
              variant="outline"
              className="border-[#65A30D] text-[#65A30D] bg-transparent cursor-pointer"
              disabled
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="bg-[#65A30D] hover:bg-[#65A30D] cursor-pointer"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
