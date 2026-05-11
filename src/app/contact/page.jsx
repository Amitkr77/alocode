"use client";

import {
  CircleArrowOutUpRightIcon,
  MapPin,
  Phone,
  Users2,
  Mail,
  Share2,
  Globe,
  MapPinned,
  ChevronRight,
  Info,
  ArrowRight,
  User,
} from "lucide-react";
import React from "react";
import courses from "@/lib/Courses";

export default function page() {
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

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(66,214,116,0.60)";
    e.target.style.boxShadow = "0 0 0 2px rgba(66,214,116,0.12)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className="overflow-x-hidden text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <main className="flex flex-col grow pt-8">
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
          <div className="w-full max-w-7xl">
            {/* ── Page header ── */}
            <div className="text-center mb-4 pt-6">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--primary)" }}
              >
                Join Us
              </p>
              <h1
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Start Your Coding
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
                    Journey Today
                  </span>
                </span>
              </h1>
              <p className="text-base max-w-xl mx-auto leading-relaxed text-muted-foreground">
                Limited spots available for the{" "}
                <span className="font-bold" style={{ color: "var(--primary)" }}>
                  November Batch
                </span>
                . Don't miss your chance to level up your skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* ── Left: Contact & Info ── */}
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {/* Office image */}
                <div
                  className="rounded-3xl overflow-hidden border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-full h-60 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9MvkbWjX9ZGJSmrAS3GQ4fzC7gP4UNxTScf4E7-XqD1CgPehUoTLUglyDfeyiGfPnpfHBWxDls9u0vFr6DEhZbP1gwvjNhLl1ClFwe7bkiOhcE2leZfY9ChxCRkshKyOEd6F8ccX86jRjZe-r-LdcSgjTm2jUHorD7qKF4D796lEcdyIp2EGZRH8YPH2u0iqOdOs4VV5_qtCAq5XWNliuFE7bq5NWsRY_5_zhnE6OJc_0MgCO5EeLboyp6MIp1lnMIzAgdKVluRBu")`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-end p-4"
                      style={{ background: "rgba(15,31,19,0.30)" }}
                    >
                      <div
                        className="rounded-xl px-4 py-2 backdrop-blur-sm"
                        style={{
                          background: "rgba(240,250,240,0.92)",
                          color: "var(--foreground)",
                        }}
                      >
                        <p className="font-bold text-sm">📍 Our Learning Hub</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Address */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3 transition-all group"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{
                          background: "rgba(66,214,116,0.12)",
                          borderColor: "rgba(66,214,116,0.25)",
                          color: "var(--primary)",
                        }}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm text-foreground">
                        Visit Us
                      </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Kurji, Digha, Patna, Bihar 800016
                      </p>
                      <p className="text-xs mt-1 leading-relaxed text-muted-foreground opacity-70">
                        Monday – Saturday
                        <br />
                        10:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3 transition-all group"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{
                          background: "rgba(66,214,116,0.12)",
                          borderColor: "rgba(66,214,116,0.25)",
                          color: "var(--primary)",
                        }}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm text-foreground">
                        Call / WhatsApp
                      </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-muted-foreground">
                        +91 92346 25064
                      </p>
                      <a
                        className="text-xs font-bold mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
                        style={{ color: "var(--primary)" }}
                        href="https://wa.me/919234625064?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20coding%20courses."
                      >
                        Chat now <CircleArrowOutUpRightIcon size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3 transition-all group"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{
                          background: "rgba(66,214,116,0.12)",
                          borderColor: "rgba(66,214,116,0.25)",
                          color: "var(--primary)",
                        }}
                      >
                        <Mail className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm text-foreground">
                        Email Us
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      admissions@alocodes.com
                    </p>
                  </div>

                  {/* Socials */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3 transition-all"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h2 className="font-black text-sm text-foreground">
                      Follow Us
                    </h2>
                    <div className="flex gap-3 mt-auto">
                      {[Globe, Users2, Share2].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all"
                          style={{
                            background: "rgba(66,214,116,0.10)",
                            borderColor: "rgba(66,214,116,0.22)",
                            color: "var(--primary)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--primary)";
                            e.currentTarget.style.color =
                              "var(--primary-foreground)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(66,214,116,0.10)";
                            e.currentTarget.style.color = "var(--primary)";
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div
                  className="rounded-3xl overflow-hidden border h-48 relative"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url("/image.png")` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="rounded-full p-3 animate-bounce"
                      style={{
                        background: "var(--primary)",
                        boxShadow: "0 4px 20px rgba(66,214,116,0.40)",
                      }}
                    >
                      <a
                        href="https://www.google.com/maps/place/Alomonx+Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open location in Google Maps"
                        className="block"
                      >
                        <MapPinned
                          className="w-6 h-6"
                          style={{ color: "var(--primary-foreground)" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: Enrollment Form ── */}
              <div className="order-1 lg:order-2">
                <div
                  className="sticky top-24 rounded-3xl p-6 md:p-10 border"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    boxShadow: "0 8px 40px rgba(15,45,26,0.08)",
                  }}
                >
                  {/* Form header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: "var(--primary)" }}
                      >
                        Apply Now
                      </p>
                      <h2
                        className="text-2xl md:text-3xl font-black text-foreground"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        Enrollment Form
                      </h2>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1"
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

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Personal details */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        1. Personal Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="col-span-2 md:col-span-1">
                          <label
                            htmlFor="name"
                            className="block text-xs font-bold mb-2 text-muted-foreground"
                          >
                            Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle}
                              id="name"
                              name="name"
                              placeholder="e.g. Alex Johnson"
                              type="text"
                              onFocus={handleFocus}
                              onBlur={handleBlur}
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
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle}
                              id="phone"
                              name="phone"
                              placeholder="+91 00000 00000"
                              type="tel"
                              onFocus={handleFocus}
                              onBlur={handleBlur}
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
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle}
                              id="email"
                              name="email"
                              placeholder="you@example.com"
                              type="email"
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course preferences */}
                    <div className="space-y-2">
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
                              className="w-full min-w-0 max-w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none appearance-none"
                              style={{
                                ...inputStyle,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              id="course"
                              name="course"
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                            >
                              <option value="" disabled defaultValue="">
                                Choose your path...
                              </option>

                              {courses.map((course) => (
                                <option key={course.id} value={course.slug}>
                                  {course.title}
                                </option>
                              ))}
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none rotate-90 text-muted-foreground" />
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
                            onFocus={handleFocus}
                            onBlur={handleBlur}
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
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div
                      className="pt-2"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <div
                        className="rounded-2xl p-4 mb-3 flex items-start gap-3 border"
                        style={{
                          background: "rgba(66,214,116,0.06)",
                          borderColor: "rgba(66,214,116,0.20)",
                        }}
                      >
                        <Info
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "var(--primary)" }}
                        />
                        <div className="text-sm">
                          <p className="font-bold mb-1 text-foreground">
                            Payment Information
                          </p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            No payment is required today. After submitting, an
                            academic counselor will contact you within 24 hours
                            to discuss flexible payment options or scholarships.
                          </p>
                        </div>
                      </div>

                      <button
                        className="w-full h-11 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                          boxShadow: "0 4px 20px rgba(66,214,116,0.30)",
                        }}
                        type="submit"
                      >
                        Submit Enrollment
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-center text-xs mt-2 text-muted-foreground">
                        By submitting, you agree to our Terms of Service and
                        Privacy Policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
