'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  bgColor?: 'white' | 'light' | 'grey' | 'dark'; // Added 'dark' as a valid option
}

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      type: 'tween',
      ease: 'easeOut'
    }
  }
};

export default function Section({ children, id, className = '', bgColor = 'white' }: SectionProps) {
  const { theme } = useTheme();
  
  // Updated to support dark mode for each bgColor option
  let bgClass = '';
  
  switch (bgColor) {
    case 'light':
      bgClass = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50';
      break;
    case 'grey':
      bgClass = theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100';
      break;
    case 'dark':
      bgClass = 'bg-zinc-900 text-white';
      break;
    default: // 'white' is the default
      bgClass = theme === 'dark' ? 'bg-zinc-950' : 'bg-white';
  }

  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 px-8 ${bgClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}