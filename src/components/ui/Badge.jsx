import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  ping = false,
  pingColor = 'bg-secondary',
  className = '',
  ...props
}) {
  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[11px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const variantStyles = {
    default: 'bg-surface-container text-on-surface font-mono-sm',
    primary: 'bg-primary-fixed text-on-primary-fixed font-mono-sm uppercase tracking-wider',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed font-mono-sm font-semibold',
    'secondary-subtle': 'bg-secondary-container/20 border border-secondary-container/40 text-on-secondary-container font-mono-sm font-semibold',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed font-mono-sm uppercase tracking-wider',
    'tertiary-subtle': 'bg-tertiary-fixed/50 border border-tertiary/20 text-on-tertiary-fixed-variant font-mono-sm font-semibold',
    surface: 'bg-surface-container-high text-on-surface-variant font-mono-sm',
    glass: 'bg-white/70 backdrop-blur-md border border-white/80 text-on-surface shadow-xs',
    pill: 'rounded-full font-label-ui',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size] || sizeStyles.sm} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {ping && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingColor}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${pingColor}`} />
        </span>
      )}
      {children}
    </span>
  );
}
