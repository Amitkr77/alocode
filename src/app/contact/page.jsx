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
    background: "#DBD7C7",
    border: "1px solid #B3AA9E",
    color: "#262A2B",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(250,161,20,0.60)";
    e.target.style.boxShadow = "0 0 0 2px rgba(250,161,20,0.12)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#B3AA9E";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className="overflow-x-hidden"
      style={{ background: "#FCFCFB", color: "#262A2B", fontFamily: "system-ui, sans-serif" }}
    >
      <main className="flex flex-col grow pt-16">
        <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
          <div className="w-full max-w-7xl">

            {/* ── Page header ── */}
            <div className="text-center mb-14 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FAA114" }}>
                Join Us
              </p>
              <h1
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                Start Your Coding
                <br />
                <span className="relative inline-block mt-1">
                  <span
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-[calc(100%+1.5rem)] h-[1.1em] rounded-full -z-0"
                    style={{ background: "#FAA114" }}
                  />
                  <span className="relative z-10 text-white">Journey Today</span>
                </span>
              </h1>
              <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#786E67" }}>
                Limited spots available for the{" "}
                <span className="font-bold" style={{ color: "#FAA114" }}>November Batch</span>
                . Don't miss your chance to level up your skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* ── Left: Contact & Info ── */}
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {/* Office image */}
                <div
                  className="rounded-3xl overflow-hidden border"
                  style={{ borderColor: "#DBD7C7" }}
                >
                  <div
                    className="w-full h-60 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9MvkbWjX9ZGJSmrAS3GQ4fzC7gP4UNxTScf4E7-XqD1CgPehUoTLUglyDfeyiGfPnpfHBWxDls9u0vFr6DEhZbP1gwvjNhLl1ClFwe7bkiOhcE2leZfY9ChxCRkshKyOEd6F8ccX86jRjZe-r-LdcSgjTm2jUHorD7qKF4D796lEcdyIp2EGZRH8YPH2u0iqOdOs4VV5_qtCAq5XWNliuFE7bq5NWsRY_5_zhnE6OJc_0MgCO5EeLboyp6MIp1lnMIzAgdKVluRBu")`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-end p-6"
                      style={{ background: "rgba(38,42,43,0.28)" }}
                    >
                      <div
                        className="rounded-xl px-4 py-2 backdrop-blur-sm"
                        style={{ background: "rgba(252,252,251,0.90)", color: "#262A2B" }}
                      >
                        <p className="font-bold text-sm">📍 Our Learning Hub</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Address */}
                  <div
                    className="flex flex-col gap-3 rounded-3xl border p-6 transition-all group"
                    style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{ background: "rgba(250,161,20,0.12)", borderColor: "rgba(250,161,20,0.25)", color: "#FAA114" }}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm" style={{ color: "#262A2B" }}>Visit Us</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm leading-relaxed" style={{ color: "#786E67" }}>
                        Kurji, Digha, Patna, Bihar 800016
                      </p>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: "#B3AA9E" }}>
                        Monday – Saturday<br />10:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="flex flex-col gap-3 rounded-3xl border p-6 transition-all group"
                    style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{ background: "rgba(250,161,20,0.12)", borderColor: "rgba(250,161,20,0.25)", color: "#FAA114" }}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm" style={{ color: "#262A2B" }}>Call / WhatsApp</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm" style={{ color: "#786E67" }}>+91 92346 25064</p>
                      <a
                        className="text-xs font-bold mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
                        style={{ color: "#FAA114" }}
                        href="https://wa.me/919234625064?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20coding%20courses."
                      >
                        Chat now <CircleArrowOutUpRightIcon size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    className="flex flex-col gap-3 rounded-3xl border p-6 transition-all group"
                    style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                        style={{ background: "rgba(250,161,20,0.12)", borderColor: "rgba(250,161,20,0.25)", color: "#FAA114" }}
                      >
                        <Mail className="w-4 h-4" />
                      </div>
                      <h2 className="font-black text-sm" style={{ color: "#262A2B" }}>Email Us</h2>
                    </div>
                    <p className="text-sm" style={{ color: "#786E67" }}>admissions@alocodes.com</p>
                  </div>

                  {/* Socials */}
                  <div
                    className="flex flex-col gap-3 rounded-3xl border p-6 transition-all"
                    style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
                  >
                    <h2 className="font-black text-sm" style={{ color: "#262A2B" }}>Follow Us</h2>
                    <div className="flex gap-3 mt-auto">
                      {[Globe, Users2, Share2].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all"
                          style={{
                            background: "rgba(250,161,20,0.10)",
                            borderColor: "rgba(250,161,20,0.22)",
                            color: "#FAA114",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#FAA114";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(250,161,20,0.10)";
                            e.currentTarget.style.color = "#FAA114";
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
                  style={{ borderColor: "#DBD7C7", background: "#DBD7C7" }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url("/image.png")` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="rounded-full p-3 animate-bounce"
                      style={{ background: "#FAA114", boxShadow: "0 4px 20px rgba(250,161,20,0.40)" }}
                    >
                      <a
                        href="https://www.google.com/maps/place/Alomonx+Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open location in Google Maps"
                        className="block"
                      >
                        <MapPinned className="w-6 h-6 text-white" />
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
                    background: "#FCFCFB",
                    borderColor: "#DBD7C7",
                    boxShadow: "0 8px 40px rgba(38,42,43,0.08)",
                  }}
                >
                  {/* Form header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#FAA114" }}>
                        Apply Now
                      </p>
                      <h2
                        className="text-2xl md:text-3xl font-black"
                        style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
                      >
                        Enrollment Form
                      </h2>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5"
                      style={{
                        background: "rgba(250,161,20,0.08)",
                        borderColor: "rgba(250,161,20,0.25)",
                        color: "#FAA114",
                      }}
                    >
                      <span className="block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FAA114" }} />
                      Filling Fast
                    </span>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Personal details */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#B3AA9E" }}>
                        1. Personal Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                          <label htmlFor="name" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#B3AA9E" }} />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle} id="name" name="name" placeholder="e.g. Alex Johnson" type="text"
                              onFocus={handleFocus} onBlur={handleBlur}
                            />
                          </div>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                          <label htmlFor="phone" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#B3AA9E" }} />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle} id="phone" name="phone" placeholder="+91 00000 00000" type="tel"
                              onFocus={handleFocus} onBlur={handleBlur}
                            />
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label htmlFor="email" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#B3AA9E" }} />
                            <input
                              className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-colors"
                              style={inputStyle} id="email" name="email" placeholder="you@example.com" type="email"
                              onFocus={handleFocus} onBlur={handleBlur}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course preferences */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#B3AA9E" }}>
                        2. Course Preferences
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                          <label htmlFor="course" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>Select Course</label>
                          <div className="relative">
                            <select
                              className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors appearance-none"
                              style={inputStyle} id="course" name="course"
                              onFocus={handleFocus} onBlur={handleBlur}
                            >
                              <option value="" disabled defaultValue="">Choose your path...</option>
                              <option value="fsd">Full Stack Web Development</option>
                              <option value="ds">Data Science & AI</option>
                              <option value="web3">Web 3.0 & Blockchain</option>
                              <option value="cyber">Cybersecurity Essentials</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none rotate-90" style={{ color: "#B3AA9E" }} />
                          </div>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                          <label htmlFor="start_date" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>Preferred Start Date</label>
                          <input
                            className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                            style={inputStyle} id="start_date" name="start_date" type="date"
                            onFocus={handleFocus} onBlur={handleBlur}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Goals */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#B3AA9E" }}>
                        3. Your Goals
                      </h3>
                      <div>
                        <label htmlFor="goals" className="block text-xs font-bold mb-2" style={{ color: "#786E67" }}>
                          Tell us about your goals or any questions
                        </label>
                        <textarea
                          className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                          style={inputStyle} id="goals" name="goals"
                          placeholder="I'm a beginner looking to switch careers into software development..."
                          rows={4} onFocus={handleFocus} onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4" style={{ borderTop: "1px solid #DBD7C7" }}>
                      <div
                        className="rounded-2xl p-4 mb-6 flex items-start gap-3 border"
                        style={{ background: "rgba(250,161,20,0.06)", borderColor: "rgba(250,161,20,0.20)" }}
                      >
                        <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FAA114" }} />
                        <div className="text-sm">
                          <p className="font-bold mb-1" style={{ color: "#262A2B" }}>Payment Information</p>
                          <p className="text-xs leading-relaxed" style={{ color: "#786E67" }}>
                            No payment is required today. After submitting, an
                            academic counselor will contact you within 24 hours
                            to discuss flexible payment options or scholarships.
                          </p>
                        </div>
                      </div>

                      <button
                        className="w-full h-13 rounded-full text-white text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        style={{ background: "#FAA114", boxShadow: "0 4px 20px rgba(250,161,20,0.30)" }}
                        type="submit"
                      >
                        Submit Enrollment
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-center text-xs mt-4" style={{ color: "#B3AA9E" }}>
                        By submitting, you agree to our Terms of Service and Privacy Policy.
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