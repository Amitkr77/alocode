"use client";

import React, { useState, useMemo, useEffect } from "react";

import {
  Play,
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
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

  // Sync category from URL params
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
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{
        background: "#FCFCFB",
        color: "#262A2B",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-10 mt-16">
        {/* ── Hero ── */}
        <div className="w-full max-w-[960px] text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#FAA114" }}
          >
            All Courses
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
            style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
          >
            Choose Your Path to
            <br />
            <span className="relative inline-block mt-1">
              <span
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1.5rem)] h-[1.1em] rounded-full -z-0"
                style={{ background: "#FAA114" }}
              />
              <span className="relative z-10 text-white">Tech Mastery</span>
            </span>
          </h1>
          <p
            className="mt-6 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#786E67" }}
          >
            Curated curriculums designed for the modern job market. Level up
            your skills with hands-on projects and expert mentorship.
          </p>

          {/* Quick Stats */}
          <div
            className="mt-10 inline-flex items-center gap-0 rounded-2xl overflow-hidden divide-x"
            style={{
              border: "1px solid #DBD7C7",
              background: "#DBD7C7",
              divideColor: "#B3AA9E",
            }}
          >
            {[
              { val: "16+", lbl: "Courses" },
              { val: "5000+", lbl: "Students" },
              { val: "4.8/5", lbl: "Avg Rating" },
            ].map((s) => (
              <div
                key={s.lbl}
                className="px-8 py-4 text-center"
                style={{ borderRight: "1px solid #B3AA9E" }}
              >
                <div
                  className="text-2xl font-black"
                  style={{ color: "#FAA114", fontFamily: "'Georgia', serif" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-xs font-medium mt-0.5"
                  style={{ color: "#786E67" }}
                >
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="sticky top-20 z-40 w-full max-w-[960px] mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4"
                style={{ color: "#B3AA9E" }}
              />
              <Input
                placeholder="Search courses, skills..."
                className="pl-10 rounded-xl"
                style={{
                  background: "#FCFCFB",
                  border: "1px solid #DBD7C7",
                  color: "#262A2B",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger
                className="w-full rounded-xl"
                style={{
                  background: "#FCFCFB",
                  border: "1px solid #DBD7C7",
                  color: "#786E67",
                }}
              >
                <SelectValue placeholder="Skill Level" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{ background: "#FCFCFB", border: "1px solid #DBD7C7" }}
              >
                {levelOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    style={{ color: "#262A2B" }}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedDuration}
              onValueChange={setSelectedDuration}
            >
              <SelectTrigger
                className="w-full rounded-xl"
                style={{
                  background: "#FCFCFB",
                  border: "1px solid #DBD7C7",
                  color: "#786E67",
                }}
              >
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{ background: "#FCFCFB", border: "1px solid #DBD7C7" }}
              >
                {durationOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    style={{ color: "#262A2B" }}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                className="w-full rounded-xl"
                style={{
                  background: "#FCFCFB",
                  border: "1px solid #DBD7C7",
                  color: "#786E67",
                }}
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{ background: "#FCFCFB", border: "1px solid #DBD7C7" }}
              >
                {categoryOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    style={{ color: "#262A2B" }}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort + View toggle */}
          <div
            className="flex justify-between items-center rounded-full px-3 py-1.5"
            style={{
              background: "#DBD7C7",
              border: "1px solid #B3AA9E",
            }}
          >
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger
                className="h-8 border-none text-sm shadow-none focus:ring-0 w-auto bg-transparent"
                style={{ color: "#786E67" }}
              >
                <SelectValue placeholder="Sort by Rating" />
              </SelectTrigger>
              <SelectContent
                className="rounded-xl shadow-lg"
                style={{ background: "#FCFCFB", border: "1px solid #DBD7C7" }}
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
                    style={{ color: "#262A2B" }}
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
                  background: viewMode === "grid" ? "#FAA114" : "transparent",
                  color: viewMode === "grid" ? "#fff" : "#B3AA9E",
                  boxShadow:
                    viewMode === "grid"
                      ? "0 2px 8px rgba(250,161,20,0.30)"
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
                    viewMode === "accordion" ? "#FAA114" : "transparent",
                  color: viewMode === "accordion" ? "#fff" : "#B3AA9E",
                  boxShadow:
                    viewMode === "accordion"
                      ? "0 2px 8px rgba(250,161,20,0.30)"
                      : "none",
                }}
              >
                <List className="size-4" />
              </button>
            </div>
          </div>

          <p
            className="text-xs font-medium mt-2 text-center"
            style={{ color: "#B3AA9E" }}
          >
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* ── Course List ── */}
        <div className="w-full max-w-[960px]">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <Accordion
              type="multiple"
              className="flex flex-col gap-4"
              value={Array.from(openItems)}
              onValueChange={(values) => setOpenItems(new Set(values))}
            >
              {filteredCourses.map((course) => (
                <AccordionItem
                  key={course.id}
                  value={course.id}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    border: "1px solid #DBD7C7",
                    background: "#FCFCFB",
                  }}
                >
                  <AccordionTrigger
                    className="flex items-center justify-between px-6 py-5 transition-colors"
                    style={{ background: "#DBD7C7" }}
                    onClick={() => handleToggle(course.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
                      <div className="flex items-center gap-3">
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
                                    ? "#FAA114"
                                    : "transparent",
                                color:
                                  i < Math.floor(course.rating)
                                    ? "#FAA114"
                                    : "#B3AA9E",
                              }}
                            />
                          ))}
                          <span
                            className="text-xs ml-1"
                            style={{ color: "#B3AA9E" }}
                          >
                            ({course.reviewCount})
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-base md:text-lg font-bold text-left flex-1 transition-colors"
                        style={{ color: "#262A2B" }}
                      >
                        {course.title}
                      </Link>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 py-7 animate-in slide-in-from-top-2 duration-200"
                    style={{ borderTop: "1px solid #DBD7C7" }}
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
          <div className="text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border"
              style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
            >
              <Search className="w-7 h-7" style={{ color: "#B3AA9E" }} />
            </div>
            <p
              className="text-lg font-semibold mb-1"
              style={{ color: "#786E67" }}
            >
              No courses found
            </p>
            <p className="text-sm mb-6" style={{ color: "#B3AA9E" }}>
              Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedDuration("all");
                setSelectedLevel("all");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-2 h-10 px-6 rounded-full text-white text-sm font-bold transition-all"
              style={{
                background: "#FAA114",
                boxShadow: "0 4px 16px rgba(250,161,20,0.30)",
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

// ── Accordion Detail Content ──
function CourseContent({ course }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        {/* Top info grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-dashed"
          style={{ borderColor: "#DBD7C7" }}
        >
          {course.duration && (
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#FAA114" }}
              />
              <div>
                <p className="text-xs" style={{ color: "#B3AA9E" }}>
                  Duration
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#262A2B" }}
                >
                  {course.duration}
                </p>
              </div>
            </div>
          )}
          {course.mode && (
            <div className="flex items-center gap-3">
              <FileVideoCamera
                className="size-5 shrink-0"
                style={{ color: "#FAA114" }}
              />
              <div>
                <p className="text-xs" style={{ color: "#B3AA9E" }}>
                  Mode
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#262A2B" }}
                >
                  {course.mode}
                </p>
              </div>
            </div>
          )}
          {course.batchSize && (
            <div className="flex items-center gap-3">
              <Group className="size-5 shrink-0" style={{ color: "#FAA114" }} />
              <div>
                <p className="text-xs" style={{ color: "#B3AA9E" }}>
                  Batch Size
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#262A2B" }}
                >
                  {course.batchSize}
                </p>
              </div>
            </div>
          )}
          {course.pricing && (
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-sm shrink-0"
                style={{ background: "#FAA114" }}
              />
              <div>
                <p className="text-xs" style={{ color: "#B3AA9E" }}>
                  Pricing
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#262A2B" }}
                >
                  {course.pricing}
                </p>
              </div>
            </div>
          )}
        </div>

        {course.skills && (
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ color: "#786E67" }}
            >
              <Filter className="size-3.5" style={{ color: "#FAA114" }} />
              Skills You'll Master
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{
                    background: "#DBD7C7",
                    borderColor: "#B3AA9E",
                    color: "#786E67",
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
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ color: "#786E67" }}
            >
              <CheckCircle className="size-3.5" style={{ color: "#FAA114" }} />
              Career Outcomes
            </h4>
            <ul className="space-y-2">
              {course.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#786E67" }}
                >
                  <CheckCircle
                    className="size-4 mt-0.5 shrink-0"
                    style={{ color: "#FAA114" }}
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.description && (
          <p className="text-sm leading-relaxed" style={{ color: "#786E67" }}>
            {course.description}
          </p>
        )}
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-72 flex flex-col gap-4">
        {course.videoThumbnail && (
          <Link href={`/courses/${course.slug}`} className="block">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
              style={{ background: "#DBD7C7" }}
            >
              <img
                src={course.videoThumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="size-12 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform"
                  style={{
                    background: "rgba(252,252,251,0.92)",
                    boxShadow: "0 4px 16px rgba(38,42,43,0.20)",
                  }}
                >
                  <Play
                    className="size-5"
                    style={{ fill: "#FAA114", color: "#FAA114" }}
                  />
                </div>
              </div>
              {course.videoTitle && (
                <div
                  className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg text-xs text-white font-medium backdrop-blur-sm"
                  style={{ background: "rgba(38,42,43,0.70)" }}
                >
                  {course.videoTitle}
                </div>
              )}
            </div>
          </Link>
        )}

        {course.testimonial && (
          <div
            className="p-4 rounded-2xl border text-center"
            style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
          >
            <p
              className="text-xs mb-3 italic leading-relaxed"
              style={{ color: "#786E67" }}
            >
              "{course.testimonial.quote}"
            </p>
            <p className="text-xs font-bold" style={{ color: "#262A2B" }}>
              — {course.testimonial.author}
            </p>
            <div className="flex justify-center gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-3"
                  style={{ fill: "#FAA114", color: "#FAA114" }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-auto">
          <Link
            href={`/courses/${course.slug}`}
            className="w-full h-11 rounded-full text-white text-sm font-bold flex items-center justify-center transition-all"
            style={{
              background: "#FAA114",
              boxShadow: "0 4px 16px rgba(250,161,20,0.30)",
            }}
          >
            Enroll Now
          </Link>
          <Link
            href={`/syllabus/${course.slug}`}
            className="w-full h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all border"
            style={{
              background: "#FCFCFB",
              borderColor: "#DBD7C7",
              color: "#786E67",
            }}
          >
            <Download className="size-4" /> Download Syllabus
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Grid Card ──
function CourseCard({ course }) {
  return (
    <div
      className="group rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{
        background: "#FCFCFB",
        border: "1px solid #DBD7C7",
        boxShadow: "0 2px 8px rgba(38,42,43,0.04)",
      }}
    >
      <Link href={`/courses/${course.slug}`}>
        {course.videoThumbnail && (
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{ background: "#DBD7C7" }}
          >
            <img
              src={course.videoThumbnail}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(38,42,43,0.45), transparent)",
              }}
            />
            <div className="absolute top-3 left-3">
              <Badge
                className={`text-[10px] font-bold uppercase ${course.badge.color}`}
              >
                {course.badge.text}
              </Badge>
            </div>
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(252,252,251,0.92)",
                  boxShadow: "0 4px 16px rgba(38,42,43,0.20)",
                }}
              >
                <Play
                  className="size-4 ml-0.5"
                  style={{ fill: "#FAA114", color: "#FAA114" }}
                />
              </div>
            </div>
            {course.videoTitle && (
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs text-white font-medium line-clamp-1">
                  {course.videoTitle}
                </p>
              </div>
            )}
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-3"
                  style={{
                    fill:
                      i < Math.floor(course.rating) ? "#FAA114" : "transparent",
                    color:
                      i < Math.floor(course.rating) ? "#FAA114" : "#DBD7C7",
                  }}
                />
              ))}
              <span className="text-xs ml-1" style={{ color: "#B3AA9E" }}>
                ({course.reviewCount})
              </span>
            </div>
            <span className="text-sm font-bold" style={{ color: "#FAA114" }}>
              {typeof course.pricing === "object"
                ? `From ₹${course.pricing.current}/mo`
                : course.pricing}
            </span>
          </div>
          <h3
            className="font-bold text-base mb-2 line-clamp-2 leading-snug transition-colors"
            style={{ color: "#262A2B" }}
          >
            {course.title}
          </h3>
          <p
            className="text-sm mb-4 line-clamp-2 flex-1 leading-relaxed"
            style={{ color: "#B3AA9E" }}
          >
            {course.description}
          </p>
          <div
            className="flex items-center justify-between pt-3"
            style={{ borderTop: "1px solid #DBD7C7" }}
          >
            <span className="text-xs" style={{ color: "#B3AA9E" }}>
              {course.duration} · {course.mode}
            </span>
            <span
              className="text-xs font-bold flex items-center gap-1 group-hover:gap-1.5 transition-all"
              style={{ color: "#FAA114" }}
            >
              View Course →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
