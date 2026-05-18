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
  CheckCircle,
  MessageSquare,
  Cookie,
  Link,
  Baby,
  Archive,
  Monitor,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    number: "00",
    title: "Introduction",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          This Privacy Policy forms part of the Terms and Conditions of{" "}
          <strong>Alocodes.in</strong>, powered by{" "}
          <strong>Alomonx Technologies</strong> ("Company", "we", "our", or
          "us"). By accessing or using our website, applications, courses,
          workshops, or services, you expressly agree to the collection, use,
          storage, and processing of your personal information as described in
          this Privacy Policy.
        </p>
        <p>
          We are committed to protecting your privacy and ensuring the security
          of your personal information. Please read this Privacy Policy
          carefully to understand how your information is collected and used.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Privacy Policy",
    icon: CheckCircle,
    content: (
      <>
        <p>
          By using our platform, website, mobile applications, or services, you:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Agree to the terms of this Privacy Policy.</li>
          <li>Consent to the collection and processing of your information.</li>
          <li>
            Acknowledge that your information may be used as described in this
            policy.
          </li>
        </ul>
        <p>
          If you do not agree with this Privacy Policy, please do not use our
          platform or services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    icon: Database,
    content: (
      <>
        <p>
          To provide our educational services effectively, we may collect the
          following information:
        </p>
        <p>
          <strong>Personal Information</strong>
        </p>
        <ul className="mt-1 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Mobile number</li>
          <li>Date of birth or age verification</li>
          <li>Billing and payment details</li>
          <li>Educational background</li>
          <li>Profile photographs (optional)</li>
          <li>Social media account information (if linked)</li>
        </ul>
        <p>
          <strong>Technical Information</strong>
        </p>
        <ul className="mt-1 space-y-2">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Login activity</li>
          <li>Usage behavior and analytics</li>
        </ul>
        <p>
          <strong>Course and Learning Data</strong>
        </p>
        <ul className="mt-1 space-y-2">
          <li>Course enrollments</li>
          <li>Progress reports</li>
          <li>Assignments and submissions</li>
          <li>Internship participation</li>
          <li>Certificates earned</li>
          <li>Feedback and reviews</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "03",
    title: "Use of Personal Information",
    icon: Eye,
    content: (
      <>
        <p>We use your information for purposes including:</p>
        <ul className="mt-2 space-y-2">
          <li>Providing access to courses and educational services.</li>
          <li>Managing user accounts and authentication.</li>
          <li>Processing payments and transactions.</li>
          <li>Improving platform functionality and user experience.</li>
          <li>
            Sending important updates, notifications, and support messages.
          </li>
          <li>
            Providing internship, certification, and career-related services.
          </li>
          <li>Conducting research, analytics, and performance improvements.</li>
          <li>Preventing fraud, abuse, and unauthorized activities.</li>
          <li>Complying with legal obligations.</li>
        </ul>
        <p>
          We only collect and use information necessary to provide our services
          efficiently.
        </p>
      </>
    ),
  },
  {
    id: "communication",
    number: "04",
    title: "Communication and Marketing",
    icon: MessageSquare,
    content: (
      <>
        <p>
          We may communicate with users through emails, SMS notifications, phone
          calls, WhatsApp messages, and push notifications. These communications
          may include:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Course updates and technical support</li>
          <li>Announcements and promotional offers</li>
          <li>Internship or placement opportunities</li>
          <li>Newsletters and educational content</li>
        </ul>
        <p>
          Users may opt out of promotional communications at any time. However,
          administrative and service-related communications may still be
          necessary.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    content: (
      <>
        <p>
          Alocodes.in may use cookies, web beacons, pixels, and similar tracking
          technologies to improve user experience. Cookies may help us:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Remember user preferences</li>
          <li>Improve website performance</li>
          <li>Analyze traffic and usage trends</li>
          <li>Provide personalized content</li>
          <li>Maintain secure login sessions</li>
        </ul>
        <p>
          Users can disable cookies through browser settings; however, some
          platform features may not function properly.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "06",
    title: "Data Sharing and Disclosure",
    icon: Share2,
    content: (
      <>
        <p>
          We do not sell users' personal information to third parties. However,
          we may share information with:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Payment gateway providers</li>
          <li>Hosting and cloud service providers</li>
          <li>Internship and hiring partners</li>
          <li>Technical support providers</li>
          <li>Government authorities when legally required</li>
          <li>Service providers assisting in business operations</li>
        </ul>
        <p>
          All such third parties are expected to maintain confidentiality and
          data protection standards.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "07",
    title: "Third-Party Services and Links",
    icon: Link,
    content: (
      <>
        <p>
          Our platform may contain links to third-party websites, applications,
          or services. Please note:
        </p>
        <ul className="mt-2 space-y-2">
          <li>We do not control third-party platforms.</li>
          <li>Their privacy practices may differ from ours.</li>
          <li>We are not responsible for their content or policies.</li>
        </ul>
        <p>
          Users are encouraged to review third-party privacy policies before
          sharing information.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "08",
    title: "Data Security",
    icon: Lock,
    content: (
      <>
        <p>
          The security of user information is important to us. We implement
          reasonable technical and organizational measures to protect personal
          data against unauthorized access, data loss, misuse, alteration, and
          disclosure.
        </p>
        <p>
          Although we strive to protect your information, no internet-based
          system can guarantee complete security. Users are responsible for
          maintaining the confidentiality of their passwords and account
          credentials.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    number: "09",
    title: "Children's Privacy",
    icon: Baby,
    content: (
      <>
        <p>
          Alocodes.in does not knowingly collect personal information from
          children below the age permitted under applicable law without parental
          consent.
        </p>
        <p>
          If a parent or guardian believes that a child has provided personal
          information without consent, they may contact us to request deletion
          of such information.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: "10",
    title: "Retention of Information",
    icon: Archive,
    content: (
      <>
        <p>We retain personal information only for as long as necessary to:</p>
        <ul className="mt-2 space-y-2">
          <li>Provide services</li>
          <li>Maintain legal compliance</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
          <li>Improve educational experiences</li>
        </ul>
        <p>
          When information is no longer required, we may securely delete or
          anonymize it.
        </p>
      </>
    ),
  },
  {
    id: "monitoring",
    number: "11",
    title: "Monitoring and Platform Usage",
    icon: Monitor,
    content: (
      <>
        <p>We may monitor platform activity to:</p>
        <ul className="mt-2 space-y-2">
          <li>Improve educational services</li>
          <li>Ensure compliance with platform policies</li>
          <li>Prevent unauthorized usage</li>
          <li>Detect technical or security issues</li>
          <li>Enhance user experience</li>
        </ul>
        <p>
          Monitoring may include usage analytics, login activity, and
          interaction tracking.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: "12",
    title: "User Rights and Choices",
    icon: UserCheck,
    content: (
      <>
        <p>Users may have the right to:</p>
        <ul className="mt-2 space-y-2">
          <li>Access their personal information</li>
          <li>Request corrections or updates</li>
          <li>Withdraw consent where applicable</li>
          <li>Request deletion of data</li>
          <li>Manage communication preferences</li>
        </ul>
        <p>
          Requests regarding personal information may be submitted through our
          support channels.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    number: "13",
    title: "Confidentiality",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          All employees, trainers, affiliates, and service providers associated
          with Alocodes.in are expected to maintain confidentiality regarding
          user data.
        </p>
        <p>
          Personal information is only accessible to authorized personnel for
          legitimate operational purposes.
        </p>
      </>
    ),
  },
  {
    id: "location",
    number: "14",
    title: "Location Information",
    icon: MapPin,
    content: (
      <>
        <p>
          We may collect approximate location information through IP addresses
          to:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Customize educational experiences</li>
          <li>Improve regional services</li>
          <li>Enhance security and fraud prevention</li>
        </ul>
        <p>
          We do not collect precise GPS location data unless explicitly
          permitted by the user.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "15",
    title: "Changes to Privacy Policy",
    icon: RefreshCw,
    content: (
      <>
        <p>
          As technology and services evolve, we may update this Privacy Policy
          from time to time.
        </p>
        <ul className="mt-2 space-y-2">
          <li>Updated versions will be posted on the platform.</li>
          <li>
            Significant changes may be communicated through email or
            notifications.
          </li>
          <li>
            Continued use of the platform after updates constitutes acceptance
            of revised policies.
          </li>
        </ul>
        <p>Users are encouraged to review this Privacy Policy periodically.</p>
      </>
    ),
  },
  {
    id: "legal-compliance",
    number: "16",
    title: "Legal Compliance",
    icon: Scale,
    content: (
      <>
        <p>We may disclose personal information if required to:</p>
        <ul className="mt-2 space-y-2">
          <li>Comply with applicable laws</li>
          <li>Respond to legal requests</li>
          <li>Enforce our Terms and Conditions</li>
          <li>Protect platform security and user rights</li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    number: "17",
    title: "Contact Information",
    icon: Phone,
    content: (
      <>
        <p>
          For questions, complaints, or requests regarding this Privacy Policy,
          users may contact:
        </p>
        <p>
          <strong>Alocodes.in</strong> – Powered by Alomonx Technologies
          <br />
          Email:{" "}
          <a
            href="mailto:alocodes.edu@gmail.com"
            className="text-primary border-b border-primary/30 hover:border-primary transition-colors"
          >
            alocodes.edu@gmail.com
          </a>
          <br />
          Website:{" "}
          <a
            href="https://alocodes.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-b border-primary/30 hover:border-primary transition-colors"
          >
            https://alocodes.in
          </a>
        </p>
      </>
    ),
  },
  {
    id: "consent",
    number: "18",
    title: "Consent",
    icon: CheckCircle,
    content: (
      <>
        <p>
          By accessing or using Alocodes.in, you acknowledge that you have read,
          understood, and agreed to this Privacy Policy in its entirety.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

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
          Alocodes.in · Powered by Alomonx Technology · Effective immediately
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
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors
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
              href="mailto:alocodes.edu@gmail.com"
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
