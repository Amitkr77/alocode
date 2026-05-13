"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  Info,
  Mail,
  Phone,
  QrCode,
  Send,
  User,
  Star,
  Globe,
  Clock,
  BookOpen,
  BadgeCheck,
  Captions,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import courses from "@/lib/Courses";

// ─── Config ───────────────────────────────────────────────────────────────────
const WHATSAPP_PHONE = "919508261850";
const EMAIL_TO = "alocodes2@gmail.com";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";
  if (!form.course) errors.course = "Please select a course";
  return errors;
}

function buildMessage(
  form,
  payMode,
  paid,
  fullPrice,
  emiInstallments,
  emiMonths,
) {
  const selectedCourse = courses.find((c) => c.slug === form.course);
  const courseLabel = selectedCourse?.title || form.course;

  // Always ensure we have an array
  const installments = Array.isArray(emiInstallments) ? emiInstallments : [];

  let payLine;
  if (paid) {
    if (payMode === "full") {
      payLine = `Payment: Full - Rs.${fullPrice.toLocaleString("en-IN")} (PAID via QR)`;
    } else {
      const emiTotal = installments.reduce((a, b) => a + b, 0);
      const emiBreakdown = installments
        .map(
          (amt, i) =>
            `   Month ${i + 1}: Rs.${amt.toLocaleString("en-IN")}${i === 0 ? " (PAID now)" : ""}`,
        )
        .join("\n");
      payLine = `Payment: EMI - Rs.${emiTotal.toLocaleString("en-IN")} total over ${emiMonths} installments\n${emiBreakdown}`;
    }
  } else {
    payLine = "Payment: Not yet paid - Counselor follow-up needed";
  }

  return `*New Enrollment Request*\n\nName: ${form.name}\nPhone: +91 ${form.phone}\nEmail: ${form.email}\nCourse: ${courseLabel}\nPreferred Start Date: ${form.startDate || "Not specified"}\nGoals: ${form.goals || "Not provided"}\n\n${payLine}\n\nSubmitted via website enrollment form.`;
}

// ─── Shared input helpers ─────────────────────────────────────────────────────
const baseInput =
  "w-full rounded-xl px-4 py-2 text-sm focus:outline-none transition-all";

function useInputStyle() {
  const style = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
  };
  const onFocus = (e) => {
    e.target.style.borderColor = "rgba(66,214,116,0.60)";
    e.target.style.boxShadow = "0 0 0 2px rgba(66,214,116,0.12)";
  };
  const onBlur = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };
  return { style, onFocus, onBlur };
}

// ─── PayOption ────────────────────────────────────────────────────────────────
function PayOption({ selected, onClick, title, price, desc, children }) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl border cursor-pointer transition-all p-2"
      style={{
        borderColor: selected ? "rgba(66,214,116,0.5)" : "var(--border)",
        background: selected ? "rgba(66,214,116,0.06)" : "var(--card)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            style={{
              borderColor: selected ? "var(--primary)" : "var(--border)",
              background: selected ? "var(--primary)" : "transparent",
            }}
          >
            {selected && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span className="text-sm font-bold text-foreground">{title}</span>
        </div>
        <span
          className="text-base font-black"
          style={{ color: "var(--primary)" }}
        >
          {price}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-1 ml-8">{desc}</p>
      {children}
    </div>
  );
}

// ─── MetaPill ─────────────────────────────────────────────────────────────────
function MetaPill({ icon: Icon, children }) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium text-muted-foreground"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <Icon size={12} style={{ color: "var(--primary)" }} />
      {children}
    </span>
  );
}

// ─── EmiAccordion ─────────────────────────────────────────────────────────────
function EmiAccordion({ emi }) {
  const [open, setOpen] = React.useState(false);
  const installments = emi?.installments ?? [];
  const total = installments.reduce((a, b) => a + b, 0);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        style={{
          background: "rgba(66,214,116,0.08)",
          border: "1px solid rgba(66,214,116,0.25)",
          color: "var(--primary)",
        }}
      >
        <span className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          Pay in installments (EMI)
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="mt-2 rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          {installments.map((amount, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-3 text-sm"
              style={{
                borderBottom:
                  idx < installments.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: "rgba(66,214,116,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  {idx + 1}
                </span>
                <span className="font-medium text-foreground">
                  Month {idx + 1}
                </span>
                {idx === 0 && (
                  <span
                    className="px-2 py-0.5 rounded-full text-[11px] font-bold"
                    style={{
                      background: "rgba(66,214,116,0.15)",
                      color: "var(--primary)",
                    }}
                  >
                    Due now
                  </span>
                )}
              </div>
              <span className="font-semibold text-foreground">
                ₹{amount.toLocaleString("en-IN")}
              </span>
            </div>
          ))}

          <div
            className="flex items-center justify-between px-4 py-3 text-sm font-bold"
            style={{
              borderTop: "1px solid var(--border)",
              background: "rgba(66,214,116,0.04)",
            }}
          >
            <span className="text-foreground">Total</span>
            <span className="text-foreground">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CourseDetailPanel ────────────────────────────────────────────────────────
function CourseDetailPanel({ course }) {
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function EnrollPage() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("course") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: preselectedSlug,
    startDate: "",
    goals: "",
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [payMode, setPayMode] = useState("full");
  const [paid, setPaid] = useState(false);
  const [sent, setSent] = useState(false);

  const activeCourse = courses.find((c) => c.slug === form.course) || null;
  const activePricing = activeCourse?.pricing || null;
  const activeFullPrice = activePricing?.fullPrice ?? 0;
  const activeEmiAmount = activePricing?.emi?.installments?.[0] ?? 0; // QR display only
  const activeEmiInstallments = activePricing?.emi?.installments ?? []; // always an array
  const activeEmiMonths = activePricing?.emi?.installments?.length ?? 0;
  const activeEmiAvailable = activePricing?.emi?.available ?? false;

  function onChange(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePaid() {
    setPaid(true);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleSkip() {
    setPaid(false);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleReset() {
    setStep(1);
    setPaid(false);
    setSent(false);
    setPayMode("full");
    setForm({
      name: "",
      phone: "",
      email: "",
      course: preselectedSlug,
      startDate: "",
      goals: "",
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { style: inputStyle, onFocus, onBlur } = useInputStyle();

  // ── STEP 3: PENDING SEND ───────────────────────────────────────────────────
  if (step === 3 && !sent) {
    const message = buildMessage(
      form,
      payMode,
      paid,
      activeFullPrice,
      activeEmiInstallments, // ✅ array
      activeEmiMonths,
    );
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    const emailUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(`New Enrollment: ${form.name} — ${activeCourse?.title || form.course}`)}&body=${encodeURIComponent(message)}`;

    return (
      <div
        className="min-h-screen overflow-x-hidden text-foreground flex items-center justify-center px-4 py-20"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <div className="w-full max-w-lg text-center space-y-3">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
            style={{ background: "rgba(66,214,116,0.12)" }}
          >
            <Send size={32} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <h1
              className="text-3xl font-black text-foreground mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Almost Done, {form.name}!
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Send your enrollment details via WhatsApp or Email to complete
              your registration.
            </p>
          </div>

          <div
            className="text-left rounded-2xl border p-4"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <p className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-1.5">
              <Send size={14} /> Your enrollment summary
            </p>
            <pre
              className="text-sm font-medium text-muted-foreground whitespace-pre-wrap break-words leading-relaxed"
              style={{ fontFamily: "inherit" }}
            >
              {message}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSent(true)}
              className="h-11 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-85"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </a>
            <a
              href={emailUrl}
              onClick={() => setSent(true)}
              className="h-11 rounded-full font-bold text-sm flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <Mail size={15} /> Send via Email
            </a>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
            style={{
              background: "var(--background)",
              borderColor: "var(--border)",
              color: "var(--muted-foreground)",
            }}
          >
            <ArrowLeft size={14} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  // ── STEP 3: SUCCESS (after send) ───────────────────────────────────────────
  if (step === 3 && sent) {
    const message = buildMessage(
      form,
      payMode,
      paid,
      activeFullPrice,
      activeEmiInstallments, // ✅ array (was incorrectly activeEmiAmount before)
      activeEmiMonths,
    );

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
                  Thank you, <strong>{form.name}</strong>! Your enrollment for{" "}
                  <strong>{activeCourse?.title}</strong> is confirmed. Access
                  details will be sent to <strong>{form.email}</strong>.
                </>
              ) : (
                <>
                  Thank you, <strong>{form.name}</strong>! Our counselor will
                  call <strong>+91 {form.phone}</strong> within 24 hours to
                  complete your enrollment.
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
              onClick={handleReset}
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

  // ── FORM + PAYMENT LAYOUT ──────────────────────────────────────────────────
  return (
    <div
      className="overflow-x-hidden min-h-screen text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Background blobs */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3 -z-0"
        style={{ background: "rgba(66,214,116,0.05)" }}
      />
      <div
        className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3 -z-0"
        style={{ background: "rgba(66,214,116,0.04)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Mobile step indicator */}
        <div className="flex items-center gap-2 mb-8 lg:hidden">
          {["Your Details", "Payment"].map((label, idx) => {
            const s = idx + 1;
            return (
              <React.Fragment key={s}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= s ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
                  >
                    {step > s ? "✓" : s}
                  </div>
                  <span
                    className={`text-xs font-medium ${step === s ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {label}
                  </span>
                </div>
                {s < 2 && <div className="flex-1 h-px bg-border" />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
          {/* ── LEFT: Dynamic Course Detail Panel ──────────────────────────── */}
          <div className="flex flex-col">
            <div className="lg:sticky lg:top-28 flex flex-col h-full">
              <CourseDetailPanel course={activeCourse} />
            </div>
          </div>

          {/* ── RIGHT: Form + Payment ──────────────────────────────────────── */}
          <div>
            <div
              className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 40px rgba(15,45,26,0.08)",
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(66,214,116,0.07)" }}
              />

              {/* Header */}
              <div
                className="flex items-center justify-between mb-4 pb-3 relative z-10"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--primary)" }}
                  >
                    {step === 1 ? "Apply Now" : "Payment"}
                  </p>
                  <h2
                    className="text-2xl font-black text-foreground"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {step === 1
                      ? "Student Enrollment Form"
                      : "Choose Payment Option"}
                  </h2>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {/* Desktop step bar */}
                  <div className="hidden lg:flex items-center gap-2">
                    {["Details", "Payment"].map((label, idx) => {
                      const s = idx + 1;
                      return (
                        <React.Fragment key={s}>
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= s ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
                            >
                              {step > s ? "✓" : s}
                            </div>
                            <span
                              className={`text-xs font-medium ${step === s ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {label}
                            </span>
                          </div>
                          {s < 2 && <div className="w-8 h-px bg-border" />}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5"
                    style={{
                      background: "rgba(66,214,116,0.08)",
                      borderColor: "rgba(66,214,116,0.25)",
                      color: "var(--primary)",
                    }}
                  >
                    <span
                      className="block w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "var(--primary)" }}
                    />
                    Filling Fast
                  </span>
                </div>
              </div>

              {/* ── STEP 1: FORM ── */}
              {step === 1 && (
                <form
                  className="space-y-4 relative z-10"
                  onSubmit={handleFormSubmit}
                >
                  {/* Personal Details */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      1. Personal Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold mb-1 text-muted-foreground"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            value={form.name}
                            onChange={(e) => onChange("name", e.target.value)}
                            className={`${baseInput} pl-10`}
                            style={{
                              ...inputStyle,
                              ...(errors.name
                                ? { borderColor: "#f87171" }
                                : {}),
                            }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold mb-1 text-muted-foreground"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => onChange("phone", e.target.value)}
                            className={`${baseInput} pl-10`}
                            style={{
                              ...inputStyle,
                              ...(errors.phone
                                ? { borderColor: "#f87171" }
                                : {}),
                            }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-400 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold mb-1 text-muted-foreground"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => onChange("email", e.target.value)}
                            className={`${baseInput} pl-10`}
                            style={{
                              ...inputStyle,
                              ...(errors.email
                                ? { borderColor: "#f87171" }
                                : {}),
                            }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Course Preferences */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      2. Course Preferences
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="course"
                          className="block text-xs font-bold mb-1 text-muted-foreground"
                        >
                          Select Course
                        </label>
                        <div className="relative">
                          <select
                            id="course"
                            name="course"
                            value={form.course}
                            onChange={(e) => onChange("course", e.target.value)}
                            className={`${baseInput} appearance-none`}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          >
                            <option value="" disabled>
                              Choose your path...
                            </option>
                            {courses.map((c) => (
                              <option key={c.slug} value={c.slug}>
                                {c.title}
                              </option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none rotate-90 text-muted-foreground" />
                        </div>
                        {errors.course && (
                          <p className="text-xs text-red-400 mt-1">
                            {errors.course}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="start_date"
                          className="block text-xs font-bold mb-1 text-muted-foreground"
                        >
                          Preferred Start Date
                        </label>
                        <input
                          id="start_date"
                          name="start_date"
                          type="date"
                          value={form.startDate}
                          onChange={(e) =>
                            onChange("startDate", e.target.value)
                          }
                          className={baseInput}
                          style={inputStyle}
                          onFocus={onFocus}
                          onBlur={onBlur}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      3. Your Goals
                    </h3>
                    <div>
                      <label
                        htmlFor="goals"
                        className="block text-xs font-bold mb-1 text-muted-foreground"
                      >
                        Tell us about your goals or any questions
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        placeholder="I'm a beginner looking to switch careers into software development..."
                        value={form.goals}
                        onChange={(e) => onChange("goals", e.target.value)}
                        className={`${baseInput} resize-none`}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div
                    className="pt-3"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div
                      className="rounded-2xl p-3 mb-4 flex items-start gap-3 border"
                      style={{
                        background: "rgba(66,214,116,0.06)",
                        borderColor: "rgba(66,214,116,0.20)",
                      }}
                    >
                      <Info
                        className="shrink-0 h-4 w-4 mt-0.5"
                        style={{ color: "var(--primary)" }}
                      />
                      <div className="text-sm">
                        <p className="font-bold mb-1 text-foreground">
                          Payment on Next Step
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          After submitting your details, you'll choose between
                          full payment or EMI. You can also skip and have a
                          counselor contact you.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                        boxShadow: "0 4px 20px rgba(66,214,116,0.30)",
                      }}
                    >
                      Continue to Payment
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-xs mt-3 text-muted-foreground">
                      By submitting, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="underline hover:text-primary transition-colors"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="underline hover:text-primary transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}

              {/* ── STEP 2: PAYMENT ── */}
              {step === 2 && (
                <div className="space-y-2 relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Choose how you'd like to pay
                  </p>

                  {activeCourse && activePricing && (
                    <div
                      className="rounded-2xl border py-2 px-4 flex items-center justify-between"
                      style={{
                        background: "var(--card)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          Enrolling in
                        </p>
                        <p className="font-black text-sm text-foreground">
                          {activeCourse.title}
                        </p>
                      </div>
                      <p
                        className="text-xl font-black"
                        style={{
                          color: "var(--primary)",
                          fontFamily: "'Georgia', serif",
                        }}
                      >
                        ₹{activeFullPrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  )}

                  <PayOption
                    selected={payMode === "full"}
                    onClick={() => setPayMode("full")}
                    title="Full Payment"
                    price={`₹${activeFullPrice.toLocaleString("en-IN")}`}
                    desc="One-time payment — best value"
                  />

                  {activeEmiAvailable && (
                    <PayOption
                      selected={payMode === "emi"}
                      onClick={() => setPayMode("emi")}
                      title="EMI — Installments"
                      price={`from ₹${activeEmiAmount.toLocaleString("en-IN")}`}
                      desc={`${activeEmiMonths} installments — ₹${activeEmiInstallments.reduce((a, b) => a + b, 0).toLocaleString("en-IN")} total`}
                    >
                      {payMode === "emi" && (
                        <div className="ml-8 mt-2 space-y-1">
                          {activeEmiInstallments.map((amt, i) => (
                            <div
                              key={i}
                              className="flex justify-between text-xs text-muted-foreground"
                            >
                              <span>
                                Month {i + 1}
                                {i === 0 && (
                                  <span
                                    className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                                    style={{
                                      background: "rgba(66,214,116,0.12)",
                                      color: "var(--primary)",
                                    }}
                                  >
                                    Due now
                                  </span>
                                )}
                              </span>
                              <span className="font-bold text-foreground">
                                ₹{amt.toLocaleString("en-IN")}
                              </span>
                            </div>
                          ))}
                          <div className="flex justify-between text-xs font-bold text-foreground pt-1 border-t border-border">
                            <span>Total</span>
                            <span>
                              ₹
                              {activeEmiInstallments
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      )}
                    </PayOption>
                  )}

                  {/* QR Code */}
                  <div
                    className="rounded-2xl border p-4 text-center"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-foreground mb-3">
                      <QrCode size={16} style={{ color: "var(--primary)" }} />
                      Scan to Pay — UPI / Any App
                    </div>
                    <div className="w-40 h-40 mx-auto rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center mb-3">
                      <img
                        src="/qr-payment.jpeg"
                        alt="UPI QR Code"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.replaceWith(
                            Object.assign(document.createElement("div"), {
                              style:
                                "color:#888;font-size:11px;text-align:center;padding:8px",
                              textContent: "Add /public/qr-payment.jpeg",
                            }),
                          );
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Scan with GPay, PhonePe, or any UPI app
                      <br />
                      Amount:{" "}
                      <strong>
                        {payMode === "full"
                          ? `₹${activeFullPrice.toLocaleString("en-IN")}`
                          : `₹${activeEmiAmount.toLocaleString("en-IN")} (1st EMI)`}
                      </strong>
                    </p>
                  </div>

                  <button
                    onClick={handlePaid}
                    className="w-full h-11 rounded-full font-bold text-sm cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-85"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      boxShadow: "0 4px 16px rgba(66,214,116,0.28)",
                    }}
                  >
                    <CheckCircle size={16} /> I've Paid — Submit Enrollment
                  </button>

                  <button
                    onClick={handleSkip}
                    className="w-full text-center text-sm text-muted-foreground underline underline-offset-2 cursor-pointer py-1"
                  >
                    I'll pay later — have a counselor contact me
                  </button>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    <ArrowLeft size={14} /> Edit Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
