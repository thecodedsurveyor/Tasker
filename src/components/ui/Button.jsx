import React from 'react';
import { COMPONENT_TOKENS } from '../../constants/design-system';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-lg',
  };

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'bg-transparent text-text-primary hover:bg-neutral-100 focus:ring-neutral-500',
    danger: 'bg-accent-red text-white hover:bg-red-600 focus:ring-red-500',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    widthClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 