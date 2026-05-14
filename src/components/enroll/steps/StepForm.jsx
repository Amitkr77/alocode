import React from "react";
import { ArrowRight, ChevronRight, Info, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import courses from "@/lib/Courses";
import { baseInput, useInputStyle } from "../helpers";

export function StepForm({ form, errors, onChange, onSubmit }) {
  const { style: inputStyle, onFocus, onBlur } = useInputStyle();

  return (
    <form className="space-y-4 relative z-10" onSubmit={onSubmit}>
      {/* 1. Personal Details */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">1. Personal Details</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold mb-1 text-muted-foreground">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="name" name="name" type="text" placeholder="e.g. Rahul Sharma"
                value={form.name} onChange={(e) => onChange("name", e.target.value)}
                className={`${baseInput} pl-10`}
                style={{ ...inputStyle, ...(errors.name ? { borderColor: "#f87171" } : {}) }}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold mb-1 text-muted-foreground">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={(e) => onChange("phone", e.target.value)}
                className={`${baseInput} pl-10`}
                style={{ ...inputStyle, ...(errors.phone ? { borderColor: "#f87171" } : {}) }}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-xs font-bold mb-1 text-muted-foreground">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="email" name="email" type="email" placeholder="you@example.com"
                value={form.email} onChange={(e) => onChange("email", e.target.value)}
                className={`${baseInput} pl-10`}
                style={{ ...inputStyle, ...(errors.email ? { borderColor: "#f87171" } : {}) }}
                onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* 2. Course Preferences */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">2. Course Preferences</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="course" className="block text-xs font-bold mb-1 text-muted-foreground">Select Course</label>
            <div className="relative">
              <select
                id="course" name="course" value={form.course}
                onChange={(e) => onChange("course", e.target.value)}
                className={`${baseInput} appearance-none`} style={inputStyle}
                onFocus={onFocus} onBlur={onBlur}
              >
                <option value="" disabled>Choose your path...</option>
                {courses.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
              </select>
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none rotate-90 text-muted-foreground" />
            </div>
            {errors.course && <p className="text-xs text-red-400 mt-1">{errors.course}</p>}
          </div>

          <div>
            <label htmlFor="start_date" className="block text-xs font-bold mb-1 text-muted-foreground">Preferred Start Date</label>
            <input
              id="start_date" name="start_date" type="date"
              value={form.startDate} onChange={(e) => onChange("startDate", e.target.value)}
              className={baseInput} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
            />
          </div>
        </div>
      </div>

      {/* 3. Goals */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">3. Your Goals</h3>
        <div>
          <label htmlFor="goals" className="block text-xs font-bold mb-1 text-muted-foreground">
            Tell us about your goals or any questions
          </label>
          <textarea
            id="goals" name="goals" rows={3}
            placeholder="I'm a beginner looking to switch careers into software development..."
            value={form.goals} onChange={(e) => onChange("goals", e.target.value)}
            className={`${baseInput} resize-none`} style={inputStyle}
            onFocus={onFocus} onBlur={onBlur}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-3" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="rounded-2xl p-3 mb-4 flex items-start gap-3 border"
          style={{ background: "rgba(66,214,116,0.06)", borderColor: "rgba(66,214,116,0.20)" }}
        >
          <Info className="shrink-0 h-4 w-4 mt-0.5" style={{ color: "var(--primary)" }} />
          <div className="text-sm">
            <p className="font-bold mb-1 text-foreground">Payment on Next Step</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              After submitting your details, you'll choose between full payment or EMI. You can also skip and have a counselor contact you.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)", boxShadow: "0 4px 20px rgba(66,214,116,0.30)" }}
        >
          Continue to Payment
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-xs mt-3 text-muted-foreground">
          By submitting, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
        </p>
      </div>
    </form>
  );
}