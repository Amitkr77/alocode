"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Video,
  Users,
  // RocketLaunch,
  // Schedule,
  CheckCircle,
  // ExpandMore,
  TrendingUp,
  Star,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardHover = {
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(16, 34, 45, 0.95) 0%, rgba(16, 34, 23, 0.85) 60%, rgba(43, 238, 121, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBka3HKYMHiuvrC_Ws6mq8gC0GvMKfPf3AVVHpx8E7DdqpK0GnPKcpXKzjptwTOS6vuFB7OUSNMxb8DE1Epljmyh43O7EITQJzwezGGnLIe1aGZbO6dOsb6bNsBt6eD8BCRaF-MhAzTbb7y9kEsBsKQVThy1c7JyJ1VvThOMr3loVXMf92eGy5dppP99TyKTz-Lgt3Bo-AdfpiN4OEUlIlKOwjSPNY_BGADvKuK0q21WHc8xxT0i2YgIxFANHobnMRjbn1xWdXoQQBq")`,
              }}
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
          >
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-surface-border backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    New Cohort Starting Soon
                  </span>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-white text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight"
              >
                Alocodes – Learn. Code. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                  Transform Your Future!
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl"
              >
                Master job-ready skills in Full Stack, Data Science, and AI.
                Join the platform with a{" "}
                <span className="text-white font-bold">90% placement rate</span>{" "}
                and land your dream job.
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center w-full mt-4"
              >
                <Link
                  href="/enroll"
                  className="min-w-40 h-14 px-8 rounded-full bg-primary text-background-dark text-base font-bold hover:shadow-[0_0_20px_rgba(43,238,121,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#234832" }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-40 h-14 px-8 rounded-full bg-surface-dark border border-surface-border text-white text-base font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Free Brochure
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-12 flex flex-col items-center gap-4"
              >
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                  Trusted by leading tech companies
                </p>
                <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {["Google", "Amazon", "Microsoft", "Spotify"].map(
                    (company) => (
                      <div
                        key={company}
                        className="text-xl font-bold text-white flex items-center gap-2"
                      >
                        <Star className="w-5 h-5" />
                        {company}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-background-dark py-12 border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-surface-border/50 text-center">
              {[
                { value: "10k+", label: "Students Enrolled" },
                { value: "90%", label: "Hiring Rate", highlight: true },
                { value: "500+", label: "Hiring Partners" },
                { value: "120%", label: "Avg Salary Hike", highlight: true },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2 p-4"
                >
                  <span
                    className={`text-4xl md:text-5xl font-black tracking-tighter ${
                      stat.highlight ? "text-primary" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Alocodes */}
        <section className="py-20 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                  Why Alocodes?
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Launch Your Tech Career <br />
                  <span className="text-gray-500">With Confidence.</span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We provide the ecosystem you need to succeed, from live
                  mentorship to guaranteed interview opportunities. Our
                  curriculum is designed by industry experts to make you
                  job-ready from day one.
                </p>

                <div className="flex flex-col gap-4">
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
                      icon: Users,
                      title: "Guaranteed Career Support",
                      desc: "Resume building, mock interviews, and direct job referrals.",
                    },
                  ].map((feature) => (
                    <motion.div
                      key={feature.title}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-dark transition-colors border border-transparent hover:border-surface-border group"
                    >
                      <div className="w-12 h-12 rounded-full bg-surface-dark group-hover:bg-primary/20 flex items-center justify-center shrink-0 border border-surface-border group-hover:border-primary text-primary transition-all">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-bold mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-[3rem] overflow-hidden border-4 border-surface-border relative z-10"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVgknHoTBolTOjk9umcaEkublnjbOxikSRckGbgp-b1eYVK6TfdBvchd4OorV9sRdfPc-wEB6kxf5c_m1W_mtMEU6ezAgDtiA_cKqiDX3QYe9l591ZgEsX88pkpbohu1R1o9JAuBA3PTYkHFuITaRvwycL9l9VfmeySXfT_0rwa2-P3pBltCCrhOkgnog9vTl_9HsvBp5jOSz5bD3B3ukwlKeOclBtbJAlapGjnDa9aDYE9o8R2wSxw9wI5dcCQVLx0_9mqF29VlWP")`,
                    }}
                  />
                </motion.div>

                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl z-0" />

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-10 -left-6 z-20 bg-background-dark p-4 rounded-2xl border border-surface-border shadow-xl flex items-center gap-4 pr-8"
                >
                  <div className="bg-green-500/20 p-2 rounded-full text-green-500">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">
                      Just Hired
                    </p>
                    <p className="text-white font-bold">Full Stack Developer</p>
                    <p className="text-xs text-gray-500">@ TechCorp Inc.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Courses Section */}
        <section className="py-24 bg-surface-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Master In-Demand Skills
              </h2>
              <p className="text-gray-400">
                Choose from our most popular courses designed to get you hired.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Stack Web Development",
                  slug: "full-stack-development-mern-stack-real-world-projects",
                  duration: "6 Months",
                  level: "Beginner Friendly",
                  bestseller: true,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrpJa1-otvaHGomIM-8hvc24j2DsUNvXSAoxkoH1n_hP7Bx3NOUjlikH0KPO9DOc8WQXh8KgfSGlpgjAF5vbB1AmX9kggcctPWTvQZglKPwlM7ZuPVvV5wGDbNazUCYLiImgHPpHexzt7VW4rp_YwgJ1GAOKzw-LYDmxbmbmiUrsdDLysWAbjVHTkArEiQga3jXyXpaPcHmdJ9LtKDd8GMj3bo8mDxJe6FEh55Wz-7cEXiRbQS3NQMRcVFO30UnbgwjeAyJG7Tf-7y",
                },
                {
                  title: "Data Science & AI",
                  slug: "data-science-ai-master-python-tensorflow-sql",
                  duration: "8 Months",
                  level: "Intermediate",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBziaKBfMw3TfGlU0h1EZ1gn1mu8pMFnOgwIUCEaFsNhVrpwnYytL9DxOciXzsN8ABhBWhhs6q-33URPCZ2qDAeEpnoC7QyOzQ7M2huDxdSWKfcSJuU-_wctbBWiHyGCnkB_8QI4fVMD_8M2n6NAJcy5X3dwkNN1ACfeagW_lYjS-A85w6A02AUh6LXK5-DrdaPQJPXxVPU-omNMKCzFMxTnik3Tjz57kpqaqYn81LsBv0YTEZci1geke3_r0m9JK-8iH0UB1RYKz0e",
                },
                {
                  title: "Cloud & DevOps Engineering",
                  slug: "cloud-devops-aws-docker-ci-cd-pipelines",
                  duration: "4 Months",
                  level: "Advanced",
                  trending: true,
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbyeeYviUTRIwMJeHR5Kar9vbvr2TVM8CIZjFNfCs5MTqpDFM2zfdLWNLXmo1vTlZrthdxS70wd54MGhBVj1Mj6ZTZrNYLSvtVMdDV2vzHd8j8L3m7I6tgzFRZhW-4RLh0nt_6vTDqfD1s6LwSX837hBEurtR2FWIgUtzjqapUT1Jnhz0vEpUOv05AlvoFeh3t4XzOpAoVk2hC2acX7MJ8eN5muM_sEZu0JJ943avfeTbnpJDEijOg7XC1Ml0G4KtOhQAKdzdxBly3",
                },
              ].map((course) => (
                <motion.div
                  key={course.title}
                  variants={cardHover}
                  whileHover="hover"
                  className="group bg-surface-dark rounded-4xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent z-10" />
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${course.img}")` }}
                    />
                    {course.bestseller && (
                      <div className="absolute top-4 left-4 z-20 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-surface-border">
                        <span className="text-primary text-xs font-bold uppercase">
                          Bestseller
                        </span>
                      </div>
                    )}
                    {course.trending && (
                      <div className="absolute top-4 left-4 z-20 bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30">
                        <span className="text-blue-400 text-xs font-bold uppercase flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Trending
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        {/* <Schedule className="w-4 h-4" /> */}
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{course.level}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      {course.title.includes("Full Stack")
                        ? "Master MERN stack. Build real-world projects like Netflix Clone, E-commerce app, and more."
                        : course.title.includes("Data Science")
                        ? "Learn Python, Machine Learning, and Deep Learning. Build AI models and data pipelines."
                        : "Understand Smart Contracts, Solidity, and dApps. Step into the future of the internet."}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div className="flex -space-x-2">
                        {[
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuBVzC5yjFHxFu0Qzfs9UdLQ2VFDshVv7e8fsJ4pGwlDmFYv9ix6ua3CI3Am9x4OX23LdWC1gLvIO9ovPj5CcKxsXiy0ToZwT-REQ0rKKbF12F8JtKMBOMm9wB-cVsLPnmI9Q0CbcLhfAjgRIJ8L7DqjXFKvpyj4WJ3XccHXo4pEhPsc9i7tz5El_pugAaNNQ6npaBnrNyOktFJP0O7XxRuUpZY-UyAKNk5MHwaaWxl6bFmr6vXx-BIE7IkubOQW40KbNmbcGWG0ZkJt",
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuBE7nLOkfla162Pem4g7R0v-PgfLAooZWHU4wDEwc-OT5TqG1QTjfwARhtmmWqpLkq4Uzp61Imfe09K9avIySxdaYA86eBji-lehIm-M8A3mk_9qlPCcj5bwC2QubrRlFwMmqkl-249GAbjVwjMlIulTNQwvxxMIiilumYluLpnd5pGLrzVNTXUpKm0Y_wO_Y4HgfVKiZmlnIN2Jg2ebDYirkeXOB0JPqotIGb1xMRx_tsUeMhaUWOws7EvH4anKxnqOn4aRpFWVxZ0",
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuAKVXRU3UxVO6fyQ0Lo8FSUnAtIyLZlwMmxPhGNOamoER3Rwkycee0agPOz7ha02cdol1x6TOdbQlmnoYMZKCwhBCo9B5WB5Op4vN6_0BLdZuwEgT3jv8q36gCE7blgpOGMlNtx45Vzk8yNPGVJbUb9wnfrCDpoYcePzDNk9vdh7DWB61WXNZ6f_mdf0ioPqvhqA5tTHDVfdsU0CEU2bxPgwoMPTfB4tCvsP5IbiIT2bVt459X2lUFuD44apgaeTocyEgwkwBPyJBVH",
                        ].map((src, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-surface-dark bg-gray-700 overflow-hidden"
                          >
                            <img
                              src={src}
                              alt={`avatar-${index}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      <Link
                        className="text-white font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                        href={`/courses/${course.slug}`}
                      >
                        View Course <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background-dark py-12 border-b border-surface-border">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white text-center mb-8">
              Get mentored by our experts from top companies
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  text-center">
              {[
                { label: "MORGAN STANLEY", path: "./companies/morgan.jpeg" },
                { label: "DELOITTE", path: "./companies/deloitte.jpeg" },
                { label: "NASDAQ", path: "./companies/nasdaq.jpeg" },
                { label: "VOIS", path: "./companies/vois.jpeg" },
                { label: "COGNIZANT", path: "./companies/cognizant.png" },
                { label: "ORACLE", path: "./companies/oracle.png" },
                { label: "DXC", path: "./companies/dxc.png" },
                { label: "FOX", path: "./companies/fox.png" },
              ].map((company) => (
                <motion.div
                  key={company.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center p-4"
                >
                  <img
                    src={company.path}
                    alt={company.label}
                    className="w-24 h-12 mx-auto object-contain"
                  />
                  <span className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-wide">
                    {company.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (simplified) */}
        <section className="py-20 bg-background-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need a technical degree to enroll?",
                  a: "No! Our courses are designed to take you from zero to hero...",
                },
                {
                  q: "How does the placement guarantee work?",
                  a: "We offer placement assistance until you get hired...",
                },
                {
                  q: "Are the classes live or recorded?",
                  a: "We use a hybrid model with recorded lectures and live weekend sessions.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="border border-surface-border rounded-xl bg-surface-dark/20 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="font-medium text-white text-lg">{faq.q}</h3>
                    {/* <ExpandMore className="text-gray-400 group-open:rotate-180 transition-transform w-6 h-6" /> */}
                  </summary>
                  <p className="mt-4 pb-6 px-6 text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
