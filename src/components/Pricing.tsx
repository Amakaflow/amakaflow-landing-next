"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try the magic — import, structure, and sync.",
    features: [
      "5 imports per month",
      "AI workout parsing",
      "1 device sync (Garmin, Apple Watch, or Amazfit)",
      "Basic analytics & streaks",
      "Telegram bot (basic commands)",
    ],
    cta: "Get Started Free",
    highlight: false,
    badge: "Free Forever",
    comingSoon: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/ mo",
    annualPrice: "$74.99/yr",
    annualSaving: "Save 37%",
    description: "Remove the friction. Train like a system.",
    features: [
      "Unlimited imports from any source",
      "AI weekly planning & auto-rebalancing",
      "All devices (Garmin + Apple Watch + Amazfit)",
      "Coach chat with memory",
      "Proactive reminders & notifications",
      "Advanced analytics (freshness, RPE, adherence)",
      "Connected calendars (Runna, Strava)",
    ],
    cta: "Start 30-Day Free Trial",
    highlight: true,
    badge: "Most Popular",
    comingSoon: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg max-w-2xl mx-auto">
            Start free. Upgrade when the orchestrator saves you time.
          </p>
        </motion.div>

        {/* Free during beta badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C5CE7]/15 border border-[#6C5CE7]/30 text-sm text-[#A29BFE] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-pulse" />
            Everything free during Open Beta — no credit card required
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col gap-5 transition-all duration-300 ${
                plan.highlight
                  ? "border-[#6C5CE7]/50 bg-[#6C5CE7]/[0.06] shadow-lg shadow-[#6C5CE7]/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {/* Badge */}
              <span
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold ${
                  plan.highlight
                    ? "bg-[#6C5CE7] text-white"
                    : "bg-white/10 text-[#F5F5F7]/50"
                }`}
              >
                {plan.badge}
              </span>

              {/* Plan header */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-[#F5F5F7]/40">{plan.period}</span>
                </div>
                {plan.annualPrice && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-[#F5F5F7]/50">or {plan.annualPrice}</span>
                    <span className="text-xs font-semibold text-[#6C5CE7] bg-[#6C5CE7]/10 px-2 py-0.5 rounded-full">
                      {plan.annualSaving}
                    </span>
                  </div>
                )}
                <p className="text-sm text-[#F5F5F7]/40 mt-3">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#F5F5F7]/60">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.highlight ? "#6C5CE7" : "#6C5CE7"}
                      strokeOpacity={plan.highlight ? 1 : 0.5}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#signup"
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 text-center block ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] text-white hover:opacity-90"
                    : "bg-white/5 text-[#F5F5F7]/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Founders note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-[#F5F5F7]/30 mt-8"
        >
          Founding members get 50% off their first year. Limited to 200 seats.
        </motion.p>
      </div>
    </section>
  );
}
