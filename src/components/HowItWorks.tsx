"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "See a workout",
    description: "Find it on Instagram, YouTube, or TikTok.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Share to AmakaFlow",
    description: "One tap from your share sheet.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Push to your watch",
    description: "Structured workout on Garmin or Apple Watch, ready to execute.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="4" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <path d="M9 6h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C5CE7]/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg max-w-2xl mx-auto">
            Three steps. Zero friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C5CE7]/20 to-[#0984E3]/20 border border-[#6C5CE7]/20 flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-xs font-mono text-[#6C5CE7] tracking-widest uppercase">
                Step {s.step}
              </span>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-[#F5F5F7]/50 max-w-xs leading-relaxed">
                {s.description}
              </p>

              {/* Connector line (hidden on mobile and after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
