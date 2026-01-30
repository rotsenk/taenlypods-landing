import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary',
  className = '' 
}) => {
  const variantClasses = {
    primary: 'bg-yellow-400 text-purple-900',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <span className={`px-4 py-1 rounded-full text-sm font-bold ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
