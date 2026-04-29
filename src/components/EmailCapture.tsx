"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

// Best-effort Plausible event — no-op if script not loaded on the page.
function trackConversion(referralSource: string | null) {
  if (typeof window !== "undefined" && typeof (window as Window & { plausible?: (event: string, opts?: object) => void }).plausible === "function") {
    (window as Window & { plausible?: (event: string, opts?: object) => void }).plausible!("WaitlistSignup", {
      props: { referral_source: referralSource ?? "direct" },
    });
  }
}

function EmailCaptureInner() {
  const [email, setEmail] = useState("");
  const [goalEvent, setGoalEvent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const searchParams = useSearchParams();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    if (!API_URL) {
      setStatus("error");
      setErrorMsg("Service configuration error. Please try again later.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const referralSource = searchParams.get("r") || null;

    try {
      const res = await fetch(`${API_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          goal_event_text: goalEvent || null,
          referral_source: referralSource,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      trackConversion(referralSource);
      setStatus("success");
    } catch (err) {
      const msg = err instanceof Error && err.message ? err.message : "";
      setStatus("error");
      setErrorMsg(msg || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 max-w-md">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
          <path d="M7 10l2 2 4-4" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="8" stroke="#6C5CE7" strokeWidth="1.5" />
        </svg>
        <span className="text-sm text-[#A29BFE]">
          You&apos;re in. Watch for an email when we open the private beta.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#F5F5F7]/30 focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-colors"
      />
      <input
        type="text"
        placeholder="What's your goal event? (e.g. HYROX London, Ironman 70.3)"
        value={goalEvent}
        onChange={(e) => setGoalEvent(e.target.value)}
        maxLength={500}
        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#F5F5F7]/30 focus:outline-none focus:border-[#6C5CE7] focus:ring-1 focus:ring-[#6C5CE7] transition-colors"
      />
      {errorMsg && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-xl bg-[#6C5CE7] text-white font-medium hover:bg-[#5A4BD5] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Joining…" : "Join the Beta"}
      </button>
    </form>
  );
}

export default function EmailCapture() {
  return (
    <Suspense fallback={null}>
      <EmailCaptureInner />
    </Suspense>
  );
}
