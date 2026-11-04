import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import StatCard from '../components/ui/StatCard';
import Toast from '../components/ui/Toast';
import {
  PLATFORM_STATS,
  WHAT_WE_DO_CARDS,
  FEATURED_EVENTS_HOME,
  OPEN_COLLABORATION_SPOTLIGHT,
  TESTIMONIALS
} from '../data/mockData';

export default function HomePage() {
  const { openJoinModal } = useOutletContext();
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const handlePairRequest = (projectKey) => {
    showNotification(`Pairing request submitted for ${projectKey}! Pod lead will reach out on Discord.`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden hero-mesh-canvas">
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-20 lg:pb-24 flex flex-col items-center text-center">

          {/* Main Typography Hero */}
          <h1 className="font-display-hero text-display-hero text-on-surface max-w-4xl tracking-tight leading-tight">
            More Than Code. <br />
            <span className="gradient-text-radiant">
              A Community That Builds Together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A community for developers to explore technology, build meaningful projects, participate in events, and collaborate with people who share their passion for creating.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openJoinModal}
              className="btn-gradient-primary group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-label-ui text-label-ui shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Join the Community</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </button>
            <Link
              to="/events"
              className="btn-frosted-glass inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-label-ui text-label-ui shadow-xs active:scale-95"
            >
              <span className="material-symbols-outlined text-base text-[#0056c5]">
                calendar_month
              </span>
              <span>Explore Events</span>
            </Link>
          </div>

          {/* Glassmorphic Quick Metric Strip (Glass Tier 2) */}
          <div className="w-full mt-16 p-1.5 rounded-3xl glass-base border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/35 shadow-card-default">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-6 bg-white/60 backdrop-blur-md rounded-2xl">
              {PLATFORM_STATS.map((stat, idx) => (
                <StatCard
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                  hasBorder={idx < PLATFORM_STATS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* WHAT WE DO (GOALS & OBJECTIVES) SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 relative" id="what-we-do">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full telemetry-chip mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="font-mono-sm text-mono-sm uppercase tracking-wider text-[#0056c5] font-semibold">
              Mission &amp; Objectives
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
            What We Do{' '}
            <span className="gradient-text-radiant">
              — Built for Engineers
            </span>
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We empower developers to move beyond tutorials into real software engineering, collaborative production shipping, and accelerated career growth.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_DO_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-xl bento-card p-7 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/90 border border-white/80 text-[#0056c5] flex items-center justify-center shadow-xs group-hover:bg-[#0056c5] group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <span className="font-mono-sm text-mono-sm px-2.5 py-1 rounded-full bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] font-semibold tracking-wider text-[#006875] uppercase">
                    {card.category}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-[#0056c5] transition-colors font-bold">
                  {card.title}
                </h3>
                <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c2c6d7]/30 flex items-center justify-between text-on-surface relative z-10">
                <span className="font-mono-sm text-mono-sm font-semibold flex items-center gap-1.5 text-[#0056c5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056c5]" />
                  {card.stat}
                </span>
                <span className="material-symbols-outlined text-base text-outline group-hover:text-[#0056c5] group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16" id="featured-events">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono-sm text-mono-sm text-[#0056c5] uppercase tracking-wider block mb-1 font-semibold">
              Calendar &amp; Assemblies
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
              Featured Events
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 font-label-ui text-label-ui text-[#0056c5] hover:underline group"
          >
            <span>View all scheduled events</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_EVENTS_HOME.map((event) => (
            <div
              key={event.id}
              className="bento-card rounded-xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-7 pb-2">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full font-mono-sm text-mono-sm font-semibold bg-[rgba(179,36,229,0.12)] border border-[rgba(179,36,229,0.30)] text-[#9700c6]">
                    {event.type}
                  </span>
                  <span className="font-mono-sm text-mono-sm text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#0056c5]">schedule</span>
                    {event.time}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-[#0056c5] transition-colors font-bold">
                  {event.title}
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-4 space-y-2 py-3 px-3.5 rounded-lg bg-white/70 border border-white/80 shadow-xs">
                  <div className="flex items-center gap-2 text-on-surface-variant font-mono-sm text-mono-sm">
                    <span className="material-symbols-outlined text-base text-[#0056c5]">calendar_month</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-mono-sm text-mono-sm">
                    <span className="material-symbols-outlined text-base text-[#006875]">location_on</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-end border-t border-[#c2c6d7]/30 mt-3">
                <Link
                  to={event.link}
                  className="btn-frosted-glass inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-label-ui text-label-ui shadow-xs cursor-pointer"
                >
                  <span>More Details</span>
                  <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-[#0056c5] group-hover:translate-x-0.5 transition-all">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN COLLABORATION PROJECTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="p-8 lg:p-12 rounded-2xl glass-base border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/35 shadow-card-default relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono-sm text-mono-sm text-[#006875] uppercase font-semibold">
                <span className="material-symbols-outlined text-sm">code_blocks</span>
                <span>Peer Engineering Pods</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                Open Collaboration Projects
              </h2>
            </div>
            <Link
              to="/collaborate"
              className="btn-frosted-glass inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-ui text-label-ui shadow-xs"
            >
              <span>Explore All Projects</span>
              <span className="material-symbols-outlined text-sm">tune</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            {OPEN_COLLABORATION_SPOTLIGHT.map((proj) => (
              <div
                key={proj.id}
                className="p-7 rounded-xl bento-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-sm text-mono-sm text-[#0056c5] font-semibold">
                      {proj.repo}
                    </span>
                    <span className="px-3 py-1 rounded-full font-mono-sm text-mono-sm flex items-center gap-1.5 font-semibold bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-[#006875]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                      {proj.seats}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    {proj.title}
                  </h3>
                  <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/85 border border-[#c2c6d7]/35 font-mono-sm text-mono-sm text-on-surface shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#c2c6d7]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                      src={proj.leadAvatar}
                      alt={proj.lead}
                    />
                    <span className="font-mono-sm text-mono-sm text-on-surface-variant font-medium">
                      Lead: {proj.lead}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePairRequest(proj.projectKey)}
                    className="btn-gradient-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-label-ui text-label-ui shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>Request to Pair</span>
                    <span className="material-symbols-outlined text-sm">handshake</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY VOICES / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono-sm text-mono-sm text-[#0056c5] uppercase tracking-widest block mb-2 font-semibold">
            Verified Builders
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Engineered by Creators
          </h2>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            What engineers, maintainers, and founders say about building in The Code Vibe ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bento-card flex flex-col justify-between"
            >
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#c2c6d7]/30">
                <img
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-xs"
                  src={t.avatar}
                  alt={t.name}
                />
                <div>
                  <span className="font-label-ui text-label-ui text-on-surface block font-bold">
                    {t.name}
                  </span>
                  <span className="font-mono-sm text-mono-sm text-outline block">
                    {t.handle} • {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="relative overflow-hidden rounded-2xl gradient-core-action p-8 lg:p-14 text-on-primary shadow-glow-cobalt border border-white/40 backdrop-blur-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-4 text-xs font-mono-sm shadow-xs">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span>Zero Friction Onboarding</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight font-bold">
              Ready to elevate your code vibe?
            </h2>
            <p className="mt-4 font-body-lg text-body-lg text-white/95 max-w-2xl leading-relaxed">
              Connect with top engineers, ship ambitious projects, and grow your career. Get instant access to private repos, hackathons, and pairing circles.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openJoinModal}
                className="px-7 py-3.5 rounded-lg bg-white text-[#151b2b] font-label-ui text-label-ui font-semibold shadow-card-default hover:bg-white/95 hover:shadow-glow-cobalt active:scale-95 transition-all cursor-pointer"
              >
                Join Community
              </button>
              <Link
                to="/about"
                className="btn-frosted-glass px-6 py-3.5 rounded-lg font-label-ui text-label-ui active:scale-95"
              >
                Read Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
