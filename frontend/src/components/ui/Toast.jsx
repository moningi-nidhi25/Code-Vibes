import React from 'react';

export default function Toast({ message, visible, icon = 'check_circle', onClose }) {
  if (!visible) return null;
  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-[70] max-w-[calc(100vw-3rem)] flex items-center gap-3 pl-4 pr-3 py-3 rounded bg-surface-container-high border border-outline-variant border-l-2 border-l-primary text-on-surface animate-fade-in-up"
    >
      <span className="material-symbols-outlined text-primary text-xl leading-none">{icon}</span>
      <span className="text-sm font-medium">{message}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" className="ml-1 text-outline hover:text-on-surface transition-colors cursor-pointer p-0.5">
          <span className="material-symbols-outlined text-base block">close</span>
        </button>
      )}
    </div>
  );
}
