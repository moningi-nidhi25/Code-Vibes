import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="w-20 h-20 rounded-3xl bg-surface-container-high flex items-center justify-center text-primary mb-6 shadow-sm border border-outline-variant/30">
        <span className="material-symbols-outlined text-4xl">travel_explore</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 font-mono-sm text-xs text-on-secondary-fixed-variant mb-3">
        <span>ERROR 404 // COORDINATE UNMAPPED</span>
      </div>
      <h1 className="font-display-hero text-4xl sm:text-5xl font-bold text-on-surface tracking-tight">
        Lost in Code Space
      </h1>
      <p className="mt-3 max-w-md font-body-lg text-body-lg text-on-surface-variant">
        The branch or cell cluster you are looking for has been merged, relocated, or doesn't exist yet.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          Return to Mission Control
        </Link>
        <Link
          to="/collaborate"
          className="px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-ui text-label-ui border border-outline-variant/30 transition-colors"
        >
          Explore Projects
        </Link>
      </div>
    </div>
  );
}
