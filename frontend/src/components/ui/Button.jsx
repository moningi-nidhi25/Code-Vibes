import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button Component
 * Solid cyan for the primary action, outlined for everything else.
 */
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
  const baseStyles = 'inline-flex items-center justify-center font-label-ui text-label-ui transition-colors duration-150 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none rounded';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 gap-2',
    lg: 'px-6 py-3 text-sm gap-2.5',
  };

  const variantStyles = {
    gradient: 'btn-gradient-primary',
    'gradient-cobalt': 'btn-gradient-primary',
    glass: 'btn-frosted-glass',
    primary: 'bg-primary text-on-primary hover:bg-[#6BE6FF] border border-primary',
    secondary: 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant hover:border-primary/60',
    outline: 'bg-transparent border border-outline-variant text-on-surface hover:border-primary hover:text-primary',
    ghost: 'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high',
    white: 'bg-on-surface text-surface hover:bg-white border border-on-surface',
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
