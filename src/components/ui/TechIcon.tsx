'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TechIconProps {
  name: string;
  iconPath: string;
}

export default function TechIcon({ name, iconPath }: TechIconProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative flex flex-col items-center mt-2 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100">
        <div className="relative w-full h-full">
          <Image
            src={iconPath}
            alt={`${name} icon`}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
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