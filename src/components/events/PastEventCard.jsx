import React, { useState } from 'react';

export default function PastEventCard({ session, onActionNotice }) {
  const [playing, setPlaying] = useState(false);

  const handleWatch = (e) => {
    e.preventDefault();
    setPlaying(true);
    onActionNotice?.(`Buffering 4K stream for "${session.title}"...`);
    setTimeout(() => setPlaying(false), 3000);
  };

  const handleSlides = (e) => {
    e.preventDefault();
    onActionNotice?.(`Opening slides and benchmark code for "${session.title}" in new tab.`);
  };

  return (
    <div
      className="bg-surface-container-lowest rounded-xl p-space-md border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: 'rgba(37, 99, 235, 0.04) 0px 8px 24px, rgba(255, 255, 255, 0.8) 0px 1px 1px inset',
      }}
    >
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm bg-secondary-fixed text-on-secondary-fixed">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {session.status}
          </span>
          <span className="px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm bg-surface-container font-medium text-on-surface-variant">
            {session.date}
          </span>
        </div>

        <h4 className="font-headline-sm text-headline-sm text-on-surface">
          {session.title}
        </h4>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {session.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono-sm text-mono-sm text-on-surface-variant">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface">
            <span className="material-symbols-outlined text-xs text-error">timer</span>
            {session.duration}
          </span>
          {session.tags?.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-surface-container">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={handleWatch}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui hover:opacity-95 shadow-sm transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">
            {playing ? 'hourglass_top' : 'play_circle'}
          </span>
          <span>{playing ? 'Connecting Stream...' : 'Watch Recording'}</span>
        </button>

        <button
          type="button"
          onClick={handleSlides}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-ui text-label-ui transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm text-primary">terminal</span>
          <span>View Slides &amp; Code</span>
        </button>
      </div>
    </div>
  );
}
