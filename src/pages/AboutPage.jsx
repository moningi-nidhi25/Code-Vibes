import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import StatCard from '../components/ui/StatCard';
import FaqAccordion from '../components/ui/FaqAccordion';
import {
  ABOUT_STATS,
  CORE_VALUES,
  COMMUNITY_LEADERS,
  FAQ_ITEMS
} from '../data/mockData';

export default function AboutPage() {
  const { openJoinModal } = useOutletContext();

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 lg:py-16 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="relative flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto pt-6">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl shadow-sm text-on-surface">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono-sm text-mono-sm tracking-wider uppercase font-semibold text-primary">
              ORIGIN &amp; MISSION · EST. 2023
            </span>
          </div>

          {/* Hero Headline & Subtitle */}
          <div className="space-y-5">
            <h1 className="font-display-hero text-display-hero tracking-tight text-on-surface max-w-3xl mx-auto">
              Empowering Developers to{' '}
              <span className="bg-gradient-to-r from-secondary via-primary-container to-tertiary bg-clip-text text-transparent">
                Build, Collaborate,
              </span>{' '}
              and Ship Real Software.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              The Code Vibe is a global collective of engineers, researchers, and open-source architects bridging the gap between passive tutorials and production-ready systems.
            </p>
          </div>

          {/* Quick Stat Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4">
            {ABOUT_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container-lowest/70 backdrop-blur-xl border border-surface-container-lowest shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-surface-container-lowest/85 transition-all"
              >
                <span className={`font-headline-lg text-headline-lg font-bold ${stat.color} tracking-tight`}>
                  {stat.value}
                </span>
                <span className="font-label-ui text-label-ui text-on-surface-variant mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. STORY & MISSION CARDS (Bento Grid) */}
        <section className="space-y-8">
          <div className="flex flex-col items-start gap-2">
            <div className="font-mono-sm text-mono-sm text-primary uppercase font-bold tracking-wider">
              Engineering Manifesto
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Architected for Real Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Why We Started */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest/70 backdrop-blur-2xl border border-surface-container-lowest/90 shadow-lg hover:shadow-xl hover:border-secondary-container/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 border border-secondary-container/20 flex items-center justify-center text-secondary shadow-xs">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Why We Started
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We grew exhausted by the endless loop of isolated video courses and toy 'to-do list' sandboxes. Modern engineering thrives on multi-service systems, messy edge cases, and asynchronous teamwork. We built The Code Vibe to give engineers authentic repo environments, distributed teammates, and real user feedback loops.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-2 font-mono-sm text-mono-sm text-secondary font-semibold">
                <span>// Pods over solo sandboxes</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Bento 2: Core Philosophy */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest/70 backdrop-blur-2xl border border-surface-container-lowest/90 shadow-lg hover:shadow-xl hover:border-primary-container/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/60 border border-primary-container/20 flex items-center justify-center text-primary shadow-xs">
                  <span className="material-symbols-outlined text-[26px]">hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Our Core Philosophy
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Real acceleration happens through peer-to-peer pair programming, architectural RFC discussions, and radical transparency. Our community operates with zero-ego code reviews, continuous feedback, and open technical discourse where questions are celebrated and rigorous reasoning guides every design decision.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-2 font-mono-sm text-mono-sm text-primary font-semibold">
                <span>// Transparent RFC methodology</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Bento 3: Production-First Mindset */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest/70 backdrop-blur-2xl border border-surface-container-lowest/90 shadow-lg hover:shadow-xl hover:border-tertiary-container/50 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 border border-tertiary-container/20 flex items-center justify-center text-tertiary shadow-xs">
                  <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Production-First Mindset
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Toy apps don't teach observability, cache coherence, or load balancing. Our engineering cohorts construct high-throughput distributed systems, WebGL rendering canvas tools, WebAssembly/Rust high-performance modules, and multi-agent AI orchestration networks designed for zero downtime.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-2 font-mono-sm text-mono-sm text-tertiary font-semibold">
                <span>// Production-ready telemetry</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE STAND FOR / CORE VALUES */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-mono-sm text-mono-sm text-secondary uppercase font-bold tracking-wider">
                The Standard
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
                What We Stand For
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Four foundational pillars that govern our community standards, open-source pods, and daily peer interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="p-6 rounded-2xl bg-surface-container-lowest/70 backdrop-blur-xl border border-surface-container-lowest/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-lg text-mono-lg font-bold text-primary/70">
                      {val.number}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">
                      {val.icon}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">
                    {val.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant/30 rounded-lg p-2.5">
                  <span className="font-mono-sm text-mono-sm text-primary font-semibold">
                    {val.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. LEADERSHIP & CORE MAINTAINERS */}
        <section className="space-y-8">
          <div className="flex flex-col items-start gap-2">
            <div className="font-mono-sm text-mono-sm text-tertiary uppercase font-bold tracking-wider">
              Maintainers &amp; Stewards
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Community Leadership
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Engineers dedicating their off-hours to review architectural RFCs, nurture pods, and build sovereign open-source infra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMUNITY_LEADERS.map((leader, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col p-6 rounded-2xl bg-surface-container-lowest/75 backdrop-blur-2xl border border-surface-container-lowest/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={leader.avatar}
                    alt={leader.name}
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-xs border border-outline-variant/30">
                    <span className={`font-mono-sm text-mono-sm font-bold ${leader.handleColor}`}>
                      {leader.handle}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {leader.name}
                  </h4>
                  <div className={`font-label-ui text-label-ui font-medium ${leader.titleColor}`}>
                    {leader.title}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-normal">
                    {leader.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant/30 rounded-lg p-2">
                  {leader.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded bg-surface-container-lowest/80 text-on-surface font-mono-sm text-mono-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. COMPREHENSIVE FAQ SECTION */}
        <section className="space-y-8 max-w-4xl mx-auto w-full">
          <div className="text-center space-y-2">
            <div className="font-mono-sm text-mono-sm text-primary uppercase font-bold tracking-wider">
              Clarifications &amp; Protocols
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
              Everything you need to know about joining pods, pair programming cycles, and contributing.
            </p>
          </div>

          <FaqAccordion items={FAQ_ITEMS} />
        </section>

        {/* 6. CALL TO ACTION BANNER */}
        <section className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-br from-surface-container-lowest/90 via-surface-container-low/95 to-surface-container-high/90 backdrop-blur-2xl shadow-xl border border-outline-variant/30">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-secondary-container/20 to-tertiary-container/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-container/20 to-secondary-container/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/90 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-mono-sm text-mono-sm text-on-surface font-medium">
                Cohort 08 Applications Open
              </span>
            </div>

            <h2 className="font-display-hero text-headline-xl sm:text-display-hero tracking-tight text-on-surface">
              Ready to find your engineering tribe?
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Connect with 12,400+ developers actively pair programming, shipping open-source infrastructure, and leveling up their engineering craft every day.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={openJoinModal}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary font-label-ui text-label-ui shadow-md hover:shadow-lg hover:opacity-95 active:scale-95 transition-all cursor-pointer"
              >
                <span>Join The Community</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">bolt</span>
              </button>
              <Link
                to="/collaborate"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-ui text-label-ui shadow-sm hover:bg-surface-container-high active:scale-95 transition-all border border-outline-variant/30"
              >
                <span>Explore Active Pods</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
