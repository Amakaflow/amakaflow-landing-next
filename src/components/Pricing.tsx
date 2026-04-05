"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started.",
    features: ["6 platform imports", "AI workout parsing", "Basic analytics", "Up to 3 devices"],
    cta: "Join Beta",
    highlight: true,
    badge: "Current",
    comingSoon: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ mo",
    description: "For serious athletes who want more.",
    features: ["Unlimited imports", "Advanced AI coaching", "Full analytics", "Priority support"],
    cta: "Coming Soon",
    highlight: false,
    badge: "Coming Soon",
    comingSoon: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/ mo",
    description: "For coaches and training crews.",
    features: ["Everything in Pro", "Up to 10 athletes", "Team dashboard", "CSV exports"],
    cta: "Coming Soon",
    highlight: false,
    badge: "Coming Soon",
    comingSoon: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Start free. Upgrade when you&apos;re ready.
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
            Free During Beta — no credit card required
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 flex flex-col gap-5 transition-all duration-300 ${
                plan.highlight
                  ? "border-[#6C5CE7]/50 bg-[#6C5CE7]/[0.06] shadow-lg shadow-[#6C5CE7]/10"
                  : "border-white/5 bg-white/[0.02] opacity-70"
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
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-[#F5F5F7]/40">{plan.period}</span>
                </div>
                <p className="text-sm text-[#F5F5F7]/40 mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#F5F5F7]/60">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.highlight ? "#6C5CE7" : "#F5F5F7"}
                      strokeOpacity={plan.highlight ? 1 : 0.3}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                disabled={plan.comingSoon}
                className={`w-full rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#6C5CE7] to-[#0984E3] text-white hover:opacity-90"
                    : "bg-white/5 text-[#F5F5F7]/30 cursor-not-allowed"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
