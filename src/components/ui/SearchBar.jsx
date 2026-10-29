import React, { useEffect, useRef } from 'react';

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  id = 'search-input'
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative flex-1 ${className}`}>
      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">
        search
      </span>
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-16 py-2.5 bg-surface-container-low/70 backdrop-blur-sm rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all border border-transparent focus:border-outline-variant/30"
      />
      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono-sm text-mono-sm text-outline px-1.5 py-0.5 rounded bg-surface-container pointer-events-none">
        ⌘K
      </span>
    </div>
  );
}
