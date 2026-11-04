import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ABOUT_BELIEFS, TEAM_MEMBERS } from '../data/mockData';

const wrap = 'w-full max-w-7xl mx-auto px-5 lg:px-10';
const BELIEF_COLORS = ['#2FD8FF', '#6FA0FF', '#C58BFF'];
const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('');

export default function AboutPage() {
  const { openJoinModal } = useOutletContext();

  return (
    <div className="flex flex-col w-full">
      {/* Intro */}
      <header className={`${wrap} pt-16 pb-16 lg:pt-24 lg:pb-24 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-end`}>
        <div>
          <h1 className="font-display font-bold text-display-hero text-on-surface">
            Built by students, for students
          </h1>
          <p className="mt-6 max-w-[58ch] text-body-lg text-on-surface-variant">
            The Code Vibe is a student-driven community built around a shared passion for technology,
            creativity and innovation. We bring together students who want to explore new ideas, learn
            from one another and make something real through hackathons, technical talks, workshops and
            collaborative projects.
          </p>
          <div className="mt-8">
            <button type="button" onClick={openJoinModal} className="btn-gradient-primary px-6 py-3 text-sm cursor-pointer">
              Join the community
            </button>
          </div>
        </div>

        {/* README-style card */}
        <div className="rounded-md border border-outline-variant bg-surface-container-lowest overflow-hidden font-mono text-sm">
          <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-4 py-2.5 text-xs text-on-surface-variant">
            <span>README.md</span>
            <span className="text-outline">main</span>
          </div>
          <dl className="p-5 space-y-3 leading-6">
            {[
              ['what', 'a student developer community'],
              ['runs', 'hackathons, talks, workshops'],
              ['ships', 'open projects, built in pods'],
              ['cost', 'free for every student'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4">
                <dt className="w-14 shrink-0 text-primary">{k}</dt>
                <dd className="text-on-surface-variant">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Beliefs */}
      <section className="border-y border-outline-variant bg-surface-container-lowest/60">
        <div className={`${wrap} py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.8fr_1.6fr]`}>
          <div>
            <h2 className="font-display font-bold text-headline-xl text-on-surface">What we believe</h2>
            <p className="mt-4 max-w-[34ch] text-on-surface-variant">Three habits that every project and event is built around.</p>
          </div>
          <ul className="grid gap-px bg-outline-variant border border-outline-variant rounded-md overflow-hidden sm:grid-cols-3">
            {ABOUT_BELIEFS.map((b, i) => (
              <li key={b.id} className="bg-surface p-6">
                <span className="material-symbols-outlined text-[28px]" style={{ color: BELIEF_COLORS[i % 3] }}>{b.icon}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-on-surface">{b.title}</h3>
                <p className="mt-2 text-on-surface-variant">{b.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <h2 className="font-display font-bold text-headline-xl text-on-surface">The team</h2>
        <p className="mt-4 max-w-[52ch] text-on-surface-variant">
          Students who volunteer to run the community. Say hi in the Discord.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((m, i) => (
            <li key={m.id} className="group flex items-center gap-4 p-4 border border-outline-variant rounded-md bg-surface-container hover:border-primary/50 transition-colors">
              <div
                className="w-14 h-14 shrink-0 rounded flex items-center justify-center font-display text-xl font-bold border"
                style={{
                  color: BELIEF_COLORS[i % 3],
                  borderColor: `${BELIEF_COLORS[i % 3]}55`,
                  background: `${BELIEF_COLORS[i % 3]}12`,
                }}
                aria-hidden="true"
              >
                {initials(m.name)}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-on-surface truncate">{m.name}</h3>
                <p className="text-sm text-on-surface-variant">{m.position}</p>
              </div>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="text-outline hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
