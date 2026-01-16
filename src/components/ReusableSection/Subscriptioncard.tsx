import { Check } from "lucide-react";
import { SubscriptionPlan } from "@/lib/type/subscription";
import React from "react";

const Subscriptioncard = ({ plan }: { plan: SubscriptionPlan }) => {
  const {
    name,
    price,
    tagline = "Premium features included",
    cta = "Get Started",
    period = "month",
    features = [],
    featured = false,
    popular = false,
  } = plan;

  return (
    <div
      className={`
      relative h-full transition-all duration-300
      ${featured ? "lg:scale-105 lg:-translate-y-4 " : ""}
    `}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-[#B5ED5B] from-blue-600 to-purple-600 text-[#343A40] text-sm font-semibold py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
            Most Popular
          </div>
        </div>
      )}

      {/* Pricing Card */}
      <div
        className={`
        h-full rounded-2xl border-2 overflow-hidden flex flex-col
        ${
          featured
            ? "bg-[#5A50F5] border-blue-300 shadow-2xl"
            : "bg-white border-gray-200 shadow-lg"
        }
      `}
      >
        {/* Card Header */}
        <div
          className={`
          p-8 text-center
          ${featured ? "bg-[#5A50F5]" : "bg-gray-50"}
        `}
        >
          <h3 className={`text-2xl leading-[120%] font-semibold mb-1 ${featured ? 'text-white ':'text-[#3D483F]'}`}>{name}</h3>
          <p className={`text-base leading-[150%] font-normal mb-5 ${featured ? 'text-white':'text-[#3D483F]'}`}>{tagline}</p>

          {/* Price Section */}
          <div className="mb-6">
            <div className="flex flex-col  text-center items-center justify-center">
              <span
                className={`
                text-2xl md:text-3xl font-bold
                ${featured ? "text-[#B5ED5B] " : "text-[#5B4FFF]"}
              `}
              >
                ${price}
              </span>
              {period && (
                <span className={`${featured ? "text-white":"text-[#2C2668]"} ml-2 text-lg`}>{period}</span>
              )}
            </div>
            {price === 0 && (
              <p className="text-gray-600 mt-2">Contact for pricing details</p>
            )}
          </div>

          {/* CTA Button */}
          <button
            className={`
            w-full py-4 rounded-4xl font-semibold text-lg transition-all duration-300
            ${
              featured
                ? "bg-[#B5ED5B] text-black hover:from-blue-700 hover:to-purple-700"
                : "bg-[#5A50F5] text-white hover:bg-gray-800"
            }
          `}
          >
            {cta}
          </button>
        </div>

        {/* Features List */}
        <div className="p-8 flex-grow">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`
                  flex-shrink-0 w-6 h-6  flex items-center justify-center mr-3 mt-0.5
                
                `}
                >
                  <Check className={`    ${
                    featured ? "text-[#B5ED5B]" : "text-[#5B4FFF]"
                  }`}/>
                </div>
                <span
                  className={`text-gray-700    ${
                    featured ? "text-white" : "text-black"
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider for non-featured cards */}
        {!featured && (
          <div className="px-8 pb-8">
            <div className="border-t border-gray-200"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscriptioncard;
