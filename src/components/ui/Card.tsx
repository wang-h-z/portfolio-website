import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={`
      relative p-6 
      bg-white dark:bg-zinc-700/90
      border border-zinc-200 dark:border-zinc-500
      hover:border-zinc-300 dark:hover:border-zinc-400
      shadow-sm hover:shadow-md
      dark:shadow-lg dark:hover:shadow-2xl
      dark:shadow-zinc-950/40 dark:hover:shadow-zinc-950/50
      rounded-2xl transition-all duration-300
      backdrop-blur-sm dark:backdrop-blur-md
      dark:hover:bg-zinc-600/90
      ${className}`}
    >
      {children}
    </div>
  );
}