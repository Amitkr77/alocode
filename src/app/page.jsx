"use client";

import Companies from "@/components/Companies";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Video,
  Users,
  Briefcase,
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

  return (
    <div
      className="text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ─────────────────────────────── HERO ─────────────────────────────── */}
      <section className="min-h-screen pt-12 max-w-7xl mx-auto px-6 lg:px-10 pb-0 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center md:items-start min-h-[85vh]">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 pt-8 lg:pt-16 relative z-10 flex-1 min-w-0 w-full"
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
                stroke="var(--primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M68 8 L74 12 L70 18"
                stroke="var(--primary)"
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
              className="text-[clamp(3rem,8vw,6rem)] font-black leading-[1.0] tracking-tight text-foreground"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Where Skills
              <br />
              {/* "Online" with blob behind */}
              <span className="relative inline-block mt-1">
                <span
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[1.10em] rounded-full -z-0"
                  style={{ background: "var(--primary)" }}
                />
                <span className="relative text-7.5xl z-10 text-[var(--primary-foreground)]">
                  BECOME
                </span>
              </span>
              <br />
              Careers.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-base font-bold leading-relaxed max-w-sm text-muted-foreground ml-3"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Hands-on tech training, real-world projects, mentorship, and
              career-focused learning designed for future innovators.
            </motion.p>

            <motion.div custom={3} variants={fadeUp}>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 h-13 px-8 rounded-full text-sm font-bold transition-all"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 8px 24px rgba(66,214,116,0.35)",
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
              className="mt-2 lg:mt-8 grid grid-cols-2 gap-6"
            >
              {/* Card 1 */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden group"
                style={{ background: "var(--card)" }}
              >
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden mb-2"
                  style={{ background: "var(--secondary)" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80")`,
                    }}
                  />
                </div>
                <p
                  className="font-black text-sm leading-snug text-foreground"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Study at your own place
                </p>
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "var(--primary)" }}
                >
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ color: "var(--primary-foreground)" }}
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-3 border"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="w-15 h-15 rounded-full flex items-center justify-center"
                  style={{ background: "var(--foreground)" }}
                >
                  <Monitor
                    className="w-5 h-5"
                    style={{ color: "var(--background)" }}
                  />
                </div>
                <span
                  className="self-start text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    color: "var(--muted-foreground)",
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Online
                </span>
                <p
                  className="font-black text-sm leading-snug text-foreground"
                  style={{ fontFamily: "system-ui, sans-serif" }}
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
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full md:w-[420px] lg:w-[460px] md:flex-shrink-0"
            style={{
              // better responsive spacing
              paddingTop: "clamp(40px, 8vw, 60px)",
              paddingBottom: "clamp(32px, 6vw, 48px)",
            }}
          >
            {/* Decorative starburst */}
            <div
              className="absolute z-10"
              style={{ top: "30px", left: "-10px" }}
            >
              <svg viewBox="0 0 70 70" width="90" height="90" fill="none">
                {[0, 45, 90, 135].map((deg) => (
                  <line
                    key={deg}
                    x1="30"
                    y1="4"
                    x2="30"
                    y2="56"
                    stroke="var(--foreground)"
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
                    stroke="var(--foreground)"
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
              style={{
                top: "40px",
                right: "-10px",
                background: "var(--foreground)",
              }}
            >
              <div
                className="w-4 h-4 rounded-sm mb-0.5"
                style={{ background: "var(--primary)" }}
              />
              <p
                className="text-[12px] font-bold uppercase tracking-tight"
                style={{
                  color: "var(--background)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Python
              </p>
            </div>

            {/* Main photo — rounded square */}
            <div
              className="overflow-hidden w-full"
              style={{
                height: "clamp(260px, 55vw, 450px)",
                borderRadius: "28px",
                background: "var(--card)",
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
              className="absolute z-20 rounded-2xl p-2 border"
              style={{
                bottom: "-16px",
                left: "-15px", // was -20px, flush on mobile
                background: "var(--background)",
                borderColor: "var(--border)",
                boxShadow: "0 8px 32px rgba(15,45,26,0.14)",
                width: "165px",
              }}
            >
              <p
                className="font-black text-sm mb-1 text-foreground"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Java Developer
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--primary)" }}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      color: "var(--primary-foreground)",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    R
                  </span>
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-foreground"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Roushan
                  </p>
                  <p
                    className="text-[10px] text-muted-foreground"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    7 courses
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
              className="absolute z-20 rounded-2xl p-2 border flex items-center gap-2"
              style={{
                bottom: "20px",
                right: "-10px", // was -20px, flush on mobile
                background: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "0 8px 24px rgba(15,45,26,0.10)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--primary)" }}
              >
                <span
                  className="text-xs font-bold"
                  style={{
                    color: "var(--primary-foreground)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  A
                </span>
              </div>
              <div>
                <div className="flex items-center gap-6 justify-between">
                  <p
                    className="text-xs font-bold text-foreground"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    Aditya
                  </p>
                  <p
                    className="text-[10px] font-semibold text-muted-foreground"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    $45/h
                  </p>
                </div>
                <p
                  className="text-[10px] text-muted-foreground"
                  style={{ fontFamily: "system-ui, sans-serif" }}
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
          className="flex flex-wrap items-center gap-4 lg:gap-10 py-6 mt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { val: "231+", lbl: "Courses & subjects" },
            { val: "319+", lbl: "Instructors" },
            { val: "7k+", lbl: "Using the app" },
          ].map((s) => (
            <div key={s.lbl} className="flex flex-col">
              <p
                className="text-3xl font-black text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {s.val}
              </p>
              <p
                className="text-xs font-medium mt-1.0 text-muted-foreground"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {s.lbl}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-2 w-full lg:w-auto lg:ml-auto mt-2 lg:mt-0">
            {/* Avatar dots — green-toned stack from palette */}
            <div className="flex -space-x-2">
              {["#42D674", "#80EF80", "#BADBA2", "#262A2B"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ background: c, borderColor: "var(--background)" }}
                />
              ))}
            </div>
            <p
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              +72k{" "}
              <span className="font-medium text-muted-foreground">
                Happy students
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────── WHY ALOCODES ─────────────────────────── */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-10">
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
              style={{ background: "var(--primary)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 order-1 lg:order-2"
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{
                  color: "var(--primary)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Why Alocodes?
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Launch Your Tech Career{" "}
                <span className="text-muted-foreground">With Confidence.</span>
              </h2>
            </div>
            <p
              className="leading-relaxed text-muted-foreground"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              We provide the ecosystem you need to succeed — from live
              mentorship to guaranteed interview opportunities. Our curriculum
              is designed by industry experts to make you job-ready from day
              one.
            </p>
            <div className="flex flex-col gap-2">
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
                  className="flex items-start gap-4 p-2 rounded-2xl border transition-all group"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      background: "rgba(66,214,116,0.12)",
                      border: "1px solid rgba(66,214,116,0.25)",
                      color: "var(--primary)",
                    }}
                  >
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="font-bold mb-0.5 text-foreground"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "system-ui, sans-serif" }}
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
      <Courses />

      {/* ─────────────────────────── COMPANIES ─────────────────────────── */}
      <Companies />

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <FAQ />

      {/* ─────────────────────────── CTA BANNER ─────────────────────────── */}
    </div>
  );
}
