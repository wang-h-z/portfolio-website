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
import { Work, School, Code, Language, Storage, Cloud, Group, Devices, Speed } from '@mui/icons-material';
import { experiences, stripColors } from '@/constants/data';
import ExperienceCard from '@/components/ui/ExperienceCard';
import Section from '../ui/Section';
import { slideAnimation } from '@/styles/animations';
import { useTheme } from '@/lib/ThemeContext'; // Add this import

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
  const { theme } = useTheme(); // Add this to access the current theme
  
  // Use theme to determine colors for MUI components
  const dotColor = theme === 'dark' ? 'rgb(228, 228, 231)' : 'rgb(24, 24, 27)';
  const dotTextColor = theme === 'dark' ? 'rgb(24, 24, 27)' : 'rgb(255, 255, 255)';
  const connectorColor = theme === 'dark' ? 'rgb(161, 161, 170)' : 'rgb(24, 24, 27)';

  return (
    <Section id="experience" bgColor="light">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white"
          variants={slideAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          My Journey
        </motion.h2>
        
        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400 font-medium">
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
              <TimelineContent>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={slideAnimation}
                  custom={index % 2 !== 0} // pass whether it's on the left side
                >
                  <ExperienceCard 
                    experience={experience}
                    stripColor={theme === 'dark' ? getAdjustedStripColor(stripColors[index % stripColors.length]) : stripColors[index % stripColors.length]}
                    isLeft={index % 2 !== 0}
                  />
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}

// Helper function to adjust strip colors for dark mode
function getAdjustedStripColor(color: string): string {
  // Optional function to adjust strip colors for better visibility in dark mode
  // Could make colors brighter or more saturated
  switch (color) {
    case '#f97316': return '#fb923c'; // Brighten orange
    case '#8b5cf6': return '#a78bfa'; // Brighten purple
    case '#06b6d4': return '#22d3ee'; // Brighten cyan
    case '#10b981': return '#34d399'; // Brighten emerald
    default: return color;
  }
}