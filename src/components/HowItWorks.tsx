"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Import or describe your workout",
    description: "Paste a YouTube, Instagram, or TikTok link — or just tell the AI what you want. Any source works.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "AI structures and plans your week",
    description: "The AI maps exercises, sets recovery zones, and builds a weekly plan around your goals and schedule.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L9.09 8.26 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21 17 14.14l5-4.87-7.09-1.01L12 2z" />
        <path d="M12 6v6l3 3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Approve changes or let AI handle it",
    description: "Life happens. The AI rebalances your plan automatically, or asks you to approve key changes with one tap.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Workouts pushed to your device",
    description: "Structured workouts land on your Garmin, Apple Watch, or Amazfit. Follow along step-by-step on your wrist.",
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
            Four steps. Zero friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
