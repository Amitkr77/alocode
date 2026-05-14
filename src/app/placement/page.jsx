"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Text as Description,
  Terminal,
  Briefcase as Work,
  Mic,
  MessageSquare as Forum,
  Users as Group,
  Quote,
  Star,
} from "lucide-react";
import RotatingCarousel from "@/components/RotatingCarousel";

export default function App() {
  const placements = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Deloitte",
      avatar: "PS",
      quote:
        "Alocodes' mock interviews and resume workshops gave me the edge I needed. Landed my dream role at Deloitte within 2 months!",
      stars: 5,
      // Uses CSS variables — accent green tint
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      dotClass: "bg-primary",
    },
    {
      name: "Rahul Verma",
      role: "Systems Analyst",
      company: "Infosys",
      avatar: "RV",
      quote:
        "The GitHub portfolio setup and LinkedIn optimization made recruiters reach out to me. Infosys hired me straight from the referral network!",
      stars: 5,
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      dotClass: "bg-primary",
    },
    {
      name: "Sneha Patel",
      role: "Frontend Developer",
      company: "Alomonx",
      avatar: "SP",
      quote:
        "The curated interview question bank was a game-changer. I walked into my Alomonx interview fully prepared and confident.",
      stars: 5,
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      dotClass: "bg-primary",
    },
    {
      name: "Arjun Mehta",
      role: "Associate Engineer",
      company: "TCS",
      avatar: "AM",
      quote:
        "From zero experience to TCS in 4 months. The structured learning path and dedicated mentorship at Alocodes made it possible.",
      stars: 5,
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      dotClass: "bg-primary",
    },
  ];

  return (
    <section className="font-display text-foreground overflow-x-hidden antialiased">
      <div className="relative flex min-h-screen w-full flex-col">
        <main className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-40 pb-10">
            {/* ── Hero ── */}
            <section className="mt-8 md:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6 py-6 md:py-10 lg:flex-row lg:items-center"
              >
                <div className="flex flex-col gap-5 flex-1 text-center lg:text-left items-center lg:items-start">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                      Launch Your Career with{" "}
                      <span className="text-primary">Alocodes</span>
                    </h1>
                    <h2 className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                      From learning to earning. Our data-driven approach ensures
                      you don't just learn to code, you get hired.
                    </h2>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-border"
                >
                  <div
                    className="w-full aspect-video bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwJ88LRlZVFN51LZwV8FEq_ea80cbsY3ofMLDbJ9Aa_ipqOoxlXihGfufZWbVtEaqNE5sAtZP2wlHsZrOCyslmNAcCg9wYkJBKtavC5xyopx143OKWbDr-65v4Fmx45S4TF-7vyYG3nsQUyoVsrrhOF9TYpDhHDXbI2PwINVhSW7XYIIzg8R1SR41LuAwxUzNQiTlLekP0QR4tdmEnv8JfiYDQBQZSfNGEIbLXRWk0AYnXufMBjPISRQdUnrJhqXQ-PFkiW9J2yOYZ')",
                    }}
                  />
                </motion.div>
              </motion.div>
            </section>

            {/* ── Rotating Carousel ── */}
            <section className="py-4 md:py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-3 text-center mb-3"
              >
                <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Skills That Get You{" "}
                  <span className="text-primary border-b-4 border-primary/30">
                    Hired
                  </span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                  Explore the in-demand tracks our students master — and land
                  roles in.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <RotatingCarousel />
              </motion.div>
            </section>

            {/* ── Stats ── */}
            <section className="py-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  { label: "Placement Rate", value: "90%", highlight: true },
                  { label: "Hiring Partners", value: "500+" },
                  { label: "Avg Salary Hike", value: "120%" },
                  { label: "Community", value: "15k+" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 sm:gap-2 rounded-xl p-4 sm:p-6 border border-border bg-card hover:border-primary/50 transition-colors shadow-sm"
                  >
                    <p className="text-muted-foreground text-sm sm:text-base font-medium leading-normal">
                      {stat.label}
                    </p>
                    <p
                      className={`tracking-tight text-2xl sm:text-3xl md:text-4xl font-black leading-tight ${
                        stat.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── Features ── */}
            <section className="py-8 md:py-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8 md:gap-10"
              >
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                    We Help You Get{" "}
                    <span className="text-primary border-b-4 border-primary/30">
                      Job-Ready
                    </span>{" "}
                    With:
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg font-normal leading-normal max-w-[720px] mx-auto md:mx-0">
                    Comprehensive career services designed to bridge the gap
                    between learning code and getting hired.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    {
                      icon: Description,
                      title: "Resume Drafting",
                      desc: "Expert guidance to craft a resume that passes ATS and stands out to recruiters.",
                    },
                    {
                      icon: Terminal,
                      title: "GitHub Portfolio Setup",
                      desc: "Build a commit history and code portfolio that proves your practical engineering skills.",
                    },
                    {
                      icon: Work,
                      title: "LinkedIn Optimization",
                      desc: "Optimize your profile headlines, summaries, and skills for maximum recruiter visibility.",
                    },
                    {
                      icon: Mic,
                      title: "Mock Interviews",
                      desc: "Practice 1:1 with industry experts from FAANG companies before the real thing.",
                    },
                    {
                      icon: Forum,
                      title: "Company Interview Qs",
                      desc: "Access a curated database of real questions asked by top tech companies recently.",
                    },
                    {
                      icon: Group,
                      title: "Exclusive Referrals",
                      desc: "Get direct referrals to our network of 500+ hiring partners and bypass the queue.",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 hover:bg-primary/5 shadow-sm transition-all duration-300"
                    >
                      <div className="size-11 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <feature.icon className="size-5 sm:size-6" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-foreground text-base sm:text-lg font-bold leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Student Placements ── */}
            <section className="py-6 md:py-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-3 text-center mb-6 sm:mb-8"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="h-px w-10 bg-primary/40 rounded-full" />
                  <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
                    Success Stories
                  </span>
                  <span className="h-px w-10 bg-primary/40 rounded-full" />
                </div>
                <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Students Who Got{" "}
                  <span className="text-primary border-b-4 border-primary/30">
                    Placed
                  </span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                  Real students, real companies, real results. Here's what our
                  alumni are saying.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {placements.map((student, i) => (
                  <motion.div
                    key={student.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background glow using primary */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Company Badge — uses card + primary border */}
                    <div className="self-start flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide border border-primary/30 bg-primary/10 text-primary">
                      <span className="size-2 rounded-full flex-shrink-0 bg-primary" />
                      {student.company}
                    </div>

                    {/* Quote */}
                    <div className="relative flex-1">
                      <Quote className="size-4 sm:size-5 mb-2 text-primary opacity-30" />
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed italic">
                        "{student.quote}"
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: student.stars }).map((_, s) => (
                        <Star
                          key={s}
                          className="size-3 sm:size-3.5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border" />

                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      <div className="size-9 sm:size-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground text-xs sm:text-sm font-black flex-shrink-0 shadow-md">
                        {student.avatar}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-foreground text-sm font-bold leading-tight truncate">
                          {student.name}
                        </span>
                        <span className="text-muted-foreground text-xs leading-tight">
                          {student.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-8 md:py-10 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border border-border bg-card rounded-2xl p-6 sm:p-8 text-center max-w-3xl w-full flex flex-col gap-3 items-center shadow-2xl relative overflow-hidden"
              >
                {/* Glow using primary */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground relative z-10">
                  Ready to start your success story?
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg relative z-10">
                  Join thousands of students who transformed their careers with
                  Alocodes.
                </p>
                <motion.a
                  href="/courses"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative z-10 mt-2 inline-flex items-center gap-2 rounded-xl bg-primary px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
                >
                  Explore Our Courses Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
}
