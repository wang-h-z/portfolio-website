'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import type { Project } from '@/types';
import Section from '../ui/Section';
import { contentVariants } from '@/constants/data';
import { useTheme } from '@/lib/ThemeContext';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToProject = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goNext();
      if (e.key === 'ArrowRight') goPrev();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Get the projects for the 3-card view
  const getVisibleProjects = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    
    return [
      { ...projects[prevIndex], position: 'prev', index: prevIndex },
      { ...projects[currentIndex], position: 'current', index: currentIndex },
      { ...projects[nextIndex], position: 'next', index: nextIndex }
    ];
  };

  const visibleProjects = getVisibleProjects();

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
            className="text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            variants={contentVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
            variants={contentVariants}
          >
            Browse through my latest work and projects
          </motion.p>
          {/* Small hint text */}
          <motion.p 
            className="text-sm text-zinc-400 dark:text-zinc-500 mt-2"
            variants={contentVariants}
          >
            Use arrow keys or click side cards to navigate
          </motion.p>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="flex items-center justify-center h-full gap-12">
              {visibleProjects.map((project) => (
                <motion.div
                  key={`${project.title}-${project.position}`}
                  className="cursor-pointer relative"
                  animate={{
                    x: project.position === 'prev' ? -80 : project.position === 'next' ? 80 : 0,
                    scale: project.position === 'current' ? 1 : 0.9,
                    opacity: project.position === 'current' ? 1 : 0.6,
                    filter: project.position === 'current' ? 'blur(0px)' : 'blur(1px)',
                    zIndex: project.position === 'current' ? 20 : 10
                  }}
                  whileHover={project.position !== 'current' ? {
                    scale: 0.95,
                    opacity: 0.8
                  } : {}}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  onClick={() => project.position !== 'current' && goToProject(project.index)}
                >
                  {/* Loading shimmer effect during transition */}
                  {isTransitioning && project.position === 'current' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
                  )}

                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 h-auto rounded-xl p-6 border shadow-sm">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white mb-3"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm dark:text-neutral-300 mb-4 leading-relaxed"
                      >
                        {project.description}
                      </CardItem>
                      {project.image && (
                        <CardItem translateZ="100" className="w-full mb-4 relative overflow-hidden rounded-lg">
                          <Image
                            src={project.image}
                            height="300"
                            width="500"
                            className="h-48 w-full object-cover group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-105"
                            alt={project.title}
                          />
                        </CardItem>
                      )}
                      
                      {/* Technology Tags - Show more on current card */}
                      {project.technologies && project.position === 'current' && (
                        <CardItem
                          translateZ="60"
                          className="flex flex-wrap gap-2 mb-6"
                        >
                          {project.technologies.slice(0, 6).map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-2 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-zinc-300 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-400">
                              +{project.technologies.length - 6}
                            </span>
                          )}
                        </CardItem>
                      )}
                      
                      {/* Action buttons - Only show on current card */}
                      {project.position === 'current' && (
                        <div className="flex justify-between items-center">
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={project.github || project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-normal text-neutral-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                          >
                            <Github size={14} className="group-hover:rotate-12 transition-transform" />
                            View Code
                          </CardItem>
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 group"
                          >
                            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Live Demo
                          </CardItem>
                        </div>
                      )}

                      {/* Click hint for side cards with pulse animation */}
                      {project.position !== 'current' && (
                        <div className="flex justify-center mt-6">
                          <span className="text-xs text-zinc-400 dark:text-zinc-500 animate-pulse">
                            Click to view
                          </span>
                        </div>
                      )}
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress dots with better styling */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full disabled:opacity-50 ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-blue-600 dark:bg-blue-400'
                    : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}