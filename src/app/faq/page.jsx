"use client"
import React, { useState } from "react";
import faq from "@/lib/faq";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-foreground font-display overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-muted-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
            Transparent Data
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-foreground mb-4 sm:mb-5">
            Your Questions Answered &{" "}
            <span className="relative inline-block">
              <span className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] h-[1.1em] bg-primary rounded-full -z-0" />
              <span className="relative z-10 text-primary-foreground">
                Our Track Record
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed mt-4 sm:mt-0">
            Everything you need to know before making your decision — honest
            numbers, real outcomes, and answers to what you're thinking.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="pb-16 sm:pb-20 md:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* FAQ Label */}
        <div className="text-center mb-2 sm:mb-3">
          <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
            FAQ
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-foreground mb-7 sm:mb-10">
          Frequently Asked Questions
        </h2>

        {/* Accordion Items */}
        <div className="space-y-2 sm:space-y-3">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border transition-all duration-300"
              style={{
                borderRadius: openIndex === index ? "1.25rem" : "9999px",
              }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 text-left gap-3"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold text-foreground leading-snug">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-base sm:text-lg transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                  {Array.isArray(item.answer) ? (
                    <ul className="space-y-2">
                      {item.answer.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base"
                        >
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
