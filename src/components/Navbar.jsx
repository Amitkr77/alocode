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

// Dark nav surface — deep green instead of dark grey
const NAV_BG_SCROLLED = "rgba(10,28,16,0.98)";
const NAV_BG_DEFAULT = "rgba(10,28,16,0.88)";
const NAV_BORDER_SCROLLED = "rgba(66,214,116,0.12)";
const NAV_BORDER_DEFAULT = "rgba(66,214,116,0.07)";
const DROPDOWN_BG = "#0a1c10";
const DIVIDER = "rgba(66,214,116,0.10)";

// Active nav item tint
const ACTIVE_COLOR = "var(--primary)"; // #42D674
const ACTIVE_BG = "rgba(66,214,116,0.10)";
const ACTIVE_BORDER = "rgba(66,214,116,0.20)";
const INACTIVE_COLOR = "rgba(255,255,255,0.70)";
const INACTIVE_COLOR_DIM = "rgba(255,255,255,0.55)";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCoursesActive =
    pathname === "/courses" || pathname.startsWith("/courses/");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? NAV_BG_SCROLLED : NAV_BG_DEFAULT,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? NAV_BORDER_SCROLLED : NAV_BORDER_DEFAULT}`,
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-4 lg:px-10">
        <div className="flex items-center justify-between h-15 sm:h-18">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img
                className="h-10 sm:h-13 w-auto"
                src="/Aloc_logo1.png"
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
                    color: isCoursesActive ? ACTIVE_COLOR : INACTIVE_COLOR,
                    background: isCoursesActive ? ACTIVE_BG : "transparent",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Courses
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-60 p-2 rounded-2xl mt-0"
                style={{
                  background: DROPDOWN_BG,
                  border: "1px solid rgba(66,214,116,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                <DropdownMenuLabel
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Explore Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator style={{ background: DIVIDER }} />

                <DropdownMenuItem asChild>
                  <Link
                    href="/courses"
                    className="rounded-xl px-3 py-1 flex items-center justify-between font-semibold transition-colors"
                    style={{
                      color: "rgba(255,255,255,0.90)",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    All Courses
                    <ArrowRight
                      className="w-3.5 h-3.5"
                      style={{ color: ACTIVE_COLOR }}
                    />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator style={{ background: DIVIDER }} />

                {Object.entries(groupedCourses).map(([category, items]) => (
                  <DropdownMenuSub key={category}>
                    <DropdownMenuSubTrigger
                      className="text-sm rounded-xl px-3 py-1 font-medium"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {category}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="rounded-2xl p-2 min-w-[200px]"
                        style={{
                          background: DROPDOWN_BG,
                          border: "1px solid rgba(66,214,116,0.12)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                        }}
                      >
                        {items.map((course) => (
                          <DropdownMenuItem key={course.slug} asChild>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="text-sm rounded-xl px-3 py-1"
                              style={{
                                color: "rgba(255,255,255,0.60)",
                                fontFamily: "system-ui, sans-serif",
                              }}
                            >
                              {course.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator
                          style={{ background: DIVIDER }}
                        />
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/courses?category=${encodeURIComponent(category)}`}
                            className="text-xs font-bold px-3 py-1 rounded-xl flex items-center gap-1"
                            style={{
                              color: ACTIVE_COLOR,
                              fontFamily: "system-ui, sans-serif",
                            }}
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
                className="px-4 py-1 rounded-full text-sm font-medium transition-colors"
                style={{
                  color: pathname === item.href ? ACTIVE_COLOR : INACTIVE_COLOR,
                  background:
                    pathname === item.href ? ACTIVE_BG : "transparent",
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
              className="flex items-center justify-center rounded-full h-9 px-6 text-sm font-bold transition-all"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
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
                style={{ color: "rgba(255,255,255,0.80)" }}
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="p-0 w-60 flex flex-col h-full overflow-y-auto"
              style={{
                background: DROPDOWN_BG,
                borderLeft: "1px solid rgba(66,214,116,0.10)",
                color: "#fff",
              }}
            >
              <SheetHeader
                className="px-6 pt-4 pb-2"
                style={{ borderBottom: "1px solid rgba(66,214,116,0.10)" }}
              >
                <SheetTitle
                  className="text-left text-lg font-black"
                  style={{ color: "#fff", fontFamily: "'Georgia', serif" }}
                >
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4 pt-2">
                {/* All Courses */}
                <SheetClose asChild>
                  <Link
                    href="/courses"
                    className="block px-4 py-1 rounded-xl text-sm font-semibold transition-all border"
                    style={{
                      color: isCoursesActive ? ACTIVE_COLOR : INACTIVE_COLOR,
                      background: isCoursesActive ? ACTIVE_BG : "transparent",
                      borderColor: isCoursesActive
                        ? ACTIVE_BORDER
                        : "transparent",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    All Courses
                  </Link>
                </SheetClose>

                {/* Course categories — collapsible */}
                {Object.entries(groupedCourses).map(([category, items]) => {
                  const isOpen = openCategory === category;
                  return (
                    <div key={category} className="flex flex-col gap-0.5 mt-1">
                      <button
                        onClick={() =>
                          setOpenCategory(isOpen ? null : category)
                        }
                        className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border w-full text-left"
                        style={{
                          color: ACTIVE_COLOR,
                          background: "rgba(66,214,116,0.06)",
                          borderColor: DIVIDER,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {category}
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-200"
                          style={{
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </button>

                      {/* Courses list — only shown when open */}
                      {isOpen &&
                        items.map((course) => (
                          <SheetClose asChild key={course.slug}>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="block px-4 py-1 ml-2 rounded-xl text-sm transition-all border border-transparent"
                              style={{
                                color:
                                  pathname === `/courses/${course.slug}`
                                    ? ACTIVE_COLOR
                                    : INACTIVE_COLOR_DIM,
                                background:
                                  pathname === `/courses/${course.slug}`
                                    ? ACTIVE_BG
                                    : "transparent",
                                fontFamily: "system-ui, sans-serif",
                              }}
                            >
                              {course.title}
                            </Link>
                          </SheetClose>
                        ))}
                    </div>
                  );
                })}

                <div className="h-px my-2" style={{ background: DIVIDER }} />

                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-1 rounded-xl text-sm font-semibold transition-all border"
                      style={{
                        color:
                          pathname === item.href
                            ? ACTIVE_COLOR
                            : INACTIVE_COLOR,
                        background:
                          pathname === item.href ? ACTIVE_BG : "transparent",
                        borderColor:
                          pathname === item.href
                            ? ACTIVE_BORDER
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
                className="mt-auto px-4 pb-6 pt-4"
                style={{ borderTop: "1px solid rgba(66,214,116,0.10)" }}
              >
                <SheetClose asChild>
                  <Link
                    href="/enroll"
                    className="block w-full py-3 px-4 text-center rounded-full font-bold text-sm transition-all"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
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
