import React from 'react';
import { Link } from 'react-router-dom';

const COLS = [
  {
    title: 'Community',
    links: [
      { name: 'About', to: '/about' },
      { name: 'Events', to: '/events' },
      { name: 'Collaborate', to: '/collaborate' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { name: 'Join a hackathon', to: '/events' },
      { name: 'Submit a project', to: '/collaborate' },
      { name: 'Organiser portal', to: '/admin' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-outline-variant bg-surface-container-lowest relative">
      <div className="brand-rule" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="The Code Vibe" className="w-24 h-24 object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              A student community for learning, building and shipping together. We run hackathons,
              workshops and open projects every month.
            </p>
            <a
              href="mailto:contact@thecodevibe.com"
              className="mt-4 inline-block font-mono text-sm text-primary hover:underline underline-offset-4"
            >
              contact@thecodevibe.com
            </a>
          </div>

          {COLS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="font-display font-semibold text-sm text-on-surface mb-4">{c.title}</h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <Link to={l.to} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display font-semibold text-sm text-on-surface mb-4">Find us</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ['GitHub', 'https://github.com'],
                ['Instagram', 'https://instagram.com'],
                ['LinkedIn', 'https://linkedin.com'],
              ].map(([n, h]) => (
                <li key={n}>
                  <a href={h} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-outline">
          <span>© {new Date().getFullYear()} The Code Vibe. Built by students.</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ok live-dot" />
            all systems running
          </span>
        </div>
      </div>
    </footer>
  );
}
