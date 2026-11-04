import React from 'react';
import { getCategoryStyle } from '../../lib/categories';

/**
 * Generated cover art for an event: a dotted grid, a few lines of
 * category-relevant code, and the category glyph. Replaces stock photos
 * so every card is on-brand and nothing depends on a third-party image host.
 */
export default function EventCover({ category, className = '' }) {
  const s = getCategoryStyle(category);
  return (
    <div
      className={`relative overflow-hidden bg-surface-container-lowest ${className}`}
      style={{
        backgroundImage: `radial-gradient(${s.color}33 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: s.color }} />
      <span
        className="material-symbols-outlined absolute top-4 right-4 text-[28px]"
        style={{ color: s.color }}
      >
        {s.icon}
      </span>
      <pre
        className="absolute left-4 bottom-4 right-4 m-0 font-mono text-[11.5px] leading-[1.7] text-on-surface-variant/80 overflow-hidden"
      >
        {s.lines.map((l, i) => (
          <div key={i} className="truncate">
            <span style={{ color: s.color }} className="opacity-70 select-none">{String(i + 1).padStart(2, '0')}  </span>
            {l}
          </div>
        ))}
      </pre>
    </div>
  );
}
