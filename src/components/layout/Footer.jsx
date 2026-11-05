import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/70 backdrop-blur-2xl text-on-surface relative">
      {/* Gradient divider line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2979FF]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* 1. Community Logo & Tagline */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-3 group">
                <div className="w-10 h-10 rounded-full p-0.5 gradient-core-action shadow-glow-cyan shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                  <img
                    alt="The Code Vibe Logo"
                    className="w-full h-full rounded-full object-contain bg-black/95 backdrop-blur-sm"
                    src="/logo.png"
                  />
                </div>
                <span className="font-headline-md text-headline-md tracking-tight font-bold gradient-text-radiant">
                  The Code Vibe
                </span>
              </Link>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
                Where developers explore technology, build meaningful projects, and pair up to ship real software.
              </p>
            </div>

            {/* 4. Contact Email */}
            <div className="pt-1">
              <span className="block font-mono-sm text-xs uppercase tracking-wider text-outline font-semibold mb-1.5">
                Contact Email
              </span>
              <a
                href="mailto:contact@thecodevibe.com"
                className="inline-flex items-center gap-2.5 text-on-surface hover:text-[#0056c5] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#c2c6d7]/35 flex items-center justify-center shadow-xs text-[#0056c5] group-hover:bg-[#0056c5] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-base">mail</span>
                </div>
                <span className="font-mono-sm text-sm font-semibold">contact@thecodevibe.com</span>
              </a>
            </div>
          </div>

          {/* 2. Navigation: Home, About, Events, Collaborate */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-label-ui text-label-ui text-on-surface uppercase tracking-wider font-semibold">
              Navigation
            </div>
            <ul className="space-y-3">
              <li className="leading-none">
                <Link
                  to="/"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  to="/about"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  to="/events"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li className="leading-none">
                <Link
                  to="/collaborate"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  Collaborate
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Socials: Instagram, LinkedIn, GitHub */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-label-ui text-label-ui text-on-surface uppercase tracking-wider font-semibold">
              Social Community
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Connect with fellow builders and follow our latest event updates and open-source releases.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-xl bg-white/90 border border-[#c2c6d7]/35 shadow-xs hover:shadow-glow-cyan hover:border-[#0056c5]/40 flex items-center justify-center text-on-surface-variant hover:text-[#0056c5] transition-all duration-250 hover:-translate-y-1.5 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/90 border border-[#c2c6d7]/35 shadow-xs hover:shadow-glow-cyan hover:border-[#0056c5]/40 flex items-center justify-center text-on-surface-variant hover:text-[#0056c5] transition-all duration-250 hover:-translate-y-1.5 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-10 h-10 rounded-xl bg-white/90 border border-[#c2c6d7]/35 shadow-xs hover:shadow-glow-cyan hover:border-[#0056c5]/40 flex items-center justify-center text-on-surface-variant hover:text-[#0056c5] transition-all duration-250 hover:-translate-y-1.5 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 5. Copyright */}
        <div className="pt-8 border-t border-[#c2c6d7]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm">
          <div className="font-mono-sm text-xs">
            © {currentYear} The Code Vibe. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono-sm text-xs text-on-surface-variant">
            <span className="hover:text-[#0056c5] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#0056c5] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#0056c5] transition-colors cursor-pointer">Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
