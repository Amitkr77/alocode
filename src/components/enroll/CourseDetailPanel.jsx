import React from "react";
import {
  Star,
  Globe,
  Clock,
  BookOpen,
  BadgeCheck,
  Captions,
  CheckCircle,
} from "lucide-react";
import { MetaPill } from "./ui/MetaPill";
import { EmiAccordion } from "./ui/EmiAccordion";

export function CourseDetailPanel({ course }) {
  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center px-6 py-8 rounded-3xl">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{
            background: "rgba(66,214,116,0.10)",
            border: "1px solid rgba(66,214,116,0.25)",
          }}
        >
          <BookOpen size={22} style={{ color: "var(--primary)" }} />
        </div>
        <p className="font-black text-base text-foreground mb-1">
          No course selected yet
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Choose a course from the dropdown on the right to see full details
          here.
        </p>
      </div>
    );
  }

  const pricing = course.pricing;
  const fullPrice = pricing?.fullPrice ?? 0;
  const emiAvailable = pricing?.emi?.available ?? false;

  return (
    <div>
      {/* Header */}
      <div
        className="px-6 pt-1 pb-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {course.badge?.text && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border"
              style={{
                background: "rgba(66,214,116,0.10)",
                color: "var(--primary)",
                borderColor: "rgba(66,214,116,0.25)",
              }}
            >
              {course.badge.text}
            </span>
          )}
          {course.badge?.rating && (
            <span
              className="flex items-center gap-1 text-sm font-bold"
              style={{ color: "var(--primary)" }}
            >
              <Star
                size={13}
                style={{ fill: "var(--primary)", color: "var(--primary)" }}
              />
              {course.badge.rating}
              <span className="font-medium ml-0.5 text-muted-foreground text-xs">
                ({course.badge.totalRatings})
              </span>
            </span>
          )}
          {course.badge?.lastUpdated && (
            <span
              className="text-sm font-medium text-muted-foreground pl-2"
              style={{ borderLeft: "1px solid var(--border)" }}
            >
              Last updated {course.badge.lastUpdated}
            </span>
          )}
        </div>

        <h2
          className="text-4xl font-black leading-tight tracking-tight text-foreground mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {course.title}
        </h2>

        {course.description && (
          <p className="text-md font-medium leading-relaxed text-muted-foreground mb-4">
            {course.description}
          </p>
        )}

        {course.instructors && (
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-2.5">
              {course.instructors.map((ins) => (
                <div
                  key={ins.name}
                  className="w-9 h-9 rounded-full border-2 overflow-hidden shrink-0"
                  style={{ borderColor: "var(--card)" }}
                >
                  {ins.avatar ? (
                    <img
                      src={ins.avatar}
                      alt={ins.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Created by{" "}
                {course.instructors.map((ins, idx) => (
                  <React.Fragment key={ins.name}>
                    <span style={{ color: "var(--primary)" }}>{ins.name}</span>
                    {idx < course.instructors.length - 1 && " & "}
                  </React.Fragment>
                ))}
              </p>
              <p className="text-[12px] mt-0.5 text-muted-foreground">
                {course.instructors.map((i) => i.role).join(" • ")}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {course.language?.audio && (
            <MetaPill icon={Globe}>{course.language.audio}</MetaPill>
          )}
          {course.language?.captions && (
            <MetaPill icon={Captions}>
              {course.language.captions.join(", ")}
            </MetaPill>
          )}
          <MetaPill icon={BadgeCheck}>Certificate</MetaPill>
          {course.level && <MetaPill icon={BookOpen}>{course.level}</MetaPill>}
          {course.duration && (
            <MetaPill icon={Clock}>{course.duration}</MetaPill>
          )}
        </div>
      </div>

      {/* Pricing */}
      {pricing && (
        <div className="px-6 py-5">
          <div className="flex items-end gap-2 mb-1">
            <span
              className="text-3xl font-black text-foreground"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              ₹{fullPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-muted-foreground mb-1">
              full course
            </span>
          </div>

          {emiAvailable && <EmiAccordion emi={pricing.emi} />}

          <div
            className="space-y-2 pt-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              This course includes
            </p>
            {[
              course.curriculumSummary?.totalDuration &&
                `${course.curriculumSummary.totalDuration} of content`,
              course.curriculumSummary?.totalModules &&
                `${course.curriculumSummary.totalModules} modules`,
              course.sampleProjects?.length &&
                `${course.sampleProjects.length} hands-on projects`,
              "Certificate of completion",
            ]
              .filter(Boolean)
              .map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle
                    size={13}
                    style={{ color: "var(--primary)", flexShrink: 0 }}
                  />
                  {item}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
