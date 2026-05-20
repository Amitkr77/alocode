// reference only
import React, { useState } from "react";
import {
  Video,
  Code2,
  Smartphone,
  Award,
  BookOpen,
  CreditCard,
  ChevronDown,
  Tag,
} from "lucide-react";

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
  onEnroll,
}) {
  const [showEmi, setShowEmi] = useState(false);

  const hasDiscount =
    pricing.discount > 0 &&
    pricing.finalPrice &&
    pricing.finalPrice < pricing.fullPrice;

  const savedAmount = pricing.fullPrice - pricing.finalPrice;

  return (
    <div className="p-4">
      {/* Discount badge */}
      {hasDiscount && (
        <div className="mb-3 space-y-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black tracking-wide"
              style={{
                background: "rgba(239,68,68,0.12)",
                color: "#ef4444",
                border: "1px solid rgba(239,68,68,0.25)",
              }}
            >
              <Tag size={10} />
              {pricing.discount}% OFF
            </span>
            <span className="text-xs text-muted-foreground">
              You save ₹{savedAmount.toLocaleString("en-IN")}
            </span>
          </div>
          <p
            className="text-xs font-semibold flex items-center gap-1.5"
            style={{ color: "#f97316" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#f97316" }}
            />
            Limited time offer — grab it before it expires!
          </p>
        </div>
      )}

      {/* Price row */}
      <div className="flex items-end gap-3 mb-4">
        {/* Final / discounted price */}
        <span
          className="text-3xl font-black text-foreground"
          style={{ fontFamily: "'Georgia', serif", lineHeight: 1 }}
        >
          ₹
          {(hasDiscount
            ? pricing.finalPrice
            : pricing.fullPrice
          ).toLocaleString("en-IN")}
        </span>

        {/* Struck-through original price */}
        {hasDiscount && (
          <span
            className="text-base font-medium mb-0.5 line-through"
            style={{ color: "var(--muted-foreground)", opacity: 0.6 }}
          >
            ₹{pricing.fullPrice.toLocaleString("en-IN")}
          </span>
        )}
      </div>

      {/* EMI toggle */}
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
                  <span className="font-bold text-foreground">
                    ₹{amt.toLocaleString("en-IN")}
                  </span>
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
                  ₹
                  {pricing.emi.installments
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Enroll CTA */}
      <button
        onClick={onEnroll}
        className="w-full h-10 rounded-full font-bold mb-4 transition-all cursor-pointer"
        style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
        }}
      >
        Enroll Now
      </button>

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
