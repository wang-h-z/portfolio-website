'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import type { Project } from '@/types';

export default function Projects() {
  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div 
              key={index}
              className="bg-zinc-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2 text-zinc-900">{project.title}</h3>
              <p className="text-zinc-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-zinc-200 text-zinc-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-zinc-900 hover:text-zinc-600 transition-colors inline-flex items-center"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}