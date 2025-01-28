'use client';

import { useState, useEffect, MouseEvent } from 'react';

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

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-zinc-900 transition-all duration-200 hover:scale-105">WHZ</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden transition-transform duration-200 hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Experience</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Projects</a>
            <a href="#contact" onClick={scrollToContact} className="text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:scale-105">Contact</a>
          </div>

          {/* Mobile menu */}
          <div className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}>
            <div className="py-2 px-4 space-y-2">
              <a href="#experience" className="block py-2 text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:translate-x-2">Experience</a>
              <a href="#projects" className="block py-2 text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:translate-x-2">Projects</a>
              <a href="#contact" onClick={scrollToContact} className="block py-2 text-zinc-600 hover:text-zinc-900 transition-all duration-200 hover:translate-x-2">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}