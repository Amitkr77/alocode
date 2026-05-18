"use client";

import React, { useEffect, useState } from "react";
import {
  Shield,
  CreditCard,
  FileText,
  Phone,
  AlertCircle,
  BookOpen,
  Users,
  Lock,
  Link,
  Server,
  Award,
  RefreshCw,
  Scale,
  UserX,
  ArrowLeftRight,
  CheckCircle,
  Book,
  Info,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    number: "00",
    title: "Introduction",
    icon: BookOpen,
    content: (
      <>
        <p>
          Welcome to <strong>Alocodes.in</strong> – Powered by{" "}
          <strong>Alomonx Technology</strong>. These Terms and Conditions
          ("Terms") govern your access to and use of our website, courses,
          workshops, applications, learning platform, and related services
          provided by Alocodes.in, powered by Alomonx Technologies ("Company",
          "we", "our", or "us").
        </p>
        <p>
          By accessing or using our platform, you agree to comply with and be
          legally bound by these Terms. If you do not agree with any part of
          these Terms, you should not use our platform or services.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    number: "01",
    title: "Definitions",
    icon: Book,
    content: (
      <>
        <p>
          Unless the context otherwise requires, the following terms shall have
          the meanings assigned below:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <strong>Platform</strong> refers to the website, applications,
            learning management systems, and digital services operated by
            Alocodes.in.
          </li>
          <li>
            <strong>User</strong> means any individual who accesses, browses,
            registers, or uses our platform.
          </li>
          <li>
            <strong>Student</strong> means a user who enrolls in any course,
            internship, workshop, training, or certification program offered
            through Alocodes.in.
          </li>
          <li>
            <strong>Courses</strong> means educational programs, online classes,
            workshops, bootcamps, internships, or learning materials available
            on the platform.
          </li>
          <li>
            <strong>Content</strong> means videos, text, graphics, coding
            material, projects, assignments, software, presentations,
            downloadable files, or any educational material available on the
            platform.
          </li>
          <li>
            <strong>Course Fee</strong> means the amount payable for enrolling
            in a course or service.
          </li>
          <li>
            <strong>Third-Party Services</strong> means payment gateways,
            communication tools, hosting providers, or any external services
            integrated into the platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptance",
    number: "02",
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content: (
      <>
        <p>
          By registering, accessing, or using our platform, you confirm that:
        </p>
        <ul className="mt-2 space-y-2">
          <li>You have read and understood these Terms.</li>
          <li>You are legally capable of entering into a binding agreement.</li>
          <li>You agree to comply with all applicable laws and regulations.</li>
          <li>
            If you are below 18 years of age, your parent or legal guardian has
            consented to your use of the platform.
          </li>
        </ul>
        <p>
          These Terms constitute a legally binding agreement between you and
          Alocodes.in.
        </p>
      </>
    ),
  },
  {
    id: "user-accounts",
    number: "03",
    title: "User Accounts",
    icon: Users,
    content: (
      <>
        <p>
          To access certain services, users may be required to create an
          account. You agree that:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            The information provided during registration is accurate and
            complete.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials.
          </li>
          <li>
            You are responsible for all activities conducted through your
            account.
          </li>
          <li>
            You will notify us immediately if you suspect unauthorized access to
            your account.
          </li>
        </ul>
        <p>
          Alocodes.in reserves the right to suspend or terminate accounts that
          provide false information or violate these Terms.
        </p>
      </>
    ),
  },
  {
    id: "course-access",
    number: "04",
    title: "Course Access and Usage Rights",
    icon: FileText,
    content: (
      <>
        <p>
          All courses and educational content provided by Alocodes.in are
          intended solely for personal learning and educational purposes. Users
          are strictly prohibited from:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Copying, reproducing, or redistributing course material.</li>
          <li>Recording live classes without permission.</li>
          <li>Sharing account credentials with others.</li>
          <li>Uploading or selling course content on third-party platforms.</li>
          <li>
            Modifying or creating derivative works from our educational
            material.
          </li>
        </ul>
        <p>
          All intellectual property rights related to course content remain the
          exclusive property of Alocodes.in.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    number: "05",
    title: "Payments & Refund Policy",
    icon: CreditCard,
    content: (
      <>
        <p>
          Users agree to pay all applicable course fees before accessing paid
          services.
        </p>
        <p>
          <strong>Payment Terms</strong>
        </p>
        <ul className="mt-1 space-y-2">
          <li>
            Payments may be processed through secure third-party payment
            gateways.
          </li>
          <li>
            Alocodes.in does not store sensitive banking or card information.
          </li>
          <li>
            Applicable taxes may be charged according to government regulations.
          </li>
        </ul>
        <p>
          <strong>Refund Policy</strong>
        </p>
        <ul className="mt-1 space-y-2">
          <li>Once enrolled, course fees are generally non-refundable.</li>
          <li>
            Refunds, if applicable, will only be processed according to the
            specific refund policy mentioned for a course.
          </li>
          <li>
            No refunds will be issued after course access has been granted.
          </li>
          <li>Self-paced and downloadable programs are non-refundable.</li>
          <li>
            Refund requests made due to lack of participation or non-attendance
            will not be accepted.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "batch-transfers",
    number: "06",
    title: "Batch Transfers and Course Changes",
    icon: ArrowLeftRight,
    content: (
      <>
        <p>
          Students may request a course transfer or batch change subject to
          approval by Alocodes.in.
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            Requests must be submitted before the commencement of the batch.
          </li>
          <li>Only one transfer request may be allowed.</li>
          <li>Additional fees may apply for course upgrades or transfers.</li>
          <li>Transfer approvals are subject to seat availability.</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-conduct",
    number: "07",
    title: "User Conduct",
    icon: Shield,
    content: (
      <>
        <p>
          All users are expected to maintain respectful and professional
          behavior while using the platform. Users shall not:
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            Harass, abuse, threaten, or insult other users, instructors, or
            staff.
          </li>
          <li>Upload harmful, illegal, defamatory, or offensive content.</li>
          <li>Share misleading or false information.</li>
          <li>Violate intellectual property rights.</li>
          <li>Engage in hacking, spamming, or unauthorized access attempts.</li>
          <li>
            Post content promoting hate speech, discrimination, violence, or
            unlawful activities.
          </li>
        </ul>
        <p>
          Violation of these rules may result in immediate suspension or
          termination of access without refund.
        </p>
      </>
    ),
  },
  {
    id: "certificates",
    number: "08",
    title: "Certificates and Internship Programs",
    icon: Award,
    content: (
      <>
        <p>
          Alocodes.in may provide certificates, internship opportunities, or
          project-based learning experiences.
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            Certificates will only be issued after successful completion of
            course requirements.
          </li>
          <li>
            Internship opportunities are subject to eligibility and performance.
          </li>
          <li>Alocodes.in does not guarantee job placement or employment.</li>
          <li>Misuse or alteration of certificates is strictly prohibited.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "09",
    title: "Intellectual Property Rights",
    icon: FileText,
    content: (
      <>
        <p>
          All content, branding, logos, graphics, videos, source code, and
          educational material available on Alocodes.in are protected by
          intellectual property laws. Users may not:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Copy or reproduce platform content for commercial purposes.</li>
          <li>Use our logo or branding without written permission.</li>
          <li>Reverse engineer or exploit platform software or systems.</li>
        </ul>
        <p>Unauthorized use may lead to legal action.</p>
      </>
    ),
  },
  {
    id: "privacy",
    number: "10",
    title: "Privacy and Information Security",
    icon: Lock,
    content: (
      <>
        <p>
          We value the privacy and security of user data. By using our platform,
          you consent to the collection and use of information in accordance
          with our Privacy Policy. We take reasonable measures to:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Protect user information from unauthorized access.</li>
          <li>Maintain secure systems and data storage.</li>
          <li>
            Improve user experience through analytics and platform optimization.
          </li>
        </ul>
        <p>
          However, no online platform can guarantee complete security. Users
          share information at their own risk.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "11",
    title: "Third-Party Links and Services",
    icon: Link,
    content: (
      <>
        <p>
          Our platform may include links to third-party websites or services.
          Alocodes.in:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Does not control third-party websites.</li>
          <li>Is not responsible for external content or policies.</li>
          <li>
            Shall not be liable for losses arising from third-party services.
          </li>
        </ul>
        <p>Users access third-party platforms at their own discretion.</p>
      </>
    ),
  },
  {
    id: "platform-availability",
    number: "12",
    title: "Platform Availability",
    icon: Server,
    content: (
      <>
        <p>
          We strive to provide uninterrupted access to our services. However,
          Alocodes.in does not guarantee that:
        </p>
        <ul className="mt-2 space-y-2">
          <li>The platform will always be available.</li>
          <li>Services will be error-free or uninterrupted.</li>
          <li>Technical issues will never occur.</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue services at
          any time without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "13",
    title: "Limitation of Liability",
    icon: AlertCircle,
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Alocodes.in shall not be
          liable for:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Any indirect, incidental, or consequential damages.</li>
          <li>Loss of data, revenue, or business opportunities.</li>
          <li>Technical interruptions or service failures.</li>
          <li>User reliance on course outcomes or career expectations.</li>
        </ul>
        <p>Users agree that their use of the platform is at their own risk.</p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "14",
    title: "Indemnification",
    icon: Info,
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Alocodes.in, its founders,
          employees, trainers, partners, and affiliates from any claims,
          damages, liabilities, losses, or expenses arising from:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Your misuse of the platform.</li>
          <li>Violation of these Terms.</li>
          <li>Infringement of third-party rights.</li>
          <li>Unauthorized sharing of platform content.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    number: "15",
    title: "Termination of Access",
    icon: UserX,
    content: (
      <>
        <p>
          Alocodes.in reserves the right to suspend or terminate access to the
          platform without prior notice if:
        </p>
        <ul className="mt-2 space-y-2">
          <li>Users violate these Terms.</li>
          <li>Fraudulent activity is detected.</li>
          <li>Payment obligations are not fulfilled.</li>
          <li>Platform misuse or abuse occurs.</li>
        </ul>
        <p>
          Termination may result in permanent removal of account access and
          course materials.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "16",
    title: "Updates to Terms",
    icon: RefreshCw,
    content: (
      <>
        <p>We may revise or update these Terms from time to time.</p>
        <ul className="mt-2 space-y-2">
          <li>Updated Terms will be published on the platform.</li>
          <li>
            Continued use of the platform after updates constitutes acceptance
            of revised Terms.
          </li>
          <li>Users are encouraged to review these Terms periodically.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "17",
    title: "Governing Law",
    icon: Scale,
    content: (
      <>
        <p>
          These Terms shall be governed and interpreted in accordance with the
          laws of India. Any disputes arising in relation to these Terms shall
          be subject to the jurisdiction of the courts located in India.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "18",
    title: "Contact Information",
    icon: Phone,
    content: (
      <>
        <p>
          For any questions, complaints, or concerns regarding these Terms,
          users may contact:
        </p>
        <p>
          <strong>Alocodes.in</strong>
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
    number: "19",
    title: "Consent",
    icon: CheckCircle,
    content: (
      <>
        <p>
          By accessing or using Alocodes.in, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions in their
          entirety.
        </p>
      </>
    ),
  },
];

export default function TermsOfService() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-md font-medium text-muted-foreground">
          Alocodes.in · Powered by Alomonx Technology · Effective immediately
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex gap-14 items-start">
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
            By using Alocodes.in you agree to these terms. Questions?{" "}
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
