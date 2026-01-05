"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Download,
  Mail,
  Phone,
  User,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function DownloadSyllabusDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form processing
    setIsSubmitted(true);

    // Trigger PDF download after success
    setTimeout(() => {
      // Replace with your actual syllabus PDF URL
      const syllabusUrl = "/path-to-your-full-syllabus.pdf"; // or external link
      const link = document.createElement("a");
      link.href = syllabusUrl;
      link.download = "Full_Stack_Web_Development_Syllabus_2026.pdf"; // suggested filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close dialog after download starts
      setTimeout(() => {
        setOpen(false);
        setIsSubmitted(false); // reset for next time
      }, 1500);
    }, 2000); // Show success for 2 seconds before downloading
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 font-medium">
          <Download className="w-4 h-4" />
          Download Full Syllabus PDF
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md border-border bg-background">
        {/* Success State */}
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 p-5 rounded-full bg-primary/10 text-primary animate-pulse">
              <CheckCircle className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Thank You! 🎉
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Your syllabus is downloading now. Check your downloads folder.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Full_Stack_Web_Development_Syllabus_2026.pdf</span>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center">
              <div className="mx-auto mb-5 p-4 rounded-full bg-primary/10 text-primary w-fit">
                <FileText className="w-10 h-10" />
              </div>
              <DialogTitle className="text-2xl font-bold">
                Get the Full Syllabus
              </DialogTitle>
              <DialogDescription className="mt-3 text-base text-muted-foreground">
                Enter your details below to instantly download the complete
                course syllabus (54 pages).
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-medium">
                  Phone Number (Optional)
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-6 gap-2 font-semibold"
              >
                <Download className="w-5 h-5" />
                Download Syllabus Now
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We respect your privacy. Your info is only used to send the
                syllabus.
              </p>
            </form>
          </>
        )}

        {/* Close Button */}
        {!isSubmitted && (
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}
