"use client";

import { motion } from "framer-motion";

const steps = [
  {
    time: "7:00 AM",
    label: "Plan",
    emoji: "\u2600\uFE0F",
    title: "AI sends your plan for today",
    description:
      "Wake up to a personalized brief on Telegram. Your Garmin is ready before your first coffee.",
  },
  {
    time: "7:30 AM",
    label: "Follow",
    emoji: "\uD83C\uDFCB\uFE0F",
    title: "Follow along on your watch",
    description:
      "Each exercise, set, and rest timer on your wrist. No phone needed.",
  },
  {
    time: "12:30 PM",
    label: "Import",
    emoji: "\uD83D\uDCF7",
    title: "Discover a workout on Instagram",
    description:
      "Paste the link. AI extracts the structure. One tap to add it to your week.",
  },
  {
    time: "5:00 PM",
    label: "Rebalance",
    emoji: "\uD83D\uDD04",
    title: "Life happens \u2014 AI rebalances",
    description:
      "Missed a session? AI detects it, reschedules, and asks you to approve.",
  },
  {
    time: "9:00 PM",
    label: "Review",
    emoji: "\uD83D\uDCCA",
    title: "Check your week at a glance",
    description:
      "Completed sessions, upcoming workouts, weekly load \u2014 always up to date.",
  },
];

export default function DayTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a12]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            A Day With{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              AmakaFlow
            </span>
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg">
            From morning plan to evening review — your training runs itself.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6C5CE7]/50 via-[#6C5CE7]/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#6C5CE7]/15 border border-[#6C5CE7]/30 flex items-center justify-center text-lg">
                  {step.emoji}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-[#6C5CE7] tracking-wide">
                      {step.time}
                    </span>
                    <span className="text-xs font-medium text-[#F5F5F7]/30 uppercase tracking-widest">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-[#F5F5F7]/50 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
