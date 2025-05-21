'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import Section from '../ui/Section';
import { contentVariants } from '@/constants/data';
import { useTheme } from '@/lib/ThemeContext'; // Add this import

export default function Projects() {
  const { theme } = useTheme(); // Add this to access current theme

  return (
    <Section id="projects" bgColor="white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white"
          variants={contentVariants}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={contentVariants}
        >
          {projects.map((project: Project, index: number) => (
            <motion.div 
              key={index}
              variants={contentVariants}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}