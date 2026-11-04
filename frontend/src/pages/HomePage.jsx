import React, { useEffect, useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import FaqAccordion from '../components/ui/FaqAccordion';
import Toast from '../components/ui/Toast';
import EventCover from '../components/events/EventCover';
import { getCategoryStyle } from '../lib/categories';
import {
  PLATFORM_STATS,
  WHAT_WE_DO_CARDS,
  FEATURED_EVENTS_HOME,
  WHY_JOIN_REASONS,
  HOME_FAQ_ITEMS,
} from '../data/mockData';

const wrap = 'w-full max-w-7xl mx-auto px-5 lg:px-10';

/* Countdown to the next hackathon.
   The seed data has no future date, so this counts down to a point
   ~9 days from first load. Swap `target` for the real kickoff time. */
function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor(diff / 3600000) % 24,
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60,
  };
}
const pad = (n) => String(n).padStart(2, '0');

function HeroEditor({ event, target }) {
  const t = useCountdown(target.getTime());
  const date = target.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // each entry is one editor line; animation-delay staggers them in
  const lines = [
    <><span className="syn-com">// next hackathon: sign-ups open to every student</span></>,
    <><span className="syn-kw">export const</span> <span className="syn-fn">hackathon</span> <span className="syn-pun">= {'{'}</span></>,
    <>  <span className="syn-prop">name</span><span className="syn-pun">:</span> <span className="syn-str">"{event.title}"</span><span className="syn-pun">,</span></>,
    <>  <span className="syn-prop">starts</span><span className="syn-pun">:</span> <span className="syn-str">"{date}"</span><span className="syn-pun">,</span></>,
    <>  <span className="syn-prop">format</span><span className="syn-pun">:</span> <span className="syn-str">"48h · online"</span><span className="syn-pun">,</span></>,
    <>  <span className="syn-prop">teamSize</span><span className="syn-pun">:</span> <span className="syn-num">4</span><span className="syn-pun">,</span> <span className="syn-com">// find yours in #team-up</span></>,
    <>  <span className="syn-prop">registrationOpen</span><span className="syn-pun">:</span> <span className="syn-kw">true</span><span className="syn-pun">,</span></>,
    <><span className="syn-pun">{'}'}</span><span className="syn-pun">;</span></>,
  ];

  return (
    <div className="relative rounded-md border border-outline-variant bg-surface-container-lowest overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low pl-4">
        <div className="flex items-center gap-1.5 py-3 pr-4">
          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
        </div>
        <div className="flex">
          <span className="px-4 py-3 font-mono text-xs text-on-surface border-x border-outline-variant bg-surface-container-lowest border-t-2 border-t-primary -mb-px">
            hackathon.ts
          </span>
          <span className="hidden sm:block px-4 py-3 font-mono text-xs text-outline">events.json</span>
        </div>
        <span className="w-10" />
      </div>

      {/* code */}
      <div className="py-5 font-mono text-[13px] sm:text-sm leading-7 overflow-x-auto">
        {lines.map((l, i) => (
          <div
            key={i}
            className="flex whitespace-pre pr-5"
            style={{ animation: 'line-in .45s ease both', animationDelay: `${300 + i * 140}ms` }}
          >
            <span className="w-11 shrink-0 text-right pr-4 text-outline/70 select-none">{i + 1}</span>
            <span className={i === lines.length - 1 ? 'cursor-blink' : ''}>{l}</span>
          </div>
        ))}
      </div>

      {/* status bar = the countdown */}
      <div className="flex items-center justify-between gap-4 border-t border-outline-variant bg-surface-container-low px-4 py-3 font-mono text-xs">
        <span className="inline-flex items-center gap-2 text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-ok live-dot" />
          kickoff in
        </span>
        <span className="text-primary tabular-nums text-sm font-medium" aria-live="off">
          {t.d}d {pad(t.h)}h {pad(t.m)}m {pad(t.s)}s
        </span>
      </div>
    </div>
  );
}

function EventAction({ event, registered, onToggle, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(event.id, event.title)}
      aria-pressed={registered}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-sm cursor-pointer ${
        registered
          ? 'rounded border border-ok/50 bg-ok/10 text-ok font-semibold'
          : 'btn-gradient-primary'
      } ${className}`}
    >
      <span className="material-symbols-outlined text-[18px]">{registered ? 'check' : 'how_to_reg'}</span>
      {registered ? 'Registered' : 'Register'}
    </button>
  );
}

export default function HomePage() {
  const { openJoinModal } = useOutletContext();
  const [toast, setToast] = useState({ msg: '', show: false });
  const [registered, setRegistered] = useState([]);

  const target = useMemo(() => new Date(Date.now() + (9 * 24 + 4) * 3600 * 1000), []);

  const notify = (msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3500);
  };

  const toggleRegister = (id, title) => {
    if (registered.includes(id)) {
      setRegistered((r) => r.filter((x) => x !== id));
      notify(`Registration cancelled for ${title}.`);
    } else {
      setRegistered((r) => [...r, id]);
      notify(`You're registered for ${title}. Check your email for the confirmation.`);
    }
  };

  const [featured, ...rest] = FEATURED_EVENTS_HOME.slice(0, 3);
  const fStyle = featured ? getCategoryStyle(featured.category) : null;

  return (
    <div className="flex flex-col w-full">
      <Toast message={toast.msg} visible={toast.show} onClose={() => setToast((t) => ({ ...t, show: false }))} />

      {/* ───────── Hero ───────── */}
      <section className={`${wrap} pt-14 pb-14 lg:pt-24 lg:pb-20 grid gap-12 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center`}>
        <div>
          <h1 className="font-display font-bold text-display-hero text-on-surface">
            Student developers, building{' '}
            <span className="whitespace-nowrap">together<span className="cursor-blink" aria-hidden="true" /></span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-body-lg text-on-surface-variant">
            The Code Vibe is where students meet, learn new tech, take on hackathons and team up
            on projects that ship.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={openJoinModal} className="btn-gradient-primary inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer">
              Join the community
            </button>
            <Link to="/events" className="btn-frosted-glass inline-flex items-center gap-2 px-6 py-3 text-sm">
              See upcoming events
            </Link>
          </div>
        </div>

        <div className="relative">
          <HeroEditor event={featured || { title: 'Hackathon' }} target={target} />
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="border-y border-outline-variant bg-surface-container-lowest/60">
        <div className={`${wrap} grid grid-cols-2 md:grid-cols-4`}>
          {PLATFORM_STATS.map((s, i) => (
            <div key={s.label} className={`py-6 pr-4 ${i > 0 ? 'md:pl-8 md:border-l border-outline-variant' : ''} ${i % 2 === 1 ? 'pl-5 border-l border-outline-variant md:pl-8' : ''}`}>
              <div className="font-display text-3xl font-bold text-on-surface tabular-nums">{s.value}</div>
              <div className="mt-1 text-sm text-on-surface-variant">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── What we do ───────── */}
      <section className={`${wrap} py-20 lg:py-28 grid gap-10 lg:grid-cols-[0.8fr_1.6fr]`} id="what-we-do">
        <div className="lg:sticky lg:top-28 self-start">
          <h2 className="font-display font-bold text-headline-xl text-on-surface">What we do</h2>
          <p className="mt-4 max-w-[38ch] text-on-surface-variant">
            Four ways to get involved. Pick one, or do all of them.
          </p>
        </div>

        <ul className="border-t border-outline-variant">
          {WHAT_WE_DO_CARDS.map((c) => {
            const s = getCategoryStyle(c.title);
            return (
              <li key={c.id} className="border-b border-outline-variant">
                <Link
                  to={c.link || '/events'}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 py-6 px-1 sm:px-3 -mx-1 sm:-mx-3 hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined mt-0.5" style={{ color: s.color }}>{c.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-display text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">{c.title}</h3>
                      <span className="font-mono text-xs text-outline">{c.category}</span>
                    </div>
                    <p className="mt-1 text-on-surface-variant">{c.description}</p>
                    <p className="mt-3 flex flex-wrap gap-2">
                      {c.tags?.map((t) => (
                        <span key={t} className="font-mono text-xs px-2 py-0.5 border border-outline-variant text-on-surface-variant rounded-sm">{t}</span>
                      ))}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all mt-0.5">arrow_forward</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ───────── Upcoming events ───────── */}
      <section className={`${wrap} pb-20 lg:pb-28`} id="upcoming-events">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="font-display font-bold text-headline-xl text-on-surface">Coming up</h2>
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4">
            All events <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {!featured ? (
          <div className="border border-dashed border-outline-variant rounded p-12 text-center">
            <h3 className="font-display text-lg font-semibold">No events scheduled yet</h3>
            <p className="mt-1 text-on-surface-variant">New dates land here first. Join the community to get notified.</p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {/* lead event */}
            <article className="lg:col-span-2 grid md:grid-cols-[5fr_7fr] bg-surface-container border border-outline-variant rounded-md overflow-hidden hover:border-primary/50 transition-colors">
              <EventCover category={featured.category} className="min-h-48 md:min-h-full border-b md:border-b-0 md:border-r border-outline-variant" />
              <div className="p-6 lg:p-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span style={{ color: fStyle.color }} className="font-semibold">{fStyle.label}</span>
                  <span className="text-outline">{featured.date}</span>
                  <span className="text-outline">{featured.time}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight text-on-surface">{featured.title}</h3>
                <p className="max-w-[56ch] text-on-surface-variant">{featured.description}</p>
                <p className="flex items-center gap-1.5 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-outline">location_on</span>
                  {featured.location}
                </p>
                <div className="mt-auto pt-2 flex flex-wrap gap-3">
                  <EventAction event={featured} registered={registered.includes(featured.id)} onToggle={toggleRegister} />
                  <Link to="/events" className="btn-frosted-glass inline-flex items-center px-4 py-2 text-sm">Details</Link>
                </div>
              </div>
            </article>

            {rest.map((e) => {
              const s = getCategoryStyle(e.category);
              return (
                <article key={e.id} className="grid sm:grid-cols-[2fr_3fr] bg-surface-container border border-outline-variant rounded-md overflow-hidden hover:border-primary/50 transition-colors">
                  <EventCover category={e.category} className="min-h-36 border-b sm:border-b-0 sm:border-r border-outline-variant" />
                  <div className="p-5 flex flex-col gap-2.5">
                    <div className="flex flex-wrap items-center gap-x-3 font-mono text-xs">
                      <span style={{ color: s.color }} className="font-semibold">{s.label}</span>
                      <span className="text-outline">{e.date}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-on-surface">{e.title}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{e.description}</p>
                    <div className="mt-auto pt-2">
                      <EventAction event={e} registered={registered.includes(e.id)} onToggle={toggleRegister} className="py-1.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* ───────── Why join: a path ───────── */}
      <section className="border-y border-outline-variant bg-surface-container-lowest/60" id="why-join">
        <div className={`${wrap} py-20 lg:py-28`}>
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-headline-xl text-on-surface">From first commit to shipped project</h2>
            <p className="mt-4 text-on-surface-variant max-w-[56ch]">
              Most members follow the same path. Start wherever you are.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block absolute top-[11px] left-0 right-0 brand-rule" aria-hidden="true" />
            {WHY_JOIN_REASONS.map((r, i) => {
              const dot = ['#00E5FF', '#2979FF', '#7C4DFF', '#B324E5'][i] || '#2979FF';
              return (
                <li key={r.id} className="relative lg:pr-6">
                  <span
                    className="relative z-10 block w-[22px] h-[22px] border-2 bg-surface rounded-sm"
                    style={{ borderColor: dot }}
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[3px]" style={{ background: dot }} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-on-surface">{r.benefit}</h3>
                  <p className="mt-2 text-on-surface-variant">{r.description}</p>
                  <ul className="mt-4 space-y-1.5 font-mono text-xs text-on-surface-variant">
                    {r.highlights?.map((h) => (
                      <li key={h} className="flex gap-2"><span className="text-outline">+</span>{h}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className={`${wrap} py-20 lg:py-28 grid gap-10 lg:grid-cols-[0.8fr_1.6fr]`} id="faq">
        <div>
          <h2 className="font-display font-bold text-headline-xl text-on-surface">Questions</h2>
          <p className="mt-4 max-w-[34ch] text-on-surface-variant">
            Can't find yours? Email{' '}
            <a className="text-primary underline underline-offset-4" href="mailto:contact@thecodevibe.com">contact@thecodevibe.com</a>.
          </p>
        </div>
        <FaqAccordion items={HOME_FAQ_ITEMS} />
      </section>

      {/* ───────── CTA ───────── */}
      <section className={`${wrap} pb-8`}>
        <div className="relative border border-outline-variant rounded-md bg-surface-container overflow-hidden">
          <div className="brand-rule" aria-hidden="true" />
          <div className="p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="font-mono text-sm text-primary">$ vibe join --community</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight max-w-[22ch]">
                Your next project partner is already here.
              </h2>
              <p className="mt-3 text-on-surface-variant max-w-[50ch]">
                Free for every student. Introduce yourself, pick a pod, and ship something this month.
              </p>
            </div>
            <button type="button" onClick={openJoinModal} className="btn-gradient-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm cursor-pointer shrink-0 self-start md:self-auto">
              Join the community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
