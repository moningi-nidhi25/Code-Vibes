import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenJoinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Collaborate', path: '/collaborate' },
    { name: 'Admin', path: '/admin', hasPulse: true },
  ];

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? 'px-3.5 py-1.5 transition-all text-primary font-semibold bg-surface-container-high/90 border border-white/80 rounded-lg shadow-xs flex items-center gap-1.5'
      : 'px-3.5 py-1.5 font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface hover:bg-white/50 rounded-lg transition-colors flex items-center gap-1.5';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-3">
        <div className="h-16 px-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,31,75,0.06)] flex items-center justify-between gap-space-md">
          {/* Brand Logo */}
          <div className="flex items-center gap-space-lg">
            <Link to="/" className="flex items-center gap-space-sm group">
              <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-secondary-container via-primary-container to-tertiary-container shadow-xs shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  alt="The Code Vibe Logo"
                  className="w-full h-full rounded-full object-contain bg-white/90 backdrop-blur-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABcyLxDKvWB5SEr_arLw2sMGjqjX3kFjITy-e3zQDkzTmebJ5HNnw3VBsiemhfX77PNp5AN04jBw8Om42EceFRbIEv5f5KtPq3ulzGSru7qs-7SIk82Um9BCKiP9PgnZt1PZwygTMBVfOoGAJFklK1MUFfKz6fzZGARIpL7S7ym4Z2RJmOC2IODSNIDJ3ewu6US8DaCbyQtPX__XUJYl0cXm92S_FWz-kDrduWFHz7hKFOjT59t1Xy"
                />
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight font-bold bg-gradient-to-r from-secondary via-primary-container to-tertiary bg-clip-text text-transparent">
                The Code Vibe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-space-xs p-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={getLinkClasses}
                >
                  {link.hasPulse && (
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
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
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              Join Community
            </button>

            <Link
              to="/admin"
              title="View Profile & Dashboard"
              className="relative rounded-full ring-2 ring-white/80 shadow-xs hover:ring-primary/40 transition-all shrink-0"
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
              className="lg:hidden p-2 rounded-xl bg-white/70 hover:bg-white text-on-surface border border-white/80 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-xl leading-none">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl font-label-ui text-label-ui transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`
                }
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.hasPulse && (
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  )}
                </div>
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-center shadow-sm"
              >
                Join Community
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
