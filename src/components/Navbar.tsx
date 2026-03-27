"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0F]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-[#6C5CE7]">Amaka</span>Flow
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#F5F5F7]/70">
          <a href="#features" className="hover:text-[#F5F5F7] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#F5F5F7] transition-colors">How It Works</a>
          <a href="#platforms" className="hover:text-[#F5F5F7] transition-colors">Platforms</a>
          <a
            href="#waitlist"
            className="px-4 py-2 rounded-full bg-[#6C5CE7] text-white text-sm font-medium hover:bg-[#5A4BD5] transition-colors"
          >
            Join Beta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0D0D0F]/95 backdrop-blur-md border-b border-white/5 px-4 pb-4"
        >
          <div className="flex flex-col gap-4 text-sm text-[#F5F5F7]/70">
            <a href="#features" onClick={() => setMobileOpen(false)} className="hover:text-[#F5F5F7]">Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="hover:text-[#F5F5F7]">How It Works</a>
            <a href="#platforms" onClick={() => setMobileOpen(false)} className="hover:text-[#F5F5F7]">Platforms</a>
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full bg-[#6C5CE7] text-white text-sm font-medium text-center hover:bg-[#5A4BD5]"
            >
              Join Beta
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
