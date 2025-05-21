'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from '@/types';
import TechIcon from './TechIcon';
import { useTheme } from '@/lib/ThemeContext';

interface ExperienceCardProps {
  experience: Experience;
  isLeft: boolean;
}

export default function ExperienceCard({ experience, isLeft }: ExperienceCardProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden mb-4 
                 hover:shadow-lg transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5">
        {/* Header with image and title */}
        <div className="flex items-center mb-4">
          {experience.image && (
            <div className="mr-4 relative w-12 h-12 flex-shrink-0">
              <Image 
                src={experience.image} 
                alt={experience.company} 
                width={48} 
                height={48} 
                className="rounded-full"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {experience.company}
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
          {experience.description}
        </p>
        
        {/* Tech stack */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => {
              if (tech.icon) {
                return <TechIcon key={i} name={tech.name} icon={tech.icon} />;
              }
              
              return (
                <span 
                  key={i} 
                  className="inline-block px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                >
                  {tech.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}