"use client";

import React from "react";
import Link from "next/link";
import { Clock, Star } from "lucide-react";

export default function CourseCard({
  course,
  showPricing = true,
  showMode = true,
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        boxShadow:
          "0 2px 8px rgba(15,45,26,0.06), 0 4px 24px rgba(15,45,26,0.08)",
        textDecoration: "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(15,45,26,0.12), 0 16px 48px rgba(15,45,26,0.14)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 2px 8px rgba(15,45,26,0.06), 0 4px 24px rgba(15,45,26,0.08)";
      }}
    >
      {/* ── Thumbnail ── */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "16/10",
          background: "var(--card)",
          boxShadow: "inset 0 -4px 12px rgba(15,45,26,0.08)",
        }}
      >
        {course.videoThumbnail ? (
          <img
            src={course.videoThumbnail}
            alt={course.title}
            className="border-x-fuchsia-50 border-y-fuchsia-50 border-1 rounded-md w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "var(--card)" }}
          >
            <span
              style={{ color: "var(--muted-foreground)", fontSize: "13px" }}
            >
              No preview
            </span>
          </div>
        )}

        {/* Badge */}
        {course.badge && (
          <div className="absolute top-3 left-4">
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "3px 8px",
                borderRadius: "15px",
                boxShadow: "0 2px 8px rgba(15,45,26,0.20)",
              }}
            >
              {course.badge.text}
            </span>
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div
        className="flex flex-col flex-1"
        style={{ padding: "16px 18px 18px" }}
      >
        {/* Title */}
        <h3
          className="font-bold leading-snug line-clamp-2 mb-2"
          style={{
            fontSize: "16px",
            color: "var(--foreground)",
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          {course.title}
        </h3>

        {/* Price + Duration row */}
        <div
          className="flex items-center gap-3 mb-3"
          style={{ fontSize: "14px" }}
        >
          {showPricing && (
            <span
              style={{
                fontWeight: 700,
                color: "var(--foreground)",
                fontSize: "15px",
              }}
            >
              {typeof course.pricing === "object"
                ? `₹${course.pricing.fullPrice}`
                : (course.pricing?.fullPrice ?? "Free")}
            </span>
          )}
          <span
            className="flex items-center gap-1"
            style={{ color: "var(--muted-foreground)", fontWeight: 500 }}
          >
            <Clock style={{ width: "13px", height: "13px", flexShrink: 0 }} />
            {course.duration}
          </span>
        </div>

        {/* Description */}
        <p
          className="line-clamp-2 flex-1"
          style={{
            fontSize: "13px",
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
            marginBottom: "16px",
          }}
        >
          {course.description}
        </p>

        {/* ── Footer: avatars + rating ── */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Avatar stack */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-full border-2 flex items-center justify-center"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderColor: "var(--background)",
                    background: `hsl(${130 + i * 40}, 45%, ${55 + i * 5}%)`,
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#fff",
                    boxShadow: "0 1px 4px rgba(15,45,26,0.18)",
                  }}
                >
                  {["J", "A", "R"][i]}
                </div>
              ))}
            </div>
            <span
              style={{ fontSize: "12px", color: "var(--muted-foreground)" }}
            >
              {course.reviewCount ?? "0"}+
            </span>
          </div>

          {/* Stars + rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: "13px",
                    height: "13px",
                    fill:
                      i < Math.floor(course.rating ?? 0)
                        ? "#f59e0b"
                        : "transparent",
                    color:
                      i < Math.floor(course.rating ?? 0)
                        ? "#f59e0b"
                        : "var(--border)",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {course.rating ?? "N/A"}/5
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
