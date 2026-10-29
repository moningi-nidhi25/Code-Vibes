import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-white/60 backdrop-blur-2xl border-t border-white/80 text-on-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand Info & Systems Status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-secondary-container via-primary-container to-tertiary-container shadow-xs shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                  <img
                    alt="The Code Vibe Logo"
                    className="w-full h-full rounded-full object-contain bg-white/90 backdrop-blur-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABcyLxDKvWB5SEr_arLw2sMGjqjX3kFjITy-e3zQDkzTmebJ5HNnw3VBsiemhfX77PNp5AN04jBw8Om42EceFRbIEv5f5KtPq3ulzGSru7qs-7SIk82Um9BCKiP9PgnZt1PZwygTMBVfOoGAJFklK1MUFfKz6fzZGARIpL7S7ym4Z2RJmOC2IODSNIDJ3ewu6US8DaCbyQtPX__XUJYl0cXm92S_FWz-kDrduWFHz7hKFOjT59t1Xy"
                  />
                </div>
                <span className="font-headline-md text-headline-md tracking-tight font-bold bg-gradient-to-r from-secondary via-primary-container to-tertiary bg-clip-text text-transparent">
                  The Code Vibe
                </span>
              </Link>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Where developers explore technology, build meaningful projects, and pair up to ship real software.
              </p>
            </div>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-xs w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                All Systems Operational • 12,400+ Active Builders
              </span>
            </div>

            {/* Social SVGs */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:bg-white flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-label-ui text-label-ui text-on-surface uppercase tracking-wider font-semibold">
              Navigation
            </div>
            <ul className="space-y-3">
              <li className="leading-none">
                <Link to="/" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/events" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Events &amp; Workshops
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/collaborate" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Collaborate
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/admin" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-label-ui text-label-ui text-on-surface uppercase tracking-wider font-semibold">
              Community
            </div>
            <ul className="space-y-3">
              <li className="leading-none">
                <Link to="/events" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  AI Agents Hackathon
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Pair Programming Circles
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/collaborate" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Open Source Pods
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Mentorship Network
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/admin" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-label-ui text-label-ui text-on-surface uppercase tracking-wider font-semibold">
              Resources
            </div>
            <ul className="space-y-3">
              <li className="leading-none">
                <Link to="/projects/devpulse" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/events/wasm-memory-safety" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/events/wasm-memory-safety" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Brand Assets
                </Link>
              </li>
              <li className="leading-none">
                <Link to="/projects/devpulse" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  API &amp; Telemetry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm">
          <div className="font-mono-sm text-mono-sm">
            © 2025 The Code Vibe Community. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 font-body-sm text-body-sm">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Security</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
