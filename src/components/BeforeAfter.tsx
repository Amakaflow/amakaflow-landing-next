"use client";

import { motion } from "framer-motion";

const comparison = [
  {
    before: "Find workout on Instagram, screenshot it",
    after: "Paste the link",
  },
  {
    before: "Manually identify exercises from video",
    after: "AI extracts structure in seconds",
  },
  {
    before: "Type everything into Garmin Connect",
    after: "One tap → on your Garmin",
  },
  {
    before: "Hope you remember the plan",
    after: "AI plans your week and sends reminders",
  },
  {
    before: "Miss a session → rework the week manually",
    after: "AI rebalances, you approve",
  },
  {
    before: "20 minutes of friction per workout",
    after: "30 seconds from link to watch",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Stop copying workouts.{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              Start training.
            </span>
          </h2>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 px-4">
          <div className="text-sm font-semibold text-red-400/80 uppercase tracking-wider">
            Before
          </div>
          <div className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider">
            With AmakaFlow
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-3">
          {comparison.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-2.5 rounded-xl bg-red-500/[0.06] border border-red-500/10 px-4 py-3">
                <span className="text-red-400 mt-0.5 shrink-0">❌</span>
                <span className="text-sm text-[#F5F5F7]/60">{row.before}</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10 px-4 py-3">
                <span className="text-emerald-400 mt-0.5 shrink-0">✅</span>
                <span className="text-sm text-[#F5F5F7]/70">{row.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time comparison callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#6C5CE7]/10 border border-[#6C5CE7]/20">
            <span className="text-red-400 font-mono text-lg font-bold">
              20 min
            </span>
            <span className="text-[#F5F5F7]/30">→</span>
            <span className="text-emerald-400 font-mono text-lg font-bold">
              30 sec
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
