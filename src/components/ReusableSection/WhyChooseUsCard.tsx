import React from "react";

interface WhyChooseUsCardProps {
  icon: React.ReactNode;
  count: string;
  title: string;
  description: string;
}

const WhyChooseUsCard = ({
  icon,
  count,
  title,
  description,
}: WhyChooseUsCardProps) => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#3D3A72] to-[#2A2755] p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Icon */}
      <div className="mb-4 text-white/80">
        {icon}
      </div>

      {/* Count */}
      <span className="block text-sm font-medium text-white/70">
        {count}
      </span>

      {/* Title */}
      <h3 className="mt-1 text-lg font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-white/70">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
