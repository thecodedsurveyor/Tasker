import React from 'react';

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-background-primary border border-neutral-200 shadow-soft',
    elevated: 'bg-background-primary shadow-medium',
    outlined: 'bg-background-primary border-2 border-neutral-300',
    ghost: 'bg-transparent',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const interactiveClass = onClick ? 'cursor-pointer hover:shadow-medium' : '';

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    interactiveClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card; 