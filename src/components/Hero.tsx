"use client";

import { motion } from "framer-motion";
import EmailCapture from "./EmailCapture";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/10 via-transparent to-[#0984E3]/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C5CE7]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0984E3]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column — copy */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#6C5CE7]/20 text-[#A29BFE] border border-[#6C5CE7]/30 mb-4">
              Open Beta — Free Access
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Your workouts, planned once,{" "}
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
                delivered everywhere
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-[#F5F5F7]/60 max-w-lg leading-relaxed"
          >
            Import from YouTube, Instagram, or your coach. AI plans your week
            and adapts when life changes. Push to Garmin, Apple Watch, and
            Amazfit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <EmailCapture />
          </motion.div>
        </div>

        {/* Right column — app mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-72 h-[580px] rounded-[3rem] border-2 border-[#6C5CE7]/30 bg-gradient-to-b from-[#1a1a2e] to-[#16162a] shadow-2xl shadow-[#6C5CE7]/10 flex items-center justify-center">
            {/* Phone notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[#0D0D0F]" />
            {/* Placeholder content */}
            <div className="flex flex-col items-center gap-4 text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#0984E3] flex items-center justify-center text-2xl font-bold">
                A
              </div>
              <p className="text-sm text-[#F5F5F7]/40">App screenshot coming soon</p>
            </div>
            {/* Bottom bar */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-[#F5F5F7]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
