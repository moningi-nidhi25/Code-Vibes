import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Navbar Component
 * Floating Glass Tier 3 header (rgba(255, 255, 255, 0.90), 24px blur, specular highlight borders).
 */
export default function Navbar({ onOpenJoinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Collaborate', path: '/collaborate' },
    { name: 'Admin', path: '/admin', hasPulse: true },
  ];

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? 'px-3.5 py-1.5 transition-all text-[#0056c5] font-semibold bg-white/95 border border-white/90 rounded-lg shadow-card-default flex items-center gap-1.5'
      : 'px-3.5 py-1.5 font-label-ui text-label-ui text-[#424655] hover:text-[#151b2b] hover:bg-white/60 rounded-lg transition-colors flex items-center gap-1.5';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-3">
        <div className="h-16 px-6 rounded-2xl glass-elevated border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/30 shadow-card-default flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full p-0.5 gradient-core-action shadow-glow-cyan shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  alt="The Code Vibe Logo"
                  className="w-full h-full rounded-full object-contain bg-black/95 backdrop-blur-sm"
                  src="/logo.png"
                />
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight font-bold gradient-text-radiant">
                The Code Vibe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1 bg-black/5 rounded-xl border border-white/40">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={getLinkClasses}
                >
                  {link.hasPulse && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                  )}
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenJoinModal}
              className="btn-gradient-primary inline-flex items-center justify-center px-4 py-2 rounded-lg font-label-ui text-label-ui shadow-sm active:scale-95 cursor-pointer"
            >
              Join Community
            </button>

            <Link
              to="/admin"
              title="View Profile & Dashboard"
              className="relative rounded-full ring-2 ring-white/90 shadow-card-default hover:ring-[#2979FF]/50 transition-all shrink-0"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyuVx_d7jSI4eKcNT-HnXOtS7osOz_D-zjSjTPwJm6r5FVkIaYJu8ROcCoyl4YutObKhxihlJdtxTtxgfIQCtIGu4xH155rF6pK-VIaP92os1u_b8Gdviogsib4yBkI16_hG0F8buJ33uda__jWwAEGn_hr191O9_sjEZbYG-cosQ4piHHkHWPbckTPxYc9l5SN_VbBWX4c14Rd3DCR6JEQdBF5AO9sm1TYn0z9W9F6WVe_kJq3zhV"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white" />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/80 hover:bg-white text-on-surface border border-white/90 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Glass Tier 3) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl glass-elevated border border-white/80 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full px-4 py-2.5 rounded-xl font-body-md text-body-md flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-white text-[#0056c5] font-semibold shadow-xs'
                      : 'text-[#424655] hover:text-[#151b2b] hover:bg-white/60'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.hasPulse && (
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                )}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-[#c2c6d7]/30">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full btn-gradient-primary py-2.5 rounded-xl font-label-ui text-label-ui flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Community</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
