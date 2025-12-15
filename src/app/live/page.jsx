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
  Group,
  Users,
  Code2,
  Terminal,
  Tag,
  Video,
Figma ,

} from "lucide-react";

export default function page() {
  return (
    <section className="bg-background-dark font-display text-white overflow-x-hidden antialiased">
      {/* <!-- Hero Section --> */}
      <div className="relative flex flex-col items-center justify-center px-4 md:px-40 py-5 w-full mt-15">
        <div className="w-full max-w-6xl">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 md:p-12 overflow-hidden border border-border-dark group"
                data-alt="Dark abstract background with coding interface elements"
                style={{
                  backgroundImage: `linear-gradient(rgba(16, 34, 23, 0.8) 0%, rgba(16, 34, 23, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwhyhpzQBn9x-N3le_R5a8adsdK55yB4gDe6VJjJlDOVe4OAHer0A7XsfiV8W00nKzP1VD0Z8PIjG5K0pkxDeiug4yyoC-KHPvZiO4ttNzjBZ7Qy0Hmhy1TYclavG1m0gAYt2MFXblUMuiq607e_Q__Jkk481Qf_UnUk7EHHkLxOYZlx1OehR9oKrDteVAGqT3MY8o9mjATefJBGILFVycG5iC5EwH9EIDC0HMfjYLnDbVQNbYJsazWHerPUUnZOA28KfzI-B5bOc4")`,
                }}
              >
                {/* <!-- Glowing accent effect --> */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="relative flex flex-col gap-4 text-center items-center z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Live Now
                  </div>
                  <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                    Stop Watching.
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-primary">
                      Start Coding Live.
                    </span>
                  </h1>
                  <h2 className="text-text-dim text-lg md:text-xl font-normal leading-relaxed max-w-2xl mt-2">
                    100% Live Interactive Classes. Experience real-time
                    feedback, instant doubt resolution, and accountability that
                    videos can't match.
                  </h2>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold tracking-[0.015em] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(43,238,121,0.3)]">
                    <span className="truncate">Book Free Demo</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-surface-dark border border-border-dark text-white text-base font-bold tracking-[0.015em] hover:bg-border-dark transition-colors">
                    <span className="truncate">View Syllabus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Comparison Section: Why Live? --> */}
      <section className="flex flex-col items-center justify-center px-4 md:px-40 py-12 w-full">
        <div className="w-full max-w-[960px] px-4">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-10 text-center">
            Why Choose Live Training?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Static Videos (Bad) --> */}
            <div className="flex flex-col p-8 rounded-lg border border-red-900/30 bg-red-950/10 opacity-70">
              <div className="flex items-center gap-3 mb-6 text-red-400">
                <TvMinimalPlay className="material-symbols-outlined text-4xl" />

                <h3 className="text-xl font-bold">Static Video Courses</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <X className="material-symbols-outlined text-red-500 mt-0.5 shrink-0" />

                  <span className="text-gray-400">
                    Passive learning, low retention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="material-symbols-outlined text-red-500 mt-0.5 shrink-0" />

                  <span className="text-gray-400">
                    Doubts resolved in 24-48 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="material-symbols-outlined text-red-500 mt-0.5 shrink-0" />

                  <span className="text-gray-400">
                    No accountability to finish
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="material-symbols-outlined text-red-500 mt-0.5 shrink-0" />

                  <span className="text-gray-400">
                    Outdated content &amp; libraries
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- Alocodes Live (Good) --> */}
            <div className="flex flex-col p-8 rounded-lg border border-primary/40 bg-surface-dark shadow-[0_0_30px_rgba(43,238,121,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <CheckCircle2
                  className="material-symbols-outlined text-primary/10 leading-none "
                  size={60}
                />
              </div>
              <div className="flex items-center gap-3 mb-6 text-primary relative z-10">
                <RadioTower className="material-symbols-outlined text-4xl" />

                <h3 className="text-xl font-bold">Alocodes Live</h3>
              </div>
              <ul className="flex flex-col gap-4 relative z-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="material-symbols-outlined text-primary mt-0.5 shrink-0" />

                  <span className="text-white font-medium">
                    Active coding with mentors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="material-symbols-outlined text-primary mt-0.5 shrink-0" />

                  <span className="text-white font-medium">
                    Instant doubt resolution
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="material-symbols-outlined text-primary mt-0.5 shrink-0" />

                  <span className="text-white font-medium">
                    Real-time accountability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="material-symbols-outlined text-primary mt-0.5 shrink-0" />

                  <span className="text-white font-medium">
                    Latest industry stack
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Grid --> */}
      <section className="flex flex-col items-center justify-center px-4 md:px-40 py-12 w-full bg-background-dark">
        <div className="w-full max-w-[960px] px-4">
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Live Training Features
            </h2>
            <p className="text-text-dim text-lg max-w-2xl">
              Everything you need to go from beginner to job-ready developer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <!-- Card 1 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <MessageSquareDot className="material-symbols-outlined text-2xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">
                  Real-time Q&amp;A
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Don't get stuck. Ask questions via voice or chat and get
                  answers immediately while you code.
                </p>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <ScreenShare className="material-symbols-outlined text-2xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">
                  Hands-on Guidance
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Stuck on a bug? Share your screen and let the mentor debug
                  with you live.
                </p>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Briefcase className="material-symbols-outlined text-2xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">
                  Internship Projects
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Build real-world projects that mimic actual company workflows,
                  not just "todo apps".
                </p>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Trophy className="material-symbols-outlined text-2xl" />
               
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">
                  Weekly Challenges
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Compete with your batchmates in weekly hackathons to test your
                  speed and logic.
                </p>
              </div>
            </div>
            {/* <!-- Card 5 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Trophy className="material-symbols-outlined text-2xl" />
                  
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">Code Reviews</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Get your code reviewed by senior developers to learn best
                  practices and clean coding.
                </p>
              </div>
            </div>
            {/* <!-- Card 6 --> */}
            <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Users className="material-symbols-outlined text-2xl"/>
                 
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">
                  Peer Programming
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Pair up with batchmates to solve complex problems, simulating
                  a real job environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Tools Section --> */}
      <section className="w-full py-16 bg-surface-dark/30 border-y border-border-dark">
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-2xl font-bold mb-8 text-center">
            Master Industry Standard Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* <!-- Tool 1 --> */}
            <div className="flex items-center gap-2 group cursor-default">
              <Code2 className="material-symbols-outlined text-4xl group-hover:text-[#007ACC] transition-colors"/>
               
              <span className="font-bold text-xl group-hover:text-white transition-colors">
                VS Code
              </span>
            </div>
            {/* <!-- Tool 2 --> */}
            <div className="flex items-center gap-2 group cursor-default">
              <Terminal className="material-symbols-outlined text-4xl group-hover:text-white transition-colors"/>
               
              <span className="font-bold text-xl group-hover:text-white transition-colors">
                GitHub
              </span>
            </div>
            {/* <!-- Tool 3 --> */}
            <div className="flex items-center gap-2 group cursor-default">
              <Tag className="material-symbols-outlined text-4xl group-hover:text-[#4A154B] transition-colors"/>
               
              <span className="font-bold text-xl group-hover:text-white transition-colors">
                Slack
              </span>
            </div>
            {/* <!-- Tool 4 --> */}
            <div className="flex items-center gap-2 group cursor-default">
              <Video className="material-symbols-outlined text-4xl group-hover:text-[#2D8CFF] transition-colors"/>
                
              <span className="font-bold text-xl group-hover:text-white transition-colors">
                Zoom
              </span>
            </div>
            {/* <!-- Tool 5 --> */}
            <div className="flex items-center gap-2 group cursor-default">
              <Figma className="material-symbols-outlined text-4xl group-hover:text-[#F24E1E] transition-colors"/>
                
              <span className="font-bold text-xl group-hover:text-white transition-colors">
                Figma
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Schedule & Waitlist --> */}
      <section
        className="flex flex-col items-center justify-center px-4 md:px-40 py-20 w-full"
        id="schedule"
      >
        <div className="w-full max-w-[960px] flex flex-col lg:flex-row gap-10">
          {/* <!-- Left: Schedule --> */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl font-bold">
                Upcoming Batches
              </h2>
              <p className="text-text-dim">
                Secure your spot in our next live cohort.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {/* <!-- Batch Item --> */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-surface-dark border border-border-dark">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-wide">
                    Full Stack Web Dev
                  </span>
                  <span className="text-white font-bold text-lg">
                    Starts Oct 15th
                  </span>
                  <span className="text-text-dim text-sm">
                    Mon-Fri, 7:00 PM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
                  Few Seats Left
                </span>
              </div>
              {/* <!-- Batch Item --> */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-surface-dark border border-border-dark">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-wide">
                    Backend Masterclass
                  </span>
                  <span className="text-white font-bold text-lg">
                    Starts Nov 1st
                  </span>
                  <span className="text-text-dim text-sm">
                    Sat-Sun, 10:00 AM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  Open
                </span>
              </div>
              {/* <!-- Batch Item --> */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-surface-dark border border-border-dark opacity-60">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 font-bold text-sm uppercase tracking-wide">
                    Data Structures
                  </span>
                  <span className="text-gray-300 font-bold text-lg">
                    Starts Nov 15th
                  </span>
                  <span className="text-gray-500 text-sm">
                    Mon-Fri, 6:00 PM EST
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-700/30 text-gray-400 text-xs font-bold border border-gray-600/20">
                  Filling Fast
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Right: Waitlist Form --> */}
          <div className="flex-1">
            <div className="rounded-2xl bg-surface-dark border border-border-dark p-8 shadow-xl">
              <h3 className="text-white text-2xl font-bold mb-2">
                Join Waitlist
              </h3>
              <p className="text-text-dim mb-6 text-sm">
                Get notified 24 hours before enrollment opens for new batches.
              </p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="h-12 w-full rounded-lg border border-border-dark bg-background-dark px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="h-12 w-full rounded-lg border border-border-dark bg-background-dark px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="stack"
                  >
                    Preferred Stack
                  </label>
                  <select
                    className="h-12 w-full rounded-lg border border-border-dark bg-background-dark px-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="stack"
                  >
                    <option>Full Stack Web Dev (MERN)</option>
                    <option>Backend (Java/Spring)</option>
                    <option>Frontend (React/Next.js)</option>
                    <option>Data Structures &amp; Algo</option>
                  </select>
                </div>
                <button
                  className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-primary text-background-dark font-bold hover:bg-white transition-colors"
                  type="button"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Final CTA --> */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-6">
          Ready to write code that works?
        </h2>
        <button className="inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold tracking-[0.015em] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(43,238,121,0.4)]">
          <span className="truncate">Join Free Live Demo Class</span>
        </button>
        <p className="mt-4 text-text-dim text-sm">
          No credit card required. Limited seats available.
        </p>
      </section>
    </section>
  );
}
