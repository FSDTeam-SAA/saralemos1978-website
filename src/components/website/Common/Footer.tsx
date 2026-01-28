import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2C2668] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-gray-700 pb-8">
          {/* Left Column - Brand & Description */}
          <div className="space-y-4">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={140}
              height={140}
              className=" object-cover"
            />

            <p className="text-white/80 leading-relaxed max-w-md">
              Active surveillance testing or detecting cases and providing the
              necessary information to the relevant authorities for timely
              action.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 ">
              Company
            </h2>
            <ul className="space-y-3">
              {[
                { name: "Cloud Mutual", href: "#" },
                { name: "Infoline", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "Start Free Trial Report", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 ">
              Support
            </h2>
            <ul className="space-y-3">
              {[
                { name: "Help Center", href: "#" },
                { name: "Contact", href: "#" },
                { name: "FAQ", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 ">
              Legal
            </h2>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Security", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription & Social Links */}
          <div className="space-y-6">
            <div>
              <p className="text-white/80 text-sm mb-4 italic">
                Submit your applets here
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  aria-label="Email address for subscription"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links with Icons */}
            <div className="pt-2">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-blue-600 p-3 rounded-2xl text-white hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-7 h-7" />
                </Link>
                <Link
                  href="#"
                  className="bg-blue-700 p-3 rounded-2xl text-white hover:bg-blue-800 transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-7 h-7" />
                </Link>
                <Link
                  href="#"
                  className="bg-pink-600 p-3 rounded-2xl text-white hover:bg-pink-700 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
