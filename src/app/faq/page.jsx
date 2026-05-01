import { Check, CheckCheck } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="bg-white text-[#1C1830] font-display overflow-x-hidden">
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-block bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 text-[#7C5CFC] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            Transparent Data
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#1C1830] mb-5">
            Your Questions Answered &{" "}
            <span className="relative inline-block">
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1.5rem)] h-[1.1em] bg-[#7C5CFC] rounded-full -z-0" />
              <span className="relative z-10 text-white">Our Track Record</span>
            </span>
          </h1>
          <p className="text-[#4a4470] text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know before making your decision — honest
            numbers, real outcomes, and answers to what you're thinking.
          </p>
        </div>
      </section>
    </div>
  );
}
