"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Search,
  MapPin as LocationOn,
  Text as Description,
  Terminal,
  Briefcase as Work,
  Mic,
  Form as Forum,
  Group,
  Plus,
  Minus,
} from "lucide-react";

export default function App() {
  return (
   <section className="bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden antialiased">
     <div className="relative flex min-h-screen w-full flex-col bg-background-dark">
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 md:px-10 lg:px-40 pb-10">
          {/* Hero Section */}
          <section className="mt-8 md:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 py-6 md:py-10 lg:flex-row items-center"
            >
              <div className="flex flex-col gap-6 lg:min-w-[400px] lg:gap-8 flex-1 text-center lg:text-left items-center lg:items-start">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                    Launch Your Career with{" "}
                    <span className="text-primary">Alocodes</span>
                  </h1>
                  <h2 className="text-gray-400 text-lg font-normal leading-relaxed max-w-xl">
                    From learning to earning. Our data-driven approach ensures
                    you don't just learn to code, you get hired.
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold tracking-[0.015em] hover:bg-green-400 transition-transform shadow-[0_0_20px_rgba(43,238,121,0.3)]"
                >
                  <span className="truncate">Talk to Placement Team</span>
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-surface-border"
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

          {/* Stats Section */}
          <section className="py-8">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
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
                  className="flex min-w-[150px] flex-1 flex-col gap-2 rounded-xl p-6 border border-surface-border bg-surface-dark hover:border-primary/50 transition-colors"
                >
                  <p className="text-gray-400 text-base font-medium leading-normal">
                    {stat.label}
                  </p>
                  <p
                    className={`tracking-tight text-3xl md:text-4xl font-black leading-tight ${
                      stat.highlight ? "text-primary" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  We Help You Get{" "}
                  <span className="text-primary border-b-4 border-primary/30">
                    Job-Ready
                  </span>{" "}
                  With:
                </h2>
                <p className="text-gray-400 text-lg font-normal leading-normal max-w-[720px]">
                  Comprehensive career services designed to bridge the gap
                  between learning code and getting hired by top tech companies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    className="group flex flex-col gap-4 rounded-xl border border-surface-border bg-surface-dark p-6 hover:bg-surface-border/30 transition-all duration-300"
                  >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <feature.icon className="size-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-lg font-bold leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-normal leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Placement Map Section */}
          <section className="py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 mb-6"
            >
              <h2 className="text-white text-3xl font-bold leading-tight">
                Where Our Grads Work
              </h2>
              <p className="text-gray-400 text-lg font-normal leading-normal ">
                Explore the companies and locations where Alocodes alumni are
                currently making an impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-surface-dark rounded-2xl border border-surface-border overflow-hidden relative min-h-[500px]"
            >
              {/* Map Background Placeholder */}
              <div className="absolute inset-0 w-full h-full bg-gray-800 opacity-40" />

              {/* Overlay Controls */}
              <div className="relative z-10 flex flex-col h-full justify-between p-6">
                <div className="w-full max-w-md">
                  <div className="flex w-full items-center rounded-xl bg-background-dark/80 backdrop-blur-sm border border-surface-border overflow-hidden focus-within:border-primary transition-colors">
                    <div className="text-text-secondary flex items-center justify-center pl-4">
                      <Search className="size-5" />
                    </div>
                    <input
                      className="w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-text-secondary/70 h-12 px-4 text-sm"
                      placeholder="Search companies or locations"
                    />
                  </div>
                </div>

                <div className="flex justify-end items-end gap-3">
                  <div className="flex flex-col gap-1">
                    <button className="flex size-10 items-center justify-center rounded-t-lg bg-background-dark/90 text-white hover:bg-surface-border border border-surface-border transition-colors">
                      <Plus className="size-5" />
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-b-lg bg-background-dark/90 text-white hover:bg-surface-border border border-surface-border transition-colors">
                      <Minus className="size-5" />
                    </button>
                  </div>
                  <button className="flex size-10 items-center justify-center rounded-lg bg-primary text-background-dark hover:bg-green-400 font-bold shadow-lg transition-colors">
                    <LocationOn className="size-5" />
                  </button>
                </div>
              </div>

              {/* Animated Pins */}
              <div className="absolute top-1/3 left-1/4 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-3 bg-primary" />
              </div>
              <div className="absolute top-1/2 left-1/2 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-3 bg-primary" />
              </div>
              <div className="absolute bottom-1/3 right-1/4 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-3 bg-primary" />
              </div>
            </motion.div>
          </section>

          {/* Final CTA */}
          <section className="py-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-br from-surface-dark to-background-dark border border-surface-border rounded-2xl p-8 md:p-12 text-center max-w-3xl w-full flex flex-col gap-6 items-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                Ready to start your success story?
              </h2>
              <p className="text-gray-400 text-lg relative z-10">
                Join thousands of students who transformed their careers with
                Alocodes.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold tracking-[0.015em] hover:bg-green-400 hover:shadow-[0_0_25px_rgba(43,238,121,0.4)] transition-all"
              >
                Talk to Placement Team
              </motion.button>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
   </section>
  );
}
