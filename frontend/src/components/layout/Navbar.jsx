import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Collaborate', path: '/collaborate' },
];

export default function Navbar({ onOpenJoinModal }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3 h-16 inline-flex items-center text-sm font-medium transition-colors ${
      isActive ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
    } ${isActive ? 'after:absolute after:left-3 after:right-3 after:bottom-0 after:h-0.5 after:bg-primary' : ''}`;

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className="fixed top-0 inset-x-0 z-50 border-b border-outline-variant bg-surface/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5" aria-label="The Code Vibe home">
              <img src="/logo.png" alt="" className="w-11 h-11 object-contain" />
              <span className="font-display font-bold text-[1.05rem] tracking-tight text-on-surface">
                The Code Vibe
              </span>
            </Link>

            <nav className="hidden lg:flex items-center" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.path} to={l.path} end={l.path === '/'} className={linkClass}>
                  {l.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              github
            </a>
            <button
              type="button"
              onClick={onOpenJoinModal}
              className="btn-gradient-primary inline-flex items-center px-4 py-2 text-sm cursor-pointer"
            >
              Join community
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 border border-outline-variant rounded text-on-surface hover:border-primary cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="material-symbols-outlined text-[22px] block">{open ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-outline-variant bg-surface" aria-label="Mobile">
            <div className="max-w-7xl mx-auto px-5 py-2">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  end={l.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 border-b border-outline-variant/60 text-base font-medium ${
                      isActive ? 'text-primary' : 'text-on-surface'
                    }`
                  }
                >
                  <span>{l.name}</span>
                  <span className="font-mono text-xs text-outline">{l.path === '/' ? '/' : l.path}</span>
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
