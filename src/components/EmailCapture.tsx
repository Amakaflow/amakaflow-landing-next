"use client";

import { useState, type FormEvent } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Will wire to backend later
    console.log("Beta signup:", email);
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 max-w-md">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
          <path d="M7 10l2 2 4-4" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="8" stroke="#6C5CE7" strokeWidth="1.5" />
        </svg>
        <span className="text-sm text-[#A29BFE]">
          You&apos;re on the list! We&apos;ll send your invite soon.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#F5F5F7]/30 focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-[#6C5CE7] text-white font-medium hover:bg-[#5A4BD5] active:scale-[0.98] transition-all cursor-pointer"
      >
        Join the Beta
      </button>
    </form>
  );
}
