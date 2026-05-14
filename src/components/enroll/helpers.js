import courses from "@/lib/Courses";

// ─── Validation ───────────────────────────────────────────────────────────────
export function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";
  if (!form.course) errors.course = "Please select a course";
  return errors;
}

// ─── Message Builder ──────────────────────────────────────────────────────────
export function buildMessage(
  form,
  payMode,
  paid,
  fullPrice,
  emiInstallments,
  emiMonths,
) {
  const selectedCourse = courses.find((c) => c.slug === form.course);
  const courseLabel = selectedCourse?.title || form.course;
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

// ─── Shared Input Style Hook ──────────────────────────────────────────────────
export function useInputStyle() {
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

// ─── Shared class ─────────────────────────────────────────────────────────────
export const baseInput =
  "w-full rounded-xl px-4 py-2 text-sm focus:outline-none transition-all";
