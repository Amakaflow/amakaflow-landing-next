"use client";

import { motion } from "framer-motion";

const buckets = [
  {
    title: "Push to Devices",
    items: [
      { name: "Garmin", status: "✅" },
      { name: "Apple Watch", status: "✅" },
      { name: "Amazfit", status: "✅" },
    ],
  },
  {
    title: "Import from Content",
    items: [
      { name: "YouTube", status: null },
      { name: "Instagram", status: null },
      { name: "TikTok", status: null },
    ],
  },
  {
    title: "Sync with Platforms",
    items: [
      { name: "Strava", status: null },
      { name: "Runna", status: null },
    ],
  },
];

export default function DeviceGrid() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Bring your gear.{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              We&apos;ll handle the rest.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buckets.map((bucket, i) => (
            <motion.div
              key={bucket.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
            >
              <h3 className="text-sm font-semibold text-[#F5F5F7]/70 mb-4 uppercase tracking-wider">
                {bucket.title}
              </h3>
              <ul className="space-y-2.5">
                {bucket.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[#F5F5F7]/60">{item.name}</span>
                    {item.status && (
                      <span className="text-base">{item.status}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
