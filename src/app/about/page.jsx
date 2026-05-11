"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Zap,
  Lightbulb,
  Users,
  Linkedin,
  MessageCircle,
  Rocket,
  Eye,
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardHover = {
    hover: {
      y: -8,
      borderColor: "var(--primary)",
      boxShadow: "0 8px 30px rgba(66,214,116,0.14)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="overflow-x-hidden text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-1 flex flex-col gap-8">
          {/* ── Hero ── */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            <div
              className="relative flex min-h-[480px] flex-col gap-4 rounded-3xl items-center justify-center p-3 overflow-hidden border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQs48M3AqCnQ49HEvd0UvXsym_yo-v0GERCPzoCL_OO41tc7rlcUp5AI-0qCZn0ordf4Vvs8f3R1Tb7PZKxkJ8DvluDMKTx1kIJxNM0blus60Yzun0f1_4EUHqhHK5-w1kAADCSe0eUhY_I7fblSzE3jSwEo3716DsZH83TOC1-_fin2-M2MmpAqLpUuD4tvXg36_gtBU7Kz04D1_cdLsOzCKlfeFiZj0mRyWu29gZkJaE9CoSRGovrwjYsI5_6rRh4qssK-wkR-Px")`,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "rgba(15,31,19,0.75)" }}
              />
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
                style={{ background: "rgba(66,214,116,0.18)" }}
              />

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 flex flex-col gap-3 text-center max-w-[800px]"
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--primary)" }}
                >
                  About Alocodes
                </p>
                <h1
                  className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Building the{" "}
                  <span className="relative inline-block">
                    <span
                      className="absolute -left-2 top-1/2 -translate-y-1/2 w-[calc(100%+1rem)] h-[1.2em] rounded-full -z-0"
                      style={{ background: "var(--primary)" }}
                    />
                    <span
                      className="relative z-10"
                      style={{ color: "var(--primary-foreground)" }}
                    >
                      Future
                    </span>
                  </span>{" "}
                  of Code
                </h1>
                <p
                  className="text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "rgba(232,245,233,0.70)" }}
                >
                  Empowering the next generation of developers with immersive,
                  futuristic learning experiences that bridge the gap between
                  theory and reality.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Narrative & Mission ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <div
                className="flex items-center gap-1 mb-1"
                style={{ color: "var(--primary)" }}
              >
                <Terminal className="w-4 h-4" />
                <span className="font-bold tracking-widest text-xs uppercase">
                  Our Story
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                From a small coding club to a global platform.
              </h2>
              <div className="flex flex-col gap-1 text-base leading-relaxed text-muted-foreground">
                <p>
                  Alocodes is an EdTech initiative by Alomonx Technology,
                  created to provide high-quality coding, AI, and cloud training
                  to students, job-seekers, and professionals. We believe that
                  skills matter more than degrees, and our mission is to deliver
                  industry-level training that prepares learners for real-world
                  jobs.
                </p>
                <p>
                  Today, we are dedicated to democratizing tech education
                  through accessible, high-quality resources, real-time
                  mentorship, and a community that never sleeps.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-1">
              {/* Mission card */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                className="flex flex-1 gap-1 rounded-2xl border p-2 flex-col group cursor-default transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 w-fit rounded-2xl flex items-center justify-center border"
                  style={{
                    background: "rgba(66,214,116,0.12)",
                    borderColor: "rgba(66,214,116,0.25)",
                    color: "var(--primary)",
                  }}
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-xl font-black leading-tight text-foreground"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    To democratize coding education by making it interactive,
                    affordable, and deeply engaging for everyone.
                  </p>
                </div>
              </motion.div>

              {/* Vision card */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-1 gap-2 rounded-2xl border p-2 flex-col group cursor-default transition-all"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 w-fit rounded-2xl flex items-center justify-center border"
                  style={{
                    background: "rgba(66,214,116,0.12)",
                    borderColor: "rgba(66,214,116,0.25)",
                    color: "var(--primary)",
                  }}
                >
                  <Eye className="w-6 h-6" />
                </motion.div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-xl font-black leading-tight text-foreground"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    A world where anyone, regardless of background, can build
                    their dreams through the power of software.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Timeline ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-3 px-4"
          >
            <motion.div variants={itemVariants} className="text-center mb-0">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--primary)" }}
              >
                Milestones
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Our Journey
              </h2>
              <p className="mt-0 text-sm text-muted-foreground">
                Key milestones that defined us
              </p>
            </motion.div>

            <div className="grid grid-cols-[40px_1fr] gap-x-6 max-w-[700px] mx-auto w-full">
              {/* 2020 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-1 pt-0"
              >
                <div
                  className="rounded-full p-2 z-10 border"
                  style={{
                    background: "rgba(66,214,116,0.12)",
                    borderColor: "rgba(66,214,116,0.30)",
                    color: "var(--primary)",
                  }}
                >
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div
                  className="w-0.5 h-full grow min-h-20"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--border), var(--primary))",
                  }}
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-1 pb-3"
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  2020
                </span>
                <h3
                  className="text-xl font-black leading-normal text-foreground"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  The Idea
                </h3>
                <p className="text-sm leading-relaxed mt-1 text-muted-foreground">
                  Alocodes starts as a weekend project to help local students
                  visualize algorithms.
                </p>
              </motion.div>

              {/* 2021 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-0"
              >
                <div
                  className="w-0.5 h-full grow opacity-60"
                  style={{ background: "var(--border)" }}
                />
                <div
                  className="rounded-full p-2 z-10 border"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <Rocket className="w-4 h-4" />
                </div>
                <div
                  className="w-0.5 h-full grow min-h-20"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--border), var(--primary))",
                  }}
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-1 pb-4"
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  2021
                </span>
                <h3
                  className="text-xl font-black leading-normal text-foreground"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  First Course Launched
                </h3>
                <p className="text-sm leading-relaxed mt-1 text-muted-foreground">
                  We released "Python for Future" and saw 500 enrollments in the
                  first week.
                </p>
              </motion.div>

              {/* 2023 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-1 pb-1"
              >
                <div
                  className="w-0.5 h-full grow opacity-60"
                  style={{ background: "var(--border)" }}
                />
                <div
                  className="rounded-full p-2 z-10 border"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <Users className="w-4 h-4" />
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-1"
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  2023
                </span>
                <h3
                  className="text-xl font-black leading-normal text-foreground"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  10,000 Students Reached
                </h3>
                <p className="text-sm leading-relaxed mt-1 text-muted-foreground">
                  A massive milestone. Our community grows to cover 45
                  countries.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Mentors ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-6 px-4 py-2"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                The Team
              </p>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Meet Our Mentors
              </h2>
              <p className="text-sm text-muted-foreground">
                Industry experts guiding your path.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "Python Expert",
                  desc: "Ex-Google engineer with a passion for AI ethics.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfieuXHUZBRni9DxpfEdfjMWNhk6FVXctha2D2VyubE17PDjJcyD0outlvQNfTml5AOjJQREfrkEvy8XYUNmgBGRoo2arl3V9kVhWU1Vnos2-JiXqicFVwXf4dMLqbvwhqLIVFLXs-s-Dm__anIdliYy9KkrXeqM0mXxnwym-D-3CXSZtOIP9nLw8OUapUhpuruvwQ_pBDhBpqqzJXUhpVw0XFUceMU6kIm-465UsDGs483bijTJlfErffb1NLLRZuapquAiNatqfY",
                },
                {
                  name: "David Chen",
                  role: "React Lead",
                  desc: "Frontend wizard creating seamless UIs for 10+ years.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK5RTt53midio-SSkB0HtgvsYI3o7N8n69eJXw1MfDCvqLHyyPnQg4YQrw0qJYWNj4rp5VhkHBRXhdx9217DJo4JkrNQ6nGC_aq1CWyT3hSO6i-xny1kAWlaNVKjSb6UYYgAKBJzV6p4czjMfwGQgdWxVkOPpILiovu8EqYixEeXB1-0sGQTPU5wEQhEGQ9tRnZRkMTpe3CCaWvHOvuIQc0KzaPKf0NYlCMtCDP_s5v6UEvTYFW1250U3Ur0zDI5LnhUsd-IdZr0pQ",
                },
                {
                  name: "Elena Rodriguez",
                  role: "DevOps Architect",
                  desc: "Cloud infrastructure specialist and Kubernetes fan.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm0RVNawEAZMYLO3cW4I32_FDjzqb0rPn65zj033V4n47ClifBkLDN4TP2iWTvV_Rw_9vL3BtAodiS-5V2SlNks9ac1PVq5aO6u1xuKTSRMNOYz-0BVMsjnylE2Wm6gUszejmRBGY16hYfk7t2aMTjpmvJSfs_x779Xkdp_9Bw_nHm_Fcomrt1XqVeeZtUTLyrBR35DcrQCP3qsoOf2ThBiTpePP40qGBNkABf6vfebFqKG7Z-FuEGSPaRko6c4bfXdzWMC4juAnJ0",
                },
                {
                  name: "Marcus Johnson",
                  role: "Cybersecurity",
                  desc: "White hat hacker teaching improved system defense.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANFE8Kkz3DXXKa-ZhI3ypjFJHlm2d9TLb9o7GliT_Px1VImk550DHtfXV4o_sk-VAmdRtv_svUYIED5toeNLWYC1BgfUfyNBk4G8Xl0_6yHzlLF9DZTkr8xWxXd-gp53iy42C1256eyme5QHeYh7GnamZ80_KsExFCfortE3JYh7ZO8bMnnkj-c5jiFnl_s5SGjZDSLW8zU9app-8C4EfRO8mvJu2DhL4dgYQOdGpmxwUNSVgbxX1OwKse57h6BO0jSTa2Wu_TBEKg",
                },
              ].map((mentor) => (
                <motion.div
                  key={mentor.name}
                  variants={cardHover}
                  whileHover="hover"
                  className="group relative flex flex-col items-center gap-2 rounded-3xl border p-2 transition-all cursor-default"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="relative size-24 overflow-hidden rounded-full border-2 transition-colors"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <img
                      src={mentor.img}
                      alt={`Portrait of ${mentor.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-base font-black text-foreground">
                      {mentor.name}
                    </h3>
                    <p
                      className="text-xs font-bold mt-0.5"
                      style={{ color: "var(--primary)" }}
                    >
                      {mentor.role}
                    </p>
                    <p className="text-xs mt-2 text-center line-clamp-2 leading-relaxed text-muted-foreground">
                      {mentor.desc}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-1 flex h-8 w-8 items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
                    style={{ background: "#0077b5" }}
                    aria-label={`LinkedIn profile of ${mentor.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Final CTA ── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full pb-16"
          >
            <div
              className="rounded-[2.5rem] p-4 md:p-10 flex flex-col md:flex-row items-center justify-between gap-2 relative overflow-hidden"
              style={{ background: "var(--foreground)" }}
            >
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(66,214,116,0.15)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(66,214,116,0.08)" }}
              />

              <div className="relative z-10">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  Free Consultation
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black leading-tight max-w-sm"
                  style={{
                    color: "var(--background)",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Stuck on a problem? Let's talk code.
                </h2>
                <p
                  className="text-sm mt-1 max-w-sm leading-relaxed"
                  style={{ color: "rgba(232,245,233,0.60)" }}
                >
                  Connect with our senior mentors for a free 15-minute
                  consultation to map out your learning path.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative z-10 shrink-0 flex items-center gap-2 h-14 px-8 rounded-full text-base font-bold transition-colors cursor-pointer"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 4px 20px rgba(66,214,116,0.35)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Book Free 1:1 Chat
              </motion.button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
