import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toast from '../components/ui/Toast';

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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/70 backdrop-blur-md hover:bg-surface-container transition-colors font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface shadow-sm border border-outline-variant/20"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Back to Events</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
              <span className="font-mono-sm text-mono-sm text-secondary font-semibold">
                STAGE 02 • LIVE SANDBOX
              </span>
            </div>
            <span className="font-mono-sm text-mono-sm text-on-surface-variant hidden sm:inline">
              REF: #EVT-WASM-894
            </span>
          </div>
        </div>

        {/* Hero Glassmorphic Masthead Banner */}
        <div className="relative rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 lg:p-10 shadow-xl overflow-hidden border border-outline-variant/30">
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-bl from-secondary-container/30 via-primary-container/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Badges & Temporal Meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono-sm text-mono-sm tracking-wide uppercase font-semibold">
                Interactive Workshop
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-mono-sm text-mono-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                Online • Discord Live
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-sm text-mono-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Sep 12, 2025 • 11:00 AM – 02:00 PM PST
              </span>
            </div>

            {/* Main Title and One-liner */}
            <div className="space-y-3 max-w-4xl">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Rust for TypeScript Devs: WASM &amp; Memory Safety
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Bridging async event loops, zero-copy byte buffers, and compiling multi-threaded Web Workers via{' '}
                <span className="font-mono-sm text-mono-sm px-1.5 py-0.5 rounded bg-surface-container text-primary font-medium">
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
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-label-ui text-label-ui shadow-lg hover:shadow-xl hover:opacity-95 active:scale-95 transition-all cursor-pointer ${
                  isRsvpd
                    ? 'bg-secondary text-on-secondary'
                    : 'bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary'
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest text-on-surface font-label-ui text-label-ui shadow-sm active:scale-95 transition-all cursor-pointer border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-lg">calendar_add_on</span>
                <span>Add to Calendar (.ics)</span>
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share Event"
                  className="p-3 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface shadow-sm transition-all cursor-pointer border border-outline-variant/30"
                  title="Share event"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                </button>
                <button
                  type="button"
                  onClick={handleBookmark}
                  aria-label="Bookmark Event"
                  className={`p-3 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest shadow-sm transition-all cursor-pointer border border-outline-variant/30 ${
                    isBookmarked ? 'text-primary' : 'text-on-surface-variant'
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
            <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-7 shadow-sm space-y-5 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">pace</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Live Workshop Schedule
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                  3h Total Runtime
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">
                {/* Schedule Item 1 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      11:00 AM • Welcome, Archetype &amp; Rust Toolchain
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-primary font-medium">
                      30 mins
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Contextualizing the WebAssembly MVP specs, configuring{' '}
                    <span className="font-mono-sm text-mono-sm">wasm-pack</span>, and breaking down cargo crate structures.
                  </p>
                </div>

                {/* Schedule Item 2 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-secondary-container ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      11:30 AM • Hands-On Pairing: Structs &amp; Typescript Interfaces
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-secondary font-medium">
                      75 mins
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Pair programming exercises: translating JSON payload transformers into deterministic compiled Rust algorithms.
                  </p>
                </div>

                {/* Schedule Item 3 */}
                <div className="relative">
                  <span className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-tertiary ring-4 ring-surface-container-lowest" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-label-ui text-label-ui text-on-surface font-bold">
                      12:45 PM • Benchmarking, Stress Tests &amp; Open Q&amp;A
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-tertiary font-medium">
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
            <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-7 shadow-sm space-y-4 border border-outline-variant/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Prerequisites &amp; Setup
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Modern TypeScript &amp; Node 20+
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Familiarity with Promises, typed generics, and browser ArrayBuffers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Zero Prior Rust Required
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      We start from syntax zero and bridge incrementally to safety guarantees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Dev Environment Options
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Local `cargo + wasm-pack` or one-click zero-install browser container.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Discord Audio Enabled
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Live Q&amp;A microphone queue enabled for interactive code review.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Rules & Guidelines */}
            <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-7 shadow-sm space-y-5 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">gavel</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Rules &amp; Guidelines
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm text-tertiary bg-tertiary-fixed/50 px-2.5 py-1 rounded font-semibold">
                  Event Guidelines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    handshake
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Code of Conduct &amp; Mutual Respect
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Zero-tolerance harassment policy; maintain an inclusive, constructive, and ego-free technical discussion culture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    mic_external_on
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Active Participation &amp; Mic Etiquette
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Keep microphones muted during presentations; open audio and pair discussions during pair-programming breakouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    fork_right
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Original Work &amp; Collaboration
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Fork responsibly with open-source spirit; appropriately credit paired solutions and shared crate dependencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low/60">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    videocam_off
                  </span>
                  <div>
                    <p className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Recording &amp; Distribution Policy
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Session is archived for registered participants; re-streaming, mirroring, or external unauthorized distribution is prohibited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Event Specs & Logistics Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-6 shadow-sm space-y-6 border border-outline-variant/30">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/60">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-medium">
                  Admission Fee
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  Free • Open Source
                </span>
              </div>

              {/* Capacity Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Seat Availability
                  </span>
                  <span className="font-mono-sm text-mono-sm text-primary font-bold">
                    {seatsFilled} / {seatsTotal} filled ({percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-surface-container-high overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary-container rounded-full transition-all duration-700"
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
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low/80">
                  <img
                    className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-primary/20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjMatR1C58aEQehxgaWQy2NC4rqGKINntASz8WsdeP0NCJ4Ki6wDHpgGmXgLW9RDGegzIE9D4CZhb3BjwlvNVmpEFs_HLb3aCVQmi2QvV_kOCyCOuOqrUJNk9d-eG_KYELtRzFeiP1FWeqne-nmKbOduBfb-izvVHw1Fz4rYaXtZ5U1-S_sl-3gK2n_l33b0tV2CxyXnkDycW5CgHDAdb05YezQTB7ZS_xuM4nWPM"
                    alt="Elena Rostova"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-label-ui text-label-ui text-on-surface font-bold truncate">
                        Elena Rostova
                      </h4>
                      <span className="material-symbols-outlined text-sm text-primary" title="Verified Mentor">
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
                    className="p-2 rounded-lg bg-surface-container-highest hover:bg-surface-variant text-on-surface transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Access Coordinates */}
              <div className="space-y-3 pt-2">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-semibold uppercase tracking-wider text-xs">
                  Access Coordinates
                </span>
                <div className="p-3.5 rounded-xl bg-surface-container-low/80 space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-label-ui text-label-ui">
                    <span className="material-symbols-outlined text-secondary text-base">forum</span>
                    <span>The Code Vibe Discord • Stage-02</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live streaming link and container instance credentials unlocked immediately upon registration.
                  </p>
                </div>
              </div>

              {/* Tech Stack Covered */}
              <div className="space-y-2 pt-2">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-semibold uppercase tracking-wider text-xs">
                  Tech Stack Covered
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Rust 1.82', 'TypeScript 5.6', 'WASM', 'wasm-bindgen', 'Web Workers'].map(
                    (tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-surface-container font-mono-sm text-mono-sm text-on-surface"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Included Deliverables */}
              <div className="space-y-2.5 pt-2">
                <span className="font-label-ui text-label-ui text-on-surface-variant font-semibold uppercase tracking-wider text-xs">
                  Included Deliverables
                </span>
                <ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">code_blocks</span>
                    <span>GitHub Starter Repo with Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">description</span>
                    <span>Full RFC Architecture Document (PDF)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">videocam</span>
                    <span>Permanent 4K Session Recording Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">badge</span>
                    <span>Code Vibe WASM Builder Discord Role</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Attending Builders */}
            <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-5 shadow-sm space-y-3 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Attending Builders
                </span>
                <span className="font-mono-sm text-mono-sm text-secondary font-medium">
                  +81 Others
                </span>
              </div>
              <div className="flex items-center -space-x-2 overflow-hidden py-1">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBp0_y_jawraz738HDMpotrNfJZ49pmiNX6psr-mf_zFbFegdbYOBjCL8xJN-s8yoGB3IXVmdFNDKL1buFKFX-NOMQ8WQWc0Dh378LCeoyjs54xm-FUH-n2Jr9jts2iffYfZOb6OoEhFBlCUYX-9mbZmeeyJbgb4w-x2mivwSU7qhzqM8BSck3_PsKmX544XChEduiill49sr28rY2mBifnEvabMzGE4_W1DCa554k',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAdKQh0SwgnNy0G6q9Gl8eUwaPV8jzmhV8fAedTgSZhl0g38Wj4Z_uWE4vj6ELOGG70qFTaataXcjtoB8F49ssWqbi6wRrLmnWygt6SipGEdgD-htktXAVw47Rz8z1ful1gO9dzdaxSQGiIyxKmAgOzPRztRnhGZoL9Wj0r4YVWVA1tp-6XFvyzGQKc-NkqrSfgnLb_uhiHeM5yZz8joQU_AVgxdVRXI8BMTjp91L0',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuB0PdJZOqqwTnK_ouMYyfEBp9jepAmZsQvzn2PM4kLKNxUDXXG-1X0JFj4JmAj1bd7V_uRxQaMheF81ro-4neOy4LjrvD88DiBBsHgm7HcZuZxGSjMYDwYTjOA4V0rCUPQ02YqDKnuv4ENKZEUaGGQHybUfFe-uLqxSWjieCloq_0HUQ9kD3DdvySYwn77Lfydl4hhpz_WuU4fStDrDtFTdfhB37lI2G6718WsNRCU',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTsvrH9kWlgWU0w02-Pml_RNz-SXu7zjWDtfBe8GOol2UFu7l7HRL3mhPd3Quf09fGBMKU2FVt55aIMjfw-RFSO-jBd87dDzubSTjrjJWE2mw4yLc924CeyGAtAQFdp4Hb7q7oOgjm2sgnQQCEnPKixn-2OYvkTER-7i0A9d-xMpvTPTb1B2LA5LhQZEmXbNaJMjDWHL9ckVzASlHzd3TftI8NIxRN3oKYkT-cQkw',
                ].map((avatar, idx) => (
                  <img
                    key={idx}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-surface-container-lowest object-cover"
                    src={avatar}
                    alt="Attending Builder"
                  />
                ))}
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-fixed text-on-primary-fixed font-mono-sm text-mono-sm font-semibold ring-2 ring-surface-container-lowest">
                  +80
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Connect directly with peer systems devs in the dedicated Discord event breakout rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
