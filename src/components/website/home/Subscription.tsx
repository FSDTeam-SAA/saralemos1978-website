/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Check, Star, Zap, Shield, TrendingUp, Users } from "lucide-react";
import Subscriptioncard from "@/components/ReusableSection/Subscriptioncard";
import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "@/lib/api";
import { SubscriptionPlan, ApiResponse } from "@/lib/type/subscription";
import { useSession } from "next-auth/react";
import { usePayment, PaymentVariables } from "@/lib/hooks/usePayment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Subscription = () => {
  const { data: session } = useSession();
  const { mutate: subscribe, isPending: isSubscribing } = usePayment();
  const router = useRouter();

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<ApiResponse>({
    queryKey: ["subscription"],
    queryFn: getSubscription,
  });

  const handleSubscribe = (plan: SubscriptionPlan) => {
    if (!session?.user) {
      toast.error("Please login to subscribe");
      router.push("/login");
      return;
    }

    // Safe extraction of userId
    const user = session.user as { id?: string; _id?: string; email?: string };
    const userId = user?.id || user?._id;

    if (!userId) {
      toast.error("User ID not found. Please re-login.");
      return;
    }

    const variables: PaymentVariables = { userId: userId, planId: plan._id };

    subscribe(variables, {
      onSuccess: (data) => {
        toast.success("Subscription initialized successfully!");

        const url = data?.data?.url;
        if (url) {
          window.open(url, "_blank");
        }
      },

      onError: (error: any) => {
        toast.error(error.message || "Failed to initialize subscription");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !response?.status) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600">
          We couldn&apos;t load the subscription plans. Please try again later.
        </p>
      </div>
    );
  }

  const plans = response.data || [];

  // Find the highest price to mark as "Most Popular"
  const maxPrice = Math.max(...plans.map((p: SubscriptionPlan) => p.price), 0);

  // Sort plans by price (optional, but usually looks better)
  // const sortedPlans = [...plans].sort((a, b) => a.price - b.price);

  // Decorate plans with UI-specific flags
  const decoratedPlans: SubscriptionPlan[] = plans.map((plan) => ({
    ...plan,
    popular: plan.price === maxPrice && plan.price > 0,
    featured: plan.price === maxPrice && plan.price > 0,
    tagline:
      plan.price === maxPrice
        ? "Our most comprehensive plan"
        : "Great for getting started",
    cta: plan.price === maxPrice ? "Choose Professional" : "Get Started",
    period: " month",
  }));

  return (
    <div className="font-sans bg-gray-50 py-20 px-4 md:px-8">
      <div className="container  mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <span className="bg-[#EAE9FF] py-2 px-4 rounded-full mb-1.5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E266D] mb-2">
            Simple,<span className="text-[#65A30D]">Transparent</span> Pricing
          </h1>
          <p className="text-base text-[#5D665E] leading-[150%] font-normal  max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include premium
            features.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {decoratedPlans.map((plan) => (
            <div key={plan._id}>
              <Subscriptioncard plan={plan} onSubscribe={handleSubscribe} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8  ">
          <p className="text-gray-600">
            All plans include SSL encryption, regular backups, and 99.9% uptime
            guarantees.
          </p>
          {/* <div className="flex flex-wrap justify-center items-center mt-4 gap-6 text-sm text-gray-500">
                        <span className="flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Enterprise-grade security
                        </span>
                        <span className="flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            24/7 monitoring
                        </span>
                        <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Priority support
                        </span>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
