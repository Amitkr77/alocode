// components/EnrollWrapper.jsx
"use client";
import { useRouter } from "next/navigation";
import PricingBlock from "@/components/PricingBlock";

export default function EnrollWrapper({
  pricing,
  curriculumSummary,
  sampleProjects,
  courseTitle,
  courseSlug, // ← add this prop
}) {
  const router = useRouter();

  return (
    <PricingBlock
      pricing={pricing}
      curriculumSummary={curriculumSummary}
      sampleProjects={sampleProjects}
      onEnroll={() => router.push(`/enroll?course=${courseSlug}`)}
    />
  );
}
