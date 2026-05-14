"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import courses from "@/lib/Courses";

import { validate, buildMessage } from "./helpers";
import { CourseDetailPanel } from "./CourseDetailPanel";
import { StepForm } from "./steps/StepForm";
import { StepPayment } from "./steps/StepPayment";
import { StepSend } from "./steps/StepSend";
import { StepSuccess } from "./steps/StepSuccess";

export function EnrollPageContent() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("course") || "";
  const [sheetRowNumber, setSheetRowNumber] = useState(null);

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

  // Derived course data
  const activeCourse = courses.find((c) => c.slug === form.course) || null;
  const activePricing = activeCourse?.pricing || null;
  const activeFullPrice = activePricing?.fullPrice ?? 0;
  const activeEmiAmount = activePricing?.emi?.installments?.[0] ?? 0;
  const activeEmiInstallments = activePricing?.emi?.installments ?? [];
  const activeEmiMonths = activePricing?.emi?.installments?.length ?? 0;
  const activeEmiAvailable = activePricing?.emi?.available ?? false;

  function onChange(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    saveDetailsToSheet(); // 👈 fire and forget
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePaid() {
    setPaid(true);
    updatePaymentInSheet(true);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSkip() {
    setPaid(false);
    updatePaymentInSheet(false);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleReset() {
    setStep(1);
    setPaid(false);
    setSent(false);
    setPayMode("full");
    setSheetRowNumber(null);
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

  // ── Called on Step 1 submit ──────────────────────────────────────────────────
  async function saveDetailsToSheet() {
    const selectedCourse = courses.find((c) => c.slug === form.course);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_details",
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: selectedCourse?.title || form.course,
          startDate: form.startDate,
          goals: form.goals,
        }),
      });
      const data = await res.json();
      if (data.rowNumber) {
        setSheetRowNumber(data.rowNumber); // store for payment update
      }
    } catch (err) {
      console.error("Sheet save failed:", err);
    }
  }

  // ── Called on Step 2 complete (paid or skipped) ──────────────────────────────
  async function updatePaymentInSheet(isPaid) {
    if (!sheetRowNumber) return; // safety check

    const installments = activePricing?.emi?.installments ?? [];
    let amount = "Not paid";
    if (isPaid) {
      amount =
        payMode === "full"
          ? `Rs.${activeFullPrice.toLocaleString("en-IN")} (Full)`
          : `Rs.${installments[0]?.toLocaleString("en-IN")} of Rs.${installments.reduce((a, b) => a + b, 0).toLocaleString("en-IN")} EMI`;
    }
    try {
      await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_payment",
          rowNumber: sheetRowNumber,
          payMode,
          paid: isPaid,
          amount,
        }),
      });
    } catch (err) {
      console.error("Sheet payment update failed:", err);
    }
  }

  const message =
    step >= 3
      ? buildMessage(
          form,
          payMode,
          paid,
          activeFullPrice,
          activeEmiInstallments,
          activeEmiMonths,
        )
      : "";

  if (step === 3 && !sent) {
    return (
      <StepSend
        name={form.name}
        message={message}
        courseTitle={activeCourse?.title || form.course}
        onSent={() => setSent(true)}
        onBack={() => setStep(2)}
      />
    );
  }

  if (step === 3 && sent) {
    return (
      <StepSuccess
        name={form.name}
        phone={form.phone}
        email={form.email}
        courseTitle={activeCourse?.title || ""}
        paid={paid}
        message={message}
        onReset={handleReset}
      />
    );
  }

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
          {/* Left: course detail */}
          <div className="flex flex-col">
            <div className="lg:sticky lg:top-28 flex flex-col h-full">
              <CourseDetailPanel course={activeCourse} />
            </div>
          </div>

          {/* Right: form card */}
          <div>
            <div
              className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 40px rgba(15,45,26,0.08)",
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(66,214,116,0.07)" }}
              />

              {/* Card header */}
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

              {step === 1 && (
                <StepForm
                  form={form}
                  errors={errors}
                  onChange={onChange}
                  onSubmit={handleFormSubmit}
                />
              )}

              {step === 2 && (
                <StepPayment
                  activeCourse={activeCourse}
                  activePricing={activePricing}
                  activeFullPrice={activeFullPrice}
                  activeEmiAmount={activeEmiAmount}
                  activeEmiInstallments={activeEmiInstallments}
                  activeEmiMonths={activeEmiMonths}
                  activeEmiAvailable={activeEmiAvailable}
                  payMode={payMode}
                  setPayMode={setPayMode}
                  onPaid={handlePaid}
                  onSkip={handleSkip}
                  onBack={() => setStep(1)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
