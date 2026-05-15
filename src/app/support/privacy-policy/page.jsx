"use client";

import React, { useEffect, useState } from "react";
import {
  Eye,
  Database,
  Share2,
  Lock,
  UserCheck,
  RefreshCw,
  Phone,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    icon: Database,
    content: (
      <>
        <p>
          We collect information you provide directly to us when you create an
          account, enroll in a course, or contact us for support. This includes:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Account data:</strong> name, email address, password, and
            profile picture.
          </li>
          <li>
            <strong>Payment data:</strong> billing address and payment method
            details (processed securely via our payment provider).
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, courses accessed,
            progress, and time spent on the Platform.
          </li>
          <li>
            <strong>Device data:</strong> IP address, browser type, operating
            system, and referring URLs.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    icon: Eye,
    content: (
      <>
        <p>
          Alocodes uses the information we collect to operate, improve, and
          personalise the Platform. Specifically, we use your data to:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Create and manage your account and course enrollments.</li>
          <li>Process payments and send receipts or invoices.</li>
          <li>
            Send transactional emails such as password resets and course
            updates.
          </li>
          <li>
            Analyse usage patterns to improve content and platform performance.
          </li>
          <li>
            Detect and prevent fraud, abuse, or violations of our Terms of
            Service.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    number: "03",
    title: "Sharing of Information",
    icon: Share2,
    content: (
      <>
        <p>
          We do not sell your personal information. We may share your data only
          in the following limited circumstances:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Service providers:</strong> trusted third parties that help
            us operate the Platform (e.g. payment processors, email services,
            analytics tools).
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law,
            regulation, or valid legal process.
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger,
            acquisition, or sale of assets, your data may be transferred to the
            successor entity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    number: "04",
    title: "Data Security",
    icon: Lock,
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures to protect
          your personal information against unauthorised access, alteration,
          disclosure, or destruction. All data in transit is encrypted via TLS,
          and passwords are stored using industry-standard hashing algorithms.
        </p>
        <p>
          However, no method of transmission over the internet is 100% secure.
          We encourage you to use a strong, unique password and to notify us
          immediately if you suspect any unauthorised access to your account.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights",
    icon: UserCheck,
    content: (
      <>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Access:</strong> request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Correction:</strong> ask us to correct inaccurate or
            incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> request that we delete your account and
            associated data.
          </li>
          <li>
            <strong>Portability:</strong> receive your data in a
            machine-readable format.
          </li>
          <li>
            <strong>Opt-out:</strong> unsubscribe from marketing emails at any
            time via the link in any email we send.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "updates",
    number: "06",
    title: "Policy Updates",
    icon: RefreshCw,
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable law. When we make material changes, we
          will notify you by email or by posting a prominent notice on the
          Platform before the changes take effect.
        </p>
        <p>
          Your continued use of the Platform after the effective date of the
          revised policy constitutes your acceptance of the changes.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "07",
    title: "Contact Us",
    icon: Phone,
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <a
            href="mailto:alocodes2@gmail.com"
            className="text-primary border-b border-primary/30 hover:border-primary transition-colors"
          >
            alocodes2@gmail.com
          </a>
          . We will respond within 48 hours.
        </p>
        <p>
          For data deletion or portability requests, please include your full
          name and registered email address so we can verify your identity.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("information-we-collect");

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen text-foreground font-sans">
      {/* Hero */}
      <div className="border-b border-border px-6 pt-24 pb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-md font-medium text-muted-foreground">
          Last updated May 07, 2026 · Effective immediately
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-8 flex gap-14 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0 sticky top-24">
          <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground mb-3 pl-1">
            Contents
          </p>
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-md font-medium transition-colors
                    ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeSection === s.id ? "bg-primary" : "bg-current opacity-40"}`}
                  />
                  {s.number} — {s.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Article */}
        <article className="flex-1 flex flex-col gap-8">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                {/* Section header */}
                <div className="flex items-center gap-2 mb-3 pb-4 border-b border-border">
                  <span className="text-[14px] font-bold text-primary tracking-wide tabular-nums">
                    {s.number}
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={15} />
                  </span>
                  <h2 className="text-lg font-bold text-foreground">
                    {s.title}
                  </h2>
                </div>

                {/* Body */}
                <div
                  className="text-sm leading-6 font-medium text-muted-foreground space-y-1 bg-card border border-border rounded-2xl px-6 py-3
                  [&_strong]:text-foreground [&_strong]:font-semibold
                  [&_em]:text-foreground/70
                  [&_ul]:space-y-2
                  [&_li]:flex [&_li]:gap-2.5 [&_li]:items-start"
                >
                  {s.content}
                </div>
              </section>
            );
          })}

          {/* Footer note */}
          <div className="border-t border-border pt-10 text-sm font-bold text-muted-foreground text-center">
            Your privacy matters to us. Questions?{" "}
            <a
              href="mailto:alocodes2@gmail.com"
              className="text-primary border-b border-primary/30 hover:border-primary transition-colors"
            >
              Contact us
            </a>
            .
          </div>
        </article>
      </div>
    </div>
  );
}
