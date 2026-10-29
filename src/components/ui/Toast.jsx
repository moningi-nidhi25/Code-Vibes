import React from 'react';

export default function Toast({ message, visible, icon = 'check_circle', onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface border border-outline-variant/30 shadow-2xl backdrop-blur-xl animate-bounce-in">
      <span className="material-symbols-outlined text-primary text-xl leading-none">
        {icon}
      </span>
      <span className="font-body-sm text-body-sm font-medium">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-outline hover:text-on-surface transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      )}
    </div>
  );
}
