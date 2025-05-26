// ExperienceCard.tsx
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
  const [showTech, setShowTech] = useState(false);
  
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
  
  // Only show the tech section if there are technologies
  const hasTech = experience.technologies && experience.technologies.length > 0;
  
  // Dynamic background based on theme
  const cardBg = theme === 'dark' 
    ? 'bg-zinc-800/95 dark:bg-zinc-800/95' // Lightened from 900 to 800
    : 'bg-white dark:bg-zinc-800/95';
  const textColor = theme === 'dark' 
    ? 'text-zinc-200 dark:text-zinc-200' // Lightened from 300 to 200
    : 'text-zinc-600 dark:text-zinc-200';
  const headingColor = theme === 'dark' 
    ? 'text-white dark:text-white' 
    : 'text-zinc-900 dark:text-white';

  return (
    <motion.div 
      className={`
        relative ${cardBg} rounded-lg
        shadow-lg dark:shadow-xl
        hover:shadow-xl dark:hover:shadow-2xl
        transition-all duration-300 mb-4
        border border-zinc-200/10 dark:border-zinc-700/50
        hover:border-zinc-300/20 dark:hover:border-zinc-600
        ${hasTech ? 'cursor-pointer' : ''}
      `}
      whileHover={{ 
        scale: 1.02,
        boxShadow: theme === 'dark' 
          ? "0 20px 30px -8px rgba(0, 0, 0, 0.3)" 
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      onClick={() => hasTech && setShowTech(!showTech)}
      transition={{ duration: 0.2 }}
    >
      {/* Colored gradient bar on top */}
      <div className={`h-1 w-full ${isLeft ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500'}`}></div>
      
      <div className="p-5">
        {/* Header with image and title - with consistent alignment */}
        <div className={`flex items-center mb-4 ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
          {experience.image && (
            <div className={`${isLeft ? 'ml-4' : 'mr-4'} relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full`}>
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
            <h3 className={`text-lg font-bold ${headingColor}`}>
              {experience.title}
            </h3>
            <div className={`flex items-center gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <p className={textColor + " text-sm"}>
                {experience.company}
              </p>
              
              {/* Duration badge */}
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {getDuration()}
              </span>
              
              {/* Status indicator */}
              {experience.year.includes('Present') && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Description - with consistent alignment */}
        <div className={`mb-3 ${isLeft ? 'text-right' : 'text-left'}`}>
          <p className={`${textColor} text-sm leading-relaxed`}>
            {experience.description}
          </p>
        </div>
        
        {/* Tech indicator (chevron) - Only if there are technologies */}
        {hasTech && (
          <div className="flex justify-center mt-2 mb-1">
            <motion.div 
              animate={{ rotate: showTech ? 180 : 0 }}
              className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-zinc-500 dark:text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        )}
        
        {/* Tech stack */}
        <AnimatePresence>
          {showTech && hasTech && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-visible" // Changed from overflow-hidden
            >
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                {/* Using flex with smaller gap and padding */}
                <div className={`flex flex-wrap gap-2 mt-2 py-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  {experience.technologies?.map((tech, i) => {
                    if (tech.icon) {
                      return <TechIcon key={i} name={tech.name} icon={tech.icon} />;
                    }
                    
                    return (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 whitespace-nowrap my-1"
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
