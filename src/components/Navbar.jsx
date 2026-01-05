"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/live", label: "Live Training" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background-dark/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img
                className="h-10 sm:h-12 w-auto"
                src="/Aloc_logo1.png"
                alt="Alocode logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/enroll"
              className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-background-dark hover:bg-primary/90 transition-all text-sm font-bold shadow-[0_0_15px_rgba(43,238,121,0.3)] hover:shadow-[0_0_25px_rgba(43,238,121,0.5)]"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu – using shadcn Sheet */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="text-gray-200 hover:text-primary focus:outline-none transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            {/* Glassmorphic SheetContent */}
            <SheetContent
              side="right"
              className="
                bg-black/15 backdrop-blur-2xl border-l border-white/10
                shadow-2xl shadow-black/40 p-4 w-72 flex flex-col h-full
                text-gray-100
              "
            >
              {/* Optional subtle shine overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-white/8 via-transparent to-transparent pointer-events-none" />

              <SheetHeader className="mb-10">
                <SheetTitle className="text-white/90 text-left text-xl font-semibold">
                  Menu
                </SheetTitle>
                {/* Close button is automatically provided by Sheet */}
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                      block px-5 py-4 rounded-xl text-lg font-medium
                      transition-all duration-300 border border-white/10
                      ${
                        pathname === item.href
                          ? "bg-primary/25 text-primary border-primary/30 shadow-[0_0_15px_rgba(43,238,121,0.3)]"
                          : "bg-white/5 hover:bg-white/10 hover:text-white hover:shadow-lg hover:scale-[1.02]"
                      }
                    `}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="mt-auto pt-12 pb-8">
                <SheetClose asChild>
                  <Link
                    href="/enroll"
                    className="
                    block w-full py-4 px-6 text-center rounded-xl
                    bg-primary text-background-dark font-bold text-base
                    shadow-[0_8px_30px_rgba(43,238,121,0.4)]
                    hover:shadow-[0_12px_40px_rgba(43,238,121,0.55)]
                    hover:scale-[1.03] transition-all duration-300
                    border border-primary/30 relative overflow-hidden
                  "
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
