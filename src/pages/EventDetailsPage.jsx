import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toast from '../components/ui/Toast';

/**
 * EventDetailsPage Component
 * Deep-dive technical masterclass page adhering to Electric Glass & Precision Syntax.
 */
export default function EventDetailsPage() {
  const [isRsvpd, setIsRsvpd] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const toggleRsvp = () => {
    if (!isRsvpd) {
      setIsRsvpd(true);
      showToast('Spot confirmed! Check your email and Discord for your pass.');
    } else {
      setIsRsvpd(false);
      showToast('Registration cancelled.');
    }
  };

  const handleCopyCalendar = () => {
    showToast('Calendar invite (.ics) generated & added to queue!');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    showToast('Event URL copied to your clipboard!');
  };

  const handleBookmark = () => {
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    showToast(nextState ? 'Saved to your builder bookmarks!' : 'Removed from saved bookmarks.');
  };

  const seatsFilled = isRsvpd ? 85 : 84;
  const seatsTotal = 120;
  const percentage = Math.round((seatsFilled / seatsTotal) * 100);

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-8 space-y-8">
        {/* Top Bar: Navigation & Telemetry */}
        <div className="flex items-center justify-between">
          <Link
            to="/events"
            className="btn-frosted-glass inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-label-ui text-label-ui shadow-xs"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Back to Events</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full telemetry-chip shadow-card-default">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span className="font-mono-sm text-mono-sm text-[#006875] font-semibold">
                STAGE 02 • LIVE SANDBOX
              </span>
            </div>
            <span className="font-mono-sm text-mono-sm text-on-surface-variant hidden sm:inline">
              REF: #EVT-WASM-894
            </span>
          </div>
        </div>

        {/* Hero Masthead Banner: Glass Tier 2 with Specular Highlights */}
        <div className="relative rounded-2xl glass-base border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/35 p-8 lg:p-10 shadow-card-default overflow-hidden">
          <div className="relative z-10 space-y-6">
            {/* Badges & Temporal Meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[rgba(179,36,229,0.12)] border border-[rgba(179,36,229,0.30)] text-[#9700c6] font-mono-sm text-mono-sm tracking-wide uppercase font-semibold">
                Interactive Workshop
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-[#006875] font-mono-sm text-mono-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                Online • Discord Live
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-white/90 text-on-surface-variant font-mono-sm text-mono-sm shadow-xs">
                <span className="material-symbols-outlined text-sm text-[#0056c5]">schedule</span>
                Sep 12, 2025 • 11:00 AM – 02:00 PM PST
              </span>
            </div>

            {/* Main Title and One-liner */}
            <div className="space-y-3 max-w-4xl">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                Rust for TypeScript Devs: WASM &amp; Memory Safety
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Bridging async event loops, zero-copy byte buffers, and compiling multi-threaded Web Workers via{' '}
                <span className="font-mono-sm text-mono-sm px-1.5 py-0.5 rounded bg-white/90 border border-[#c2c6d7]/40 text-[#0056c5] font-semibold">
                  wasm-bindgen
                </span>{' '}
                for line-rate browser computation.
              </p>
            </div>

            {/* Interactive CTAs & Quick Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={toggleRsvp}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-label-ui text-label-ui shadow-sm active:scale-95 transition-all cursor-pointer ${
                  isRsvpd
                    ? 'bg-[#006875] text-white'
                    : 'btn-gradient-primary'
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {isRsvpd ? 'check_circle' : 'event_available'}
                </span>
                <span>{isRsvpd ? 'Registered! See you on Stage' : 'RSVP • Register Free'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCalendar}
                className="btn-frosted-glass inline-flex items-center gap-2 px-5 py-3 rounded-lg font-label-ui text-label-ui shadow-xs active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg text-[#0056c5]">calendar_add_on</span>
                <span>Add to Calendar (.ics)</span>
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share Event"
                  className="btn-frosted-glass p-3 rounded-lg shadow-xs cursor-pointer"
                  title="Share event"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                </button>
                <button
                  type="button"
                  onClick={handleBookmark}
                  aria-label="Bookmark Event"
                  className={`btn-frosted-glass p-3 rounded-lg shadow-xs cursor-pointer ${
                    isBookmarked ? 'text-[#0056c5] border-[#2979FF]/50' : 'text-on-surface-variant'
                  }`}
                  title="Bookmark event"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    style={isBookmarked ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    bookmark
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Overview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Deep Technical Curriculum & Agenda */}
          <div className="lg:col-span-8 space-y-6">
            {/* Section: Live Workshop Schedule */}
            <div className="rounded-xl bento-card p-7 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(179,36,229,0.12)] text-[#9700c6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">pace</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Live Workshop Schedule
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm text-on-surface-variant font-semibold">
                  3h Total Runtime
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#c2c6d7]/35">
                {/* Schedule Item 1 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#0056c5] ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      11:00 AM • Welcome, Archetype &amp; Rust Toolchain
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-[#0056c5] font-semibold">
                      30 mins
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Contextualizing the WebAssembly MVP specs, configuring{' '}
                    <span className="font-mono-sm text-mono-sm text-[#0056c5]">wasm-pack</span>, and breaking down cargo crate structures.
                  </p>
                </div>

                {/* Schedule Item 2 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#00E5FF] ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      11:30 AM • Hands-On Pairing: Structs &amp; Typescript Interfaces
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-[#006875] font-semibold">
                      75 mins
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Pair programming exercises: translating JSON payload transformers into deterministic compiled Rust algorithms.
                  </p>
                </div>

                {/* Schedule Item 3 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#B324E5] ring-4 ring-white" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      12:45 PM • Benchmarking, Stress Tests &amp; Open Q&amp;A
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-[#9700c6] font-semibold">
                      45 mins
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Real-time browser profiling in Chrome DevTools against 500,000 array elements, architectural teardown, and open floor questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Prerequisites Bento Card */}
            <div className="rounded-xl bento-card p-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,229,255,0.12)] text-[#006875] flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Prerequisites &amp; Setup
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {[
                  { title: 'Modern TypeScript & Node 20+', desc: 'Familiarity with Promises, typed generics, and browser ArrayBuffers.' },
                  { title: 'Zero Prior Rust Required', desc: 'We start from syntax zero and bridge incrementally to safety guarantees.' },
                  { title: 'Dev Environment Options', desc: 'Local cargo + wasm-pack or one-click zero-install browser container.' },
                  { title: 'Discord Audio Enabled', desc: 'Live Q&A microphone queue enabled for interactive code review.' },
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-white/80 shadow-xs">
                    <span className="material-symbols-outlined text-[#006875] text-xl mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                        {req.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Rules & Guidelines */}
            <div className="rounded-xl bento-card p-7 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(179,36,229,0.12)] text-[#9700c6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">gavel</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Rules &amp; Guidelines
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm text-[#9700c6] bg-[rgba(179,36,229,0.12)] border border-[rgba(179,36,229,0.25)] px-2.5 py-1 rounded font-semibold">
                  Event Guidelines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {[
                  { title: 'Code of Conduct & Mutual Respect', desc: 'Zero-tolerance harassment policy; maintain an inclusive, constructive, and ego-free technical discussion culture.', icon: 'handshake' },
                  { title: 'Active Participation & Mic Etiquette', desc: 'Keep microphones muted during presentations; open audio and pair discussions during pair-programming breakouts.', icon: 'mic_external_on' },
                  { title: 'Original Work & Collaboration', desc: 'Fork responsibly with open-source spirit; appropriately credit paired solutions and shared crate dependencies.', icon: 'fork_right' },
                  { title: 'Recording & Distribution Policy', desc: 'Session is archived for registered participants; re-streaming, mirroring, or external unauthorized distribution is prohibited.', icon: 'videocam_off' }
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-white/80 shadow-xs">
                    <span className="material-symbols-outlined text-[#0056c5] text-xl mt-0.5">
                      {rule.icon}
                    </span>
                    <div>
                      <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                        {rule.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Event Specs & Logistics Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl bento-card p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#c2c6d7]/30">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-medium">
                  Admission Fee
                </span>
                <span className="font-headline-sm text-headline-sm text-[#0056c5] font-bold">
                  Free • Open Source
                </span>
              </div>

              {/* Capacity Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Seat Availability
                  </span>
                  <span className="font-mono-sm text-mono-sm text-[#0056c5] font-bold">
                    {seatsFilled} / {seatsTotal} filled ({percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-black/5 overflow-hidden border border-[#c2c6d7]/30">
                  <div
                    className="h-full gradient-core-action rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-right">
                  {seatsTotal - seatsFilled} reservation slots remaining
                </p>
              </div>

              {/* Host Profile Card */}
              <div className="space-y-3 pt-2">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-semibold uppercase tracking-wider text-xs">
                  Session Host &amp; Mentor
                </span>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/70 border border-white/80 shadow-xs">
                  <img
                    className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-[#0056c5]/20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjMatR1C58aEQehxgaWQy2NC4rqGKINntASz8WsdeP0NCJ4Ki6wDHpgGmXgLW9RDGegzIE9D4CZhb3BjwlvNVmpEFs_HLb3aCVQmi2QvV_kOCyCOuOqrUJNk9d-eG_KYELtRzFeiP1FWeqne-nmKbOduBfb-izvVHw1Fz4rYaXtZ5U1-S_sl-3gK2n_l33b0tV2CxyXnkDycW5CgHDAdb05YezQTB7ZS_xuM4nWPM"
                    alt="Elena Rostova"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-label-ui text-label-ui text-on-surface font-bold truncate">
                        Elena Rostova
                      </h4>
                      <span className="material-symbols-outlined text-sm text-[#0056c5]" title="Verified Mentor">
                        verified
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Lead Systems Architect @ VibeCore
                    </p>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Elena GitHub Profile"
                    className="p-2 rounded-lg bg-white hover:bg-black/5 text-on-surface transition-colors border border-[#c2c6d7]/35"
                  >
                    <span className="material-symbols-outlined text-base">code</span>
                  </a>
                </div>
              </div>

              {/* Live Attendee Avatars */}
              <div className="space-y-3 pt-2">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-semibold uppercase tracking-wider text-xs">
                  Confirmed Peer Contenders
                </span>
                <div className="flex items-center -space-x-2 overflow-hidden py-1">
                  {[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyuVx_d7jSI4eKcNT-HnXOtS7osOz_D-zjSjTPwJm6r5FVkIaYJu8ROcCoyl4YutObKhxihlJdtxTtxgfIQCtIGu4xH155rF6pK-VIaP92os1u_b8Gdviogsib4yBkI16_hG0F8buJ33uda__jWwAEGn_hr191O9_sjEZbYG-cosQ4piHHkHWPbckTPxYc9l5SN_VbBWX4c14Rd3DCR6JEQdBF5AO9sm1TYn0z9W9F6WVe_kJq3zhV',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjMatR1C58aEQehxgaWQy2NC4rqGKINntASz8WsdeP0NCJ4Ki6wDHpgGmXgLW9RDGegzIE9D4CZhb3BjwlvNVmpEFs_HLb3aCVQmi2QvV_kOCyCOuOqrUJNk9d-eG_KYELtRzFeiP1FWeqne-nmKbOduBfb-izvVHw1Fz4rYaXtZ5U1-S_sl-3gK2n_l33b0tV2CxyXnkDycW5CgHDAdb05YezQTB7ZS_xuM4nWPM',
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
                  ].map((src, idx) => (
                    <img
                      key={idx}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={src}
                      alt="Peer"
                    />
                  ))}
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#0056c5] text-white ring-2 ring-white font-mono-sm text-xs font-bold">
                    +79
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
