'use client';

import React from 'react';
import Image from 'next/image';
import { Experience } from '@/types';
import TechIcon from './TechIcon';
import { useTheme } from '@/lib/ThemeContext';

interface ExperienceCardProps {
  experience: Experience;
  stripColor: string;
  isLeft: boolean;
}

export default function ExperienceCard({ experience, stripColor, isLeft }: ExperienceCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden mb-4 ${isLeft ? 'mr-4' : 'ml-4'}`}>
      {/* Colored strip at the top */}
      <div 
        className="h-2 w-full bg-gradient-to-r" 
        style={{ background: stripColor }}
      ></div>
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          {experience.image && (
            <div className="mr-3 relative w-12 h-12 flex-shrink-0">
              <Image 
                src={experience.image} 
                alt={experience.company} 
                width={48} 
                height={48} 
                className="rounded-full"
              />
            </div>
          )}
          
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm">
              {experience.company}
            </p>
          </div>
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-3">
          {experience.description}
        </p>
        
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {experience.technologies.map((tech, i) => {
              // Your technologies are already objects with icon and name properties
              if (tech.icon) {
                return <TechIcon key={i} name={tech.name} icon={tech.icon} />;
              }
              
              // Fallback to simple tag if no icon is available
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
    </div>
  );
}