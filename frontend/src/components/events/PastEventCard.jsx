import React, { useState } from 'react';
import { getCategoryStyle } from '../../lib/categories';

/** One recorded session, laid out as a row in the archive log. */
export default function PastEventCard({ session, onActionNotice }) {
  const [playing, setPlaying] = useState(false);
  const s = getCategoryStyle(session.category);

  const watch = () => {
    setPlaying(true);
    onActionNotice?.(`Loading the recording of "${session.title}".`);
    setTimeout(() => setPlaying(false), 3000);
  };

  return (
    <li className="grid gap-x-6 gap-y-2 py-5 md:grid-cols-[7.5rem_1fr_auto] items-start border-b border-outline-variant">
      <div className="font-mono text-xs leading-6">
        <div className="text-on-surface">{session.date}</div>
        <div style={{ color: s.color }}>{s.label}</div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold text-on-surface">{session.title}</h4>
        <p className="mt-1 text-sm text-on-surface-variant max-w-[64ch]">{session.description}</p>
        <p className="mt-2.5 flex flex-wrap gap-2 font-mono text-xs text-on-surface-variant">
          <span className="px-2 py-0.5 border border-outline-variant rounded-sm">{session.duration}</span>
          <span className="px-2 py-0.5 border border-outline-variant rounded-sm">{session.status}</span>
          {session.tags?.map((t) => (
            <span key={t} className="px-2 py-0.5 border border-outline-variant rounded-sm">{t}</span>
          ))}
        </p>
      </div>
      <div className="flex md:flex-col gap-2 md:items-end">
        <button onClick={watch} className="btn-frosted-glass inline-flex items-center gap-1.5 px-3 py-1.5 text-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px] text-primary">{playing ? 'hourglass_top' : 'play_arrow'}</span>
          {playing ? 'Loading…' : 'Watch'}
        </button>
        <button
          onClick={() => onActionNotice?.(`Slides and code for "${session.title}" are opening in a new tab.`)}
          className="inline-flex items-center gap-1 px-1 py-1.5 text-sm text-on-surface-variant hover:text-primary cursor-pointer"
        >
          Slides and code
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>
    </li>
  );
}
