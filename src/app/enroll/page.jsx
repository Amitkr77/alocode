"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Briefcase,
  ChevronRight,
  Info,
  Mail,
  Phone,
  School,
  Shield,
  User,
} from "lucide-react";
import courses from "@/lib/Courses";

export default function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      course: e.target.course.value,
      start_date: e.target.start_date.value,
      goals: e.target.goals.value,
    };

    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Enrollment submitted successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong");
    }
  };

  const inputStyle = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
  };

  const inputFocus = (e) => {
    e.target.style.borderColor = "rgba(66,214,116,0.60)";
    e.target.style.boxShadow = "0 0 0 2px rgba(66,214,116,0.12)";
  };

  const inputBlur = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className="overflow-x-hidden min-h-screen text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* Green background blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3"
        style={{ background: "rgba(66,214,116,0.06)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"
        style={{ background: "rgba(66,214,116,0.04)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10 text-muted-foreground">
          <Link
            href="/"
            className="font-medium transition-colors text-muted-foreground"
            onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
            onMouseLeave={(e) =>
              (e.target.style.color = "var(--muted-foreground)")
            }
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-bold text-foreground">Enrollment</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* ── Left side ── */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <div className="sticky top-28">
              {/* Live badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  background: "rgba(66,214,116,0.08)",
                  borderColor: "rgba(66,214,116,0.25)",
                }}
              >
                <span
                  className="flex h-2 w-2 rounded-full animate-pulse"
                  style={{ background: "var(--primary)" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--primary)" }}
                >
                  Limited Seats Available
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-black mb-5 leading-tight tracking-tight text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Start Your Journey
                <br />
                <span className="relative inline-block mt-1">
                  <span
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1.5rem)] h-[1.1em] rounded-full -z-0"
                    style={{ background: "var(--primary)" }}
                  />
                  <span
                    className="relative z-10"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    With Alocodes
                  </span>
                </span>
              </h1>

              <p className="text-base mb-10 leading-relaxed max-w-sm text-muted-foreground">
                Take the first step towards a high-growth tech career. Fill out
                the form to secure your spot in our upcoming cohort.
              </p>

              {/* Feature list */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: School,
                    title: "World-class Curriculum",
                    desc: "Designed by industry experts",
                  },
                  {
                    icon: Briefcase,
                    title: "100% Placement Support",
                    desc: "Resume reviews & mock interviews",
                  },
                  {
                    icon: Shield,
                    title: "Money-Back Guarantee",
                    desc: "7-day risk-free trial period",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex items-center gap-4 group">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-colors"
                      style={{
                        background: "rgba(66,214,116,0.10)",
                        borderColor: "rgba(66,214,116,0.22)",
                        color: "var(--primary)",
                      }}
                    >
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-foreground">
                        {f.title}
                      </h4>
                      <p className="text-xs mt-0.5 text-muted-foreground">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              <div
                className="mt-10 flex gap-0 rounded-2xl overflow-hidden divide-x"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                }}
              >
                {[
                  { val: "500+", lbl: "Companies" },
                  { val: "90%", lbl: "Hired" },
                  { val: "72k+", lbl: "Students" },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="flex-1 px-4 py-4 text-center"
                    style={{ borderRight: "1px solid var(--border)" }}
                  >
                    <p
                      className="text-lg font-black"
                      style={{
                        color: "var(--primary)",
                        fontFamily: "'Georgia', serif",
                      }}
                    >
                      {s.val}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-wide mt-0.5 text-muted-foreground">
                      {s.lbl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right side — Form ── */}
          <div className="lg:col-span-7">
            <div
              className="rounded-3xl p-6 sm:p-10 relative overflow-hidden"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 40px rgba(15,45,26,0.08)",
              }}
            >
              {/* Decorative corner blob */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(66,214,116,0.07)" }}
              />

              <div
                className="flex items-center justify-between mb-8 pb-6"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--primary)" }}
                  >
                    Apply Now
                  </p>
                  <h2
                    className="text-2xl font-black text-foreground"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Student Enrollment Form
                  </h2>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 shrink-0"
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

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    1. Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold mb-2 text-muted-foreground"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                          style={inputStyle}
                          id="name"
                          name="name"
                          placeholder="e.g. Alex Johnson"
                          type="text"
                          required
                          onFocus={inputFocus}
                          onBlur={inputBlur}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold mb-2 text-muted-foreground"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                          style={inputStyle}
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          type="tel"
                          required
                          onFocus={inputFocus}
                          onBlur={inputBlur}
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold mb-2 text-muted-foreground"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                          style={inputStyle}
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          type="email"
                          required
                          onFocus={inputFocus}
                          onBlur={inputBlur}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Preferences */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    2. Course Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="course"
                        className="block text-xs font-bold mb-2 text-muted-foreground"
                      >
                        Select Course
                      </label>
                      <div className="relative">
                        <select
                          className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors appearance-none"
                          style={inputStyle}
                          id="course"
                          name="course"
                          required
                          onFocus={inputFocus}
                          onBlur={inputBlur}
                        >
                          <option value="" disabled defaultValue="">
                            Choose your path...
                          </option>
                          {courses.map((course) => (
                            <option key={course.slug} value={course.slug}>
                              {course.title}
                            </option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none rotate-90 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="start_date"
                        className="block text-xs font-bold mb-2 text-muted-foreground"
                      >
                        Preferred Start Date
                      </label>
                      <input
                        className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                        style={inputStyle}
                        id="start_date"
                        name="start_date"
                        type="date"
                        required
                        onFocus={inputFocus}
                        onBlur={inputBlur}
                      />
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    3. Your Goals
                  </h3>
                  <div>
                    <label
                      htmlFor="goals"
                      className="block text-xs font-bold mb-2 text-muted-foreground"
                    >
                      Tell us about your goals or any questions
                    </label>
                    <textarea
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      style={inputStyle}
                      id="goals"
                      name="goals"
                      placeholder="I'm a beginner looking to switch careers into software development..."
                      rows={4}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div
                    className="rounded-2xl p-4 mb-6 flex items-start gap-3 border"
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
                        Payment Information
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        No payment is required today. After submitting this
                        form, an academic counselor will contact you within 24
                        hours to finalize your enrollment and discuss flexible
                        payment options or scholarships.
                      </p>
                    </div>
                  </div>

                  <button
                    className="w-full h-13 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      boxShadow: "0 4px 20px rgba(66,214,116,0.30)",
                    }}
                    type="submit"
                  >
                    Submit Enrollment
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs mt-4 text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link
                      href="/terms"
                      className="underline transition-colors"
                      style={{ color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--muted-foreground)")
                      }
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="underline transition-colors"
                      style={{ color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--muted-foreground)")
                      }
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
