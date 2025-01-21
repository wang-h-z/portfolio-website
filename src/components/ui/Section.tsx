'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  bgColor?: 'white' | 'light' | 'grey'; // For alternating backgrounds
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
  const bgClass = bgColor === 'light' ? 'bg-zinc-50' : 'bg-white';

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