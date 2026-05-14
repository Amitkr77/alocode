"use client";
import React from "react";
import {
  ArrowRight,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const card = {
    background: "var(--footer-card-bg)",
    border: "1px solid var(--footer-card-border)",
    borderRadius: "24px",
    backdropFilter: "blur(16px)",
    padding: "20px 28px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) return;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        alert("Successfully subscribed!");
        e.target.reset();
      } else {
        const d = await res.json();
        alert(`Failed: ${d.message || "Unknown error"}`);
      }
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <footer
      style={{
        fontFamily: "system-ui, sans-serif",
        paddingTop: "40px",
        paddingBottom: "0px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* ── Row 1: Brand tagline card ── */}
        <div
          style={{
            ...card,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <Link href="/">
            <img
              src="/Aloc_logo1.png"
              alt="Alocode logo"
              className="footer-logo"
              style={{ height: "40px", width: "auto" }}
            />
          </Link>
          <p
            className="footer-tagline"
            style={{
              fontSize: "clamp(14px, 2.5vw, 24px)",
              fontWeight: 600,
              color: "var(--footer-text)",
              margin: 0,
              letterSpacing: "-0.5px",
              fontFamily: "'Georgia', serif",
            }}
          >
            Powered by{" "}
            <span style={{ color: "var(--primary)" }}>Alomonx Technology</span>
          </p>
        </div>

        {/* ── Row 2: Sitemap card ── */}
        <div style={{ ...card, padding: "20px" }}>
          <div
            className="footer-sitemap-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Site Map + address */}
            <div>
              <p
                className="footer-section-label"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--footer-text)",
                  marginBottom: "8px",
                }}
              >
                Site Map
              </p>
              <p
                className="footer-sitemap-heading"
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "var(--footer-text)",
                  lineHeight: 1.2,
                  marginBottom: "14px",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Find all our links here
              </p>
              <p
                className="footer-section-label"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--footer-text)",
                  marginBottom: "6px",
                }}
              >
                Our Office
              </p>
              <p
                className="footer-address"
                style={{
                  fontSize: "12px",
                  color: "var(--footer-text)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Alomonx Technology Pvt. Ltd.
                <br />
                Kurji, Digha
                <br />
                Patna, Bihar 800010
                <br />
                India
              </p>
            </div>

            {/* Explore */}
            <div>
              <p
                className="footer-section-label"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--footer-text)",
                  marginBottom: "10px",
                }}
              >
                Explore
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/placement", label: "Placement" },
                  { href: "/faq", label: "FAQ" },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="footer-link"
                      style={{
                        fontSize: "14px",
                        color: "var(--footer-text)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--footer-text)")
                      }
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <p
                className="footer-section-label"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--footer-text)",
                  marginBottom: "10px",
                }}
              >
                Programs
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[
                  { href: "/courses?category=Design", label: "Design" },
                  { href: "/courses?category=Full Stack", label: "Web Development" },
                  { href: "/courses?category=Data Science", label: "Data Science" },
                  { href: "/courses?category=Application Development", label: "App Development" },
                  { href: "/courses", label: "Browse All" },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="footer-link"
                      style={{
                        fontSize: "14px",
                        color: "var(--footer-text)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--footer-text)")
                      }
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p
                className="footer-section-label"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--footer-text)",
                  marginBottom: "16px",
                }}
              >
                Stay Updated
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--footer-text)",
                  marginBottom: "12px",
                  lineHeight: 1.5,
                }}
              >
                Get updates on new courses and exclusive offers.
              </p>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  style={{
                    background: "rgba(66, 214, 116, 0.06)",
                    border: "1px solid rgba(66, 214, 116, 0.15)",
                    borderRadius: "10px",
                    padding: "9px 14px",
                    fontSize: "13px",
                    color: "var(--footer-text)",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--primary)";
                    e.target.style.boxShadow = "0 0 0 2px rgba(66,214,116,0.10)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(66, 214, 116, 0.15)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    border: "none",
                    borderRadius: "30px",
                    padding: "9px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    width: "100%",
                  }}
                >
                  Subscribe{" "}
                  <ArrowRight style={{ width: "14px", height: "14px" }} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Row 3: Social media card ── */}
        <div
          style={{
            ...card,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <p
            className="footer-social-label"
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "var(--footer-text)",
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Find us on{" "}
            <span style={{ color: "var(--primary)" }}>social media</span>
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              { href: "https://linkedin.com/company/alocodes", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:hello@alocodes.com", Icon: Mail, label: "Mail" },
              { href: "https://instagram.com/alocodes", Icon: Instagram, label: "Instagram" },
              { href: "https://youtube.com/@alocodes", Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-pill"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  border: "1px solid var(--footer-card-border)",
                  background: "rgba(66, 214, 116, 0.08)",
                  color: "var(--footer-text)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--footer-card-border)";
                  e.currentTarget.style.color = "var(--footer-text)";
                }}
              >
                <Icon
                  className="footer-social-icon"
                  style={{ width: "15px", height: "15px" }}
                />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Row 4: Bottom bar card ── */}
        <div
          style={{
            ...card,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            padding: "14px 20px",
          }}
        >
          <p
            className="footer-bottom-text"
            style={{ fontSize: "12px", color: "var(--footer-text)", margin: 0 }}
          >
            © {currentYear} Alocodes Inc. | Alomonx Technology Pvt Ltd. All
            rights reserved.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/support/terms-of-service", label: "Terms of Service" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="footer-bottom-text"
                style={{
                  fontSize: "12px",
                  color: "var(--footer-text)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--footer-text)")
                }
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Row 5: Brand watermark ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            paddingRight: "0px",
            overflow: "hidden",
          }}
        >
          <img
            src="/footer_logo_3.png"
            alt=""
            aria-hidden="true"
            className="footer-watermark"
            style={{
              height: "270px",
              width: "1150px",
              opacity: 0.8,
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;