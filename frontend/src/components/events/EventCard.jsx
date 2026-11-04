import React from 'react';
import { Link } from 'react-router-dom';
import EventCover from './EventCover';
import { getCategoryStyle } from '../../lib/categories';

export default function EventCard({ event }) {
  const s = getCategoryStyle(event.category);
  return (
    <article className="group flex flex-col bg-surface-container border border-outline-variant rounded-md overflow-hidden hover:border-primary/50 transition-colors">
      <EventCover category={event.category} className="h-40 border-b border-outline-variant" />
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span style={{ color: s.color }} className="font-semibold">{event.categoryLabel || s.label}</span>
          <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-ok" />
            {event.status}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug text-on-surface group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2">{event.description}</p>
        <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-outline-variant">
          <div className="font-mono text-xs text-on-surface-variant leading-5">
            <div>{event.date}</div>
            <div className="text-outline">{event.time}</div>
          </div>
          <Link
            to={event.link || '/events/wasm-memory-safety'}
            className="btn-frosted-glass inline-flex items-center gap-1.5 px-3.5 py-2 text-sm"
          >
            Details
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
