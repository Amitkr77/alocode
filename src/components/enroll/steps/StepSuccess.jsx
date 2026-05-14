import React from "react";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import Link from "next/link";

export function StepSuccess({
  name,
  phone,
  email,
  courseTitle,
  paid,
  message,
  onReset,
}) {
  return (
    <div
      className="min-h-screen overflow-x-hidden text-foreground flex items-center justify-center px-4 py-24"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="w-full max-w-lg text-center space-y-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
          style={{ background: "rgba(66,214,116,0.12)" }}
        >
          <CheckCircle size={40} style={{ color: "var(--primary)" }} />
        </div>

        <div>
          <h1
            className="text-3xl font-black text-foreground mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {paid ? "Enrollment Confirmed!" : "Request Received!"}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {paid ? (
              <>
                Thank you, <strong>{name}</strong>! Your enrollment for{" "}
                <strong>{courseTitle}</strong> is confirmed. Access details will
                be sent to <strong>{email}</strong>.
              </>
            ) : (
              <>
                Thank you, <strong>{name}</strong>! Our counselor will call{" "}
                <strong>+91 {phone}</strong> within 24 hours to complete your
                enrollment.
              </>
            )}
          </p>
        </div>

        <div
          className="text-left rounded-2xl border p-5"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <p className="text-xs font-bold text-muted-foreground mb-3 flex items-center gap-1.5">
            <Send size={12} /> Enrollment summary
          </p>
          <pre
            className="text-xs text-muted-foreground whitespace-pre-wrap break-words leading-relaxed"
            style={{ fontFamily: "inherit" }}
          >
            {message}
          </pre>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onReset}
            className="flex-1 h-11 rounded-full text-sm font-semibold border transition-colors hover:bg-card cursor-pointer"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted-foreground)",
            }}
          >
            Submit Another
          </button>
          <Link
            href="/courses"
            className="flex-1 h-11 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-85"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Browse Courses <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
