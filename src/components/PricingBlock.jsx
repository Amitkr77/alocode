"use client";
import React, { useState } from "react";
import {
  Video,
  Code2,
  Infinity,
  Smartphone,
  Award,
  BookOpen,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

function Item({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

export default function PricingBlock({
  pricing,
  curriculumSummary,
  sampleProjects,
}) {
  const [showEmi, setShowEmi] = useState(false);

  return (
    <div className="p-4">
      {/* Full price */}
      <div className="flex items-end gap-2 mb-1">
        <span
          className="text-3xl font-black text-foreground"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          ₹{pricing.fullPrice}
        </span>
        <span className="text-sm font-medium mb-1 text-muted-foreground">
          full course
        </span>
      </div>

      {/* EMI toggle button */}
      {pricing.emi?.available && (
        <div className="mb-4">
          <button
            onClick={() => setShowEmi((v) => !v)}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{
              background: showEmi
                ? "rgba(66,214,116,0.12)"
                : "rgba(66,214,116,0.07)",
              border: `1px solid ${showEmi ? "rgba(66,214,116,0.35)" : "rgba(66,214,116,0.18)"}`,
              color: "var(--primary)",
            }}
          >
            <CreditCard size={13} style={{ flexShrink: 0 }} />
            <span>Pay in installments (EMI)</span>
            <ChevronDown
              size={13}
              className="ml-auto transition-transform duration-200"
              style={{ transform: showEmi ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* EMI breakdown — shown on toggle */}
          {showEmi && (
            <div
              className="mt-2 rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(66,214,116,0.18)" }}
            >
              {pricing.emi.installments.map((amt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2.5 text-sm"
                  style={{
                    background:
                      i % 2 === 0 ? "rgba(66,214,116,0.04)" : "transparent",
                    borderBottom:
                      i < pricing.emi.installments.length - 1
                        ? "1px solid rgba(66,214,116,0.10)"
                        : "none",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                      style={{
                        background: "rgba(66,214,116,0.15)",
                        color: "var(--primary)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">
                      Month {i + 1}
                      {i === 0 && (
                        <span
                          className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                          style={{
                            background: "rgba(66,214,116,0.12)",
                            color: "var(--primary)",
                          }}
                        >
                          Due now
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="font-bold text-foreground">₹{amt}</span>
                </div>
              ))}

              {/* Total */}
              <div
                className="flex items-center justify-between px-3 py-2 text-xs"
                style={{
                  borderTop: "1px solid rgba(66,214,116,0.18)",
                  background: "rgba(66,214,116,0.06)",
                }}
              >
                <span className="text-muted-foreground font-medium">Total</span>
                <span className="font-black text-foreground">
                  ₹{pricing.emi.installments.reduce((a, b) => a + b, 0)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <Link href="/enroll">
        <button
          className="w-full h-10 rounded-full font-bold mb-2 transition-all cursor-pointer"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
          }}
        >
          Enroll Now
        </button>
      </Link>

      {/* Course includes */}
      <div
        className="space-y-3 pt-3"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <h4 className="font-bold text-sm text-foreground">
          This course includes:
        </h4>
        <Item
          icon={Video}
          text={curriculumSummary?.totalDuration || "On-demand video"}
        />
        {curriculumSummary?.totalModules && (
          <Item
            icon={BookOpen}
            text={`${curriculumSummary.totalModules} modules`}
          />
        )}
        <Item
          icon={Code2}
          text={`${sampleProjects?.length || 5} hands-on projects`}
        />
        <Item icon={Award} text="Certificate of completion" />
      </div>
    </div>
  );
}
