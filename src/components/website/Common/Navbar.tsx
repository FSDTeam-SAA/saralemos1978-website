"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/#how-it-work", label: "Features" },
  { href: "/#show-case", label: "Showcase" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const { data: session } = useSession();
  const pathname = usePathname();

  const isLoggedIn = session?.user ? true : false;
  const isClickingRef = useRef(false);

  const handleMenuItemClick = (href: string) => {
    isClickingRef.current = true;
    setActiveSection(href);

    // Disable scrollspy logic for 1000ms during scroll animation to avoid jumpiness
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  // Detect scroll position and active section
  useEffect(() => {
    // If there is a hash in the URL on mount, set the active section asynchronously to avoid cascading renders
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        setActiveSection(`/${hash}`);
      }, 0);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isClickingRef.current) return;

      let current = "/";
      const sections = menuItems.map((item) => item.href.replace("/#", ""));

      // Check if we are at the bottom of the page
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        current = `/#${sections[sections.length - 1]}`;
      } else {
        // Iterate from bottom to top to find the most deeply scrolled section
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section === "/") continue;

          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Trigger when the section top has scrolled past or is near the sticky header area (200px)
            if (rect.top <= 200) {
              current = `/#${section}`;
              break;
            }
          }
        }
      }

      if (window.scrollY < 100) {
        current = "/";
      }

      setActiveSection(current);
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveSection(`/${window.location.hash}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleScroll(); // Call once on mount

    // Retry handleScroll after 500ms to account for delayed page hydration/layout shifts
    const timer = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={130}
            height={130}
            className="cursor-pointer object-cover"
          />
        </Link>

        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href || (pathname === item.href && activeSection === "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleMenuItemClick(item.href)}
                className={`relative pb-1 transition-all duration-300 ${isActive
                  ? "text-[#904ED4] font-semibold"
                  : "text-[#904ED499] hover:text-[#904ED4]"
                  }`}
              >
                {item.label}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#904ED4] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ================= Auth Buttons ================= */}
        <div className="hidden md:flex items-center gap-2">
          {isLoggedIn ? (
            <Link href="https://dashboard.limepitch.com">
              <Button
                variant="outline"
                className="bg-white rounded-4xl font-medium transition-all duration-300 text-[#904ED4] border border-[#904ED4] cursor-pointer w-40 h-12"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="bg-white rounded-4xl font-medium transition-all duration-300 text-[#904ED4] border border-[#904ED4] cursor-pointer w-40 h-12"
                >
                  Sign Up
                </Button>
              </Link>

              <Link href="https://dashboard.limepitch.com/login">
                <Button className="bg-[#904ED4] rounded-4xl font-medium transition-all duration-300 text-white border border-[#904ED4] cursor-pointer w-40 h-12">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* ================= Mobile Menu ================= */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="bg-white text-[#904ED4]"
                aria-label="Toggle menu"
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <nav className="flex flex-col mt-10 space-y-6">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.href || (pathname === item.href && activeSection === "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        handleMenuItemClick(item.href);
                      }}
                      className={`relative px-4 py-2 text-lg transition-all duration-300 ${isActive
                        ? "text-[#904ED4] font-semibold"
                        : "text-[#904ED499] hover:text-[#904ED4]"
                        }`}
                    >
                      {item.label}

                      {/* Active underline (mobile) */}
                      {isActive && (
                        <span className="absolute left-4 -bottom-1 h-[2px] w-10 bg-[#904ED4] rounded-full" />
                      )}
                    </Link>
                  );
                })}

                {/* Mobile Auth Buttons */}
                {isLoggedIn ? (
                  <div className="flex flex-col gap-4 mt-8 px-4">
                    <Link
                      href="https://dashboard.limepitch.com"
                      onClick={() => setOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full text-[#904ED4] border-[#904ED4]"
                      >
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 mt-8 px-4">
                    <Link href="/signup" onClick={() => setOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full text-[#904ED4] border-[#904ED4]"
                      >
                        Sign Up
                      </Button>
                    </Link>

                    <Link href="https://dashboard.limepitch.com/login" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-[#904ED4] text-white">
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
