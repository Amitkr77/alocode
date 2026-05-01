"use client";

import courses from "@/lib/Courses";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Video,
  Users,
  Star,
  Calendar,
  Play,
  Award,
  Briefcase,
  BookOpen,
  Monitor,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Color tokens (reference palette)
  // #FCFCFB - Emptiness (background)
  // #DBD7C7 - Fennec Fox (subtle surface)
  // #B3AA9E - Paper Goat (muted borders/text)
  // #FAA114 - Zinnia (primary accent - orange)
  // #786E67 - Grey Owl (secondary text)
  // #262A2B - Graphite Black (headings/dark)

  return (
    <div
      className="text-[#262A2B] overflow-x-hidden"
      style={{
        background: "#FCFCFB",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ─────────────────────────────── HERO ─────────────────────────────── */}
      <section className="min-h-screen pt-8 max-w-7xl mx-auto px-6 lg:px-10 pb-0 relative overflow-hidden">
        <div className="flex gap-12 items-start min-h-[85vh]">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 pt-8 lg:pt-16 relative z-10 flex-1 min-w-0"
          >
            {/* Decorative arrow squiggle */}
            <motion.svg
              custom={0}
              variants={fadeUp}
              className="w-32 h-12 mb-0"
              viewBox="0 0 80 32"
              fill="none"
            >
              <path
                d="M2 20 Q20 4 38 16 Q56 28 74 12"
                stroke="#FAA114"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M68 8 L74 12 L70 18"
                stroke="#FAA114"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.svg>

            {/* Giant headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[1.0] tracking-tight text-[#262A2B]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Best Digital
              <br />
              {/* "Online" with blob behind */}
              <span className="relative inline-block mt-1">
                <span
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[1.15em] rounded-full -z-0"
                  style={{ background: "#FAA114" }}
                />
                <span className="relative z-10 text-white">Online</span>
              </span>
              <br />
              Courses.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "#786E67", fontFamily: "system-ui, sans-serif" }}
            >
              Digital online courses provide an accessible and flexible way for
              individuals to acquire new knowledge and skills in various fields.
            </motion.p>

            <motion.div custom={3} variants={fadeUp}>
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 h-13 px-8 rounded-full text-white text-sm font-bold transition-all"
                style={{
                  background: "#FAA114",
                  boxShadow: "0 8px 24px rgba(250,161,20,0.35)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Get Started
              </Link>
            </motion.div>

            {/* Bottom feature cards */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-8 lg:mt-16 grid grid-cols-2 gap-4"
            >
              {/* Card 1 */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden group"
                style={{ background: "#DBD7C7" }}
              >
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-3"
                  style={{ background: "#B3AA9E" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80")`,
                    }}
                  />
                </div>
                <p
                  className="font-black text-sm leading-snug"
                  style={{
                    color: "#262A2B",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Study at your own place
                </p>
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#FAA114" }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-2xl p-5 flex flex-col gap-3 border"
                style={{
                  background: "#FCFCFB",
                  borderColor: "#DBD7C7",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#262A2B" }}
                >
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <span
                  className="self-start text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    color: "#786E67",
                    background: "#DBD7C7",
                    borderColor: "#B3AA9E",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Online
                </span>
                <p
                  className="font-black text-sm leading-snug"
                  style={{
                    color: "#262A2B",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  The learning process is simple
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — photo with overlaid cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block flex-shrink-0"
            style={{
              width: "460px",
              paddingTop: "100px",
              paddingBottom: "32px",
            }}
          >
            {/* Decorative starburst */}
            <div className="absolute z-10" style={{ top: "70px", left: "0px" }}>
              <svg viewBox="0 0 70 70" width="90" height="90" fill="none">
                {[0, 45, 90, 135].map((deg) => (
                  <line
                    key={deg}
                    x1="30"
                    y1="4"
                    x2="30"
                    y2="56"
                    stroke="#262A2B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 30 30)`}
                  />
                ))}
                {[22.5, 67.5, 112.5, 157.5].map((deg) => (
                  <line
                    key={deg}
                    x1="30"
                    y1="10"
                    x2="30"
                    y2="50"
                    stroke="#262A2B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 30 30)`}
                  />
                ))}
              </svg>
            </div>

            {/* UI/UX badge top right */}
            <div
              className="absolute z-20 w-20 h-16 rounded-full flex flex-col items-center justify-center"
              style={{ top: "65px", right: "0px", background: "#262A2B" }}
            >
              <div
                className="w-4 h-4 rounded-sm mb-0.5"
                style={{ background: "#FAA114" }}
              />
              <p
                className="text-white text-[12px] font-bold uppercase tracking-tight"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                UI/UX
              </p>
            </div>

            {/* Main photo — rounded square */}
            <div
              className="overflow-hidden w-full"
              style={{
                height: "450px",
                borderRadius: "28px",
                background: "#DBD7C7",
              }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVgknHoTBolTOjk9umcaEkublnjbOxikSRckGbgp-b1eYVK6TfdBvchd4OorV9sRdfPc-wEB6kxf5c_m1W_mtMEU6ezAgDtiA_cKqiDX3QYe9l591ZgEsX88pkpbohu1R1o9JAuBA3PTYkHFuITaRvwycL9l9VfmeySXfT_0rwa2-P3pBltCCrhOkgnog9vTl_9HsvBp5jOSz5bD3B3ukwlKeOclBtbJAlapGjnDa9aDYE9o8R2wSxw9wI5dcCQVLx0_9mqF29VlWP")`,
                }}
              />
            </div>

            {/* Course card — bottom-left overlapping image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute z-20 rounded-2xl p-4 border"
              style={{
                bottom: "-20px",
                left: "-20px",
                background: "#FCFCFB",
                borderColor: "#DBD7C7",
                boxShadow: "0 8px 32px rgba(38,42,43,0.14)",
                width: "185px",
              }}
            >
              <p
                className="font-black text-sm mb-3"
                style={{
                  color: "#262A2B",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                UI Design Patterns
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#FAA114" }}
                >
                  <span
                    className="text-white text-[10px] font-bold"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    V
                  </span>
                </div>
                <div>
                  <p
                    className="text-xs font-bold"
                    style={{
                      color: "#262A2B",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Veronica
                  </p>
                  <p
                    className="text-[10px]"
                    style={{
                      color: "#B3AA9E",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    123 courses
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Instructor card — bottom-right overlapping image */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute z-20 rounded-2xl p-3 border flex items-center gap-3"
              style={{
                bottom: "-20px",
                right: "-20px",
                background: "#DBD7C7",
                borderColor: "#B3AA9E",
                boxShadow: "0 8px 24px rgba(38,42,43,0.10)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#FAA114" }}
              >
                <span
                  className="text-white text-xs font-bold"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  K
                </span>
              </div>
              <div>
                <div className="flex items-center gap-6 justify-between">
                  <p
                    className="text-xs font-bold"
                    style={{
                      color: "#262A2B",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Karen
                  </p>
                  <p
                    className="text-[10px] font-semibold"
                    style={{
                      color: "#786E67",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    $45/h
                  </p>
                </div>
                <p
                  className="text-[10px]"
                  style={{
                    color: "#786E67",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  UI/UX designer
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-10 py-10 mt-8"
          style={{ borderTop: "1px solid #DBD7C7" }}
        >
          {[
            { val: "231+", lbl: "Courses & subjects" },
            { val: "319+", lbl: "Instructors" },
            { val: "72k+", lbl: "Using the app" },
          ].map((s) => (
            <div key={s.lbl} className="flex flex-col">
              <p
                className="text-3xl font-black"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                {s.val}
              </p>
              <p
                className="text-xs font-medium mt-0.5"
                style={{
                  color: "#B3AA9E",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {s.lbl}
              </p>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#FAA114", "#786E67", "#B3AA9E", "#262A2B"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ background: c, borderColor: "#FCFCFB" }}
                />
              ))}
            </div>
            <p
              className="text-sm font-bold"
              style={{ color: "#262A2B", fontFamily: "system-ui, sans-serif" }}
            >
              +72k{" "}
              <span className="font-medium" style={{ color: "#B3AA9E" }}>
                Happy students
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────── WHY ALOCODES ─────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80")`,
                }}
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full -z-10 opacity-40"
              style={{ background: "#FAA114" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  color: "#FAA114",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Why Alocodes?
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                Launch Your Tech Career{" "}
                <span style={{ color: "#B3AA9E" }}>With Confidence.</span>
              </h2>
            </div>
            <p
              className="leading-relaxed"
              style={{ color: "#786E67", fontFamily: "system-ui, sans-serif" }}
            >
              We provide the ecosystem you need to succeed — from live
              mentorship to guaranteed interview opportunities. Our curriculum
              is designed by industry experts to make you job-ready from day
              one.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Video,
                  title: "Live Interactive Classes",
                  desc: "Learn directly from experts in real-time sessions.",
                },
                {
                  icon: Users,
                  title: "1:1 Industry Mentorship",
                  desc: "Personal guidance from engineers at top tech companies.",
                },
                {
                  icon: Briefcase,
                  title: "Guaranteed Career Support",
                  desc: "Resume building, mock interviews, and direct job referrals.",
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border transition-all group"
                  style={{
                    background: "#FCFCFB",
                    borderColor: "#DBD7C7",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      background: "rgba(250,161,20,0.12)",
                      border: "1px solid rgba(250,161,20,0.25)",
                      color: "#FAA114",
                    }}
                  >
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="font-bold mb-0.5"
                      style={{
                        color: "#262A2B",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "#B3AA9E",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── COURSES ─────────────────────────── */}
      <section
        className="py-24 border-y"
        style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{
                  color: "#FAA114",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Top Courses
              </p>
              <h2
                className="text-3xl md:text-4xl font-black"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                Master In-Demand Skills
              </h2>
            </div>
            <Link
              href="/courses"
              className="text-sm font-bold flex items-center gap-1 transition-all shrink-0"
              style={{ color: "#FAA114", fontFamily: "system-ui, sans-serif" }}
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group rounded-3xl overflow-hidden border transition-all flex flex-col"
                style={{
                  background: "#FCFCFB",
                  borderColor: "#B3AA9E",
                }}
              >
                <div
                  className="h-44 overflow-hidden relative"
                  style={{ background: "#DBD7C7" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url("${course.videoThumbnail}")`,
                    }}
                  />
                  {course.badge && (
                    <div
                      className="absolute top-3 left-3 text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "#FAA114",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {course.badge.text}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(252,252,251,0.92)" }}
                    >
                      <Play
                        className="w-5 h-5 fill-current ml-0.5"
                        style={{ color: "#262A2B" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div
                    className="flex items-center justify-between text-xs font-medium mb-3"
                    style={{ color: "#B3AA9E" }}
                  >
                    <span
                      className="flex items-center gap-1"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full"
                      style={{
                        background: "#DBD7C7",
                        color: "#786E67",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {course.level}
                    </span>
                  </div>
                  <h3
                    className="font-bold mb-2 leading-snug transition-colors"
                    style={{
                      color: "#262A2B",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-4 line-clamp-2"
                    style={{
                      color: "#B3AA9E",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {course.description}
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid #DBD7C7" }}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-sm font-bold flex items-center gap-1 transition-all"
                      style={{
                        color: "#262A2B",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      View Course <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {course.badge?.rating && (
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{
                          color: "#B3AA9E",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        <Star
                          className="w-3 h-3"
                          style={{ fill: "#FAA114", color: "#FAA114" }}
                        />
                        {course.badge.rating}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── COMPANIES ─────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <p
          className="text-center text-xs font-bold uppercase tracking-widest mb-10"
          style={{ color: "#B3AA9E", fontFamily: "system-ui, sans-serif" }}
        >
          Our experts come from top companies
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {[
            { label: "MORGAN STANLEY", path: "./companies/morgan.jpeg" },
            { label: "DELOITTE", path: "./companies/deloitte.jpeg" },
            { label: "NASDAQ", path: "./companies/nasdaq.jpeg" },
            { label: "VOIS", path: "./companies/vois.jpeg" },
            { label: "COGNIZANT", path: "./companies/cognizant.png" },
            { label: "ORACLE", path: "./companies/oracle.png" },
            { label: "DXC", path: "./companies/dxc.png" },
            { label: "FOX", path: "./companies/fox.png" },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-transparent transition-all group cursor-default"
            >
              <img
                src={c.path}
                alt={c.label}
                className="w-16 h-8 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span
                className="text-[9px] font-bold uppercase tracking-wide text-center leading-tight"
                style={{
                  color: "#B3AA9E",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <section
        className="py-20 border-t"
        style={{ background: "#FCFCFB", borderColor: "#DBD7C7" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#FAA114", fontFamily: "system-ui, sans-serif" }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl md:text-4xl font-black"
              style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Do I need a technical degree to enroll?",
                a: "No! Our courses are designed to take you from zero to hero. Many of our top graduates started with no prior coding experience.",
              },
              {
                q: "How does the placement guarantee work?",
                a: "We offer placement assistance through every application cycle until you get hired, with direct referrals to 500+ partner companies.",
              },
              {
                q: "Are the classes live or recorded?",
                a: "We use a hybrid model with recorded lectures for self-paced learning and live weekend sessions with mentors for Q&A and projects.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl overflow-hidden border group"
                style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                  <span
                    className="font-bold"
                    style={{
                      color: "#262A2B",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200"
                    style={{
                      background: "rgba(250,161,20,0.15)",
                      border: "1px solid rgba(250,161,20,0.35)",
                      color: "#FAA114",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="pb-6 px-6 leading-relaxed text-sm pt-4"
                  style={{
                    color: "#786E67",
                    borderTop: "1px solid #B3AA9E",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA BANNER ─────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "#262A2B" }}
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#FAA114", fontFamily: "system-ui, sans-serif" }}
            >
              Limited seats available
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ready to Transform
              <br />
              Your Career?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/enroll"
              className="h-14 px-8 rounded-full text-white font-bold flex items-center gap-2 transition-all"
              style={{
                background: "#FAA114",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              className="h-14 px-8 rounded-full font-bold flex items-center gap-2 transition-colors border"
              style={{
                borderColor: "rgba(219,215,199,0.25)",
                color: "#DBD7C7",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
