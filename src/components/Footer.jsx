import React from "react";
import { ArrowRight, Globe, Share2,Mail, CodeSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="size-6 text-primary">
                <CodeSquare />
              </div>
              <h2 className="text-xl font-bold">Alocodes</h2>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Empowering the next generation of developers with skills that matter.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Browse Courses</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Mentorship</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Success Stories</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">About Us</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Careers</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Blog</a></li>
              <li><a className="text-gray-400 hover:text-primary text-sm" href="#">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                className="bg-surface-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary w-full"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-primary text-background-dark p-2 rounded-lg hover:bg-primary/90">
                <span className="material-symbols-outlined text-lg"> <ArrowRight/></span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Alocodes Inc. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              <Globe className="material-symbols-outlined text-lg"/>
            </a>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              <Share2 className="material-symbols-outlined text-lg"/>
            </a>
            <a className="text-gray-500 hover:text-white transition-colors" href="#">
              <Mail className="material-symbols-outlined text-lg"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
