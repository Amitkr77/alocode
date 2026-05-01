// app/course/[slug]/page.jsx
import { notFound } from "next/navigation";
import courses from "@/lib/Courses";
import ComingSoon from "@/components/ComingSoon";
import {
  BadgeCheck,
  Captions,
  Globe,
  Play,
  Star,
  StarHalf,
  Clock,
  Video,
  Text,
  Code2,
  Infinity,
  Smartphone,
  Check,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";

export default async function CourseDetail({ params }) {
  const { slug } = await params;

  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div
      className="overflow-x-hidden"
      style={{ background: "#FCFCFB", color: "#262A2B", fontFamily: "system-ui, sans-serif" }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ borderBottom: "1px solid #DBD7C7" }}
      >
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${course.previewVideo?.thumbnail || course.videoThumbnail || ""})`,
            }}
          />
        </div>
        {/* Amber tint blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
          style={{ background: "rgba(250,161,20,0.06)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {course.badge?.text && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border"
                style={{
                  background: "rgba(250,161,20,0.10)",
                  color: "#FAA114",
                  borderColor: "rgba(250,161,20,0.25)",
                }}
              >
                {course.badge.text}
              </span>
            )}
            {course.badge?.rating && (
              <span className="flex items-center gap-1 text-sm font-bold" style={{ color: "#FAA114" }}>
                <Star className="w-4 h-4" style={{ fill: "#FAA114", color: "#FAA114" }} />
                {course.badge.rating}
                <span className="font-medium ml-1" style={{ color: "#B3AA9E" }}>
                  ({course.badge.totalRatings})
                </span>
              </span>
            )}
            {course.badge?.lastUpdated && (
              <span
                className="text-sm pl-3"
                style={{ color: "#B3AA9E", borderLeft: "1px solid #DBD7C7" }}
              >
                Last updated {course.badge.lastUpdated}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight max-w-4xl"
            style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
          >
            {course.title}
          </h1>

          {/* Description */}
          {course.description && (
            <p className="text-lg mb-8 max-w-3xl leading-relaxed" style={{ color: "#786E67" }}>
              {course.description}
            </p>
          )}

          {/* Instructors */}
          {course.instructors && (
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {course.instructors.map((ins) => (
                  <div
                    key={ins.name}
                    className="w-10 h-10 rounded-full border-2 bg-cover bg-center"
                    style={{
                      borderColor: "#FCFCFB",
                      backgroundImage: `url(${ins.avatar})`,
                      background: ins.avatar ? `url(${ins.avatar})` : "#DBD7C7",
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#262A2B" }}>
                  Created by{" "}
                  {course.instructors.map((i, idx) => (
                    <span key={i.name}>
                      <span style={{ color: "#FAA114" }}>{i.name}</span>
                      {idx < course.instructors.length - 1 && " & "}
                    </span>
                  ))}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#B3AA9E" }}>
                  {course.instructors.map((i) => i.role).join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3">
            {course.language?.audio && (
              <span
                className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border"
                style={{ color: "#786E67", background: "#DBD7C7", borderColor: "#B3AA9E" }}
              >
                <Globe size={14} style={{ color: "#FAA114" }} />
                {course.language.audio}
              </span>
            )}
            {course.language?.captions && (
              <span
                className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border"
                style={{ color: "#786E67", background: "#DBD7C7", borderColor: "#B3AA9E" }}
              >
                <Captions size={14} style={{ color: "#FAA114" }} />
                {course.language.captions.join(", ")}
              </span>
            )}
            <span
              className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border"
              style={{ color: "#786E67", background: "#DBD7C7", borderColor: "#B3AA9E" }}
            >
              <BadgeCheck size={14} style={{ color: "#FAA114" }} />
              Certificate of Completion
            </span>
          </div>
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-3 gap-12">
        {/* ================= SIDEBAR ================= */}
        <aside className="lg:order-2">
          <div className="sticky top-24">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "#FCFCFB",
                border: "1px solid #DBD7C7",
                boxShadow: "0 8px 32px rgba(38,42,43,0.10)",
              }}
            >
              {/* Preview video thumbnail */}
              {course.previewVideo && (
                <div className="relative aspect-video group cursor-pointer" style={{ background: "#DBD7C7" }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${course.previewVideo.thumbnail})` }}
                  />
                  <div
                    className="absolute inset-0 transition-colors"
                    style={{ background: "rgba(38,42,43,0.28)" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: "#FCFCFB", boxShadow: "0 4px 20px rgba(38,42,43,0.20)" }}
                    >
                      <Play size={24} style={{ fill: "#FAA114", color: "#FAA114" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing */}
              {course.pricing && (
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-black" style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}>
                      ₹{course.pricing.current}
                    </span>
                    <span className="line-through text-lg mb-0.5" style={{ color: "#B3AA9E" }}>
                      ₹{course.pricing.original}
                    </span>
                    <span
                      className="text-sm font-bold ml-auto px-2 py-0.5 rounded-full"
                      style={{ color: "#FAA114", background: "rgba(250,161,20,0.10)" }}
                    >
                      {course.pricing.discountPercent}% OFF
                    </span>
                  </div>

                  <p className="text-xs mb-6 flex items-center gap-1.5" style={{ color: "#B3AA9E" }}>
                    <Clock size={13} style={{ color: "#FAA114" }} />
                    Offer ends in {course.pricing.offerEndsIn}
                  </p>

                  <Link href="/enroll">
                    <button
                      className="w-full h-12 rounded-full text-white font-bold mb-3 transition-all cursor-pointer"
                      style={{
                        background: "#FAA114",
                        boxShadow: "0 4px 16px rgba(250,161,20,0.30)",
                      }}
                    >
                      Enroll Now
                    </button>
                  </Link>

                  <button
                    disabled
                    className="w-full h-12 rounded-full font-medium text-sm mb-6 cursor-not-allowed opacity-50 border"
                    style={{ borderColor: "#DBD7C7", color: "#B3AA9E" }}
                  >
                    Start Free Trial
                  </button>

                  {/* Course includes */}
                  <div className="space-y-3 pt-5" style={{ borderTop: "1px solid #DBD7C7" }}>
                    <h4 className="font-bold text-sm" style={{ color: "#262A2B" }}>
                      This course includes:
                    </h4>
                    <Item icon={Video} text={course.curriculumSummary?.totalDuration || "On-demand video"} />
                    <Item icon={Code2} text="Hands-on projects" />
                    <Item icon={Infinity} text="Full lifetime access" />
                    <Item icon={Smartphone} text="Mobile & TV access" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 p-4 text-center">
              <ComingSoon name="Get Alocodes for Business" />
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="lg:col-span-2 space-y-10">
          {/* Learning Outcomes */}
          {course.learningOutcomes && (
            <section
              className="rounded-3xl p-8 border"
              style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#FAA114" }}
              >
                Course Goals
              </p>
              <h2
                className="text-2xl font-black mb-6"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                What you'll learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                      style={{
                        background: "rgba(250,161,20,0.12)",
                        borderColor: "rgba(250,161,20,0.25)",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#FAA114" }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "#786E67" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Target Audience */}
          {course.targetAudience && (
            <section>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#FAA114" }}
              >
                Ideal For
              </p>
              <h2
                className="text-2xl font-black mb-5"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                Who this course is for
              </h2>
              <ul className="flex flex-col gap-2">
                {course.targetAudience.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-sm rounded-xl px-4 py-3 border"
                    style={{
                      color: "#786E67",
                      background: "#DBD7C7",
                      borderColor: "#B3AA9E",
                    }}
                  >
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#FAA114" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Reviews */}
          {course.reviews && (
            <section>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#FAA114" }}
              >
                Testimonials
              </p>
              <h2
                className="text-2xl font-black mb-6"
                style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
              >
                Student Feedback
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.reviews.map((r) => (
                  <div
                    key={r.name}
                    className="p-6 rounded-3xl border transition-all"
                    style={{
                      background: "#FCFCFB",
                      borderColor: "#DBD7C7",
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-bold text-sm" style={{ color: "#262A2B" }}>
                          {r.name}
                        </p>
                        <span className="text-xs" style={{ color: "#B3AA9E" }}>{r.time}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(Math.floor(r.rating))].map((_, i) => (
                          <Star key={i} size={13} style={{ fill: "#FAA114", color: "#FAA114" }} />
                        ))}
                        {r.rating % 1 !== 0 && (
                          <StarHalf size={13} style={{ color: "#FAA114" }} />
                        )}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed italic" style={{ color: "#786E67" }}>
                      "{r.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* ================= CTA BANNER ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "#262A2B" }}
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#FAA114" }}
            >
              Limited seats available
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ready to Start
              <br />
              Learning Today?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/enroll"
              className="h-14 px-8 rounded-full text-white font-bold flex items-center gap-2 transition-all"
              style={{
                background: "#FAA114",
                boxShadow: "0 4px 20px rgba(250,161,20,0.35)",
              }}
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              className="h-14 px-8 rounded-full font-bold flex items-center gap-2 transition-colors border"
              style={{ borderColor: "rgba(219,215,199,0.25)", color: "#DBD7C7" }}
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Item({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} style={{ color: "#FAA114", flexShrink: 0 }} />
      <span className="text-sm" style={{ color: "#786E67" }}>{text}</span>
    </div>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}