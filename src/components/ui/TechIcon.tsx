'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';
import { useTheme } from '@/lib/ThemeContext';

interface TechIconProps {
  name: string;
  icon: IconType;
}

export default function TechIcon({ name, icon: Icon }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  
  return (
    <div 
      className="relative flex flex-col items-center mt-2 mb-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon container with enhanced styling */}
      <motion.div 
        className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-600 flex items-center justify-center shadow-lg dark:shadow-xl dark:shadow-black/40 relative overflow-hidden group"
        whileHover={{ 
          scale: 1.12,
          y: -4,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/10 group-hover:to-blue-500/10 dark:group-hover:from-violet-500/20 dark:group-hover:to-blue-500/20 transition-all duration-300 rounded-2xl" />
        {/* Border glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-violet-500/30 dark:ring-violet-400/40" />
        <Icon size={28} className="text-zinc-700 dark:text-zinc-100 relative z-10 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300" />
      </motion.div>
      
      {/* Sliding Text with better styling */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full pt-1 z-10 px-3 py-1.5 rounded-lg bg-zinc-800/95 dark:bg-zinc-700/95 backdrop-blur-sm border border-zinc-700/50 dark:border-zinc-500/30 shadow-lg"
          >
            <span className="text-zinc-100 text-xs font-medium tracking-wide whitespace-nowrap">
              {name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}