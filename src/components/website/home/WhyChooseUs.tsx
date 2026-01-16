import React from "react";

import { Award, Rocket, Users, Heart } from "lucide-react";
import WhyChooseUsCard from "@/components/ReusableSection/WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[linear-gradient(270deg,_#1A1A2E_0%,_#2E266D_100%)]">
      <div className="container  mx-auto  px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide rounded-full p-2 bg-white text-gray-800 ">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white">
           Trusted By Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white">
           Join the revolution in yacht listing management and experience unparalleled efficiency
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <WhyChooseUsCard
            icon={<Award size={26} />}
            count="500+"
            title="Listings Processed"
            description="Successfully automated across all platforms."
          />

          <WhyChooseUsCard
            icon={<Users size={26} />}

            count="99.9%"
            title="Secure Platform"
            description="Enterprise-grade security for your data."
          />

          <WhyChooseUsCard
            icon={<Rocket size={26} />}
            count="3x Faster"
            title="Fast Performance"
            description="Optimized workflows for quicker results."
          />

          <WhyChooseUsCard
            icon={<Heart  size={26} />}

            count="1K+"
            title="Happy Clients"
            description="Trusted by users around the globe."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
