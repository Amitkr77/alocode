"use client";

import {
  MapPin,
  Phone,
  Users2,
  Mail,
  Share2,
  Globe,
  MapPinned,
  ArrowRight,
  User,
  MessageSquare,
  CircleArrowOutUpRightIcon,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

const CONTACT_EMAIL = "alocodes2@gmail.com";

export default function page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      problem: e.target.problem.value,
      to: CONTACT_EMAIL,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
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
            <div className="text-center mb-8 pt-6">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--primary)" }}
              >
                Get In Touch
              </p>
              <h1
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-foreground"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                We're Here to
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
                    Help You
                  </span>
                </span>
              </h1>
              <p className="text-base max-w-xl mx-auto leading-relaxed text-muted-foreground">
                Have a question or need guidance? Reach out and we'll get back
                to you within{" "}
                <span className="font-bold" style={{ color: "var(--primary)" }}>
                  24 hours
                </span>
                .
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
                    className="flex flex-col gap-1 rounded-3xl border p-3"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border"
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
                    <p className="text-sm ml-3 font-bold leading-relaxed text-muted-foreground">
                      Kurji, Digha, Patna, Bihar 800010
                    </p>
                    <p className="text-xs mt-1 ml-3 leading-relaxed text-muted-foreground opacity-80">
                      Monday – Saturday
                      <br />
                      10:00 AM – 6:00 PM
                    </p>
                  </div>

                  {/* Phone */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border"
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
                    <p className="text-sm font-bold ml-3 text-muted-foreground">
                      +91 62067 57371
                    </p>
                    <a
                      className="text-md ml-3 font-bold mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
                      style={{ color: "var(--primary)" }}
                      href="https://wa.me/916206757371?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20coding%20courses."
                    >
                      Chat now <CircleArrowOutUpRightIcon size={15} />
                    </a>
                  </div>

                  {/* Email */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border"
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
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm ml-6 text-muted-foreground hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>

                  {/* Socials */}
                  <div
                    className="flex flex-col gap-1 rounded-3xl border p-3"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <h2 className="font-black text-sm text-foreground">
                      Follow Us
                    </h2>
                    <div className="flex gap-3 mt-auto ml-3">
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
                <a
                  href="https://maps.app.goo.gl/Px12FKYwRgkE5atT8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="block rounded-3xl overflow-hidden border h-48 relative cursor-pointer"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70 transition-opacity duration-300 hover:opacity-90"
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
                      <MapPinned
                        className="w-6 h-6"
                        style={{ color: "var(--primary-foreground)" }}
                      />
                    </div>
                  </div>
                </a>
              </div>

              {/* ── Right: Contact Form ── */}
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
                  <div className="mb-6">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "var(--primary)" }}
                    >
                      Contact Us
                    </p>
                    <h2
                      className="text-2xl md:text-3xl font-black text-foreground"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      Send a Message
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your message goes directly to{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "var(--primary)" }}
                      >
                        {CONTACT_EMAIL}
                      </span>
                    </p>
                  </div>

                  {submitted ? (
                    <div
                      className="flex flex-col items-center justify-center gap-4 py-12 text-center rounded-2xl border"
                      style={{
                        background: "rgba(66,214,116,0.06)",
                        borderColor: "rgba(66,214,116,0.20)",
                      }}
                    >
                      <CheckCircle2
                        className="w-12 h-12"
                        style={{ color: "var(--primary)" }}
                      />
                      <div>
                        <p className="font-black text-lg text-foreground">
                          Message Sent!
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold px-4 py-2 rounded-full border transition-all"
                        style={{
                          borderColor: "rgba(66,214,116,0.30)",
                          color: "var(--primary)",
                        }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold mb-2 text-muted-foreground"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-all"
                            style={inputStyle}
                            id="name"
                            name="name"
                            placeholder="e.g. Alex Johnson"
                            type="text"
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold mb-2 text-muted-foreground"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-all"
                            style={inputStyle}
                            id="phone"
                            name="phone"
                            placeholder="+91 00000 00000"
                            type="tel"
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold mb-2 text-muted-foreground"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            className="w-full rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none transition-all"
                            style={inputStyle}
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            type="email"
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      {/* Problem / Message */}
                      <div>
                        <label
                          htmlFor="problem"
                          className="block text-xs font-bold mb-2 text-muted-foreground"
                        >
                          How can we help?
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <textarea
                            className="w-full rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none transition-all resize-none"
                            style={inputStyle}
                            id="problem"
                            name="problem"
                            placeholder="Describe your question or what you'd like to know..."
                            rows={5}
                            required
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
                        <button
                          className="w-full h-11 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                          style={{
                            background: "var(--primary)",
                            color: "var(--primary-foreground)",
                            boxShadow: "0 4px 20px rgba(66,214,116,0.30)",
                          }}
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message"}
                          {!loading && (
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          )}
                        </button>
                        <p className="text-center text-xs mt-2 text-muted-foreground">
                          We'll reply to your email within 24 hours.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
