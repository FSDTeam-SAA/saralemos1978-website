

import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto container px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Elevate Your Yacht Listings with Intelligent Automation
            </h1>

            <p className="mt-5 text-base text-gray-200 sm:text-lg">
              Transform your yacht brokerage with cutting-edge AI technology.
              Automatically extract listing details, generate compelling
              content, and publish across all platforms—all in seconds.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className=" bg-[#B5ED5B] px-8 py-4 text-[#343A40] font-semibold transition hover:bg-[#B5ED5B] rounded-4xl flex items-center"
              >
                <span> Start Free Trial</span> <ArrowRight className="ml-2" />
              </a>

              <a
                href="#"
                className=" border border-[#5A50F5] px-8 py-4 text-[#5A50F5] bg-[#F8F7F3] font-semibold transition rounded-4xl flex items-center"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
