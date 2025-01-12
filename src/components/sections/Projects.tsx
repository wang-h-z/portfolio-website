'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/styles/animations';

export default function Projects() {
  return (
    <motion.section 
      id="projects"
      className="py-20 px-8 bg-zinc-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900"
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project: Project, index: number) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}