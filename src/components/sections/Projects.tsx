'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import Section from '../ui/Section';
import { contentVariants } from '@/constants/data';
import { useTheme } from '@/lib/ThemeContext';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <Section id="projects" bgColor={theme === 'dark' ? 'dark' : 'white'}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            variants={contentVariants}
          >
            my projects
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
            variants={contentVariants}
          >
            a collection of my stuff
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}