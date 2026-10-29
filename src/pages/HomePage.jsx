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
      <div className="relative w-full overflow-hidden">
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-20 lg:pb-24 flex flex-col items-center text-center">
          {/* Status Badge / Radar */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,55,140,0.06)] mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="font-mono-sm text-mono-sm text-on-surface-variant uppercase tracking-wider">
              Cohort 08 • Registrations Open
            </span>
            <span className="font-mono-sm text-mono-sm text-primary font-semibold">
              Live
            </span>
          </div>

          {/* Main Typography Hero */}
          <h1 className="font-display-hero text-display-hero text-on-surface max-w-4xl tracking-tight leading-tight drop-shadow-xs">
            More Than Code. <br />
            <span className="bg-gradient-to-r from-secondary via-primary-container to-tertiary bg-clip-text text-transparent">
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
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-secondary via-primary-container to-tertiary text-on-primary font-label-ui text-label-ui shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Join the Community</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </button>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 hover:bg-white/90 text-on-surface font-label-ui text-label-ui shadow-md shadow-slate-200/50 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-base text-primary">
                calendar_month
              </span>
              <span>Explore Events</span>
            </Link>
          </div>

          {/* Glassmorphic Quick Metric Strip */}
          <div className="w-full mt-16 p-1.5 rounded-3xl bg-gradient-to-r from-white/70 via-white/40 to-white/70 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(0,40,120,0.06)]">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary-container via-primary-container to-tertiary-container animate-pulse" />
            <span className="font-mono-sm text-mono-sm uppercase tracking-wider text-primary font-semibold">
              Mission &amp; Objectives
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            What We Do{' '}
            <span className="bg-gradient-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent">
              — Built for Engineers
            </span>
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We empower developers to move beyond tutorials into real software engineering, collaborative production shipping, and accelerated career growth.
          </p>
        </div>

        {/* 4-Card Frosted Glass Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_DO_CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative rounded-3xl bg-white/60 backdrop-blur-xl p-7 border border-white/70 shadow-[0_10px_30px_rgba(0,50,130,0.05)] hover:shadow-[0_20px_40px_rgba(0,74,198,0.12)] hover:-translate-y-1.5 ${card.hoverBorder} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 w-28 h-28 ${card.accent} rounded-full blur-2xl group-hover:scale-125 transition-all pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-white text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <span className="font-mono-sm text-mono-sm px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 font-semibold tracking-wider text-primary uppercase">
                    {card.category}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-bold">
                  {card.title}
                </h3>
                <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between text-on-surface relative z-10">
                <span className="font-mono-sm text-mono-sm font-semibold flex items-center gap-1.5 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {card.stat}
                </span>
                <span className="material-symbols-outlined text-base text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
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
            <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wider block mb-1">
              Calendar &amp; Assemblies
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
              Featured Events
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 font-label-ui text-label-ui text-primary hover:text-on-primary-fixed-variant group"
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
              className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,50,130,0.05)] hover:shadow-[0_20px_40px_rgba(0,50,130,0.1)] hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div className="p-7 pb-2">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full font-mono-sm text-mono-sm font-semibold ${event.typeBadgeClass}`}>
                    {event.type}
                  </span>
                  <span className="font-mono-sm text-mono-sm text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                    {event.time}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-bold">
                  {event.title}
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  {event.description}
                </p>
                <div className="mt-4 space-y-2 py-3 px-3.5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60">
                  <div className="flex items-center gap-2 text-on-surface-variant font-mono-sm text-mono-sm">
                    <span className="material-symbols-outlined text-base text-primary">calendar_month</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-mono-sm text-mono-sm">
                    <span className="material-symbols-outlined text-base text-secondary">location_on</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 flex items-center justify-end">
                <Link
                  to={event.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/70 hover:bg-white/95 border border-white/80 text-on-surface font-label-ui text-label-ui shadow-xs transition-all active:scale-95 group-hover:border-primary/40"
                >
                  <span>More Details</span>
                  <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary group-hover:translate-x-0.5 transition-all">
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
        <div className="p-8 lg:p-12 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(0,40,120,0.06)] relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono-sm text-mono-sm text-secondary uppercase font-semibold">
                <span className="material-symbols-outlined text-sm">code_blocks</span>
                <span>Peer Engineering Pods</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
                Open Collaboration Projects
              </h2>
            </div>
            <Link
              to="/collaborate"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-white/90 text-on-surface font-label-ui text-label-ui shadow-sm hover:shadow transition-all"
            >
              <span>Explore All Projects</span>
              <span className="material-symbols-outlined text-sm">tune</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            {OPEN_COLLABORATION_SPOTLIGHT.map((proj) => (
              <div
                key={proj.id}
                className="p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(0,30,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,50,140,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-sm text-mono-sm text-primary font-semibold">
                      {proj.repo}
                    </span>
                    <span className={`px-3 py-1 rounded-full font-mono-sm text-mono-sm flex items-center gap-1.5 font-semibold ${proj.seatColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${proj.indicatorColor}`} />
                      {proj.seats}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    {proj.title}
                  </h3>
                  <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/80 border border-white font-mono-sm text-mono-sm text-on-surface shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                      src={proj.leadAvatar}
                      alt={proj.lead}
                    />
                    <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                      Lead: {proj.lead}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePairRequest(proj.projectKey)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-ui text-label-ui shadow-md shadow-primary/20 hover:opacity-95 transition-all active:scale-95 cursor-pointer"
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
          <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-widest block mb-2 font-semibold">
            Verified Builders
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
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
              className="p-7 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_30px_rgba(0,50,130,0.05)] hover:shadow-[0_20px_40px_rgba(0,50,130,0.1)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200/50">
                <img
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/80 shadow-xs"
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-container to-tertiary p-8 lg:p-14 text-on-primary shadow-2xl shadow-primary/25 border border-white/20 backdrop-blur-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4 text-xs font-mono-sm shadow-xs">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span>Zero Friction Onboarding</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight font-bold">
              Ready to elevate your code vibe?
            </h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-primary-container/90 max-w-2xl">
              Connect with top engineers, ship ambitious projects, and grow your career. Get instant access to private repos, hackathons, and pairing circles.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openJoinModal}
                className="px-7 py-3.5 rounded-xl bg-white text-on-surface font-label-ui text-label-ui font-semibold shadow-lg shadow-black/10 hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
              >
                Join Community
              </button>
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-on-primary font-label-ui text-label-ui backdrop-blur-md border border-white/25 transition-all active:scale-95"
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
