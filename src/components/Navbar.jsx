import React from "react";
import Link from "next/link";
import { CodeSquare } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background-dark/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <div className="text-primary">
              <CodeSquare />
            </div>
            <Link href="/">
              <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
                Alocodes
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
              Courses
            </Link>
            <Link href="/live" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium" >
              Live traning
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium" >
              contact
            </Link>
            <Link href="/about" className="text-gray-300 hoverButtonText hover:text-primary transition-colors text-sm font-medium">
              About Us  
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex gap-3">
            {/* <button className="flex items-center justify-center rounded-full h-10 px-6 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-bold">
              Log In
            </button> */}
            <Link href="/enroll" className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-background-dark hover:bg-primary/90 transition-colors text-sm font-bold shadow-[0_0_15px_rgba(43,238,121,0.3)]">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
