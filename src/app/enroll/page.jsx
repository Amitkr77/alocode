import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative pt-20 pb-20 min-h-screen">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center fixed"
          data-alt="Abstract code background with blue gradient"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(16, 34, 45, 0.96) 0%, rgba(16, 34, 23, 0.97) 100%),
              url("https://lh3.googleusercontent.com/aida-public/AB6AXuBka3HKYMHiuvrC_Ws6mq8gC0GvMKfPf3AVVHpx8E7DdqpK0GnPKcpXKzjptwTOS6vuFB7OUSNMxb8DE1Epljmyh43O7EITQJzwezGGnLIe1aGZbO6dOsb6bNsBt6eD8BCRaF-MhAzTbb7y9kEsBsKQVThy1c7JyJ1VvThOMr3loVXMf92eGy5dppP99TyKTz-Lgt3Bo-AdfpiN4OEUlIlKOwjSPNY_BGADvKuK0q21WHc8xxT0i2YgIxFANHobnMRjbn1xWdXoQQBq")
            `,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">
            <ChevronRight/>
          </span>
          <span className="text-white font-medium">Enrollment</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-start pt-4">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-surface-border mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Limited Seats Available
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Start Your Journey <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                  With Alocodes
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Take the first step towards a high-growth tech career. Fill out
                the form to secure your spot in our upcoming cohort.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      World-class Curriculum
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Designed by industry experts
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      100% Placement Support
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Resume reviews & mock interviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-dark border border-surface-border flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      Money-Back Guarantee
                    </h4>
                    <p className="text-gray-500 text-sm">
                      7-day risk-free trial period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

              <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-surface-border">
                Student Enrollment Form
              </h2>

              <form className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    1. Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500">
                          person
                        </span>
                        <input
                          className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 pl-10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          id="name"
                          name="name"
                          placeholder="e.g. Alex Johnson"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500">
                          call
                        </span>
                        <input
                          className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 pl-10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500">
                          mail
                        </span>
                        <input
                          className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 pl-10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    2. Course Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Select Course
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                          id="course"
                          name="course"
                        >
                          <option value="" disabled selected>
                            Choose your path...
                          </option>
                          <option value="fsd">
                            Full Stack Web Development
                          </option>
                          <option value="ds">Data Science & AI</option>
                          <option value="web3">Web 3.0 & Blockchain</option>
                          <option value="cyber">
                            Cybersecurity Essentials
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-500 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <label
                        htmlFor="start_date"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Preferred Start Date
                      </label>
                      <input
                        className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors scheme-dark"
                        id="start_date"
                        name="start_date"
                        type="date"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    3. Your Goals
                  </h3>
                  <div>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Tell us about your goals or any questions
                    </label>
                    <textarea
                      className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      id="goals"
                      name="goals"
                      placeholder="I'm a beginner looking to switch careers into software development..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0">
                      info
                    </span>
                    <div className="text-sm text-gray-300">
                      <p className="font-bold text-white mb-1">
                        Payment Information
                      </p>
                      <p>
                        No payment is required today. After submitting this
                        form, an academic counselor will contact you within 24
                        hours to finalize your enrollment and discuss flexible
                        payment options or scholarships.
                      </p>
                    </div>
                  </div>

                  <button
                    className="w-full h-14 rounded-full bg-primary text-background-dark text-lg font-bold hover:bg-primary/90 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(43,238,121,0.4)] transition-all flex items-center justify-center gap-2 group"
                    type="submit"
                  >
                    Submit Enrollment
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      <ArrowRight/>
                    </span>
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
