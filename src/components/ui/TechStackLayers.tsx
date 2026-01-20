'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechLayer {
  name: string;
  technologies: string[];
  gradient: string;
  glowColor: string;
}

const techLayers: TechLayer[] = [
  {
    name: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500/80 to-cyan-400/80',
    glowColor: 'rgba(59, 130, 246, 0.5)',
  },
  {
    name: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'Java'],
    gradient: 'from-purple-500/80 to-pink-500/80',
    glowColor: 'rgba(168, 85, 247, 0.5)',
  },
  {
    name: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    gradient: 'from-pink-500/80 to-rose-400/80',
    glowColor: 'rgba(236, 72, 153, 0.5)',
  },
  {
    name: 'DevOps & Tools',
    technologies: ['Docker', 'Git', 'AWS', 'Vercel'],
    gradient: 'from-violet-500/80 to-purple-400/80',
    glowColor: 'rgba(139, 92, 246, 0.5)',
  },
  {
    name: 'AI & ML',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    gradient: 'from-indigo-500/80 to-blue-400/80',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
];

export default function TechStackLayers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
      {/* 3D Stack Visualization */}
      <div 
        className="relative h-[400px] w-[300px] perspective-1000 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {techLayers.map((layer, index) => {
            const isHovered = hoveredIndex === index;
            const baseOffset = isExpanded ? index * 60 : index * 35;
            const hoverOffset = isHovered ? -15 : 0;
            
            return (
              <motion.div
                key={layer.name}
                className="absolute w-full"
                initial={{ y: index * 35, rotateX: 55, rotateZ: -5 }}
                animate={{
                  y: baseOffset + hoverOffset,
                  rotateX: 55,
                  rotateZ: -5,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: techLayers.length - index,
                }}
              >
                {/* Layer Card */}
                <div
                  className={`relative w-full h-16 rounded-2xl bg-gradient-to-br ${layer.gradient} backdrop-blur-sm border border-white/20`}
                  style={{
                    boxShadow: isHovered
                      ? `0 25px 50px -12px ${layer.glowColor}, 0 0 40px ${layer.glowColor}`
                      : `0 10px 30px -10px ${layer.glowColor}`,
                    transform: 'translateZ(0)',
                  }}
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/20" />
                  
                  {/* Layer content */}
                  <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <span className="text-white font-semibold text-sm tracking-wide drop-shadow-lg">
                      {layer.name}
                    </span>
                  </div>

                  {/* Bottom edge for 3D effect */}
                  <div
                    className={`absolute -bottom-2 left-1 right-1 h-2 rounded-b-xl bg-gradient-to-br ${layer.gradient} opacity-50 blur-[1px]`}
                    style={{ transform: 'rotateX(-90deg) translateZ(8px)' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Glow base effect */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4), transparent)',
          }}
        />
        
        {/* Click hint */}
        <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 dark:text-zinc-400">
          Click to {isExpanded ? 'collapse' : 'expand'}
        </p>
      </div>

      {/* Tech Details Panel */}
      <div className="flex flex-col gap-4 max-w-md">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Tech Stack
        </h3>
        {techLayers.map((layer, index) => (
          <motion.div
            key={layer.name}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              hoveredIndex === index
                ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600 scale-[1.02]'
                : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${layer.gradient}`} />
              <h4 className="font-semibold text-zinc-900 dark:text-white">
                {layer.name}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}