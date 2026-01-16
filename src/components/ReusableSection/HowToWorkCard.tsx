import React from "react";

interface HowToWorkCardProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowToWorkCard = ({
  step,
  title,
  description,
  icon,
}: HowToWorkCardProps) => {
  return (
    <div className="relative rounded-xl border border-blue-200 bg-[#F3FFCC] p-5 transition-all duration-300 hover:shadow-lg">
      
      {/* Step Badge */}
      <div className="absolute -top-3 right-4 rounded-lg bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-md">
        {step}
      </div>

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default HowToWorkCard;
