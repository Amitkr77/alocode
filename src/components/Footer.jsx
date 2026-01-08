"use client";
import React from "react";
import {
  ArrowRight,
  Globe,
  Share2,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) return; // Basic client-side check

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Successfully subscribed! Check your email for confirmation."); // Or use a toast/modal
        e.target.reset();
      } else {
        const errorData = await response.json();
        alert(`Subscription failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Subscription failed: Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-surface-dark border-t border-surface-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <img
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                  src="/Aloc_logo1.png"
                  alt="Alocode logo"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the next generation of developers with hands-on skills,
              expert mentorship, and real-world projects that matter.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/alocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/alocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/alocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@alocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  About Us
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/why-choose"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Why Choose Us
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/live"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Live
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  FAQ
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses?category=Programming"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Programming
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=Web Development"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Web Development
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=Data Science"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Data Science
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=App Development"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  App Development
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-primary transition-colors text-sm inline-block group"
                >
                  Browse All
                  <span className="block h-0.5 bg-transparent group-hover:bg-primary transition-all w-0 group-hover:w-full mt-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new courses, tips, and exclusive offers.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={handleSubmit} // Updated to use handleSubmit
            >
              <input
                name="email" // Added name for easy extraction
                className="bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex-1"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm order-2 md:order-1">
            © {currentYear} Alocodes Inc. All rights reserved.
          </p>

          {/* Legal Links */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm order-1 md:order-2 mb-4 md:mb-0">
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/support/terms-of-service"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Additional Social or Utility Icons */}
          <div className="flex gap-4 order-3">
            <a
              href="https://alocodes.com"
              className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
              aria-label="Visit Website"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@alocodes.com"
              className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
              aria-label="Email Us"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="/sitemap"
              className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full bg-surface-dark hover:bg-primary/10"
              aria-label="Sitemap"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;