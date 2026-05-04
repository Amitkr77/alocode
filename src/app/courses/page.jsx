"use client";

import React, { useState, useMemo, useEffect } from "react";

import {
  FileVideoCamera,
  Group,
  CheckCircle,
  Download,
  RefreshCcw,
  Search,
  Star,
  Filter,
  Grid,
  List,
  Play,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import courses from "../../lib/Courses";
import CourseCard from "@/components/CourseCard";

const durationOptions = [
  { value: "all", label: "All Durations" },
  { value: "short", label: "< 3 Months" },
  { value: "medium", label: "3-6 Months" },
  { value: "long", label: "> 6 Months" },
];

const levelOptions = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const categoryOptions = [
  { value: "all", label: "All Categories" },
  { value: "Data Science", label: "Data Science" },
  { value: "Full Stack", label: "Full Stack" },
  { value: "DevOps", label: "DevOps" },
  { value: "Programming", label: "Programming" },
  { value: "Mobile", label: "Mobile" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
];

export default function CoursesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState("grid");
  const [openItems, setOpenItems] = useState(new Set());

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "all";
    setSelectedCategory(categoryFromUrl);
  }, [searchParams]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`/courses?${params.toString()}`, { scroll: false });
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        const matchesDuration =
          selectedDuration === "all" ||
          (selectedDuration === "short" && course.duration.includes("< 3")) ||
          (selectedDuration === "medium" &&
            parseInt(course.duration) >= 3 &&
            parseInt(course.duration) <= 6) ||
          (selectedDuration === "long" && parseInt(course.duration) > 6);
        const matchesLevel =
          selectedLevel === "all" ||
          course.level.toLowerCase() === selectedLevel;
        const matchesCategory =
          selectedCategory === "all" || course.category === selectedCategory;
        return (
          matchesSearch && matchesDuration && matchesLevel && matchesCategory
        );
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "price")
          return (
            parseInt(
              typeof a.pricing === "object"
                ? a.pricing.current
                : a.pricing.replace(/[^\d]/g, ""),
            ) -
            parseInt(
              typeof b.pricing === "object"
                ? b.pricing.current
                : b.pricing.replace(/[^\d]/g, ""),
            )
          );
        if (sortBy === "duration")
          return parseInt(a.duration) - parseInt(b.duration);
        if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
        return 0;
      });
  }, [searchTerm, selectedDuration, selectedLevel, selectedCategory, sortBy]);

  const handleToggle = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <main className="grow flex flex-col items-center w-full px-3 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10 mt-14">
        {/* ── Hero ── */}
        <div className="w-full max-w-[1300px] text-center mb-6 sm:mb-10 relative rounded-2xl sm:rounded-3xl overflow-hidden py-8 sm:py-12 px-4 sm:px-8">
          {/* Background image */}
          <img
            src="/all_course_background.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: 0.15, zIndex: 0 }}
          />

          {/* Hero content */}
          <div className="relative" style={{ zIndex: 1 }}>
            <p
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--primary)" }}
            >
              All Courses
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-foreground"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Choose Your Path to
              <br />
              <span className="relative inline-block mt-1">
                <span
                  className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] h-[1.1em] rounded-full -z-0"
                  style={{ background: "var(--primary)" }}
                />
                <span
                  className="relative z-10"
                  style={{ color: "var(--primary-foreground)" }}
                >
                  Tech Mastery
                </span>
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-muted-foreground px-2">
              Curated curriculums designed for the modern job market. Level up
              your skills with hands-on projects and expert mentorship.
            </p>

            {/* Quick Stats */}
            <div
              className="mt-6 sm:mt-10 inline-flex items-center gap-0 rounded-xl sm:rounded-2xl overflow-hidden divide-x"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              {[
                { val: "7+", lbl: "Courses" },
                { val: "500+", lbl: "Students" },
                { val: "4.6/5", lbl: "Avg Rating" },
              ].map((s) => (
                <div
                  key={s.lbl}
                  className="px-4 sm:px-8 py-3 sm:py-4 text-center"
                  style={{ borderRight: "1px solid var(--border)" }}
                >
                  <div
                    className="text-lg sm:text-2xl font-black"
                    style={{
                      color: "var(--primary)",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium mt-0.5 text-muted-foreground">
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="sticky top-16 sm:top-20 z-40 w-full max-w-[1300px] mb-6 sm:mb-10">
          {/* Search — full width */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, skills..."
              className="pl-10 rounded-xl w-full"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* 3 dropdowns side by side (works on mobile too) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger
                className="w-full rounded-xl text-xs sm:text-sm"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                {levelOptions.map((o) => (
                  <SelectItem
                    key={o.value}
                    value={o.value}
                    className="text-foreground"
                  >
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDuration}
              onValueChange={setSelectedDuration}
            >
              <SelectTrigger
                className="w-full rounded-xl text-xs sm:text-sm"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                {durationOptions.map((o) => (
                  <SelectItem
                    key={o.value}
                    value={o.value}
                    className="text-foreground"
                  >
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger
                className="w-full rounded-xl text-xs sm:text-sm"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                {categoryOptions.map((o) => (
                  <SelectItem
                    key={o.value}
                    value={o.value}
                    className="text-foreground"
                  >
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort + View toggle */}
          <div
            className="flex justify-between items-center rounded-full px-3 py-1.5"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-8 border-none text-xs sm:text-sm shadow-none focus:ring-0 w-auto bg-transparent text-muted-foreground">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                {[
                  { value: "rating", label: "Highest Rated" },
                  { value: "price", label: "Price: Low to High" },
                  { value: "duration", label: "Shortest First" },
                  { value: "reviews", label: "Most Reviewed" },
                ].map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    className="text-foreground"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 rounded-full flex items-center justify-center transition-all"
                style={{
                  background:
                    viewMode === "grid" ? "var(--primary)" : "transparent",
                  color:
                    viewMode === "grid"
                      ? "var(--primary-foreground)"
                      : "var(--muted-foreground)",
                  boxShadow:
                    viewMode === "grid"
                      ? "0 2px 8px rgba(66,214,116,0.30)"
                      : "none",
                }}
              >
                <Grid className="size-4" />
              </button>
              <button
                onClick={() => setViewMode("accordion")}
                className="h-8 w-8 rounded-full flex items-center justify-center transition-all"
                style={{
                  background:
                    viewMode === "accordion" ? "var(--primary)" : "transparent",
                  color:
                    viewMode === "accordion"
                      ? "var(--primary-foreground)"
                      : "var(--muted-foreground)",
                  boxShadow:
                    viewMode === "accordion"
                      ? "0 2px 8px rgba(66,214,116,0.30)"
                      : "none",
                }}
              >
                <List className="size-4" />
              </button>
            </div>
          </div>

          <p className="text-xs font-medium mt-2 text-center text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* ── Course List ── */}
        <div className="w-full max-w-[1300px]">
          {viewMode === "grid" ? (
            /* 1 col → 2 col → 4 col */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  showPricing={true}
                  showMode={true}
                />
              ))}
            </div>
          ) : (
            <Accordion
              type="multiple"
              className="flex flex-col gap-3 sm:gap-4"
              value={Array.from(openItems)}
              onValueChange={(values) => setOpenItems(new Set(values))}
            >
              {filteredCourses.map((course) => (
                <AccordionItem
                  key={course.id}
                  value={course.id}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--background)",
                  }}
                >
                  <AccordionTrigger
                    className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 transition-colors"
                    style={{ background: "var(--card)" }}
                    onClick={() => handleToggle(course.id)}
                  >
                    <div className="flex flex-col gap-2 w-full text-left">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className={`text-[10px] font-bold uppercase tracking-wider ${course.badge.color}`}
                        >
                          {course.badge.text}
                        </Badge>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="size-3"
                              style={{
                                fill:
                                  i < Math.floor(course.rating)
                                    ? "var(--primary)"
                                    : "transparent",
                                color:
                                  i < Math.floor(course.rating)
                                    ? "var(--primary)"
                                    : "var(--border)",
                              }}
                            />
                          ))}
                          <span className="text-xs ml-1 text-muted-foreground">
                            ({course.reviewCount})
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-sm sm:text-base md:text-lg font-bold transition-colors text-foreground leading-snug"
                      >
                        {course.title}
                      </Link>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-4 sm:px-6 py-5 sm:py-7 animate-in slide-in-from-top-2 duration-200"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <CourseContent course={course} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* ── Empty state ── */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <Search className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground" />
            </div>
            <p className="text-base sm:text-lg font-semibold mb-1 text-muted-foreground">
              No courses found
            </p>
            <p className="text-sm mb-6 text-muted-foreground">
              Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDuration("all");
                setSelectedLevel("all");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-2 h-10 px-6 rounded-full text-sm font-bold transition-all"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
              }}
            >
              <RefreshCcw className="size-4" /> Clear Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

// ── Accordion Detail Content ─────────────────────────────────────────────────
function CourseContent({ course }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Info strip */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-dashed"
        style={{ borderColor: "var(--border)" }}
      >
        {course.duration && (
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: "var(--primary)" }}
            />
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Duration
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {course.duration}
              </p>
            </div>
          </div>
        )}
        {course.mode && (
          <div className="flex items-center gap-2 sm:gap-3">
            <FileVideoCamera
              className="size-4 sm:size-5 shrink-0"
              style={{ color: "var(--primary)" }}
            />
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Mode
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {course.mode}
              </p>
            </div>
          </div>
        )}
        {course.batchSize && (
          <div className="flex items-center gap-2 sm:gap-3">
            <Group
              className="size-4 sm:size-5 shrink-0"
              style={{ color: "var(--primary)" }}
            />
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Batch Size
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {course.batchSize}
              </p>
            </div>
          </div>
        )}
        {course.pricing && (
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-2 h-2 rounded-sm shrink-0"
              style={{ background: "var(--primary)" }}
            />
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Pricing
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                {course.pricing}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Body: skills/outcomes left, video/CTA right */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 space-y-5 sm:space-y-6">
          {course.skills && (
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2 text-muted-foreground">
                <Filter
                  className="size-3 sm:size-3.5"
                  style={{ color: "var(--primary)" }}
                />
                Skills You'll Master
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium border"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {course.outcomes && (
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2 text-muted-foreground">
                <CheckCircle
                  className="size-3 sm:size-3.5"
                  style={{ color: "var(--primary)" }}
                />
                Career Outcomes
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {course.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      className="size-3.5 sm:size-4 mt-0.5 shrink-0"
                      style={{ color: "var(--primary)" }}
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.description && (
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {course.description}
            </p>
          )}
        </div>

        {/* Right panel */}
        <div className="w-full lg:w-72 flex flex-col gap-3 sm:gap-4">
          {course.videoThumbnail && (
            <Link href={`/courses/${course.slug}`} className="block">
              <div
                className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
                style={{ background: "var(--card)" }}
              >
                <img
                  src={course.videoThumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="size-10 sm:size-12 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform"
                    style={{
                      background: "rgba(240,250,240,0.92)",
                      boxShadow: "0 4px 16px rgba(15,45,26,0.20)",
                    }}
                  >
                    <Play
                      className="size-4 sm:size-5"
                      style={{
                        fill: "var(--primary)",
                        color: "var(--primary)",
                      }}
                    />
                  </div>
                </div>
                {course.videoTitle && (
                  <div
                    className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg text-xs text-white font-medium backdrop-blur-sm"
                    style={{ background: "rgba(15,31,19,0.70)" }}
                  >
                    {course.videoTitle}
                  </div>
                )}
              </div>
            </Link>
          )}

          {course.testimonial && (
            <div
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <p className="text-xs mb-2 sm:mb-3 italic leading-relaxed text-muted-foreground">
                "{course.testimonial.quote}"
              </p>
              <p className="text-xs font-bold text-foreground">
                — {course.testimonial.author}
              </p>
              <div className="flex justify-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-3"
                    style={{ fill: "var(--primary)", color: "var(--primary)" }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 sm:gap-3">
            <Link
              href={`/courses/${course.slug}`}
              className="w-full h-10 sm:h-11 rounded-full text-sm font-bold flex items-center justify-center transition-all"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
              }}
            >
              Enroll Now
            </Link>
            <Link
              href={`/syllabus/${course.slug}`}
              className="w-full h-10 sm:h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <Download className="size-4" /> Download Syllabus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
