'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-zinc-900">WHZ</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-zinc-600 hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact</a>
          </div>

          {/* Mobile menu */}
          <div className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <div className="py-2 px-4 space-y-2">
              <a href="#experience" className="block py-2 text-zinc-600 hover:text-zinc-900">Experience</a>
              <a href="#projects" className="block py-2 text-zinc-600 hover:text-zinc-900">Projects</a>
              <a href="#contact" className="block py-2 text-zinc-600 hover:text-zinc-900">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}