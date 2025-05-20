'use client';

import { useState, useEffect, MouseEvent } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/lib/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const socialsSection = document.getElementById('socials');
    if (socialsSection) {
      socialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-zinc-900 dark:text-white transition-all duration-200 hover:scale-105">WHZ</a>
          
          {/* Desktop menu */}
          <div className="flex gap-8 items-center">
            <a href="#experience" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:scale-105">Experience</a>
            <a href="#projects" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:scale-105">Projects</a>
            <a href="#socials" onClick={handleContactClick} className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:scale-105">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}