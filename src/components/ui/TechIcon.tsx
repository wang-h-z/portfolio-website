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
      className="relative flex flex-col items-center mt-2 mb-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        <Icon size={18} className="text-zinc-700 dark:text-zinc-300" />
      </div>
      
      {/* Sliding Text - transparent background with subtle shadow */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-800 dark:text-zinc-200 text-xs font-medium tracking-tight absolute top-full pt-1 shadow-sm px-2 py-0.5 rounded backdrop-blur-sm z-10 bg-transparent"
            style={{ textShadow: theme === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : '0 1px 2px rgba(255,255,255,0.5)' }}
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}