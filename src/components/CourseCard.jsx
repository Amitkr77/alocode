"use client";

import React from "react";
import Link from "next/link";
import { Play, Star, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CourseCard({
  course,
  showPricing = true,
  showMode = true,
}) {
  return (
    <div
      className="group rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 8px rgba(15,45,26,0.04)",
      }}
    >
      <Link href={`/courses/${course.slug}`} className="flex flex-col flex-1">
        {/* ── Thumbnail ── */}
        {course.videoThumbnail && (
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{ background: "var(--card)" }}
          >
            <img
              src={course.videoThumbnail}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,31,19,0.45), transparent)",
              }}
            />
            {/* Badge */}
            {course.badge && (
              <div className="absolute top-2 left-2">
                <Badge
                  className={`text-[9px] font-bold uppercase ${course.badge.color ?? ""}`}
                  style={
                    !course.badge.color
                      ? {
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }
                      : undefined
                  }
                >
                  {course.badge.text}
                </Badge>
              </div>
            )}
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(240,250,240,0.92)",
                  boxShadow: "0 4px 16px rgba(15,45,26,0.20)",
                }}
              >
                <Play
                  className="size-4 ml-0.5"
                  style={{ fill: "var(--primary)", color: "var(--primary)" }}
                />
              </div>
            </div>
            {/* Video title */}
            {course.videoTitle && (
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs text-white font-medium line-clamp-1">
                  {course.videoTitle}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Body ── */}
        <div className="p-3 flex flex-col flex-1">
          {/* Meta row */}
          <div className="flex items-center justify-between text-xs font-medium mb-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span
              className="px-2 py-0.5 rounded-full"
              style={{
                background: "var(--card)",
                color: "var(--muted-foreground)",
              }}
            >
              {showMode ? course.mode : course.level}
            </span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-3"
                style={{
                  fill:
                    i < Math.floor(course.rating)
                      ? "var(--primary)"
                      : "transparent",
                  color:
                    i < Math.floor(course.rating)
                      ? "var(--primary)"
                      : "var(--border)",
                }}
              />
            ))}
            <span className="text-xs ml-1 text-muted-foreground">
              ({course.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base mb-2 line-clamp-2 leading-snug text-foreground">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm mb-4 line-clamp-2 flex-1 leading-relaxed text-muted-foreground">
            {course.description}
          </p>

          {/* Footer */}
          <div
            className="flex items-center justify-between pt-2"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span
              className="text-sm font-bold flex items-center gap-1 group-hover:gap-1.5 transition-all"
              style={{ color: "var(--primary)" }}
            >
              View Course →
            </span>

            {showPricing ? (
              <span
                className="text-sm font-bold"
                style={{ color: "var(--primary)" }}
              >
                {typeof course.pricing === "object"
                  ? `From ₹${course.pricing.fullPrice}`
                  : course.pricing.fullPrice}
              </span>
            ) : (
              course.badge?.rating && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star
                    className="w-4 h-4"
                    style={{ fill: "var(--primary)", color: "var(--primary)" }}
                  />
                  {course.badge.rating}
                </span>
              )
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
