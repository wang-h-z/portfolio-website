'use client';

import { useState, useEffect, MouseEvent } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-zinc-900 transition-all duration-200 hover:scale-105">WHZ</a>
          
          {/* Desktop menu */}
          <div className="flex gap-8">
            <a href="#experience" className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Experience</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Projects</a>
            <a href="#socials" onClick={handleContactClick} className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}