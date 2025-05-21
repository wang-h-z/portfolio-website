'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/types';
import TechIcon from './TechIcon';
import { useTheme } from '@/lib/ThemeContext';

interface ExperienceCardProps {
  experience: Experience;
  isLeft: boolean;
}

export default function ExperienceCard({ experience, isLeft }: ExperienceCardProps) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate experience duration
  const getDuration = () => {
    if (experience.year.includes('Present')) {
      const startYear = parseInt(experience.year.split(' - ')[0].split(' ')[0]);
      const currentYear = new Date().getFullYear();
      const months = new Date().getMonth() - 4; // Assuming May is when you started
      
      if (currentYear > startYear) {
        return `${currentYear - startYear}y ${months >= 0 ? months : 12 + months}m`;
      }
      return `${months}m`;
    }
    
    const parts = experience.year.split(' - ');
    if (parts.length === 2) {
      const startDate = parts[0].split(' ');
      const endDate = parts[1].split(' ');
      
      if (startDate.length >= 2 && endDate.length >= 2) {
        const startMonth = startDate[0];
        const startYear = parseInt(startDate[1]);
        const endMonth = endDate[0];
        const endYear = parseInt(endDate[1]);
        
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const startMonthIndex = monthNames.indexOf(startMonth);
        const endMonthIndex = monthNames.indexOf(endMonth);
        
        if (startYear === endYear) {
          return `${endMonthIndex - startMonthIndex}m`;
        } else {
          const years = endYear - startYear;
          const months = endMonthIndex - startMonthIndex;
          return months >= 0 ? 
            `${years}y ${months}m` : 
            `${years - 1}y ${12 + months}m`;
        }
      }
    }
    
    return '';
  };
  
  return (
    <motion.div 
      className="relative bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden mb-4 
                 hover:shadow-lg transition-all duration-300"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle colorful border on top - using gradient for visual interest without hardcoded colors */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-5">
        {/* Header with image and title */}
        <div className="flex items-center mb-4">
          {experience.image && (
            <div className="mr-4 relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full">
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
            <div className="flex items-center gap-2">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                {experience.company}
              </p>
              
              {/* Duration badge - unique feature */}
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getDuration()}
              </span>
              
              {/* Status indicator - subtle and unique */}
              {experience.year.includes('Present') && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Description with subtle expand/collapse cue */}
        <motion.div 
          className="relative px-1 mb-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)' }}
          animate={{ 
            height: isExpanded ? 'auto' : '2.5rem' 
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Light indicator at the bottom for collapsed state */}
          {!isExpanded && (
            <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-white dark:from-zinc-800 to-transparent pointer-events-none"></div>
          )}
          
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            {experience.description}
          </p>
          
          {/* Subtle expansion indicator */}
          <div className="flex justify-center mt-1">
            <motion.div 
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                opacity: isExpanded ? 1 : 0.6
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 flex items-center justify-center rounded-full 
                        bg-zinc-100 dark:bg-zinc-700 
                        ${isExpanded ? 'mt-1' : '-mt-3'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-zinc-400 dark:text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Tech stack */}
        <AnimatePresence>
          {isExpanded && experience.technologies && experience.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-700">
                <p className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 font-medium">
                  Technologies
                </p>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}