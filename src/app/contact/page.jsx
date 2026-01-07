"use client";
import {
  CircleArrowOutUpRightIcon,
  MapPin,
  Phone,
  Users2,
  Mail,
  Share2,
  Globe,
  MapPlus,
  MapPinned,
  ArrowBigRight,
  User,
  PhoneIcon,
  MailIcon,
  ArrowDownToLineIcon,
  CalendarIcon,
  ChevronRight,
  Info,
  ArrowRight,
} from "lucide-react";
import React from "react";

export default function page() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      course: e.target.course.value,
      start_date: e.target.start_date.value,
      goals: e.target.goals.value,
    };

    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Enrollment submitted successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div className="bg-background-dark  dark:text-white antialiased selection:bg-primary selection:text-[#112218]">
      {/* Main Content Container */}
      <main className="flex flex-col grow pt-15">
        <div className="flex flex-1 justify-center py-5 sm:px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-7xlflex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8">
              {/* Left Column: Contact & Info */}
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {/* Hero Text */}
                <div className="flex flex-col gap-3 px-4">
                  <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-[-0.033em]">
                    Start Your Coding Journey Today
                  </h1>
                  <p className="text-[#92c9a8] text-lg font-normal leading-normal">
                    Limited spots available for the{" "}
                    <span className="text-primary font-bold">
                      November Batch
                    </span>
                    . Don't miss your chance to level up your skills.
                  </p>
                </div>
                {/* Office Image Card */}
                <div className="px-4">
                  <div className="flex flex-col items-stretch justify-start rounded-4xl shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-whitebg-[#193324] overflow-hidden">
                    <div
                      className="w-full bg-center bg-no-repeat h-64 bg-cover"
                      data-alt="Modern coworking space with computers and green lighting"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9MvkbWjX9ZGJSmrAS3GQ4fzC7gP4UNxTScf4E7-XqD1CgPehUoTLUglyDfeyiGfPnpfHBWxDls9u0vFr6DEhZbP1gwvjNhLl1ClFwe7bkiOhcE2leZfY9ChxCRkshKyOEd6F8ccX86jRjZe-r-LdcSgjTm2jUHorD7qKF4D796lEcdyIp2EGZRH8YPH2u0iqOdOs4VV5_qtCAq5XWNliuFE7bq5NWsRY_5_zhnE6OJc_0MgCO5EeLboyp6MIp1lnMIzAgdKVluRBu")`,
                      }}
                    >
                      <div className="w-full h-full bg-black/30 flex items-end p-6">
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 text-white">
                          <p className="font-bold text-sm">
                            📍 Our Learning Hub
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                  {/* Address */}
                  <div className="flex flex-col gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                      <MapPin className="material-symbols-outlined text-3xl!" />
                      <h2 className="font-bold text-lg text-white">Visit Us</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm">
                        Kurji, Digha, Patna, Bihar 800016
                      </p>
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm mt-2">
                        Monday – Saturday <br /> 10:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                      <Phone className="material-symbols-outlined text-3xl!" />
                      <h2 className="font-bold text-lg text-white">
                        Call or WhatsApp
                      </h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm">
                        +91 92346 25064
                      </p>
                      <a
                        className="text-primary text-xs font-bold mt-1 inline-flex items-center gap-1"
                        href="https://wa.me/919234625064?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20coding%20courses."
                      >
                        Chat now
                        <CircleArrowOutUpRightIcon
                          className="material-symbols-outlined  ml-1"
                          size={18}
                        />
                      </a>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                      <Mail className="material-symbols-outlined text-3xl!" />
                      <h2 className="font-bold text-lg text-white">Email Us</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm">
                        admissions@alocodes.com
                      </p>
                    </div>
                  </div>
                  {/* Socials */}
                  <div className="flex flex-col justify-between gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors">
                    <h2 className="font-bold text-lg text-white">Follow Us</h2>
                    <div className="flex gap-4 mt-auto">
                      <a
                        className="text-[#92c9a8] hover:text-primary transition-colors"
                        href="#"
                      >
                        <Globe className="material-symbols-outlined" />
                      </a>{" "}
                      {/* Placeholder for social icon */}
                      <a
                        className="text-[#92c9a8] hover:text-primary transition-colors"
                        href="#"
                      >
                        <Users2 className="material-symbols-outlined" />
                      </a>{" "}
                      {/* Placeholder for social icon */}
                      <a
                        className="text-[#92c9a8] hover:text-primary transition-colors"
                        href="#"
                      >
                        <Share2 className="material-symbols-outlined" />
                      </a>{" "}
                      {/* Placeholder for social icon */}
                    </div>
                  </div>
                </div>
                {/* Map */}
                <div className="px-4">
                  <div className="w-full h-48 rounded-4xl overflow-hidden border border-[#326747] bg-surface-dark relative">
                    {/* Placeholder map image since we can't embed real interactive maps easily without API keys */}
                    <div
                      className="w-full h-full bg-cover bg-center  opacity-60 "
                      data-alt="Map showing location in city grid"
                      data-location="San Francisco, California"
                      style={{
                        backgroundImage: `url("/image.png")`,
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-[#112218] rounded-full p-3 shadow-lg animate-bounce pointer-events-auto">
                        <a
                          href="https://www.google.com/maps/place/Alomonx+Technology+-+Leading+IT+Solutions,+Digital+Marketing+%26+Web+Development+Company+in+Patna/@25.6423636,85.1009377,16.96z/data=!4m6!3m5!1s0x39ed57c554aef53f:0x5dd796e15a0c5b3!8m2!3d25.6423693!4d85.1036214!16s%2Fg%2F11mcfbpw18"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open location in Google Maps"
                          className="block"
                        >
                          <MapPinned className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Enrollment Form */}
              <div className="order-1 lg:order-2 px-4 lg:px-0">
                <div className="sticky top-24 bg-surface-dark rounded-4xl p-6 md:p-10 border border-[#326747] shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      Enrollment Form
                    </h2>
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 flex items-center gap-1">
                      <span className="block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      Filling Fast
                    </span>
                  </div>
                  <form
                    className="space-y-8 relative z-10"
                    onSubmit={handleSubmit}
                  >
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
                            <User className="material-symbols-outlined absolute left-3 top-3 text-gray-500" />

                            <input
                              className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-2.5 pl-18 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
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
                            <Phone className="material-symbols-outlined absolute left-3 top-3 text-gray-500" />

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
                            <Mail className="material-symbols-outlined absolute left-3 top-3 text-gray-500" />

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
                            <ChevronRight className="material-symbols-outlined absolute right-3 top-3 text-gray-500 pointer-events-none" />
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
                        <Info className="material-symbols-outlined text-primary shrink-0" />

                        <div className="text-sm text-gray-300">
                          <p className="font-bold text-white mb-1">
                            Payment Information
                          </p>
                          <p>
                            No payment is required today. After submitting this
                            form, an academic counselor will contact you within
                            24 hours to finalize your enrollment and discuss
                            flexible payment options or scholarships.
                          </p>
                        </div>
                      </div>

                      <button
                        className="w-full h-14 rounded-full bg-primary text-background-dark text-lg font-bold hover:bg-primary/90 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(43,238,121,0.4)] transition-all flex items-center justify-center gap-2 group"
                        type="submit"
                      >
                        Submit Enrollment
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                          <ArrowRight />
                        </span>
                      </button>

                      <p className="text-center text-xs text-gray-500 mt-4">
                        By submitting, you agree to our Terms of Service and
                        Privacy Policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
