"use client";
import {
  Check,
  Search,
  Lightbulb,
  Shield as Security,
  CreditCard as Payments,
  IndianRupee as CurrencyExchange,
  Mail,
  MessageSquare as MessageCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";

// Reusable Navigation Item with active state
const NavItem = ({ href, number, title, description, isActive }) => (
  <a
    href={href}
    className={`
      group flex items-center gap-4 rounded-xl p-4 transition-all cursor-pointer relative
      ${
        isActive
          ? "border border-primary/20 bg-primary/5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
          : "border border-surface-dark bg-transparent hover:bg-surface-dark/50 hover:border-primary/30"
      }
    `}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <div
      className={`
        flex items-center justify-center size-6 rounded-full border-2 transition-all duration-300
        ${
          isActive
            ? "border-primary bg-primary text-background-dark"
            : "border-surface-dark group-hover:border-primary/50"
        }
      `}
    >
      {isActive && <Check className="size-4" />}
    </div>
    <div className="flex flex-col">
      <span
        className={`text-sm ${
          isActive ? "font-bold" : "font-medium"
        } text-white`}
      >
        {number}. {title}
      </span>
      <span className="text-xs text-text-muted">{description}</span>
    </div>
  </a>
);

// Section Header
const SectionHeader = ({ number, title }) => (
  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 scroll-mt-32">
    <span className="flex items-center justify-center size-8 rounded-full bg-surface-dark text-primary text-sm">
      {number}
    </span>
    {title}
  </h2>
);

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      number: "1",
      title: "Introduction",
      desc: "Welcome to Alocodes",
    },
    {
      id: "responsibilities",
      number: "2",
      title: "User Responsibilities",
      desc: "Account security & conduct",
    },
    {
      id: "intellectual-property",
      number: "3",
      title: "Intellectual Property",
      desc: "Course material rights",
    },
    {
      id: "payments",
      number: "4",
      title: "Payments & Refunds",
      desc: "Subscription rules",
    },
    {
      id: "liability",
      number: "5",
      title: "Liability & Disclaimers",
      desc: "Legal protections",
    },
    {
      id: "contact",
      number: "6",
      title: "Contact Support",
      desc: "Get help & support",
    },
  ];

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background-dark text-white font-display antialiased selection:bg-primary selection:text-background-dark min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10">
        <div className="w-full max-w-7xl flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-end border-b border-surface-dark pb-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Terms of Service
              </h1>
              <p className="text-text-muted text-lg leading-relaxed">
                Last Updated: January 07, 2026. <br />
                Please read these terms carefully before using our platform.
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[320px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-text-muted pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search terms (e.g. Refund, Privacy)..."
                  aria-label="Search terms of service"
                  className="w-full h-12 bg-surface-dark rounded-full pl-12 pr-4 text-sm font-medium placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-dark/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 flex flex-col gap-4">
                <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-2 pl-4">
                  Contents
                </p>

                {sections.map((section) => (
                  <NavItem
                    key={section.id}
                    href={`#${section.id}`}
                    number={section.number}
                    title={section.title}
                    description={section.desc}
                    isActive={activeSection === section.id}
                  />
                ))}

                <div className="mt-4 p-4 rounded-xl bg-surface-dark/30 border border-surface-dark">
                  <p className="text-xs text-text-muted mb-3">
                    Need clarification?
                  </p>
                  <button className="w-full py-2 px-4 rounded-full bg-surface-dark text-white text-sm font-bold hover:bg-white hover:text-background-dark transition-all">
                    Contact Legal Team
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl prose prose-invert prose-lg text-gray-300 space-y-12">
              {/* Introduction */}
              <section id="introduction">
                <SectionHeader number="1" title="Introduction" />
                <p className="mb-4">
                  Welcome to Alocodes. These Terms of Service ("Terms") govern
                  your access to and use of the Alocodes website, mobile
                  application, and all related services (collectively, the
                  "Platform"). By accessing or using the Platform, you agree to
                  be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you may not access or use
                  the Platform. We may modify these Terms at any time, and such
                  modifications shall be effective immediately upon posting.
                </p>
              </section>

              {/* User Responsibilities */}
              <section id="responsibilities">
                <SectionHeader number="2" title="User Responsibilities" />
                <div className="p-6 rounded-2xl mb-6 bg-surface-dark/30 border border-surface-dark">
                  <div className="flex gap-4">
                    <Security className="text-primary text-3xl shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        Account Security
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        You are responsible for maintaining the confidentiality
                        of your login credentials. Notify us immediately of any
                        unauthorized use. Alocodes is not liable for losses due
                        to your failure to secure your account.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  You agree not to use the Platform for unlawful purposes or to
                  interfere with its operation or access other users' accounts.
                </p>
              </section>

              {/* Key Takeaway */}
              <div
                className="relative rounded-2xl overflow-hidden bg-cover bg-center pt-[100px] shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(17,34,24,1) 0%, rgba(17,34,24,0.6) 50%, rgba(17,34,24,0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5IqH8sq9N6ODZFONVYA_0dV58kLevIOQpnyRHOBVRlcftVPctjl34jR6bWUi0b_cM4qOdYSQLxvXeQbCCGJ8paT6tA9a2Gvvig-ZCFgtTx_UsJlPiOrmyeYvBoBxYT-qKtZvl8SY05x7FtAgADEpYB_leC8K97sypsw9haGmVYLUpxab1wj5sqS0o1PkVjX-krY-IK65ko-73NbBAdg6EezbasCE3DjezeVhVOyY2L0K4k_aKbwAWdnan-sCmcPd2SdZJig5y9jmA")`,
                }}
              >
                <div className="absolute inset-0 bg-primary/10" />
                <div className="relative z-10 p-8 border-t border-primary/20 bg-background-dark/80 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="text-primary" />
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">
                      Key Takeaway
                    </p>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    License & Access
                  </h3>
                  <p className="text-gray-300 text-base font-medium">
                    Alocodes grants you a limited, non-exclusive license for
                    personal use only. Sharing credentials is strictly
                    prohibited and may result in immediate termination without
                    refund.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <section id="intellectual-property">
                <SectionHeader number="3" title="Intellectual Property" />
                <p className="mb-4">
                  All content on the Platform is the exclusive property of
                  Alocodes and protected by copyright, trademark, and other
                  laws.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-muted">
                  <li>
                    You may not reproduce, distribute, modify, or create
                    derivative works from Platform materials.
                  </li>
                  <li>
                    Course materials are for personal, non-commercial use only.
                  </li>
                </ul>
              </section>

              {/* Payments & Refunds */}
              <section id="payments">
                <SectionHeader number="4" title="Payments & Refunds" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface-dark/30 border border-surface-dark p-5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Payments className="text-primary" />
                      <h4 className="text-white font-bold">
                        Subscription Terms
                      </h4>
                    </div>
                    <p className="text-sm text-text-muted">
                      Subscriptions auto-renew unless cancelled 24 hours before
                      the billing period ends.
                    </p>
                  </div>
                  <div className="bg-surface-dark/30 border border-surface-dark p-5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <CurrencyExchange className="text-primary" />
                      <h4 className="text-white font-bold">Refund Policy</h4>
                    </div>
                    <p className="text-sm text-text-muted">
                      30-day money-back guarantee available for most course
                      purchases.
                    </p>
                  </div>
                </div>
                <p>
                  You warrant that you are authorized to use any payment method
                  provided.
                </p>
              </section>

              {/* Liability */}
              <section id="liability">
                <SectionHeader number="5" title="Liability & Disclaimers" />
                <p className="mb-4">
                  Alocodes and its affiliates shall not be liable for any
                  indirect, incidental, or consequential damages arising from
                  your use of the Platform.
                </p>
                <blockquote className="border-l-2 border-primary pl-4 py-1 italic text-sm text-text-muted">
                  The service is provided on an "AS IS" and "AS AVAILABLE" basis
                  without warranties of any kind.
                </blockquote>
              </section>

              {/* Contact Support - NEW SECTION */}
              <section id="contact">
                <SectionHeader number="6" title="Contact Support" />
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="text-primary text-3xl shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        Email Us
                      </h3>
                      <p className="text-text-muted">
                        For support or legal inquiries, reach out to us at:{" "}
                        <a
                          href="mailto:support@alocodes.com"
                          className="text-primary hover:underline"
                        >
                          support@alocodes.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MessageCircle className="text-primary text-3xl shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        Live Chat
                      </h3>
                      <p className="text-text-muted">
                        Available Monday–Friday, 9AM–6PM EST. Access chat from
                        the help icon in your dashboard.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-text-muted pt-4 border-t border-surface-dark">
                    We typically respond to emails within 24–48 hours. For
                    urgent billing issues, please use live chat.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
}
