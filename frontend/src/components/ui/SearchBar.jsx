import React, { useEffect, useRef } from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Search…', className = '', id = 'search-input' }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={`relative flex-1 ${className}`}>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">search</span>
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-16 py-2.5 glass-input text-sm text-on-surface"
      />
      <kbd className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[11px] text-outline px-1.5 py-0.5 rounded-sm border border-outline-variant">
        Ctrl K
      </kbd>
    </div>
  );
}
