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
      {/* Icon - adjusted to w-10/h-10 for slightly smaller size */}
      <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        {/* Adjusted icon size to 22 */}
        <Icon size={22} className="text-zinc-700 dark:text-zinc-300" />
      </div>
      
      {/* Sliding Text - kept text size but adjusted positioning */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-800 dark:text-zinc-200 text-sm font-medium tracking-tight absolute top-full pt-1 z-10"
            style={{ 
              textShadow: theme === 'dark' 
                ? '0 1px 3px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,0.9)' 
                : '0 1px 3px rgba(255,255,255,0.8), 0 0 5px rgba(255,255,255,0.9)',
              maxWidth: '140px',
              textAlign: 'center'
            }}
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}