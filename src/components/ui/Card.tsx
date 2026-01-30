import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl' 
    : '';

  return (
    <div className={`bg-white rounded-2xl shadow-lg ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
