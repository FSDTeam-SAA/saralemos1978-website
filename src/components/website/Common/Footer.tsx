"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import ContactModal from "@/components/ReusableSection/ContactModal";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-[#2C2668] text-white py-10 text-center lg:text-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-gray-700 pb-8">

          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={140}
              height={140}
              className="object-cover"
            />

            <p className="text-white/80 leading-relaxed max-w-md">
              Create, manage, and market yacht listings while publishing content and coordinating social media promotion in one place
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2">
              Company
            </h2>

            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/#how-it-work" },
                { name: "Pricing", href: "/#pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center justify-center lg:justify-start group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2">
              Support
            </h2>

            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {[
                { name: "Help Center", href: "/#help-center" },
                { name: "Contact", href: "/#contact", isModal: true },
                { name: "FAQ", href: "/#help-center" },
              ].map((link) => (
                <li key={link.name}>
                  {link.isModal ? (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center justify-center lg:justify-start group text-left cursor-pointer bg-transparent border-none p-0 font-normal"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center justify-center lg:justify-start group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2">
              Legal
            </h2>

            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                {
                  name: "Data Deletion Instructions",
                  href: "/data-deletion-instructions",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center justify-center lg:justify-start group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <p className="text-white/80 text-sm mb-4">
                Subscribe for updates & news
              </p>

              <form className="w-full">
                <div className="flex flex-col sm:flex-row w-full items-stretch gap-2 sm:gap-0 overflow-hidden rounded-lg border border-white/20 bg-white/10">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-4 py-3 bg-transparent text-white placeholder-white/50 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="shrink-0 px-6 py-3 bg-[#5A50F5] cursor-pointer text-white font-semibold transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Social */}
            <div className="pt-2">
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  href="#"
                  className="bg-[#5A50F5] p-3 rounded-2xl text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  <Facebook className="w-7 h-7" />
                </Link>

                <Link
                  href="#"
                  className="bg-[#5A50F5] p-3 rounded-2xl text-white hover:bg-blue-800 transition-colors duration-300"
                >
                  <Linkedin className="w-7 h-7" />
                </Link>

                <Link
                  href="#"
                  className="bg-[#5A50F5] p-3 rounded-2xl text-white hover:bg-[#5A50F5] transition-colors duration-300"
                >
                  <Instagram className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </footer>
  );
};

export default Footer;
