"use client";

import { motion } from "framer-motion";

const channels = [
  {
    name: "Mobile",
    icon: "\uD83D\uDCF1",
    content: (
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#F5F5F7]/70 mb-3">Training Week</div>
        {["Mon — Upper Body", "Tue — 5K Run", "Wed — Rest", "Thu — Hyrox Prep"].map(
          (day) => (
            <div
              key={day}
              className="flex items-center gap-2 text-xs text-[#F5F5F7]/50 py-1.5 px-2 rounded bg-white/[0.03]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
              {day}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    name: "Telegram",
    icon: "\uD83D\uDCAC",
    content: (
      <div className="space-y-2.5">
        <div className="self-end bg-[#6C5CE7]/20 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-[#F5F5F7]/70 ml-auto max-w-[80%]">
          Plan my week
        </div>
        <div className="bg-white/[0.05] rounded-xl rounded-tl-sm px-3 py-2 text-xs text-[#F5F5F7]/50 max-w-[90%]">
          Here&apos;s your week: 4 sessions, 1 rest day...
        </div>
        <div className="flex gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">
            Approve
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 text-[#F5F5F7]/30 text-[10px] font-medium">
            Edit
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Watch",
    icon: "⌚",
    content: (
      <div className="flex flex-col items-center text-center gap-2 py-2">
        <div className="text-[10px] text-[#F5F5F7]/30 uppercase tracking-wider">
          Now
        </div>
        <div className="text-sm font-semibold">Bench Press</div>
        <div className="text-xs text-[#F5F5F7]/50">4 x 10 @ 60kg</div>
        <div className="mt-1 text-lg font-mono text-[#6C5CE7]">1:30</div>
        <div className="text-[10px] text-[#F5F5F7]/30">Rest timer</div>
      </div>
    ),
  },
];

export default function MultiChannel() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            One plan,{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              every surface.
            </span>
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg max-w-2xl mx-auto">
            Same session, same approval state, same sync status — whether
            you&apos;re on Telegram, web, or your watch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{ch.icon}</span>
                <span className="text-sm font-semibold text-[#F5F5F7]/70">
                  {ch.name}
                </span>
              </div>
              {ch.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
