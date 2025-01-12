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
import { experiences } from '@/constants/data';
import type { Experience as ExperienceType } from '@/types';

const stripColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-yellow-500',
  'from-red-500 to-rose-500',
] as const;

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

const getTechIcon = (index: number) => {
  const icons = [Language, Storage, Cloud, Group, Devices, Speed];
  return icons[index % icons.length];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Experience() {
  return (
    <motion.section 
      id="experience"
      className="py-20 px-8 bg-zinc-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">My Journey</h2>
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
                {index < experiences.length - 1 && <TimelineConnector sx={{ bgcolor: 'rgb(24, 24, 27)' }} />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div 
                  className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Gradient strip at the top */}
                  <div className={`h-2 bg-gradient-to-r ${stripColors[index % stripColors.length]} rounded-t-lg`} />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-900">{experience.title}</h3>
                    <h4 className="font-medium text-zinc-700 mt-1">{experience.company}</h4>
                    <p className="text-zinc-600 mt-2">{experience.description}</p>
                    
                    {/* Technologies section */}
                    <div className="mt-4 border-t border-zinc-100 pt-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Achievements with icons */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        {experience.achievements.map((achievement, achIndex) => {
                          const IconComponent = getTechIcon(achIndex);
                          return (
                            <div key={achIndex} className="flex items-center gap-1 text-zinc-600">
                              <IconComponent className="w-4 h-4" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </motion.section>
  );
}