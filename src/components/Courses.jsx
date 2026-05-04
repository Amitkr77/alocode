import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import courses from "@/lib/Courses";
import CourseCard from "@/components/CourseCard"; // ← shared card

const Courses = () => {
  return (
    <section
      className="py-12 border-y"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p
              className="text-xl font-bold uppercase tracking-widest mb-1"
              style={{
                color: "var(--primary)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Top Courses
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-foreground"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Master In-Demand Skills
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-xl font-bold flex items-center gap-1 transition-all shrink-0"
            style={{
              color: "var(--primary)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            View All Courses <ArrowRight className="w-6 h-6 mt-1"  />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.slice(0, 4).map((course, i) => (
            // motion wrapper stays here — animation is homepage-specific behaviour
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="flex flex-col"
            >
              {/* showPricing=false → shows badge rating (homepage style) */}
              {/* showMode=false   → shows level instead of mode           */}
              <CourseCard
                course={course}
                showPricing={false}
                showMode={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
