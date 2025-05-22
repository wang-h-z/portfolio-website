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
      className="relative flex flex-col items-center mt-2 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon - increased from w-8/h-8 to w-9/h-9 (~12.5% increase) */}
      <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        {/* Increased icon size from 18 to 20 (~11% increase) */}
        <Icon size={20} className="text-zinc-700 dark:text-zinc-300" />
      </div>
      
      {/* Sliding Text - no background, just text with shadow for readability */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-800 dark:text-zinc-200 text-xs font-medium tracking-tight absolute top-full pt-1 z-10"
            style={{ 
              textShadow: theme === 'dark' 
                ? '0 1px 3px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,0.9)' 
                : '0 1px 3px rgba(255,255,255,0.8), 0 0 5px rgba(255,255,255,0.9)',
              maxWidth: '120px',
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