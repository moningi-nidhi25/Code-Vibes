import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <div className="w-full max-w-3xl mx-auto px-5 lg:px-10 py-24 min-h-[70vh] flex flex-col justify-center">
      <div className="rounded-md border border-outline-variant bg-surface-container-lowest overflow-hidden font-mono text-sm">
        <div className="border-b border-outline-variant bg-surface-container-low px-4 py-2.5 text-xs text-on-surface-variant">terminal</div>
        <div className="p-5 leading-7">
          <p><span className="text-primary">$</span> cd {pathname}</p>
          <p className="text-error">bash: cd: {pathname}: No such page</p>
          <p className="mt-2"><span className="text-primary">$</span> <span className="cursor-blink" /></p>
        </div>
      </div>
      <h1 className="mt-10 font-display text-4xl sm:text-5xl font-bold text-on-surface">404: page not found</h1>
      <p className="mt-3 max-w-[48ch] text-on-surface-variant">
        That address doesn't exist, or the page has moved. Head back to the home page or look at what's on this month.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-gradient-primary px-6 py-3 text-sm">Back to home</Link>
        <Link to="/events" className="btn-frosted-glass px-6 py-3 text-sm">See events</Link>
      </div>
    </div>
  );
}
