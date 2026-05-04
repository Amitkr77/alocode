"use client";
import React from "react";
import {
  ArrowRight,
  Globe,
  Share2,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

// Reusable constants for dark footer surface (deep green-dark)
const FOOTER_BG = "#0a1c10";
const DIVIDER = "rgba(66,214,116,0.10)";
const ICON_BG = "rgba(66,214,116,0.06)";
const ICON_BORDER = "rgba(66,214,116,0.12)";
const ICON_COLOR = "rgba(186,219,162,0.50)"; // #BADBA2 at 50%
const ICON_HOVER_BG = "rgba(66,214,116,0.15)";
const ICON_HOVER_BORDER = "rgba(66,214,116,0.40)";
const LINK_COLOR = "rgba(186,219,162,0.60)"; // muted green-white
const DIM_COLOR = "rgba(186,219,162,0.35)";
const DIMMER_COLOR = "rgba(186,219,162,0.45)";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) return;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Successfully subscribed! Check your email for confirmation.");
        e.target.reset();
      } else {
        const errorData = await response.json();
        alert(`Subscription failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Subscription failed: Network error. Please try again.");
    }
  };

  return (
    <footer
      className="pt-4 pb-4"
      style={{
        background: FOOTER_BG,
        borderTop: `1px solid ${DIVIDER}`,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-4">
          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <Link href="/">
                <img
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                  src="/Aloc_logo1.png"
                  alt="Alocode logo"
                />
              </Link>
            </div>
            <p
              className="text-sm leading-relaxed mb-3 max-w-xs"
              style={{ color: LINK_COLOR }}
            >
              Empowering the next generation of developers with hands-on skills,
              expert mentorship, and real-world projects that matter.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {[
                {
                  href: "https://twitter.com/alocodes",
                  Icon: Twitter,
                  label: "Twitter",
                },
                {
                  href: "https://linkedin.com/company/alocodes",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://instagram.com/alocodes",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://youtube.com/@alocodes",
                  Icon: Youtube,
                  label: "YouTube",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: ICON_BG,
                    border: `1px solid ${ICON_BORDER}`,
                    color: ICON_COLOR,
                  }}
                  aria-label={label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = ICON_HOVER_BG;
                    e.currentTarget.style.borderColor = ICON_HOVER_BORDER;
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = ICON_BG;
                    e.currentTarget.style.borderColor = ICON_BORDER;
                    e.currentTarget.style.color = ICON_COLOR;
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company ── */}
          <div>
            <h3
              className="text-sm font-black uppercase tracking-widest mb-2"
              style={{ color: "#e8f5e9", fontFamily: "'Georgia', serif" }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/why-choose", label: "Why Choose Us" },
                { href: "/live", label: "Live Training" },
                { href: "/faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm inline-flex items-center gap-1 group transition-colors"
                    style={{ color: LINK_COLOR }}
                  >
                    <span
                      className="group-hover:translate-x-0.5 transition-transform"
                      style={{ transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Courses ── */}
          <div>
            <h3
              className="text-sm font-black uppercase tracking-widest mb-2"
              style={{ color: "#e8f5e9", fontFamily: "'Georgia', serif" }}
            >
              Courses
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/courses?category=Programming", label: "Programming" },
                {
                  href: "/courses?category=Web Development",
                  label: "Web Development",
                },
                {
                  href: "/courses?category=Data Science",
                  label: "Data Science",
                },
                {
                  href: "/courses?category=App Development",
                  label: "App Development",
                },
                { href: "/courses", label: "Browse All" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm inline-flex items-center gap-1 group transition-colors"
                    style={{ color: LINK_COLOR }}
                  >
                    <span
                      className="group-hover:translate-x-0.5 transition-transform"
                      style={{ transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h3
              className="text-sm font-black uppercase tracking-widest mb-2"
              style={{ color: "#e8f5e9", fontFamily: "'Georgia', serif" }}
            >
              Stay Updated
            </h3>
            <p
              className="text-sm mb-2 leading-relaxed"
              style={{ color: LINK_COLOR }}
            >
              Get the latest updates on new courses, tips, and exclusive offers.
            </p>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                name="email"
                className="rounded-xl px-4 py-2 text-sm transition-colors focus:outline-none"
                style={{
                  background: ICON_BG,
                  border: `1px solid ${ICON_BORDER}`,
                  color: "#e8f5e9",
                }}
                type="email"
                placeholder="Enter your email"
                required
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(66,214,116,0.50)";
                  e.target.style.boxShadow = "0 0 0 2px rgba(66,214,116,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = ICON_BORDER;
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 h-11 rounded-full text-sm font-bold transition-all group"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 4px 16px rgba(66,214,116,0.30)",
                }}
              >
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
            <p className="text-xs mt-3" style={{ color: DIM_COLOR }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${DIVIDER}` }}
        >
          <p
            className="text-xs order-2 md:order-1"
            style={{ color: DIM_COLOR }}
          >
            © {currentYear} Alocodes Inc. All rights reserved.
          </p>

          {/* Legal links */}
          <ul className="flex flex-wrap justify-center gap-6 text-xs order-1 md:order-2">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/support/terms-of-service", label: "Terms of Service" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-colors"
                  style={{ color: DIMMER_COLOR }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = DIMMER_COLOR)
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Utility icons */}
          <div className="flex gap-2 order-3">
            {[
              {
                href: "https://alocodes.com",
                Icon: Globe,
                label: "Visit Website",
              },
              {
                href: "mailto:hello@alocodes.com",
                Icon: Mail,
                label: "Email Us",
              },
              { href: "/sitemap", Icon: Share2, label: "Sitemap" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: ICON_BG,
                  border: `1px solid ${ICON_BORDER}`,
                  color: DIMMER_COLOR,
                }}
                aria-label={label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = ICON_HOVER_BG;
                  e.currentTarget.style.borderColor = ICON_HOVER_BORDER;
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = ICON_BG;
                  e.currentTarget.style.borderColor = ICON_BORDER;
                  e.currentTarget.style.color = DIMMER_COLOR;
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
