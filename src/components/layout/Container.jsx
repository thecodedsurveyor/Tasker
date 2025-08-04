import React from 'react';

const Container = ({
  children,
  maxWidth = 'default',
  padding = 'default',
  className = '',
  ...props
}) => {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    default: 'max-w-6xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12',
    default: 'px-4 lg:px-8 xl:px-12',
  };

  const classes = [
    'mx-auto',
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container; 