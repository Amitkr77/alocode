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

const DROPDOWN_BG = "#0a1c10";
const DIVIDER = "rgba(66,214,116,0.10)";
const ACTIVE_COLOR = "#42d674";
const ACTIVE_BG = "#42d674";
const ACTIVE_TEXT = "#0f2d1a";
const INACTIVE_COLOR = "rgba(255,255,255,0.75)";
const INACTIVE_COLOR_DIM = "rgba(255,255,255,0.55)";
const ACTIVE_BORDER = "rgba(66,214,116,0.20)";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center h-16 sm:h-22">
          {/* ── Single unified navbar pill ── */}
          <nav
            className="flex items-center justify-between w-full px-3 py-1.5 rounded-full"
            style={{
              background: scrolled
                ? "rgba(10,28,16,0.97)"
                : "rgba(10,28,16,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(66,214,116,0.15)",
              boxShadow: scrolled
                ? "0 4px 24px rgba(0,0,0,0.35)"
                : "0 2px 12px rgba(0,0,0,0.20)",
              transition: "all 0.3s ease",
            }}
          >
            {/* ── Logo ── */}
            <Link href="/" className="shrink-0 pl-2">
              <img
                className="h-9 sm:h-11 w-auto"
                src="/Aloc_logo1.png"
                alt="Alocode logo"
              />
            </Link>

            {/* ── Center nav links (desktop only) ── */}
            <div className="hidden md:flex items-center gap-1">
              {/* Courses dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                    style={{
                      color: isCoursesActive ? ACTIVE_TEXT : INACTIVE_COLOR,
                      background: isCoursesActive ? ACTIVE_BG : "transparent",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Courses
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-60 p-2 rounded-2xl mt-2"
                  style={{
                    background: DROPDOWN_BG,
                    border: "1px solid rgba(66,214,116,0.12)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.40)",
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
                            boxShadow: "0 8px 32px rgba(0,0,0,0.40)",
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

              {/* Regular nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                  style={{
                    color:
                      pathname === item.href ? ACTIVE_TEXT : INACTIVE_COLOR,
                    background:
                      pathname === item.href ? ACTIVE_BG : "transparent",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ── Right side: Enroll Now (desktop) + Hamburger (mobile) ── */}
            <div className="flex items-center gap-2 pr-1">
              {/* Enroll Now — desktop only */}
              <Link
                href="/enroll"
                className="hidden md:block px-5 py-2 rounded-full text-sm font-bold transition-all"
                style={{
                  background: "transparent",
                  color: ACTIVE_COLOR,
                  border: `1.5px solid ${ACTIVE_COLOR}`,
                  boxShadow: "0 0 12px rgba(66,214,116,0.20)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Enroll Now
              </Link>

              {/* ── Mobile hamburger ── */}
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="md:hidden focus:outline-none p-2 rounded-full transition-colors"
                    style={{
                      color: "rgba(255,255,255,0.80)",
                      background: "rgba(66,214,116,0.08)",
                      border: "1px solid rgba(66,214,116,0.15)",
                    }}
                    aria-label="Open mobile menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="p-0 w-64 flex flex-col h-full overflow-y-auto"
                  style={{
                    background: DROPDOWN_BG,
                    borderLeft: "1px solid rgba(66,214,116,0.10)",
                    color: "#fff",
                  }}
                >
                  {/* Mobile sheet header with logo */}
                  <SheetHeader
                    className="px-6 pt-5 pb-4"
                    style={{ borderBottom: "1px solid rgba(66,214,116,0.10)" }}
                  >
                    <SheetTitle className="text-left">
                      <img
                        className="h-8 w-auto"
                        src="/Aloc_logo1.png"
                        alt="Alocode logo"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col gap-1 px-4 pt-3">
                    <SheetClose asChild>
                      <Link
                        href="/courses"
                        className="block px-4 py-2 rounded-xl text-sm font-semibold transition-all border"
                        style={{
                          color: isCoursesActive
                            ? ACTIVE_COLOR
                            : INACTIVE_COLOR,
                          background: isCoursesActive
                            ? "rgba(66,214,116,0.10)"
                            : "transparent",
                          borderColor: isCoursesActive
                            ? ACTIVE_BORDER
                            : "transparent",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        All Courses
                      </Link>
                    </SheetClose>

                    {Object.entries(groupedCourses).map(([category, items]) => {
                      const isOpen = openCategory === category;
                      return (
                        <div
                          key={category}
                          className="flex flex-col gap-0.5 mt-1"
                        >
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

                          {isOpen &&
                            items.map((course) => (
                              <SheetClose asChild key={course.slug}>
                                <Link
                                  href={`/courses/${course.slug}`}
                                  className="block px-4 py-1.5 ml-2 rounded-xl text-sm transition-all border border-transparent"
                                  style={{
                                    color:
                                      pathname === `/courses/${course.slug}`
                                        ? ACTIVE_COLOR
                                        : INACTIVE_COLOR_DIM,
                                    background:
                                      pathname === `/courses/${course.slug}`
                                        ? "rgba(66,214,116,0.10)"
                                        : "transparent",
                                    fontFamily: "system-ui, sans-serif",
                                    textDecoration: "none",
                                  }}
                                >
                                  {course.title}
                                </Link>
                              </SheetClose>
                            ))}
                        </div>
                      );
                    })}

                    <div
                      className="h-px my-2"
                      style={{ background: DIVIDER }}
                    />

                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 rounded-xl text-sm font-semibold transition-all border"
                          style={{
                            color:
                              pathname === item.href
                                ? ACTIVE_COLOR
                                : INACTIVE_COLOR,
                            background:
                              pathname === item.href
                                ? "rgba(66,214,116,0.10)"
                                : "transparent",
                            borderColor:
                              pathname === item.href
                                ? ACTIVE_BORDER
                                : "transparent",
                            fontFamily: "system-ui, sans-serif",
                            textDecoration: "none",
                          }}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile CTAs */}
                  <div
                    className="mt-auto px-4 pb-6 pt-4 flex flex-col gap-2"
                    style={{ borderTop: "1px solid rgba(66,214,116,0.10)" }}
                  >
                    <SheetClose asChild>
                      <Link
                        href="/enroll"
                        className="block w-full py-2.5 px-4 text-center rounded-full font-bold text-sm transition-all border"
                        style={{
                          color: ACTIVE_COLOR,
                          borderColor: ACTIVE_COLOR,
                          boxShadow: "0 0 12px rgba(66,214,116,0.20)",
                          fontFamily: "system-ui, sans-serif",
                          textDecoration: "none",
                        }}
                      >
                        Enroll Now
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
