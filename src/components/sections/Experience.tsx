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

/*const getTechIcon = (index: number) => {
  const icons = [Language, Storage, Cloud, Group, Devices, Speed];
  return icons[index % icons.length];
};*/

export default function Experience() {

  return (
    <Section id="experience" bgColor="light">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900"
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
              <TimelineOppositeContent className="text-zinc-500 font-medium">
                {experience.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: 'rgb(24, 24, 27)' }}>
                  {getIcon(experience.icon)}
                </TimelineDot>
                {index < experiences.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: 'rgb(24, 24, 27)' }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={slideAnimation}
                  custom={index % 2 !== 0} // Pass whether it's on the left side
                >
                  <ExperienceCard 
                    experience={experience}
                    stripColor={stripColors[index % stripColors.length]}
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