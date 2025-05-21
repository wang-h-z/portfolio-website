'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';
import { useTheme } from '@/lib/ThemeContext';

interface TechIconProps {
  name: string;
  icon: IconType;
}

export default function TechIcon({ name, icon: Icon }: TechIconProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { theme } = useTheme();

  return (
    <div 
      className="relative flex flex-col items-center mt-2 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center">
        <Icon size={20} className="text-zinc-700 dark:text-zinc-200" />
      </div>
      
      {/* Sliding Text - Making it smaller */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-600 dark:text-zinc-300 text-xs font-medium tracking-wide absolute top-full pt-1 bg-white/90 dark:bg-zinc-800/90 px-2 py-0.5 rounded"
            style={{ zIndex: 20 }} // Ensure text appears above other elements
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}