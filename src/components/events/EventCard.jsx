import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({
  event,
  onOpenDetails
}) {
  const categoryBadgeStyles = {
    workshop: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    hackathon: 'bg-primary-fixed text-on-primary-fixed-variant',
    talk: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    meetup: 'bg-surface-container-high text-on-surface',
  };

  return (
    <div
      className="event-card group bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden border border-slate-200/70"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: 'rgba(37, 99, 235, 0.05) 0px 10px 30px, rgba(255, 255, 255, 0.9) 0px 1px 1px inset',
      }}
    >
      <div className="relative h-48 w-full overflow-hidden bg-surface-container">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm bg-secondary-fixed text-on-secondary-fixed">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {event.status}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm ${
                categoryBadgeStyles[event.category] || categoryBadgeStyles.workshop
              }`}
            >
              {event.categoryLabel}
            </span>
          </div>

          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
              {event.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-mono-sm text-mono-sm pt-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">schedule</span>
              <span>{event.time}</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-end border-t border-slate-100">
          <Link
            to={event.link || '/events/wasm-memory-safety'}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-ui text-label-ui transition-colors group/btn"
          >
            <span>More Details</span>
            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
