// app/course/[slug]/page.jsx
import { notFound } from "next/navigation";
import courses from "@/lib/Courses";
// import Image from "next/image";
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
} from "lucide-react";

export default async function CourseDetail({ params }) {
  const { slug } = await params;

  const course = courses.find((course) => {
    return course.slug === slug;
  });

  if (!course) {
    notFound();
  }

  return (
    <section className="bg-surface-dark border border-surface-border">
      {/* ================= HERO ================= */}
      <div className="relative pt-24 pb-16 border-b border-surface-border">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center grayscale"
            style={{
              backgroundImage: `url(${
                course.previewVideo?.thumbnail || course.videoThumbnail || ""
              })`,
            }}
          />
          <div className="absolute inset-0 bg-background-dark/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {course.badge?.text && (
              <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {course.badge.text}
              </span>
            )}

            {course.badge?.rating && (
              <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                <Star className="fill-current" />
                {course.badge.rating}
                <span className="text-gray-400 font-medium ml-1">
                  ({course.badge.totalRatings})
                </span>
              </span>
            )}

            {course.badge?.lastUpdated && (
              <span className="text-gray-400 text-sm border-l border-white/10 pl-3">
                Last updated {course.badge.lastUpdated}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {course.title}
          </h1>

          {/* Description */}
          {course.description && (
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
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
                    className="w-10 h-10 rounded-full border-2 border-surface-dark bg-cover"
                    style={{ backgroundImage: `url(${ins.avatar})` }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-bold">
                  Created by{" "}
                  {course.instructors.map((i, idx) => (
                    <span key={i.name}>
                      <span className="text-primary">{i.name}</span>
                      {idx < course.instructors.length - 1 && " & "}
                    </span>
                  ))}
                </p>
                <p className="text-gray-500 text-xs">
                  {course.instructors.map((i) => i.role).join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
            {course.language?.audio && (
              <span className="flex items-center gap-2">
                <Globe size={16} /> {course.language.audio}
              </span>
            )}
            {course.language?.captions && (
              <span className="flex items-center gap-2">
                <Captions size={16} /> {course.language.captions.join(", ")}
              </span>
            )}
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} /> Certificate of Completion
            </span>
          </div>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        {/* ================= SIDEBAR ================= */}
        <aside className="lg:order-2">
          <div className="sticky top-24">
            <div className="bg-surface-dark border border-surface-border rounded-2xl overflow-hidden">
              {/* Preview */}
              {course.previewVideo && (
                <div className="relative aspect-video bg-black">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{
                      backgroundImage: `url(${course.previewVideo.thumbnail})`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="text-background-dark" size={32} />
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing */}
              {course.pricing && (
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl font-black text-white">
                      ₹{course.pricing.current}
                    </span>
                    <span className="line-through text-gray-500">
                      ₹{course.pricing.original}
                    </span>
                    <span className="text-primary text-sm font-bold ml-auto">
                      {course.pricing.discountPercent}% OFF
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mb-6 flex items-center gap-1">
                    <Clock size={14} />
                    Offer ends in {course.pricing.offerEndsIn}
                  </p>

                  <button className="w-full h-12 rounded-full bg-primary text-background-dark font-bold mb-3">
                    Enroll Now
                  </button>

                  <button className="w-full h-12 rounded-full border border-surface-border text-white mb-6">
                    Start Free Trial
                  </button>

                  {/* Includes */}
                  <div className="space-y-3 text-sm text-gray-300 border-t border-white/10 pt-6">
                    <h4 className="font-bold text-white">
                      This course includes:
                    </h4>
                    <Item
                      icon={Video}
                      text={
                        course.curriculumSummary?.totalDuration ||
                        "On-demand video"
                      }
                    />
                    <Item icon={Code2} text="Hands-on projects" />
                    <Item icon={Infinity} text="Full lifetime access" />
                    <Item icon={Smartphone} text="Mobile & TV access" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 border border-surface-border rounded-xl text-center">
              <ComingSoon name="Get Alocodes for Business" />
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="lg:col-span-2 space-y-12">
          {/* Learning Outcomes */}
          {course.learningOutcomes && (
            <section className="bg-surface-dark/30 border border-surface-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                What you'll learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.learningOutcomes.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Check className="text-primary shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Target Audience */}
          {course.targetAudience && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Who this course is for
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {course.targetAudience.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Reviews */}
          {course.reviews && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Student Feedback
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.reviews.map((r) => (
                  <div
                    key={r.name}
                    className="p-6 bg-surface-dark border border-surface-border rounded-2xl"
                  >
                    <div className="flex justify-between mb-3">
                      <div>
                        <p className="text-white font-bold text-sm">{r.name}</p>
                        <span className="text-gray-500 text-xs">{r.time}</span>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(Math.floor(r.rating))].map((_, i) => (
                          <Star key={i} size={14} />
                        ))}
                        {r.rating % 1 !== 0 && <StarHalf size={14} />}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">"{r.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </section>
  );
}

/* Small helper */
function Item({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-primary" size={18} />
      <span>{text}</span>
    </div>
  );
}

// Pre-generate static pages at build time
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
