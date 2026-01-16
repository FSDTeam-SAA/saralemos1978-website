import React from "react";
import { Upload, Share2, CircleCheckBig, Fan } from "lucide-react";
import HowToWorkCard from "@/components/ReusableSection/HowToWorkCard";

const HowToWork = () => {
  return (
    <section className="my-12 md:my-16">
      <div className="container  mx-auto px-4">
        
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          <HowToWorkCard
            step="01"
            title="Upload Listing"
            description="Simply upload yacht images and basic details to our secure platform."
            icon={<Upload size={22} />}
          />

          <HowToWorkCard
            step="02"
            title="Add Details"
            description="Fill in pricing, features, and availability information."
            icon={<Fan  size={22} />}
          />

          <HowToWorkCard
            step="03"
            title="Review & Approve"
            description="Check everything carefully before publishing your listing."
            icon={<Share2  size={22} />}
          />

          <HowToWorkCard
            step="04"
            title="Go Live"
            description="Your yacht listing is live and ready for customers."
            icon={<CircleCheckBig size={22} />}
          />

        </div>
      </div>
    </section>
  );
};

export default HowToWork;
