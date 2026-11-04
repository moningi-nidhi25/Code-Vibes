import React from 'react';

export default function StatCard({ value, label, color = 'text-primary', hasBorder = false, className = '' }) {
  return (
    <div className={`flex flex-col px-5 py-4 ${hasBorder ? 'md:border-r border-outline-variant' : ''} ${className}`}>
      <span className={`font-display text-3xl font-bold tracking-tight ${color}`}>{value}</span>
      <span className="font-mono text-xs text-on-surface-variant mt-1">{label}</span>
    </div>
  );
}
