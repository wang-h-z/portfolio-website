import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-zinc-800 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}