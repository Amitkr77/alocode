"use client";
import { Suspense } from "react";
import { EnrollPageContent } from "@/components/enroll/EnrollPageContent";

export default function EnrollPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnrollPageContent />
    </Suspense>
  );
}
