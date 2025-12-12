"use client";

import React, { useState } from "react";

import {
  ChevronDown,
  Play,
  FileVideoCamera,
  Group,
  CheckCircle,
  Download,
  ArrowBigRightDash,
  Menu,
} from "lucide-react";

const courses = [
  {
    id: 1,
    badge: {
      text: "Bestseller",
      color: "bg-green-100 text-green-700 dark:text-green-300",
    },
    title: "Data Science & AI: Master Python, TensorFlow & SQL",
    duration: "24 Weeks",
    mode: "Live Online",
    batchSize: "30 Students",
    pricing: "From $199/mo",
    skills: ["Python", "SQL", "Machine Learning", "Tableau", "TensorFlow"],
    outcomes: [
      "Build 5 Industrial Capstone Projects",
      "Job Guarantee Program eligibility",
      "Target Roles: Data Scientist, AI Engineer",
    ],
    videoThumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZXVIyzc8i4yJxiYmjA_xB7EXdY8_lVIL2i-rkAivOE3X8gG8wca-ioNgHIqLcF_fq1Lmm0sRoI7VanRXtVlfNeZ8zTK-SJlgyI1M3KWhEqbi5GWB5MnmTkV-M7b8okkNFMAdyp-qECfEQeJHoIPTgAf1BZnQyROwjFOAtipTOoX4AbaNfcvUlrtExBGoeRHfNTjBdZAhhyiS56nQpKWlPVdTbAjoPG059SLGQz8n7qMw6KfCBzZsNbFCjTfRr2Yh7U1Nm6Uo-wf3",
    videoTitle: "Intro to Data Science (2:10)",
    openByDefault: true,
  },
  {
    id: 2,
    badge: {
      text: "Popular",
      color: "bg-purple-100 text-purple-700 dark:text-purple-300",
    },
    title: "Full-Stack Development: MERN Stack & Real-world Projects",
    duration: "20 Weeks",
    mode: "Hybrid",
    batchSize: "25 Students",
    pricing: "From $179/mo",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    outcomes: [
      "Portfolio of 3 Full-Stack Apps",
      "Target Roles: Full Stack Developer, Frontend Engineer",
    ],
    testimonial: {
      quote:
        '"This course changed my career trajectory completely." - Sarah J.',
      rating: 5,
    },
  },
  {
    id: 3,
    badge: {
      text: "Advanced",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300",
    },
    title: "Cloud & DevOps: AWS, Docker & CI/CD Pipelines",
    duration: "16 Weeks",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    description:
      "Master cloud infrastructure with industry experts from top tech companies.",
  },
  {
    id: 4,
    badge: {
      text: "Fast Track",
      color: "bg-orange-100 text-orange-700 dark:text-orange-300",
    },
    title: "Python + DSA Bootcamp: Ace Your Tech Interviews",
    duration: "12 Weeks",
    problems: "500+ Problems",
    description:
      "Crack coding interviews at top product companies. Focus on Data Structures, Algorithms, and System Design with mock interviews from FAANG engineers.",
  },
];

export default function CoursesPage() {
  const [openCourse, setOpenCourse] = useState(
    courses.find((course) => course.openByDefault)?.id || null
  );

  return (
    <>
      <div className="bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
        <main className="grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-10 mt-15">
          {/* Hero */}
          <div className="w-full max-w-[960px] text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-linear-to-br from-white via-gray-200 to-gray-500 dark:from-white dark:via-gray-100 dark:to-gray-500 bg-clip-text text-transparent">
              Choose Your Path to Tech Mastery
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-[#92c9a8] max-w-2xl mx-auto">
              Curated curriculums designed for the modern job market. Level up
              your skills with hands-on projects and expert mentorship.
            </p>
          </div>

          {/* Filters */}
          <div className="sticky top-20 z-40 w-full max-w-[960px] mb-10">
            <div className="flex gap-3 p-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-[#234832] rounded-full shadow-lg">
              <button className="flex h-9 items-center gap-2 rounded-full bg-gray-100 dark:bg-[#112218] hover:bg-gray-200 dark:hover:bg-[#234832] px-4 transition-all">
                <span className="text-sm font-medium">Skill Level</span>
                <ChevronDown />
              </button>
              <button className="flex h-9 items-center gap-2 rounded-full bg-gray-100 dark:bg-[#112218] hover:bg-gray-200 dark:hover:bg-[#234832] px-4 transition-all">
                <span className="text-sm font-medium">Duration</span>
                <ChevronDown />
              </button>
              <div className="w-px h-6 bg-gray-300 dark:bg-[#234832] self-center mx-1" />
              <button className="flex h-9 items-center gap-2 rounded-full text-gray-500 dark:text-[#92c9a8] hover:text-black dark:hover:text-white px-3">
                {/* <RestartAlt className="text-xl" /> */}
                <span className="hidden sm:block text-sm font-medium">
                  Reset
                </span>
              </button>
            </div>
          </div>

          {/* Course List */}
          <div className="w-full max-w-[960px] flex flex-col gap-6">
            {courses.map((course) => (
              <details
                key={course.id}
                className="group rounded-2xl border border-gray-200 dark:border-[#234832] bg-white dark:bg-[#112218] overflow-hidden shadow-sm"
                open={openCourse === course.id}
                onToggle={() =>
                  setOpenCourse(openCourse === course.id ? null : course.id)
                }
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 bg-gray-50 dark:bg-[#16291F] group-hover:bg-gray-100 dark:group-hover:bg-[#1a3024] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${course.badge.color}`}
                    >
                      {course.badge.text}
                    </span>
                    <p className="text-lg md:text-xl font-bold">
                      {course.title}
                    </p>
                  </div>
                  <div className="size-8 rounded-full bg-gray-200 dark:bg-[#234832] flex items-center justify-center transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </div>
                </summary>

                <div className="p-5 md:p-8 border-t border-gray-100 dark:border-[#234832]/50">
                  {/* Top Info Grid */}
                  {(course.duration || course.mode) && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-dashed border-gray-200 dark:border-[#234832]">
                      {course.duration && (
                        <div className="flex items-center gap-3">
                          {/* <Schedule className="text-[#2bee79]" /> */}
                          <div>
                            <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                              Duration
                            </p>
                            <p className="text-sm font-semibold">
                              {course.duration}
                            </p>
                          </div>
                        </div>
                      )}
                      {course.mode && (
                        <div className="flex items-center gap-3">
                          <FileVideoCamera className="text-[#2bee79]" />
                          <div>
                            <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                              Mode
                            </p>
                            <p className="text-sm font-semibold">
                              {course.mode}
                            </p>
                          </div>
                        </div>
                      )}
                      {course.batchSize && (
                        <div className="flex items-center gap-3">
                          <Group className="text-[#2bee79]" />
                          <div>
                            <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                              Batch Size
                            </p>
                            <p className="text-sm font-semibold">
                              {course.batchSize}
                            </p>
                          </div>
                        </div>
                      )}
                      {course.pricing && (
                        <div className="flex items-center gap-3">
                          {/* <Payments className="text-[#2bee79]" /> */}
                          <div>
                            <p className="text-xs text-gray-500 dark:text-[#92c9a8]">
                              Pricing
                            </p>
                            <p className="text-sm font-semibold">
                              {course.pricing}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    <div className="flex-1 space-y-6">
                      {course.skills && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider mb-3">
                            Skills You&apos;ll Master
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-[#234832] text-xs font-medium border border-transparent dark:border-green-900/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {course.outcomes && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider mb-3">
                            Career Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {course.outcomes.map((outcome) => (
                              <li
                                key={outcome}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-[#92c9a8]"
                              >
                                <CheckCircle className="text-[#2bee79] text-lg" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {course.description && (
                        <p className="text-sm text-gray-600 dark:text-[#92c9a8]">
                          {course.description}
                        </p>
                      )}

                      {course.problems && (
                        <div className="flex flex-wrap gap-4 text-sm font-semibold">
                          <span className="flex items-center gap-2">
                            {/* <Schedule className="text-[#2bee79]" />{" "} */}
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            {/* <CodeBlocks className="text-[#2bee79]" />{" "} */}
                            {course.problems}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="w-full lg:w-72 flex flex-col gap-4">
                      {course.videoThumbnail && (
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 cursor-pointer group">
                          <img
                            src={course.videoThumbnail}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-12 rounded-full bg-[#2bee79]/90 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="text-black text-2xl" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded text-[10px] text-white font-medium backdrop-blur-sm">
                            {course.videoTitle}
                          </div>
                        </div>
                      )}

                      {course.testimonial && (
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#234832]/30 border border-gray-100 dark:border-[#234832] text-center">
                          <p className="text-xs text-gray-500 dark:text-[#92c9a8] mb-3">
                            {course.testimonial.quote}
                          </p>
                          <div className="text-[#2bee79] text-xs">★★★★★</div>
                        </div>
                      )}

                      <div className="flex flex-col gap-3 mt-auto">
                        <button className="w-full h-11 bg-[#2bee79] hover:bg-green-400 text-[#0B120E] font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                          Enroll Now
                          {/* <ArrowForward className="text-sm" /> */}
                        </button>
                        <button className="w-full h-11 border border-gray-300 dark:border-[#234832] hover:bg-gray-100 dark:hover:bg-[#234832] rounded-full flex items-center justify-center gap-2 transition-colors">
                          <Download /> Download Syllabus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="w-full max-w-[960px] mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 dark:bg-[#112218] border border-gray-200 dark:border-[#234832] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#2bee79]/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2bee79_1px,transparent_1px)] bg-size-[16px-16px]" />
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Unsure where to start?
                </h3>
                <p className="text-[#92c9a8]">
                  Take our 5-minute skill assessment quiz. We&apos;ll recommend
                  the perfect personalized learning path for your career goals.
                </p>
              </div>
              <button className="relative z-10 flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(43,238,121,0.3)]">
                Take Skill Quiz
                {/* <ArrowForward /> */}
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
