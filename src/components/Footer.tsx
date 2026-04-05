export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#6C5CE7]">Amaka</span>Flow
            </span>
            <span className="text-xs text-[#F5F5F7]/30">
              Built with love for people who train
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#F5F5F7]/40">
            <a href="#" className="hover:text-[#F5F5F7]/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F5F5F7]/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F5F5F7]/70 transition-colors">Contact</a>
            <a href="mailto:privacy@amakaflow.com?subject=Data+Deletion+Request" className="hover:text-[#A29BFE] transition-colors">Request data deletion</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-[#F5F5F7]/30 hover:text-[#6C5CE7] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="text-[#F5F5F7]/30 hover:text-[#6C5CE7] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-[#F5F5F7]/30 hover:text-[#6C5CE7] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.22 8.22 0 004.8 1.54V7.08a4.85 4.85 0 01-1.04-.39z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-3">
          <p className="text-xs text-[#F5F5F7]/25 text-center">
            GDPR-aware practices&nbsp;&bull;&nbsp;Encrypted in transit&nbsp;&bull;&nbsp;We do not sell your data
          </p>
          <p className="text-xs text-[#F5F5F7]/20">
            &copy; {new Date().getFullYear()} AmakaFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
