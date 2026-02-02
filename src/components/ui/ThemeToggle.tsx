"use client";

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import Image from 'next/image';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className} relative w-12 h-12 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Image
          src="/assets/hero/zekrom.png"
          alt="Switch to dark mode"
          width={52}
          height={52}
          className="object-contain"
        />
      ) : (
        <Image
          src="/assets/hero/reshiram.png"
          alt="Switch to light mode"
          width={52}
          height={52}
          className="object-contain"
        />
      )}
    </button>
  );
};

export default ThemeToggle;