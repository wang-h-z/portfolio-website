'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Work, School, Code } from '@mui/icons-material';
import { experiences } from '@/constants/data';
import ExperienceCard from '@/components/ui/ExperienceCard';
import Section from '../ui/Section';
import { slideAnimation } from '@/styles/animations';
import { useTheme } from '@/lib/ThemeContext';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'work':
      return <Work />;
    case 'code':
      return <Code />;
    case 'school':
      return <School />;
    default:
      return <Work />;
  }
};

export default function Experience() {
  const { theme } = useTheme();
  
  // Set colors based on theme
  const dotColor = theme === 'dark' ? '#e4e4e7' : '#27272a'; // zinc-200 for dark, zinc-800 for light
  const dotTextColor = theme === 'dark' ? '#27272a' : '#ffffff'; // dark text on light dot, white text on dark dot
  const connectorColor = theme === 'dark' ? '#a1a1aa' : '#27272a'; // zinc-400 for dark, zinc-800 for light
  const timelineTextColor = theme === 'dark' ? '#a1a1aa' : '#71717a'; // zinc-400 for dark, zinc-500 for light

  return (
    <Section id="experience" bgColor="light">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white"
          variants={slideAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          My Journey
        </motion.h2>
        
        {/* Larger padding on mobile for better timeline layout */}
        <div className="px-2 sm:px-6">
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent 
                  sx={{ 
                    color: timelineTextColor,
                    marginTop: '12px', // Align better with card
                    fontWeight: 500
                  }}
                  className="text-sm sm:text-base"
                >
                  {experience.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ 
                    bgcolor: dotColor,
                    color: dotTextColor
                  }}>
                    {getIcon(experience.icon)}
                  </TimelineDot>
                  {index < experiences.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: connectorColor }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={slideAnimation}
                    custom={index % 2 !== 0} // pass whether it's on the left side
                  >
                    <ExperienceCard 
                      experience={experience}
                      isLeft={index % 2 !== 0}
                    />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </Section>
  );
}