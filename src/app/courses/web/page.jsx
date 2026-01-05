import ComingSoon from "@/components/ComingSoon";
import DownloadSyllabusDialog from "@/components/DownloadSyllubus";
import {
  BadgeCheck,
  Mail,
  Captions,
  Check,
  ChevronDown,
  Download,
  Globe,
  Play,
  PlayCircle,
  Star,
  Text,
  ChevronRight,
  StarHalf,
  Video,
  Clock,
  Code2,
  Infinity,
  Smartphone,
  Grid,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <section className="bg-surface-dark border border-surface-border">
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 bg-surface-dark border-b border-surface-border">
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBka3HKYMHiuvrC_Ws6mq8gC0GvMKfPf3AVVHpx8E7DdqpK0GnPKcpXKzjptwTOS6vuFB7OUSNMxb8DE1Epljmyh43O7EITQJzwezGGnLIe1aGZbO6dOsb6bNsBt6eD8BCRaF-MhAzTbb7y9kEsBsKQVThy1c7JyJ1VvThOMr3loVXMf92eGy5dppP99TyKTz-Lgt3Bo-AdfpiN4OEUlIlKOwjSPNY_BGADvKuK0q21WHc8xxT0i2YgIxFANHobnMRjbn1xWdXoQQBq')",
            }}
            className="w-full h-full bg-cover bg-center bg-no-repeat grayscale"
          ></div>
          <div className="absolute inset-0 bg-background-dark/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-8 text-sm text-gray-400 font-medium overflow-x-auto whitespace-nowrap">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span className="mx-2">/</span>
            <a className="hover:text-primary transition-colors" href="#">
              Courses
            </a>
            <span className="mx-2">/</span>
            <a className="hover:text-primary transition-colors" href="#">
              Web Development
            </a>
            <span className="mx-2">/</span>
            <span className="text-white">
              Full Stack Web Development MasterclassName
            </span>
          </nav>
          <div className="lg:w-2/3 pr-0 lg:pr-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Bestseller
              </span>
              <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                <Star className="material-symbols-outlined text-lg fill-1" />
                4.8
                <span className="text-gray-400 font-medium ml-1">
                  (2,450 ratings)
                </span>
              </span>
              <span className="text-gray-400 text-sm border-l border-white/10 pl-3">
                Last updated Dec 2023
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Full Stack Web Development{" "}
              <span className="text-primary">MasterclassName 2024</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Become a full-stack developer with just one course. HTML, CSS,
              Javascript, Node, React, MongoDB and more! Build 12+ real-world
              projects and get hired.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8fvmWQLG-Vd4GakU7E3qEHaC8l9OPqxz6b0GP4ACdCyooM8M5pGkcN8qO79WJtj5V6LLW_TcmaQMAam9vvSZAfG_IFgXz9WwfipMfiwDQ0gChIEzkxIO35gi4m4DNEcIJ4oasNfr0raW7x0uM2Pek0WlGAd9lN9iSroo6kApmlQPIKZrN7F4dYSKIz81R0qbgtfEt6FM4evIPfSSjU0W8VRUTbYB6bv6lOW80T81d8ddxESfffclUoA0PcGkmXGNxwmqizcHclrce')",
                  }}
                  className="w-10 h-10 rounded-full border-2 border-surface-dark bg-gray-700 bg-cover"
                ></div>
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGMT5Kw-ALUqeFU2Q8JpiDAsUtMpfkcyzOCsRbPp5HIEl4oggOpSv3LS0cKFGn-W3Yaro2CA3LujLImAmyglXoMYthxjECjlMywQAGJOj2O-9ulg0PKhYbb0sdwBXZC_uxzcZYN260vbvQgPGJZF0tiZGpTb1jjzgO4-jktiTKuaUFcRjKHMeAtvK13jypxiyYOyP6TIOrxkszACfsEX38BOMyyyrcSRd8Vdgcyf5yVZF7MNFJsz3nQTdO7ZbXenD0RifPtu3eMaFy')",
                  }}
                  className="w-10 h-10 rounded-full border-2 border-surface-dark bg-gray-700 bg-cover"
                ></div>
              </div>
              <div>
                <p className="text-white text-sm font-bold">
                  Created by{" "}
                  <a
                    className="text-primary hover:underline"
                    href="#instructors"
                  >
                    Alex Dev
                  </a>{" "}
                  &amp;{" "}
                  <a
                    className="text-primary hover:underline"
                    href="#instructors"
                  >
                    Sarah Code
                  </a>
                </p>
                <p className="text-gray-500 text-xs">
                  Senior Engineers @ Google &amp; Netflix
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
              <span className="flex items-center gap-2">
                <Globe className="material-symbols-outlined text-lg" />
                English
              </span>
              <span className="flex items-center gap-2">
                <Captions className="material-symbols-outlined text-lg" />
                English [Auto], Spanish
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="material-symbols-outlined text-lg" />
                Certificate of Completion
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24 z-20">
              <div className="bg-surface-dark border border-surface-border rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="relative aspect-video w-full bg-black group cursor-pointer">
                  <div
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrpJa1-otvaHGomIM-8hvc24j2DsUNvXSAoxkoH1n_hP7Bx3NOUjlikH0KPO9DOc8WQXh8BgfSGlpgjAF5vbB1AmX9kggcctPWTvQZglKPwlM7ZuPVvV5wGDbNazUCYLiImgHPpHexzt7VW4rp_YwgJ1GAOKzw-LYDmxbmbmiUrsdDLysWAbjVHTkArEiQga3jXyXpaPcHmdJ9LtKDd8GMj3bo8mDxJe6FEh55Wz-7cEXiRbQS3NQMRcVFO30UnbgwjeAyJG7Tf-7y')",
                    }}
                    className="w-full h-full bg-cover bg-center opacity-80"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(43,238,121,0.6)] group-hover:scale-110 transition-transform">
                      <Play className="material-symbols-outlined text-background-dark text-4xl " />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-white font-bold shadow-black drop-shadow-md">
                      Preview this course
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl font-black text-white">₹89</span>
                    <span className="text-lg text-gray-500 line-through mb-1">
                      ₹499
                    </span>
                    <span className="text-primary text-sm font-bold mb-1 ml-auto">
                      82% OFF
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-6 flex items-center gap-1">
                    <Clock className="material-symbols-outlined text-sm" />
                    Offer ends in 5 hours
                  </p>
                  <button className="w-full h-12 rounded-full bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(43,238,121,0.3)] mb-3 flex items-center justify-center gap-2">
                    Enroll Now
                  </button>
                  <button className="w-full h-12 rounded-full bg-transparent border border-surface-border text-white font-bold hover:bg-surface-border transition-colors mb-6">
                    Start Free Trial Module
                  </button>
                  <div className="flex flex-col gap-3 text-sm text-gray-300 border-t border-white/5 pt-6 mb-6">
                    <h4 className="font-bold text-white mb-2">
                      This course includes:
                    </h4>
                    <div className="flex items-center gap-3">
                      <Video className="material-symbols-outlined text-primary text-lg" />

                      <span>54 hours on-demand video</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Text className="material-symbols-outlined text-primary text-lg" />

                      <span>12 articles &amp; 45 resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code2 className="material-symbols-outlined text-primary text-lg" />

                      <span>35 coding exercises</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="material-symbols-outlined text-primary text-lg" />

                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="material-symbols-outlined text-primary text-lg" />

                      <span>Access on mobile and TV</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400 border-t border-white/5 pt-4">
                    {/* <DownloadSyllabusDialog
    syllabusUrl="/syllabus/full-stack-2026.pdf"
    fileName="Full_Stack_Web_Development_Syllabus_2026.pdf"
    title="Full Stack Web Development Syllabus"
    description="54 hours • 12+ projects • MERN Stack"
    icon={Code2}
    accentColor="emerald"
    buttonVariant="default"
  >
    <Button size="lg" className="gap-3">
      <BookOpen className="w-5 h-5" />
      Download Full Stack Syllabus
    </Button>
  </DownloadSyllabusDialog> */}
                    <span>EMI Starts at ₹15/mo</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl border border-surface-border bg-surface-dark/30 text-center">
                <h4 className="text-white font-bold mb-1">
                  Training 5 or more people?
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  Get your team access to Alocodes's top 2,000+ courses.
                </p>
                {/* <button className="text-primary text-sm font-bold hover:underline">
                  Get Alocodes for Business
                </button> */}
                <ComingSoon name={"Get Alocodes for buisness"} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:order-1 space-y-12">
            <div className="bg-surface-dark/30 border border-surface-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                What you'll learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Build 16 web development projects for your portfolio, ready
                    to apply for junior developer jobs.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Learn the latest technologies, including Javascript ES6+,
                    Bootstrap 5, Tailwind CSS, Node.js and React.js.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Master backend development with Node, Express and MongoDB.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Work as a freelance web developer or apply to tech companies
                    as a Full Stack Developer.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Understand the concepts behind authentication, security, and
                    deployment.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="material-symbols-outlined text-primary shrink-0 mt-0.5" />

                  <span className="text-gray-300 text-sm leading-relaxed">
                    Learn professional developer best practices: Clean Code,
                    Git/Github, and debugging.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Who this course is for
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                <li>
                  Complete beginners who want to learn how to code from scratch.
                </li>
                <li>
                  Students looking to build a portfolio of real-world projects.
                </li>
                <li>Professionals wanting to switch careers into tech.</li>
                <li>
                  Developers who want to upgrade their skills to the MERN stack.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Course Content
              </h2>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>15 sections • 146 lectures • 54h 23m total length</span>
                <button className="text-primary font-bold hover:underline">
                  Expand all sections
                </button>
              </div>
              <div className="space-y-3">
                <details
                  className="group bg-surface-dark border border-surface-border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden"
                  open=""
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-border/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChevronDown className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform" />

                      <span className="font-bold text-white">
                        Introduction to Web Development
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      3 lectures • 15m
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-0 border-t border-surface-border/50 bg-surface-dark/50">
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-center justify-between text-gray-300 text-sm">
                        <div className="flex items-center gap-3">
                          <PlayCircle className="material-symbols-outlined text-base text-gray-500" />

                          <a className="hover:underline" href="#">
                            How does the internet work?
                          </a>
                        </div>
                        <span className="text-gray-500">05:20</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-300 text-sm">
                        <div className="flex items-center gap-3">
                          <PlayCircle className="material-symbols-outlined text-base text-gray-500" />

                          <a className="hover:underline" href="#">
                            Installing VS Code
                          </a>
                        </div>
                        <span className="text-gray-500">04:10</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-300 text-sm">
                        <div className="flex items-center gap-3">
                          <Text className="material-symbols-outlined text-base text-gray-500" />

                          <span>Course Resources &amp; Syllabus PDF</span>
                        </div>
                        <span className="text-primary text-xs font-bold uppercase border border-primary/20 px-2 py-0.5 rounded">
                          Preview
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="group bg-surface-dark border border-surface-border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-border/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChevronDown className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform" />

                      <span className="font-bold text-white">
                        HTML5: The Skeleton of the Web
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      12 lectures • 1h 20m
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-0 border-t border-surface-border/50 bg-surface-dark/50">
                    <div className="p-4 text-gray-400 text-sm">
                      Content hidden in preview mode. Enroll to access full
                      syllabus.
                    </div>
                  </div>
                </details>
                <details className="group bg-surface-dark border border-surface-border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-border/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChevronDown className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform" />

                      <span className="font-bold text-white">
                        CSS3: Styling Your Websites
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      24 lectures • 3h 15m
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-0 border-t border-surface-border/50 bg-surface-dark/50">
                    <div className="p-4 text-gray-400 text-sm">
                      Content hidden in preview mode. Enroll to access full
                      syllabus.
                    </div>
                  </div>
                </details>
                <details className="group bg-surface-dark border border-surface-border rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-border/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChevronDown className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform" />

                      <span className="font-bold text-white">
                        Javascript: The Logic
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      45 lectures • 12h 05m
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-0 border-t border-surface-border/50 bg-surface-dark/50">
                    <div className="p-4 text-gray-400 text-sm">
                      Content hidden in preview mode. Enroll to access full
                      syllabus.
                    </div>
                  </div>
                </details>
              </div>
              <div className="mt-6">
                <button className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                  <Download className="material-symbols-outlined" />
                  Download Full Syllabus PDF
                </button>
              </div>
            </div>
            <div id="instructors">
              <h2 className="text-2xl font-bold text-white mb-6">
                Instructors
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-surface-dark/50 border border-surface-border">
                  <div className="shrink-0">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8fvmWQLG-Vd4GakU7E3qEHaC8l9OPqxz6b0GP4ACdCyooM8M5pGkcN8qO79WJtj5V6LLW_TcmaQMAam9vvSZAfG_IFgXz9WwfipMfiwDQ0gChIEzkxIO35gi4m4DNEcIJ4oasNfr0raW7x0uM2Pek0WlGAd9lN9iSroo6kApmlQPIKZrN7F4dYSKIz81R0qbgtfEt6FM4evIPfSSjU0W8VRUTbYB6bv6lOW80T81d8ddxESfffclUoA0PcGkmXGNxwmqizcHclrce')",
                      }}
                      className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-surface-border"
                    ></div>
                    <div className="flex justify-center gap-2 mt-3">
                      <a className="text-gray-400 hover:text-white" href="#">
                        <Globe className="material-symbols-outlined text-lg" />
                      </a>
                      <a className="text-gray-400 hover:text-white" href="#">
                        <Mail className="material-symbols-outlined text-lg" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Alex Dev</h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      Senior Software Engineer at Google
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          group
                        </span>
                        120k+ Students
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="material-symbols-outlined text-sm" />{" "}
                        4.8 Rating
                      </span>
                      <span className="flex items-center gap-1">
                        <PlayCircle className="material-symbols-outlined text-sm" />
                        12 Courses
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Alex is a full-stack developer with 10+ years of
                      experience. He has architected scalable systems for major
                      tech giants and loves teaching complex concepts in simple
                      terms. He specializes in React, Node, and Cloud
                      Architecture.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-surface-dark/50 border border-surface-border">
                  <div className="shrink-0">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGMT5Kw-ALUqeFU2Q8JpiDAsUtMpfkcyzOCsRbPp5HIEl4oggOpSv3LS0cKFGn-W3Yaro2CA3LujLImAmyglXoMYthxjECjlMywQAGJOj2O-9ulg0PKhYbb0sdwBXZC_uxzcZYN260vbvQgPGJZF0tiZGpTb1jjzgO4-jktiTKuaUFcRjKHMeAtvK13jypxiyYOyP6TIOrxkszACfsEX38BOMyyyrcSRd8Vdgcyf5yVZF7MNFJsz3nQTdO7ZbXenD0RifPtu3eMaFy')",
                      }}
                      className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-surface-border"
                    ></div>
                    <div className="flex justify-center gap-2 mt-3">
                      <a className="text-gray-400 hover:text-white" href="#">
                        <span className="material-symbols-outlined text-lg">
                          language
                        </span>
                      </a>
                      <a className="text-gray-400 hover:text-white" href="#">
                        <span className="material-symbols-outlined text-lg">
                          mail
                        </span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sarah Code</h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      Lead Developer at Netflix
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          group
                        </span>
                        85k+ Students
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          star
                        </span>{" "}
                        4.9 Rating
                      </span>
                      <span className="flex items-center gap-1">
                        <PlayCircle className="material-symbols-outlined text-sm" />
                        8 Courses
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Sarah is a frontend wizard passionate about UI/UX. She has
                      led teams that built award-winning interfaces. Her
                      teaching style focuses on visual learning and practical
                      application of modern CSS and Javascript frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Student Feedback
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-surface-dark border border-surface-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5hcOMcjPi4GDKmhMTU7LdddFJxzNwZq1E3Un6a3MLaf1RJ_6lDXVSvwkPgZm60OWoyYuspFHF-lHbpQSRZ20FEFofq3GozeAFk1eXjtL9pmZUEQPwp1xlhDdpSnKvUQOV5biWNaG_rk-KzFEVdu-bT6EnqxFLBSfyISuQyQ-Z9uzoFVtY-m0FmmghCTkV9NXAHLJZa9hLT8cMOTHMTExdWSUCrpJZk9sc1LDni7R0wWIRT9TR42t6BPzUBNq5OuP6U2QlflAjyD-B')",
                        }}
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                      ></div>
                      <div>
                        <h4 className="text-white text-sm font-bold">
                          Michael T.
                        </h4>
                        <span className="text-gray-500 text-xs">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-xs">
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "This course changed my life. I went from knowing nothing
                    about coding to landing my first junior developer job in 6
                    months. The projects are amazing and the instructors explain
                    everything so clearly."
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-dark border border-surface-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMNU276fwgOHA8fpPLKQfqN-dSluA48ClP-rM7w3XgSrHs3Ht59qjhERzBoD_VbfR4Msbt1mI8rPlT5TMKhy56RE8t8E__MCgq7eoJqSA96YctGxmQLtrQKaKwi0OjzQRDP9ZxpN0OvpmIaN26sApnyXjzCb4oA-WBvllhcxcsB2FCyyawx7f55rqwi1AIAu9rA2I5vZJ7jtCmtLnHFrFdJ4_Cp0GJMj00F2Ppw6cPgucO2Q1v1dpiEFDADWKaCmfkC5lXJCKJFY0x')",
                        }}
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                      ></div>
                      <div>
                        <h4 className="text-white text-sm font-bold">
                          Jessica K.
                        </h4>
                        <span className="text-gray-500 text-xs">
                          1 month ago
                        </span>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-xs">
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <Star className="material-symbols-outlined text-base fill-1" />
                      <StarHalf className="material-symbols-outlined text-base fill-1" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Excellent content on React and Node. The backend section is
                    particularly strong. I wish there were a few more exercises
                    on database optimization, but overall a fantastic value for
                    money."
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-2 rounded-full border border-surface-border text-white hover:bg-surface-dark transition-colors text-sm font-bold">
                  Load more reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 bg-surface-dark/30 border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            More Courses Like This
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-surface-dark rounded-4xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent z-10"></div>
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBziaKBfMw3TfGlU0h1EZ1gn1mu8pMFnOgwIUCEaFsNhVrpwnYytL9DxOciXzsN8ABhBWhhs6q-33URPCZ2qDAeEpnoC7QyOzQ7M2huDxdSWKfcSJuU-_wctbBWiHyGCnkB_8QI4fVMD_8M2n6NAJcy5X3dwkNN1ACfeagW_lYjS-A85w6A02AUh6LXK5-DrdaPQJPXxVPU-omNMKCzFMxTnik3Tjz57kpqaqYn81LsBv0YTEZci1geke3_r0m9JK-8iH0UB1RYKz0e')",
                  }}
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                ></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Data Science &amp; AI
                </h3>
                <div className="flex items-center gap-2 mb-4 text-yellow-400 text-xs font-bold">
                  <span>4.7</span>
                  <div className="flex">
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                  </div>
                  <span className="text-gray-500 font-normal">(1.2k)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-white font-bold">₹99</span>
                  <a
                    className="text-gray-400 hover:text-white font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    href="#"
                  >
                    View{" "}
                    <ChevronRight className="material-symbols-outlined text-base" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-surface-dark rounded-4xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent z-10"></div>
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbyeeYviUTRIwMJeHR5Kar9vbvr2TVM8CIZjFNfCs5MTqpDFM2zfdLWNLXmo1vTlZrthdxS70wd54MGhBVj1Mj6ZTZrNYLSvtVMdDV2vzHd8j8L3m7I6tgzFRZhW-4RLh0nt_6vTDqfD1s6LwSX837hBEurtR2FWIgUtzjqapUT1Jnhz0vEpUOv05AlvoFeh3t4XzOpAoVk2hC2acX7MJ8eN5muM_sEZu0JJ943avfeTbnpJDEijOg7XC1Ml0G4KtOhQAKdzdxBly3')",
                  }}
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                ></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Web 3.0 &amp; Blockchain
                </h3>
                <div className="flex items-center gap-2 mb-4 text-yellow-400 text-xs font-bold">
                  <span>4.9</span>
                  <div className="flex">
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                    <Star className="material-symbols-outlined text-xs fill-1" />
                  </div>
                  <span className="text-gray-500 font-normal">(850)</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-white font-bold">₹129</span>
                  <a
                    className="text-gray-400 hover:text-white font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    href="#"
                  >
                    View{" "}
                    <ChevronRight className="material-symbols-outlined text-base" />
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-surface-dark rounded-4xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-full items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-surface-border flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <Grid className="material-symbols-outlined text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                View All Courses
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Explore our library of 500+ courses across various domains.
              </p>
              <button className="text-primary font-bold hover:underline">
                Browse Library
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
