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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardHover = {
    hover: {
      y: -8,
      borderColor: "#2bee79",
      boxShadow: "0 0 20px rgba(43, 238, 121, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="pt-18 bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-background-dark">
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-5 flex flex-col gap-16">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="@container"
          >
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(17, 34, 24, 0.7) 0%, rgba(17, 34, 24, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQs48M3AqCnQ49HEvd0UvXsym_yo-v0GERCPzoCL_OO41tc7rlcUp5AI-0qCZn0ordf4Vvs8f3R1Tb7PZKxkJ8DvluDMKTx1kIJxNM0blus60Yzun0f1_4EUHqhHK5-w1kAADCSe0eUhY_I7fblSzE3jSwEo3716DsZH83TOC1-_fin2-M2MmpAqLpUuD4tvXg36_gtBU7Kz04D1_cdLsOzCKlfeFiZj0mRyWu29gZkJaE9CoSRGovrwjYsI5_6rRh4qssK-wkR-Px")`,
                }}
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-4 text-center max-w-[800px] z-10"
                >
                  <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                    Building the <span className="text-primary">Future</span> of
                    Code
                  </h1>
                  <h2 className="text-gray-300 text-sm md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                    Empowering the next generation of developers with immersive,
                    futuristic learning experiences that bridge the gap between
                    theory and reality.
                  </h2>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Narrative & Mission Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4"
          >
            {/* About Text */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Terminal className="w-5 h-5" />
                <span className="font-bold tracking-widest text-sm uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                From a small coding club to a global platform.
              </h2>
              <div className="flex flex-col gap-4 text-gray-400 text-lg font-light leading-relaxed">
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

            {/* Mission & Vision Cards */}
            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                className="flex flex-1 gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 flex-col group cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-primary p-3 bg-background-dark/50 w-fit rounded-full flex items-center justify-center"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Our Mission
                  </h3>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    To democratize coding education by making it interactive,
                    affordable, and deeply engaging for everyone.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-1 gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 flex-col group cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-primary p-3 bg-background-dark/50 w-fit rounded-full flex items-center justify-center"
                >
                  <Eye className="w-8 h-8" />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    A world where anyone, regardless of background, can build
                    their dreams through the power of software.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-10 px-4"
          >
            <motion.div variants={itemVariants} className="text-center mb-4">
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                Our Journey
              </h2>
              <p className="text-gray-400 mt-2">
                Key milestones that defined us
              </p>
            </motion.div>

            <div className="grid grid-cols-[40px_1fr] gap-x-6 max-w-[800px] mx-auto w-full">
              {/* 2020 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-1 pt-1"
              >
                <div className="text-primary bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="w-0.5 bg-linear-to-b from-surface-border to-primary h-full grow min-h-20" />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-2 pb-8"
              >
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">
                  2020
                </span>
                <h3 className="text-white text-xl font-medium leading-normal">
                  The Idea
                </h3>
                <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                  Alocodes starts as a weekend project to help local students
                  visualize algorithms.
                </p>
              </motion.div>

              {/* 2021 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-0.5 bg-surface-border h-full grow opacity-50" />
                <div className="text-white bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="w-0.5 bg-linear-to-b from-surface-border to-primary h-full grow min-h-20" />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-2 pb-8"
              >
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">
                  2021
                </span>
                <h3 className="text-white text-xl font-medium leading-normal">
                  First Course Launched
                </h3>
                <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                  We released "Python for Future" and saw 500 enrollments in the
                  first week.
                </p>
              </motion.div>

              {/* 2023 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-1 pb-1"
              >
                <div className="w-0.5 bg-surface-border h-full grow opacity-50" />
                <div className="text-white bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                  <Users className="w-5 h-5" />
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-1 flex-col py-2"
              >
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">
                  2023
                </span>
                <h3 className="text-white text-xl font-medium leading-normal">
                  10,000 Students Reached
                </h3>
                <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                  A massive milestone. Our community grows to cover 45
                  countries.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Mentors Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-10 px-4 py-10 w-full"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Meet Our Mentors
              </h2>
              <p className="text-gray-400 text-base">
                Industry experts guiding your path.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  className="group relative flex flex-col items-center gap-4 rounded-xl border border-surface-border bg-surface-dark p-6 transition-all"
                >
                  <div className="relative size-24 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
                    <img
                      src={mentor.img}
                      alt={`Portrait of ${mentor.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-white text-lg font-bold">
                      {mentor.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {mentor.role}
                    </p>
                    <p className="text-gray-400 text-xs mt-2 text-center line-clamp-2">
                      {mentor.desc}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                    aria-label={`LinkedIn profile of ${mentor.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-16 text-center shadow-lg md:px-12 md:py-20">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-background-dark opacity-10 blur-3xl" />

              <div className="relative z-10 flex flex-col items-center gap-6">
                <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-background-dark md:text-5xl">
                  Stuck on a problem? Let's talk code.
                </h2>
                <p className="max-w-lg text-lg font-medium text-background-dark/80">
                  Connect with our senior mentors for a free 15-minute
                  consultation to map out your learning path.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-background-dark px-8 py-4 text-white text-lg font-bold shadow-xl hover:bg-surface-dark transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Free 1:1 Chat
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </section>
  );
}
