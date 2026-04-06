"use client";

import { motion } from "framer-motion";

const messages = [
  {
    role: "user" as const,
    text: "Plan my week \u2014 Hyrox, keep 3 runs",
  },
  {
    role: "ai" as const,
    text: null,
    plan: [
      { day: "Mon", session: "5K Easy Run" },
      { day: "Tue", session: "Hyrox Prep" },
      { day: "Wed", session: "Tempo Run" },
      { day: "Thu", session: "Upper Body" },
      { day: "Fri", session: "Interval Run" },
      { day: "Sat", session: "Hyrox Simulation" },
      { day: "Sun", session: "Rest" },
    ],
  },
  {
    role: "user" as const,
    text: "Move Hyrox to Thursday",
  },
  {
    role: "ai" as const,
    text: null,
    plan: [
      { day: "Mon", session: "5K Easy Run" },
      { day: "Tue", session: "Tempo Run" },
      { day: "Wed", session: "Upper Body" },
      { day: "Thu", session: "Hyrox Prep" },
      { day: "Fri", session: "Interval Run" },
      { day: "Sat", session: "Hyrox Simulation" },
      { day: "Sun", session: "Rest" },
    ],
    warning: "Thu + Sat are both Hyrox \u2014 consider spacing them out.",
  },
];

export default function CoachChat() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Plan by chat.{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              Approve by tap.
            </span>
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "user" ? (
                <div className="bg-[#6C5CE7]/20 rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-[#F5F5F7]/80">{msg.text}</p>
                </div>
              ) : (
                <div className="bg-white/[0.04] rounded-xl rounded-tl-sm px-4 py-3 max-w-[90%] space-y-2.5">
                  {/* Plan grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {msg.plan!.map((d) => (
                      <div key={d.day} className="text-center">
                        <div className="text-[10px] text-[#F5F5F7]/30 mb-1">
                          {d.day}
                        </div>
                        <div className="text-[10px] text-[#F5F5F7]/60 leading-tight">
                          {d.session}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Warning */}
                  {msg.warning && (
                    <div className="flex items-start gap-1.5 text-[11px] text-amber-400/80 bg-amber-500/[0.08] rounded-lg px-2.5 py-1.5">
                      <span className="shrink-0">{"\u26A0\uFE0F"}</span>
                      {msg.warning}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">
                      Approve
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[#F5F5F7]/30 text-[10px] font-medium">
                      Edit
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[#F5F5F7]/30 text-[10px] font-medium">
                      Reject
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
