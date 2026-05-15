import { notFound } from "next/navigation";
import courses from "@/lib/Courses";
import {
  BadgeCheck,
  Captions,
  Globe,
  Play,
  Star,
  StarHalf,
  Clock,
  Check,
  ArrowRight,
  Download,
  ChevronRight,
  Briefcase,
  Building2,
  Database,
  Award,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import EnrollWrapper from "@/components/EnrollWrapper";

export default async function CourseDetail({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <div
      className="overflow-x-hidden text-foreground"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative pt-22 pb-10 overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {course.badge?.text && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border"
                style={{
                  background: "rgba(66,214,116,0.10)",
                  color: "var(--primary)",
                  borderColor: "rgba(66,214,116,0.25)",
                }}
              >
                {course.badge.text}
              </span>
            )}
            {course.badge?.rating && (
              <span
                className="flex items-center gap-1 text-sm font-bold"
                style={{ color: "var(--primary)" }}
              >
                <Star
                  className="w-4 h-4"
                  style={{ fill: "var(--primary)", color: "var(--primary)" }}
                />
                {course.badge.rating}
                <span className="font-medium ml-1 text-muted-foreground">
                  ({course.badge.totalRatings})
                </span>
              </span>
            )}
            {course.badge?.lastUpdated && (
              <span
                className="text-sm pl-3 text-muted-foreground"
                style={{ borderLeft: "1px solid var(--border)" }}
              >
                Last updated {course.badge.lastUpdated}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tight max-w-4xl text-foreground"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {course.title}
          </h1>

          {course.description && (
            <p className="text-lg mb-4 max-w-3xl leading-relaxed text-muted-foreground">
              {course.description}
            </p>
          )}

          {/* Instructors */}
          {course.instructors && (
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-3">
                {course.instructors.map((ins) => (
                  <div
                    key={ins.name}
                    className="w-10 h-10 rounded-full border-2 overflow-hidden shrink-0"
                    style={{ borderColor: "var(--background)" }}
                  >
                    {ins.avatar ? (
                      <img
                        src={ins.avatar}
                        alt={ins.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{ background: "var(--card)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Created by{" "}
                  {course.instructors.map((i, idx) => (
                    <span key={i.name}>
                      <span style={{ color: "var(--primary)" }}>{i.name}</span>
                      {idx < course.instructors.length - 1 && " & "}
                    </span>
                  ))}
                </p>
                <p className="text-xs mt-0.5 text-muted-foreground">
                  {course.instructors.map((i) => i.role).join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 font-bold">
            {course.language?.audio && (
              <MetaPill icon={Globe}>{course.language.audio}</MetaPill>
            )}
            {course.language?.captions && (
              <MetaPill icon={Captions}>
                {course.language.captions.join(", ")}
              </MetaPill>
            )}
            <MetaPill icon={BadgeCheck}>Certificate of Completion</MetaPill>
            {course.level && (
              <MetaPill icon={BookOpen}>{course.level}</MetaPill>
            )}
            {course.duration && (
              <MetaPill icon={Clock}>{course.duration}</MetaPill>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid lg:grid-cols-3 gap-12">
        {/* ================= SIDEBAR ================= */}
        <aside className="lg:order-2">
          <div className="sticky top-24">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px rgba(15,45,26,0.10)",
              }}
            >
              {/* Preview thumbnail */}
              {course.previewVideo && (
                <div
                  className="relative aspect-video group cursor-pointer"
                  style={{ background: "var(--card)" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${course.previewVideo.thumbnail})`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(15,31,19,0.28)" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{
                        background: "var(--background)",
                        boxShadow: "0 4px 20px rgba(15,45,26,0.20)",
                      }}
                    >
                      <Play
                        size={24}
                        style={{
                          fill: "var(--primary)",
                          color: "var(--primary)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Pricing */}
              <EnrollWrapper
                pricing={course.pricing}
                curriculumSummary={course.curriculumSummary}
                sampleProjects={course.sampleProjects}
                courseTitle={course.title}
                courseSlug={course.slug} // ← add this
              />
            </div>

            {/* Download Brochure */}
            {/* <Link
              href={course.brochure?.fileUrl || `/brochure/${course.slug}`}
              target={course.brochure?.fileUrl ? "_blank" : undefined}
              rel={course.brochure?.fileUrl ? "noopener noreferrer" : undefined}
              className="mt-2 w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border transition-all"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <Download className="size-4" /> Download Brochure
            </Link> */}
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="lg:col-span-2 space-y-8">
          {/* ── Why Choose ── */}
          {course.whyChoose && (
            <section>
              <SectionLabel>Why This Program</SectionLabel>
              <SectionTitle>Why choose this course?</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {course.whyChoose.map((reason, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-start p-2 rounded-2xl border"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(66,214,116,0.12)",
                        border: "1px solid rgba(66,214,116,0.25)",
                      }}
                    >
                      <Lightbulb
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                    </div>
                    <span className="text-sm font-bold leading-relaxed text-muted-foreground">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Learning Outcomes ── */}
          {course.learningOutcomes && (
            <section
              className="rounded-3xl p-4 border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <SectionLabel>Course Goals</SectionLabel>
              <SectionTitle>What you'll learn</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-1 mt-1">
                {course.learningOutcomes.map((item) => (
                  <div key={item} className="flex gap-2 items-start">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-1.5 border"
                      style={{
                        background: "rgba(66,214,116,0.12)",
                        borderColor: "rgba(66,214,116,0.25)",
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: "var(--primary)" }}
                      />
                    </div>
                    <span className="text-sm font-bold leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Curriculum ── */}
          {course.curriculum && (
            <section>
              <SectionLabel>Curriculum</SectionLabel>
              <SectionTitle>Course modules</SectionTitle>
              {course.curriculumSummary && (
                <p className="text-sm text-muted-foreground mt-0 mb-3">
                  {course.curriculumSummary.totalModules} modules ·{" "}
                  {course.curriculumSummary.totalDuration}
                </p>
              )}
              <div className="flex flex-col gap-1 mt-2">
                {course.curriculum.map((mod) => (
                  <details
                    key={mod.module}
                    className="group rounded-2xl border overflow-hidden"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <summary
                      className="flex items-center justify-between px-4 py-2 cursor-pointer list-none"
                      style={{ background: "var(--card)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                          style={{
                            background: "rgba(66,214,116,0.12)",
                            color: "var(--primary)",
                          }}
                        >
                          {mod.module}
                        </span>
                        <span className="font-bold text-sm text-foreground">
                          {mod.title}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0 ml-4">
                        {mod.topics.length} topics
                      </span>
                    </summary>
                    <ul
                      className="px-8 py-1 space-y-1"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      {mod.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            className="w-3 h-3 shrink-0 mt-1.5"
                            style={{ color: "var(--primary)" }}
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* ── Sample Projects ── */}
          {course.sampleProjects && (
            <section>
              <SectionLabel>Hands-On Learning</SectionLabel>
              <SectionTitle>Sample projects</SectionTitle>
              <div className="flex flex-col gap-2 mt-2">
                {course.sampleProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-2xl border p-2"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-1 mb-1">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-black text-sm"
                        style={{
                          background: "rgba(66,214,116,0.12)",
                          color: "var(--primary)",
                        }}
                      >
                        {proj.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-md text-foreground">
                          {proj.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {proj.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
                              style={{
                                background: "var(--background)",
                                borderColor: "var(--border)",
                                color: "var(--muted-foreground)",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm ml-10 font-bold leading-relaxed text-muted-foreground mb-1">
                      {proj.description}
                    </p>
                    {proj.dataset && (
                      <p
                        className="text-xs font-bold flex items-center gap-1.5"
                        style={{ color: "var(--primary)" }}
                      >
                        <Database className="w-3.5 h-3.5" />
                        {proj.dataset}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Skills ── */}
          {course.skills && (
            <section>
              <SectionLabel>Skills</SectionLabel>
              <SectionTitle>Skills you'll master</SectionTitle>
              <div className="flex flex-wrap gap-1 mt-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full border font-medium"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* ── Career Opportunities ── */}
          {(course.careerRoles || course.hiringCompanies) && (
            <section
              className="rounded-3xl p-4 border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <SectionLabel>Career Opportunities</SectionLabel>
              <SectionTitle>Where this takes you</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                {course.careerRoles && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2 text-muted-foreground">
                      <Briefcase
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                      Job Roles
                    </h4>
                    <ul className="space-y-1">
                      {course.careerRoles.map((role) => (
                        <li
                          key={role}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <Check
                            className="w-4 h-4 shrink-0"
                            style={{ color: "var(--primary)" }}
                          />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {course.hiringCompanies && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2 text-muted-foreground">
                      <Building2
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                      Hiring Companies
                    </h4>
                    <ul className="space-y-1">
                      {course.hiringCompanies.map((company) => (
                        <li
                          key={company}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <ChevronRight
                            className="w-4 h-4 shrink-0"
                            style={{ color: "var(--primary)" }}
                          />
                          {company}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── Certificate ── */}
          {course.certificate && (
            <section>
              <SectionLabel>Certification</SectionLabel>
              <SectionTitle>Earn your certificate</SectionTitle>
              <div
                className="mt-1 rounded-3xl border overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* LEFT: Certificate Image */}
                  <div className="md:w-1/2 w-full bg-white">
                    <div className="w-full h-full aspect-[16/10] md:aspect-auto">
                      <img
                        src={course.certificate.imageUrl}
                        alt="Certificate preview"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* RIGHT: Content */}
                  <div
                    className="md:w-1/2 w-full p-2 sm:p-4"
                    style={{ background: "var(--card)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(66,214,116,0.12)" }}
                      >
                        <Award
                          className="w-5 h-5"
                          style={{ color: "var(--primary)" }}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-foreground mb-0">
                          {course.certificate.type}
                        </h4>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                          {course.certificate.description}
                        </p>

                        {/* Issued by */}
                        {course.certificate.issuedBy && (
                          <div className="flex flex-wrap gap-1 mb-1">
                            {course.certificate.issuedBy.map((org) => (
                              <span
                                key={org}
                                className="text-xs px-3 py-1 rounded-full border font-medium"
                                style={{
                                  background: "rgba(66,214,116,0.08)",
                                  borderColor: "rgba(66,214,116,0.25)",
                                  color: "var(--primary)",
                                }}
                              >
                                {org}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Signatories */}
                        {course.certificate.signatories && (
                          <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                            {course.certificate.signatories.map((sig) => (
                              <div key={sig.role}>
                                <span className="font-semibold text-foreground">
                                  {sig.role}
                                </span>
                                <span className="mx-1">·</span>
                                {sig.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Target Audience ── */}
          {course.targetAudience && (
            <section>
              <SectionLabel>Ideal For</SectionLabel>
              <SectionTitle>Who this course is for</SectionTitle>
              <ul className="flex flex-col gap-1 mt-2">
                {course.targetAudience.map((t) => (
                  <li
                    key={t}
                    className="flex font-bold items-start gap-1 text-sm rounded-xl px-3 py-1 border text-muted-foreground"
                    style={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <ArrowRight
                      className="w-4 h-4 shrink-0 mt-1"
                      style={{ color: "var(--primary)" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Reviews ── */}
          {course.reviews && (
            <section>
              <SectionLabel>Testimonials</SectionLabel>
              <SectionTitle>Student feedback</SectionTitle>
              <div className="grid md:grid-cols-2 gap-2 mt-2 mb-1">
                {course.reviews.map((r) => (
                  <div
                    key={r.name}
                    className="p-2 rounded-2xl border"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex justify-between items-start mb-0">
                      <div>
                        <p className="font-bold text-sm text-foreground">
                          {r.name}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {r.time}
                        </span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(Math.floor(r.rating))].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            style={{
                              fill: "var(--primary)",
                              color: "var(--primary)",
                            }}
                          />
                        ))}
                        {r.rating % 1 !== 0 && (
                          <StarHalf
                            size={12}
                            style={{ color: "var(--primary)" }}
                          />
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed italic text-muted-foreground">
                      "{r.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Helpers ──
function SectionLabel({ children }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-2"
      style={{ color: "var(--primary)" }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      className="text-2xl font-black text-foreground"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {children}
    </h2>
  );
}

function MetaPill({ icon: Icon, children }) {
  return (
    <span
      className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border text-muted-foreground"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <Icon size={14} style={{ color: "var(--primary)" }} />
      {children}
    </span>
  );
}

function Item({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}
