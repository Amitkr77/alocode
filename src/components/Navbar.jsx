"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";

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

import courses from "@/lib/Courses";

const navItems = [
  { href: "/live", label: "Live Training" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
];

const groupedCourses = courses.reduce((acc, course) => {
  const cat = course.category || "Other";
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(course);
  return acc;
}, {});

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        background: scrolled
          ? "rgba(252,252,251,0.97)"
          : "rgba(252,252,251,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#DBD7C7" : "rgba(219,215,199,0.5)"}`,
        boxShadow: scrolled ? "0 1px 16px rgba(38,42,43,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img
                className="h-14 sm:h-16 w-auto"
                src="/alo_logoo.png"
                alt="Alocode logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Courses dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{
                    color:
                      pathname === "/courses" || pathname.startsWith("/courses/")
                        ? "#FAA114"
                        : "#786E67",
                    background:
                      pathname === "/courses" || pathname.startsWith("/courses/")
                        ? "rgba(250,161,20,0.08)"
                        : "transparent",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Courses
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-64 p-2 rounded-2xl mt-1"
                style={{
                  background: "#FCFCFB",
                  border: "1px solid #DBD7C7",
                  boxShadow: "0 8px 32px rgba(38,42,43,0.10)",
                }}
              >
                <DropdownMenuLabel
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5"
                  style={{ color: "#B3AA9E", fontFamily: "system-ui, sans-serif" }}
                >
                  Explore Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator style={{ background: "#DBD7C7" }} />

                <DropdownMenuItem asChild>
                  <Link
                    href="/courses"
                    className="rounded-xl px-3 py-2 flex items-center justify-between font-semibold transition-colors"
                    style={{ color: "#262A2B", fontFamily: "system-ui, sans-serif" }}
                  >
                    All Courses
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: "#FAA114" }} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator style={{ background: "#DBD7C7" }} />

                {Object.entries(groupedCourses).map(([category, items]) => (
                  <DropdownMenuSub key={category}>
                    <DropdownMenuSubTrigger
                      className="text-sm rounded-xl px-3 py-2 font-medium"
                      style={{ color: "#262A2B", fontFamily: "system-ui, sans-serif" }}
                    >
                      {category}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="rounded-2xl p-2 min-w-[200px]"
                        style={{
                          background: "#FCFCFB",
                          border: "1px solid #DBD7C7",
                          boxShadow: "0 8px 32px rgba(38,42,43,0.10)",
                        }}
                      >
                        {items.map((course) => (
                          <DropdownMenuItem key={course.slug} asChild>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="text-sm rounded-xl px-3 py-2"
                              style={{ color: "#786E67", fontFamily: "system-ui, sans-serif" }}
                            >
                              {course.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator style={{ background: "#DBD7C7" }} />
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/courses?category=${encodeURIComponent(category)}`}
                            className="text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1"
                            style={{ color: "#FAA114", fontFamily: "system-ui, sans-serif" }}
                          >
                            View all {category}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  color: pathname === item.href ? "#FAA114" : "#786E67",
                  background:
                    pathname === item.href
                      ? "rgba(250,161,20,0.08)"
                      : "transparent",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/enroll"
              className="flex items-center justify-center rounded-full h-10 px-6 text-white text-sm font-bold transition-all"
              style={{
                background: "#FAA114",
                boxShadow: "0 4px 16px rgba(250,161,20,0.30)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="focus:outline-none transition-colors p-1"
                style={{ color: "#262A2B" }}
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="p-0 w-72 flex flex-col h-full overflow-y-auto"
              style={{
                background: "#FCFCFB",
                borderLeft: "1px solid #DBD7C7",
                color: "#262A2B",
              }}
            >
              <SheetHeader
                className="px-6 pt-6 pb-4"
                style={{ borderBottom: "1px solid #DBD7C7" }}
              >
                <SheetTitle
                  className="text-left text-lg font-black"
                  style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
                >
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4 pt-4">
                {/* All Courses */}
                <SheetClose asChild>
                  <Link
                    href="/courses"
                    className="block px-4 py-3 rounded-xl text-sm font-semibold transition-all border"
                    style={{
                      color:
                        pathname === "/courses" || pathname.startsWith("/courses/")
                          ? "#FAA114"
                          : "#786E67",
                      background:
                        pathname === "/courses" || pathname.startsWith("/courses/")
                          ? "rgba(250,161,20,0.08)"
                          : "transparent",
                      borderColor:
                        pathname === "/courses" || pathname.startsWith("/courses/")
                          ? "rgba(250,161,20,0.20)"
                          : "transparent",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    All Courses
                  </Link>
                </SheetClose>

                {/* Course categories */}
                {Object.entries(groupedCourses).map(([category, items]) => (
                  <div key={category} className="flex flex-col gap-0.5 mt-1">
                    <SheetClose asChild>
                      <Link
                        href={`/courses?category=${encodeURIComponent(category)}`}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide border"
                        style={{
                          color: "#FAA114",
                          background: "rgba(250,161,20,0.06)",
                          borderColor: "#DBD7C7",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {category}
                      </Link>
                    </SheetClose>
                    {items.map((course) => (
                      <SheetClose asChild key={course.slug}>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="block px-4 py-2.5 ml-3 rounded-xl text-sm transition-all border border-transparent"
                          style={{
                            color:
                              pathname === `/courses/${course.slug}`
                                ? "#FAA114"
                                : "#786E67",
                            background:
                              pathname === `/courses/${course.slug}`
                                ? "rgba(250,161,20,0.08)"
                                : "transparent",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {course.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}

                <div className="h-px my-2" style={{ background: "#DBD7C7" }} />

                {/* Nav items */}
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-xl text-sm font-semibold transition-all border"
                      style={{
                        color: pathname === item.href ? "#FAA114" : "#786E67",
                        background:
                          pathname === item.href
                            ? "rgba(250,161,20,0.08)"
                            : "transparent",
                        borderColor:
                          pathname === item.href
                            ? "rgba(250,161,20,0.20)"
                            : "transparent",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div
                className="mt-auto px-4 pb-8 pt-4"
                style={{ borderTop: "1px solid #DBD7C7" }}
              >
                <SheetClose asChild>
                  <Link
                    href="/enroll"
                    className="block w-full py-3.5 px-6 text-center rounded-full text-white font-bold text-sm transition-all"
                    style={{
                      background: "#FAA114",
                      boxShadow: "0 4px 16px rgba(250,161,20,0.30)",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Enroll Now
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