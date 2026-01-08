import { BadgeCheck, Building2, Code2, Infinity, Rocket, Terminal, TrendingUp, Users,Database, Cloud, Bot, ChartBarBig  } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="bg-background-dark text-white font-display overflow-x-hidden antialiased">
      {/* <!-- Bento Grid Benefits Section --> */}
      <section class="relative px-4 py-16 sm:px-6 lg:px-8 mt-10">
        <div class="mx-auto max-w-7xl">
          <div class="mb-12 flex flex-col gap-4 md:items-center md:text-center">
            <h2 class="text-3xl font-bold text-white md:text-4xl">
              The Alocode Advantage
            </h2>
            <p class="max-w-2xl text-gray-400">
              Everything you need to go from beginner to hired developer,
              packaged in a flexible, modern learning environment.
            </p>
          </div>
          {/* <!-- Bento Grid --> */}
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
            {/* <!-- Card 1: Expert Trainers (Large) --> */}
            <div class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#234832] bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50 md:col-span-2">
              <div class="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10"></div>
              <div class="flex items-start justify-between">
                <div class="rounded-full bg-[#1e3b2b] p-3 text-primary">
                  {/* <span class="material-symbols-outlined text-3xl">
                    verified_user
                  </span> */}
                  <BadgeCheck size={32} />
                </div>
                <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  FAANG Led
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-2xl font-bold text-white">
                  Industry Expert Trainers
                </h3>
                <p class="mt-2 text-gray-400">
                  Learn directly from senior engineers at Google, Meta, and
                  Amazon. Our curriculum is designed by those who hire, ensuring
                  you learn exactly what the industry demands right now.
                </p>
              </div>
            </div>
            {/* <!-- Card 2: Placement Rate (Stats) --> */}
            <div class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#234832] bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div class="flex items-center justify-between">
                <div class="rounded-full bg-[#1e3b2b] p-3 text-primary">
                  {/* <span class="material-symbols-outlined">trending_up</span> */}
                  <TrendingUp size={32} />
                </div>
              </div>
              <div class="mt-6">
                <div class="flex items-baseline gap-1">
                  <span class="text-5xl font-black text-white group-hover:text-primary transition-colors">
                    90%
                  </span>
                </div>
                <h3 class="mt-2 text-lg font-bold text-white">
                  Placement Rate
                </h3>
                <p class="text-sm text-gray-400">
                  Of our graduates land a role within 6 months.
                </p>
              </div>
            </div>
            {/* <!-- Card 3: Practical Learning --> */}
            <div class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#234832] bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div class="absolute -bottom-4 -right-4 text-surface-dark-highlight opacity-20">
                {/* <span class="material-symbols-outlined text-[10rem]">
                  code_blocks
                </span> */}
                <Code2 size={160} />
              </div>
              <div class="rounded-full bg-[#1e3b2b] w-fit p-3 text-primary">
                {/* <span class="material-symbols-outlined">terminal</span> */}
                <Terminal size={32} />
              </div>
              <div class="mt-6 relative z-10">
                <h3 class="text-xl font-bold text-white">
                  100% Practical Learning
                </h3>
                <p class="mt-2 text-sm text-gray-400">
                  Zero fluff. Build 10+ production-ready projects per course to
                  fill your GitHub portfolio.
                </p>
              </div>
            </div>
            {/* <!-- Card 4: Community --> */}
            <div class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#234832] bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div class="rounded-full bg-[#1e3b2b] w-fit p-3 text-primary">
                {/* <span class="material-symbols-outlined">diversity_3</span> */}
                <Users size={32} />
              </div>
              <div class="mt-6">
                <h3 class="text-xl font-bold text-white">Global Community</h3>
                <p class="mt-2 text-sm text-gray-400">
                  Join 10k+ active learners. 24/7 peer support, hackathons, and
                  lifetime networking.
                </p>
              </div>
            </div>
            {/* <!-- Card 5: Lifetime Access (Wide) --> */}
            <div class="group relative col-span-1 flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-[#234832] bg-surface-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/50 md:col-span-1">
              <div class="flex flex-col h-full justify-between">
                <div class="rounded-full bg-[#1e3b2b] w-fit p-3 text-primary">
                  {/* <span class="material-symbols-outlined">all_inclusive</span> */}
                  <Infinity size={32} />
                </div>
                <div class="mt-6">
                  <h3 class="text-xl font-bold text-white">Lifetime Access</h3>
                  <p class="mt-2 text-sm text-gray-400">
                    Pay once, learn forever. Keep all course updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Social Proof / Interactive Grid --> */}
      <section class="py-20 bg-background-dark border-y border-[#234832]/50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <h2 class="text-2xl font-bold text-white">
              Trusted by learners now building at
            </h2>
            <p class="mt-2 text-primary">
              Hover over icons to see what they say
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* <!-- Tech/Company Item 1 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                rocket_launch
              </span> */}
              <Rocket size={32} class="mt-2 text-gray-500 group-hover:text-primary" />
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                Startups
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "Alocodes helped me build my MVP in 3 weeks!"
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
            {/* <!-- Tech/Company Item 2 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                business
              </span> */}
              <Building2 size={32} class="mt-2 text-gray-500 group-hover:text-primary" />
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                Enterprise
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "Landed a Junior Dev role at a Fortune 500."
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
            {/* <!-- Tech/Company Item 3 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                code
              </span> */}
              <Code2 size={32} class="mt-2 text-gray-500 group-hover:text-primary" />
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                Frontend
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "The React course is simply the best on the market."
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
            {/* <!-- Tech/Company Item 4 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                database
              </span> */}
              <Database size={32} class="mt-2 text-gray-500 group-hover:text-primary" />  
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                Backend
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "Finally understood System Design thanks to this."
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
            {/* <!-- Tech/Company Item 5 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                cloud
              </span> */}
              <Cloud size={32} class="mt-2 text-gray-500 group-hover:text-primary" />
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                Cloud
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "Certified AWS Architect after the bootcamp."
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
            {/* <!-- Tech/Company Item 6 --> */}
            <div class="group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-surface-dark p-6 transition-colors hover:bg-surface-dark-highlight cursor-pointer">
              {/* <span class="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white">
                robot_2
              </span> */}
              <Bot size={32} class="mt-2 text-gray-500 group-hover:text-primary" />
              <span class="mt-2 text-xs font-bold uppercase text-gray-500 group-hover:text-primary">
                AI/ML
              </span>
              {/* <!-- Tooltip --> */}
              <div class="pointer-events-none absolute bottom-full mb-4 w-48 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 z-20">
                <div class="rounded-lg bg-white p-3 text-center shadow-xl">
                  <p class="text-xs font-medium text-gray-900">
                    "Built my first neural network model here."
                  </p>
                  <div class="absolute bottom-0 left-1/2 -mb-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Comparison CTA Section --> */}
      <section class="px-4 py-24 sm:px-6 lg:px-8">
        <div class="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#1e3b2b] to-surface-dark p-10 text-center sm:p-16">
          {/* <!-- Decorative Elements --> */}
          <div class="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div class="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div class="relative z-10 flex flex-col items-center gap-6">
            <h2 class="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Don't just take our word for it.
            </h2>
            <p class="max-w-2xl text-lg text-gray-300">
              See exactly how we compare to university degrees, other bootcamps,
              and self-taught routes in terms of cost, curriculum, and career
              outcomes.
            </p>
            <div class="mt-4">
              <button class="group flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-[#112218] shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-primary/40">
                {/* <span class="material-symbols-outlined">table_chart</span>
                 */}
                 <ChartBarBig size={24} class="text-[#112218] group-hover:text-[#0a1a0f]" />
                See How We Stack Up – Free Guide
              </button>
              <p class="mt-4 text-xs font-medium text-gray-500">
                No email required. Instant access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
