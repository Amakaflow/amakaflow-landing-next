"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Platforms", value: "6" },
  { label: "Import Sources", value: "5+" },
  { label: "Verification", value: "AI + Human" },
];

export default function TrustSignals() {
  return (
    <section className="py-10 sm:py-14 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
                {s.value}
              </span>
              <span className="text-xs text-[#F5F5F7]/40 tracking-wide uppercase">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-10" />

        {/* Founder quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-base sm:text-lg text-[#F5F5F7]/70 italic leading-relaxed mb-4">
            &ldquo;I built this because I was tired of manually copying workouts.&rdquo;
          </p>
          <footer className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#0984E3] flex items-center justify-center text-xs font-bold">
              D
            </div>
            <span className="text-sm text-[#F5F5F7]/40">
              David, Founder
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
