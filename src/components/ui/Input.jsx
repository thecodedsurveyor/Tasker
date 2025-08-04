import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error = false,
  disabled = false,
  fullWidth = false,
  size = 'md',
  className = '',
  label,
  helperText,
  ...props
}) => {
  const baseClasses = 'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  const stateClasses = error
    ? 'border-accent-red focus:ring-accent-red focus:border-accent-red'
    : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500';

  const widthClass = fullWidth ? 'w-full' : '';

  const inputClasses = [
    baseClasses,
    sizeClasses[size],
    stateClasses,
    widthClass,
    'bg-background-primary text-text-primary',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-accent-red' : 'text-text-secondary'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 