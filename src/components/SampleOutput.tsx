"use client";

import { motion } from "framer-motion";

const exercises = [
  {
    name: "Barbell Back Squat",
    sets: 4,
    reps: "6–8",
    rest: "3 min",
    confidence: 92,
  },
  {
    name: "Romanian Deadlift",
    sets: 3,
    reps: "10–12",
    rest: "2 min",
    confidence: 88,
  },
  {
    name: "Leg Press",
    sets: 3,
    reps: "12–15",
    rest: "90 sec",
    confidence: 95,
  },
  {
    name: "Walking Lunges",
    sets: 3,
    reps: "12 each",
    rest: "60 sec",
    confidence: 84,
  },
];

function ConfidencePill({ value }: { value: number }) {
  const color =
    value >= 90
      ? "text-[#00B894] border-[#00B894]/30 bg-[#00B894]/10"
      : value >= 80
      ? "text-[#FDCB6E] border-[#FDCB6E]/30 bg-[#FDCB6E]/10"
      : "text-[#F5F5F7]/50 border-white/10 bg-white/5";

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${color}`}
    >
      {value}%
    </span>
  );
}

export default function SampleOutput() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0984E3]/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See what you actually{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              get out
            </span>
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg max-w-2xl mx-auto">
            Paste a YouTube link. Get a structured, ready-to-execute workout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Input side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F5F5F7]/20" />
              <span className="text-xs text-[#F5F5F7]/30 font-mono uppercase tracking-widest">
                Input
              </span>
            </div>
            <div className="rounded-xl bg-[#0D0D0F] border border-white/5 p-4 flex items-center gap-3">
              {/* YouTube icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#FF4444"
                className="shrink-0"
              >
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.5 5 12 5 12 5s-4.5 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.5 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2S22 14.4 22 12.7v-1.5C22 9.6 21.8 8 21.8 8z" />
                <polygon points="10,15 15,12 10,9" fill="white" />
              </svg>
              <span className="text-sm text-[#F5F5F7]/60 font-mono truncate">
                youtube.com/watch?v=leg_day_program
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#F5F5F7]/30">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
              AI parsing in progress…
            </div>
          </motion.div>

          {/* Arrow connector (desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center z-10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6C5CE7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          {/* Output side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/[0.03] p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
                <span className="text-xs text-[#A29BFE] font-mono uppercase tracking-widest">
                  Structured Output
                </span>
              </div>
              <span className="text-xs text-[#F5F5F7]/30">Leg Day A</span>
            </div>

            <div className="flex flex-col gap-3">
              {exercises.map((ex, i) => (
                <motion.div
                  key={ex.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#F5F5F7]/90 truncate">
                      {ex.name}
                    </p>
                    <p className="text-xs text-[#F5F5F7]/40 mt-0.5">
                      {ex.sets} sets × {ex.reps} &nbsp;·&nbsp; Rest {ex.rest}
                    </p>
                  </div>
                  <ConfidencePill value={ex.confidence} />
                </motion.div>
              ))}
            </div>

            {/* Verification note */}
            <div className="flex items-center gap-2 mt-1 pt-4 border-t border-white/5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A29BFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs text-[#F5F5F7]/40 italic">
                AI-assisted with human verification
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
