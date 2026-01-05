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
import { Sparkles, Mail, BellRing } from "lucide-react";

export default function ComingSoon({name}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Sparkles className="w-4 h-4" />
          {name || "Coming Soon"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-surface-dark border border-surface-border">
        <DialogHeader className="text-left">
          {/* Icon + Title */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
              <BellRing className="w-10 h-10" />
            </div>

            <DialogTitle className="text-2xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Exciting Feature Coming Soon!
            </DialogTitle>

            <DialogDescription className="mt-3 text-base text-muted-foreground max-w-sm">
              We're working hard to bring you an amazing new experience. This
              powerful feature will transform the way you work.
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">97%</div>
              <p className="text-xs text-muted-foreground">Complete</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">Q1</div>
              <p className="text-xs text-muted-foreground">2026 Launch</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <p className="text-xs text-muted-foreground">Waitlist</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Development Progress
              </span>
              <span className="font-medium">97%</span>
            </div>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary to-primary/80 transition-all duration-1000"
                style={{ width: "97%" }}
              />
            </div>
          </div>

          {/* Notify Me Section */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-center text-muted-foreground mb-4">
              Be the first to know when it's ready
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("You've been added to the waitlist! 🎉");
                setOpen(false);
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <Button type="submit" className="gap-2">
                <Mail className="w-4 h-4" />
                Notify Me
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-3">
              No spam, just one email when it's live.
            </p>
          </div>
        </div>

        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
          <span className="sr-only">Close</span>
        </button> */}
      </DialogContent>
    </Dialog>
  );
}
