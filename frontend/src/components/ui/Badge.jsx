import React from 'react';

/** Small status / category tag. */
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
    telemetry: 'bg-surface-container border border-outline-variant text-on-surface font-mono-sm',
    glass: 'bg-surface-container border border-outline-variant text-on-surface',
    'status-active': 'bg-primary/10 border border-primary/35 text-primary font-mono-sm font-medium',
    'status-processing': 'bg-secondary/10 border border-secondary/35 text-secondary font-mono-sm font-medium',
    'status-restricted': 'bg-tertiary/10 border border-tertiary/35 text-tertiary font-mono-sm font-medium',
    default: 'bg-surface-container-high text-on-surface font-mono-sm border border-outline-variant',
    primary: 'bg-primary/10 text-primary font-mono-sm border border-primary/30',
    secondary: 'bg-secondary/10 text-secondary font-mono-sm border border-secondary/30',
    'secondary-subtle': 'bg-primary/10 border border-primary/30 text-primary font-mono-sm font-medium',
    tertiary: 'bg-tertiary/10 text-tertiary font-mono-sm border border-tertiary/30',
    'tertiary-subtle': 'bg-tertiary/10 border border-tertiary/30 text-tertiary font-mono-sm font-medium',
    surface: 'bg-surface-container-high text-on-surface-variant font-mono-sm border border-outline-variant',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded ${sizeStyles[size] || sizeStyles.sm} ${variantStyles[variant] || variantStyles.default} ${className}`}
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
