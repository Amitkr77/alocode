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
} from "lucide-react";
import React from "react";

export default function page() {
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
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="material-symbols-outlined text-3xl!" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-bold text-lg text-white">Visit Us</h2>
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm">
                        123 Tech Park, Innovation Way
                        <br />
                        Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <Phone className="material-symbols-outlined text-3xl!" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-bold text-lg text-white">Call or WhatsApp</h2>
                      <p className="text-slate-500 dark:text-[#92c9a8] text-sm">
                        +1 234 567 890
                      </p>
                      <a
                        className="text-primary text-xs font-bold mt-1 inline-flex items-center gap-1"
                        href="#"
                      >
                        Chat now
                        <CircleArrowOutUpRightIcon className="material-symbols-outlined text-sm!" />
                      </a>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-3 rounded-4xl border border-[#326747] bg-surface-dark p-6 hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <Mail className="material-symbols-outlined text-3xl!" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-bold text-lg text-white">Email Us</h2>
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
                      className="w-full h-full bg-cover bg-center grayscale opacity-60 hover:grayscale-0 transition-all duration-500"
                      data-alt="Map showing location in city grid"
                      data-location="San Francisco, California"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEkG5uAM4_HVJGVdxuIYZSIivEtOAvYezOK2qFJZ7CjMxnibmQlcMco8U4IcL1-4ZhhILgtxwvCldJDUfdrqQ89wg2muYmIb0reLP8qP2gcELD0JSLkIAHr-tesMXSnwhvHmtpQk48MXX-mlC9uwty5JgWRDC-dVDvtnBKlQgFLA7PqZtM4o0Kq6CKEG7MoTE2sGYwart4kKpZclIeklkisIzioATOGYRkP_N77eEXLQtx6ricG-Vi9C0ENtFRrYCwdbO2ZzuiKGiR")`,
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-primary text-[#112218] rounded-full p-3 shadow-lg animate-bounce">
                        <MapPinned className="material-symbols-outlined block" />
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
                  <form className="flex flex-col gap-5">
                    {/* Name */}
                    <div className="group">
                      <label
                        className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          className="w-full bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-full px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50"
                          placeholder="e.g. Alex Johnson"
                          type="text"
                        />
                        <User className="material-symbols-outlined absolute right-4 top-3 text-[#326747]" />
                      </div>
                    </div>
                    {/* Contact Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label
                          className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            className="w-full bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-full px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50"
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                          />
                          <PhoneIcon className="material-symbols-outlined absolute right-4 top-3 text-[#326747]" />
                        </div>
                      </div>
                      <div className="group">
                        <label
                          className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            className="w-full bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-full px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50"
                            placeholder="alex@example.com"
                            type="email"
                          />
                          <MailIcon className="material-symbols-outlined absolute right-4 top-3 text-[#326747]" />
                        </div>
                      </div>
                    </div>
                    {/* Course Selection */}
                    <div className="group">
                      <label
                        className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                        htmlFor="course"
                      >
                        Select Your Course
                      </label>
                      <div className="relative">
                        <select
                          id="course"
                          className="w-full appearance-none bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-full px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50 cursor-pointer"
                        >
                          <option
                            disabled
                            defaultValue={"Full Stack Web Development"}
                          >
                            Choose a specialization...
                          </option>
                          <option>Full Stack Web Development</option>
                          <option>Python for Data Science</option>
                          <option>UI/UX Design Masterclass</option>
                          <option>Mobile App Development (React Native)</option>
                        </select>
                        <ArrowDownToLineIcon className="material-symbols-outlined absolute right-4 top-3 text-[#326747] pointer-events-none" />
                      </div>
                    </div>
                    {/* Date Picker */}
                    <div className="group">
                      <label
                        className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                        htmlFor="startDate"
                      >
                        Preferred Start Date
                      </label>
                      <div className="relative">
                        <input
                          id="startDate"
                          className="w-full appearance-none bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-full px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50 schema-dark"
                          type="date"
                        />
                        <CalendarIcon className="material-symbols-outlined absolute right-4 top-3 text-[#326747] pointer-events-none bg-white" />
                      </div>
                    </div>
                    {/* Message */}
                    <div className="group">
                      <label
                        className="block text-sm font-bold mb-2 ml-1 text-slate-500 dark:text-[#92c9a8]"
                        htmlFor="message"
                      >
                        Message / Goals
                      </label>
                      <textarea
                        id="message"
                        className="w-full bg-background-light dark:bg-[#112218] border border-transparent focus:border-primary text-slate-900 dark:text-white rounded-2xl px-5 py-3 outline-none transition-all ring-1 ring-[#326747] focus:ring-primary/50 resize-none"
                        placeholder="Tell us about your coding goals..."
                        rows="4"
                      ></textarea>
                    </div>
                    {/* Submit Button */}
                    <button
                      className="mt-2 w-full bg-primary text-[#112218] font-bold text-lg py-4 rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(43,238,121,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
                      type="button"
                    >
                      Submit & Get a Callback
                      <ArrowBigRight className="material-symbols-outlined transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-xs text-center text-slate-500 dark:text-[#5c7e6a] mt-2">
                      By submitting, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
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
