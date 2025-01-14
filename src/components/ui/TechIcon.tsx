'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';

interface TechIconProps {
  name: string;
  icon: IconType;
}

export default function TechIcon({ name, icon: Icon }: TechIconProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative flex flex-col items-center mt-2 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
        <Icon size={24} className="text-zinc-700" />
      </div>
      
      {/* Sliding Text */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-600 text-sm font-medium tracking-wide absolute top-full pt-1"
            style={{ zIndex: 20 }} // Ensure text appears above other elements
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}