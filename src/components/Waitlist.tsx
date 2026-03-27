"use client";

import { motion } from "framer-motion";
import EmailCapture from "./EmailCapture";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#6C5CE7]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Be first in line
          </h2>
          <p className="text-[#F5F5F7]/50 text-lg max-w-lg">
            Get early access when we launch. No spam. Just your early access invite.
          </p>
          <EmailCapture />
        </motion.div>
      </div>
    </section>
  );
}
