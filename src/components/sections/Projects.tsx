'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import Section from '../ui/Section';
import { contentVariants } from '@/constants/data';

export default function Projects() {
  return (
    <Section id="projects" bgColor="light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              style={{ minHeight: 0 }} // This helps prevent disappearing issues
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}