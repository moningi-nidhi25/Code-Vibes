import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'gradient',
  size = 'md',
  icon,
  iconPosition = 'left',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-label-ui text-label-ui transition-all duration-200 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-4 py-2 rounded-lg gap-2',
    lg: 'px-6 py-3.5 rounded-xl text-sm gap-2.5',
  };

  const variantStyles = {
    gradient: 'bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary shadow-sm hover:opacity-95 hover:shadow-md hover:shadow-primary/20',
    'gradient-cobalt': 'bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary shadow-md hover:shadow-lg hover:shadow-primary/25',
    primary: 'bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow',
    secondary: 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant/30',
    glass: 'bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/80 text-on-surface shadow-xs hover:border-primary/40',
    outline: 'bg-transparent border border-outline-variant text-on-surface hover:border-primary hover:text-primary',
    ghost: 'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low',
    white: 'bg-white text-on-surface font-semibold shadow-lg shadow-black/10 hover:bg-white/90',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.gradient} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-lg leading-none shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-lg leading-none shrink-0">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
