'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-zinc-900">JD</a>
          <div className="flex gap-8">
            <a href="#experience" className="text-zinc-600 hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}