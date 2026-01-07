"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

// Other simple nav items
const navItems = [
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
            {/* Courses – Clickable + Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  href="/courses"
                  className={`text-sm font-medium transition-colors  ${
                    pathname === "/courses" || pathname.startsWith("/courses/")
                      ? "text-primary font-semibold"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  Courses
                </Link>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 p-2 bg-background-dark/95 backdrop-blur-md border-surface-border">
                <DropdownMenuLabel className="text-xs font-semibold text-gray-400">
                  Explore Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-surface-border" />

                {/* All Courses – Top link inside dropdown */}
                <DropdownMenuItem asChild>
                  <Link href="/courses" className="font-medium text-white">
                    All Courses{" "}
                    <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-surface-border" />

                {/* Programming */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="text-sm text-white">
                    Programming
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-background-dark/95 backdrop-blur-md border-surface-border text-white">
                      <DropdownMenuItem asChild>
                        <Link href="/courses/cpp-programming-data-structures-algorithms">
                          C++
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/java-programming-masterclass">Java</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/python-programming-data-applications">
                          Python
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/javascript-modern-es6-web-development">
                          Javascript
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* Web Development */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="text-sm text-white">
                    Web Development
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-background-dark/95 backdrop-blur-md border-surface-border text-white">
                      <DropdownMenuItem asChild>
                        <Link href="/courses/reactjs-frontend-development">
                          React JS
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/frontend-web-development">
                          Frontend
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/backend-development-nodejs">
                          Backend
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/mern-stack-development">
                          MERN Full Stack Development
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/java-fullstack">
                          Java Full Stack Development
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* Data Science & Analytics */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="text-sm text-white">
                    Data Science & Analytics
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-background-dark/95 backdrop-blur-md border-surface-border text-white">
                      <DropdownMenuItem asChild>
                        <Link href="/courses/data-science-with-ai">
                          Data Science with AI
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/courses/data-analytics-with-ai">
                          Data Analytics with AI
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                {/* App Development */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="text-sm text-white">
                    App Development
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-background-dark/95 backdrop-blur-md border-surface-border text-white">
                      <DropdownMenuItem asChild>
                        <Link href="/courses/flutter-chat-app-provider-firebase-hive">
                          Flutter
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Nav Items */}
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

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="text-gray-200 hover:text-primary focus:outline-none transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/15 backdrop-blur-2xl border-l border-white/10 shadow-2xl shadow-black/40 p-4 w-72 flex flex-col h-full text-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent pointer-events-none" />

              <SheetHeader className="mb-10">
                <SheetTitle className="text-white/90 text-left text-xl font-semibold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-3 mt-6">
                {/* Main Courses Link (highlighted if on any /courses page) */}
                <SheetClose asChild>
                  <Link
                    href="/courses"
                    className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 border border-white/10 ${
                      pathname === "/courses" ||
                      pathname.startsWith("/courses/")
                        ? "bg-primary/25 text-primary border-primary/30 shadow-[0_0_15px_rgba(43,238,121,0.3)]"
                        : "bg-white/5 hover:bg-white/10 hover:text-white hover:shadow-lg hover:scale-[1.02]"
                    }`}
                  >
                    Courses
                  </Link>
                </SheetClose>

                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 border border-white/10 ${
                        pathname === item.href
                          ? "bg-primary/25 text-primary border-primary/30 shadow-[0_0_15px_rgba(43,238,121,0.3)]"
                          : "bg-white/5 hover:bg-white/10 hover:text-white hover:shadow-lg hover:scale-[1.02]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto pt-12 pb-8">
                <SheetClose asChild>
                  <Link
                    href="/enroll"
                    className="block w-full py-4 px-6 text-center rounded-xl bg-primary text-background-dark font-bold text-base shadow-[0_8px_30px_rgba(43,238,121,0.4)] hover:shadow-[0_12px_40px_rgba(43,238,121,0.55)] hover:scale-[1.03] transition-all duration-300 border border-primary/30 relative overflow-hidden"
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
