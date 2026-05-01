import React from "react";
import {
  CheckCircle2,
  TvMinimalPlay,
  X,
  RadioTower,
  MessageSquareDot,
  ScreenShare,
  Briefcase,
  Trophy,
  Users,
  ArrowRight,
  Download,
} from "lucide-react";
import { FaGithub, FaSlack, FaFigma } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoZoom } from "react-icons/bi";

export default function page() {
  return (
    <div className="bg-white text-[#1C1830] font-display overflow-x-hidden antialiased">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        {/* Purple blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7C5CFC]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-10">
          <div className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center rounded-3xl items-center justify-center p-6 md:p-16 overflow-hidden border border-[#e4e0f5]">
            {/* BG image with overlay */}
            <div
              className="absolute inset-0 rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwhyhpzQBn9x-N3le_R5a8adsdK55yB4gDe6VJjJlDOVe4OAHer0A7XsfiV8W00nKzP1VD0Z8PIjG5K0pkxDeiug4yyoC-KHPvZiO4ttNzjBZ7Qy0Hmhy1TYclavG1m0gAYt2MFXblUMuiq607e_Q__Jkk481Qf_UnUk7EHHkLxOYZlx1OehR9oKrDteVAGqT3MY8o9mjATefJBGILFVycG5iC5EwH9EIDC0HMfjYLnDbVQNbYJsazWHerPUUnZOA28KfzI-B5bOc4")`,
              }}
            />
            <div className="absolute inset-0 rounded-3xl bg-[#1C1830]/72" />
            {/* Purple glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#7C5CFC]/25 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4 text-center items-center">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-white text-xs font-bold uppercase tracking-widest mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C5CFC] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C5CFC]" />
                </span>
                Live Now
              </div>

              <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                Stop Watching.
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1.5rem)] h-[1.1em] bg-[#7C5CFC] rounded-full -z-0" />
                  <span className="relative z-10">Start Coding Live.</span>
                </span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-3">
                100% Live Interactive Classes. Experience real-time feedback,
                instant doubt resolution, and accountability that videos can't
                match.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-2">
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-13 px-8 bg-[#7C5CFC] text-white text-sm font-bold hover:bg-[#6643f5] transition-colors shadow-lg shadow-[#7C5CFC]/30">
                Book Free Demo
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-13 px-8 bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Live? Comparison ── */}
      <section className="py-24 max-w-[960px] mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-3">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C1830] leading-tight">
            Why Choose Live Training?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Static Videos — bad */}
          <div className="flex flex-col p-8 rounded-3xl border border-red-100 bg-red-50/60">
            <div className="flex items-center gap-3 mb-6 text-red-400">
              <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center">
                <TvMinimalPlay className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1C1830]">
                Static Video Courses
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Passive learning, low retention",
                "Doubts resolved in 24-48 hours",
                "No accountability to finish",
                "Outdated content & libraries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-[#4a4470] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alocodes Live — good */}
          <div className="flex flex-col p-8 rounded-3xl border border-[#7C5CFC]/30 bg-[#F8F7FF] shadow-lg shadow-[#7C5CFC]/8 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <CheckCircle2 className="text-[#7C5CFC]/10 w-16 h-16" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 flex items-center justify-center text-[#7C5CFC]">
                <RadioTower className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-[#1C1830]">
                Alocodes Live
              </h3>
            </div>
            <ul className="flex flex-col gap-4 relative z-10">
              {[
                "Active coding with mentors",
                "Instant doubt resolution",
                "Real-time accountability",
                "Latest industry stack",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#7C5CFC]" />
                  </div>
                  <span className="text-[#1C1830] font-medium text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-24 bg-[#F8F7FF] border-y border-[#e4e0f5]">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="mb-12">
            <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-3">
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1C1830] leading-tight mb-3">
              Live Training Features
            </h2>
            <p className="text-[#4a4470] text-base max-w-2xl leading-relaxed">
              Everything you need to go from beginner to job-ready developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: MessageSquareDot,
                title: "Real-time Q&A",
                desc: "Don't get stuck. Ask questions via voice or chat and get answers immediately while you code.",
              },
              {
                icon: ScreenShare,
                title: "Hands-on Guidance",
                desc: "Stuck on a bug? Share your screen and let the mentor debug with you live.",
              },
              {
                icon: Briefcase,
                title: "Internship Projects",
                desc: 'Build real-world projects that mimic actual company workflows, not just "todo apps".',
              },
              {
                icon: Trophy,
                title: "Weekly Challenges",
                desc: "Compete with your batchmates in weekly hackathons to test your speed and logic.",
              },
              {
                icon: Trophy,
                title: "Code Reviews",
                desc: "Get your code reviewed by senior developers to learn best practices and clean coding.",
              },
              {
                icon: Users,
                title: "Peer Programming",
                desc: "Pair up with batchmates to solve complex problems, simulating a real job environment.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group flex flex-col gap-4 rounded-3xl border border-[#e4e0f5] bg-white p-6 hover:border-[#7C5CFC]/40 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 flex items-center justify-center text-[#7C5CFC] group-hover:bg-[#7C5CFC]/20 transition-colors">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1830] text-base font-black mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[#8a82b8] text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-16 border-b border-[#e4e0f5]">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-3">
            Your Toolkit
          </p>
          <h2 className="text-2xl font-black text-[#1C1830] mb-10">
            Master Industry Standard Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { Icon: VscVscodeInsiders, label: "VS Code", color: "#007ACC" },
              { Icon: FaGithub, label: "GitHub", color: "#1C1830" },
              { Icon: FaSlack, label: "Slack", color: "#4A154B" },
              { Icon: BiLogoZoom, label: "Zoom", color: "#2D8CFF" },
              { Icon: FaFigma, label: "Figma", color: "#F24E1E" },
            ].map(({ Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 group cursor-default opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <Icon
                  className="text-4xl text-[#a090cc] transition-colors duration-300"
                  style={{ "--hover-color": color }}
                />
                <span className="font-black text-lg text-[#a090cc] group-hover:text-[#1C1830] transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule & Waitlist ── */}
      <section
        className="py-24 max-w-[960px] mx-auto px-4 md:px-10"
        id="schedule"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Upcoming batches */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-3">
                Batches
              </p>
              <h2 className="text-3xl font-black text-[#1C1830]">
                Upcoming Batches
              </h2>
              <p className="text-[#8a82b8] text-sm mt-1">
                Secure your spot in our next live cohort.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {/* Batch 1 */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#F8F7FF] border border-[#e4e0f5] hover:border-[#7C5CFC]/30 transition-colors">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#7C5CFC] font-bold text-xs uppercase tracking-wide">
                    Full Stack Web Dev
                  </span>
                  <span className="text-[#1C1830] font-black text-base">
                    Starts Oct 15th
                  </span>
                  <span className="text-[#8a82b8] text-xs">
                    Mon–Fri, 7:00 PM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold border border-red-100">
                  Few Seats Left
                </span>
              </div>

              {/* Batch 2 */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#F8F7FF] border border-[#7C5CFC]/30 hover:border-[#7C5CFC]/50 transition-colors">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#7C5CFC] font-bold text-xs uppercase tracking-wide">
                    Backend Masterclass
                  </span>
                  <span className="text-[#1C1830] font-black text-base">
                    Starts Nov 1st
                  </span>
                  <span className="text-[#8a82b8] text-xs">
                    Sat–Sun, 10:00 AM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/10 text-[#7C5CFC] text-xs font-bold border border-[#7C5CFC]/20">
                  Open
                </span>
              </div>

              {/* Batch 3 */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#F8F7FF] border border-[#e4e0f5] opacity-50">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#8a82b8] font-bold text-xs uppercase tracking-wide">
                    Data Structures
                  </span>
                  <span className="text-[#1C1830] font-black text-base">
                    Starts Nov 15th
                  </span>
                  <span className="text-[#8a82b8] text-xs">
                    Mon–Fri, 6:00 PM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F8F7FF] text-[#8a82b8] text-xs font-bold border border-[#e4e0f5]">
                  Filling Fast
                </span>
              </div>
            </div>
          </div>

          {/* Waitlist form */}
          <div className="flex-1">
            <div className="rounded-3xl bg-white border border-[#e4e0f5] p-8 shadow-xl shadow-[#7C5CFC]/8">
              <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-1">
                Stay Updated
              </p>
              <h3 className="text-[#1C1830] text-2xl font-black mb-2">
                Join Waitlist
              </h3>
              <p className="text-[#8a82b8] mb-6 text-sm leading-relaxed">
                Get notified 24 hours before enrollment opens for new batches.
              </p>

              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#4a4470]"
                    htmlFor="wl-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="h-11 w-full rounded-xl border border-[#e4e0f5] bg-[#F8F7FF] px-4 text-[#1C1830] text-sm placeholder-[#a090cc] focus:border-[#7C5CFC] focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/30 transition-colors"
                    id="wl-name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#4a4470]"
                    htmlFor="wl-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="h-11 w-full rounded-xl border border-[#e4e0f5] bg-[#F8F7FF] px-4 text-[#1C1830] text-sm placeholder-[#a090cc] focus:border-[#7C5CFC] focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/30 transition-colors"
                    id="wl-email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#4a4470]"
                    htmlFor="wl-stack"
                  >
                    Preferred Stack
                  </label>
                  <select
                    className="h-11 w-full rounded-xl border border-[#e4e0f5] bg-[#F8F7FF] px-4 text-[#1C1830] text-sm focus:border-[#7C5CFC] focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/30 transition-colors"
                    id="wl-stack"
                  >
                    <option>Full Stack Web Dev (MERN)</option>
                    <option>Backend (Java/Spring)</option>
                    <option>Frontend (React/Next.js)</option>
                    <option>Data Structures & Algo</option>
                  </select>
                </div>
                <button
                  className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#7C5CFC] text-white font-bold text-sm hover:bg-[#6643f5] transition-colors shadow-lg shadow-[#7C5CFC]/25 group"
                  type="button"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#1C1830] rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#7C5CFC] text-xs font-bold uppercase tracking-widest mb-3">
              Limited seats available
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Ready to write code
              <br />
              that actually works?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="h-14 px-8 rounded-full bg-[#7C5CFC] text-white font-bold flex items-center gap-2 hover:bg-[#6643f5] transition-colors shadow-lg shadow-[#7C5CFC]/30">
              Join Free Live Demo Class <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-[#a090cc] mt-5">
          No credit card required. Limited seats available.
        </p>
      </section>
    </div>
  );
}
