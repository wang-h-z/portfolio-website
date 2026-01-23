'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TechItem {
  name: string;
  icon: string;
}

interface TechLayer {
  name: string;
  items: TechItem[];
  color: string;
  darkColor: string;
  solidColor: string;
}

// Map technology names to their icon file names
const techIconMap: Record<string, string> = {
  'TypeScript': 'TypeScript.svg',
  'Python': 'Python.svg',
  'Java': 'Java.svg',
  'JavaScript': 'JavaScript.svg',
  'SQL': 'MySQL.svg',
  'Go': 'Go.svg',
  'HTML': 'HTML5.svg',
  'CSS': 'CSS3.svg',
  'React': 'React.svg',
  'Vue': 'Vue.js.svg',
  'Angular': 'Angular.svg',
  'Next.js': 'Next.js.svg',
  'Node.js': 'Node.js.svg',
  'Express': 'Express.svg',
  'TailwindCSS': 'Tailwind-CSS.svg',
  'Flask': 'Flask.svg',
  'MongoDB': 'MongoDB.svg',
  'PostgreSQL': 'PostgresSQL.svg',
  'Docker': 'Docker.svg',
  'Git': 'Git.svg',
};

const techLayers: TechLayer[] = [
  {
    name: 'programming languages',
    items: [
      { name: 'TypeScript', icon: techIconMap['TypeScript'] },
      { name: 'Python', icon: techIconMap['Python'] },
      { name: 'Java', icon: techIconMap['Java'] },
      { name: 'JavaScript', icon: techIconMap['JavaScript'] },
      { name: 'SQL', icon: techIconMap['SQL'] },
      { name: 'Go', icon: techIconMap['Go'] },
    ],
    color: 'rgba(139, 92, 246, 0.5)', // violet-500 - top
    darkColor: 'rgba(109, 40, 217, 0.6)', // darker for sides
    solidColor: '#8b5cf6',
  },
  {
    name: 'stacks & frameworks',
    items: [
      { name: 'HTML', icon: techIconMap['HTML'] },
      { name: 'CSS', icon: techIconMap['CSS'] },
      { name: 'React', icon: techIconMap['React'] },
      { name: 'Vue', icon: techIconMap['Vue'] },
      { name: 'Angular', icon: techIconMap['Angular'] },
      { name: 'Next.js', icon: techIconMap['Next.js'] },
      { name: 'Node.js', icon: techIconMap['Node.js'] },
      { name: 'Express', icon: techIconMap['Express'] },
      { name: 'TailwindCSS', icon: techIconMap['TailwindCSS'] },
      { name: 'Flask', icon: techIconMap['Flask'] },
      { name: 'MongoDB', icon: techIconMap['MongoDB'] },
      { name: 'PostgreSQL', icon: techIconMap['PostgreSQL'] },
    ],
    color: 'rgba(124, 58, 237, 0.65)', // violet-600 - medium
    darkColor: 'rgba(91, 33, 182, 0.75)', // darker for sides
    solidColor: '#7c3aed',
  },
  {
    name: 'other proficiencies',
    items: [
      { name: 'Docker', icon: techIconMap['Docker'] },
      { name: 'Git', icon: techIconMap['Git'] },
    ],
    color: 'rgba(109, 40, 217, 0.8)', // violet-700 - darkest
    darkColor: 'rgba(76, 29, 149, 0.9)', // darker for sides
    solidColor: '#6d28d9',
  },
];

// Tech Icon Card Component with Flip Animation
function TechIconCard({ item, delay }: { item: TechItem; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative w-12 h-12 sm:w-16 sm:h-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Front - Colored Icon */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full">
            <Image
              src={`/assets/tech-icons/${item.icon}`}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Back - Grayscale Icon with Text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative w-full h-3/4" style={{ filter: 'grayscale(100%)' }}>
            <Image
              src={`/assets/tech-icons/${item.icon}`}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 text-center whitespace-nowrap">
            {item.name}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TechStackLayers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-8 max-h-screen overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          stuff i've used
        </h2>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          hover over the layers to highlight, click a layer to see more
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 flex-shrink-0">
        {/* Left Side - Diamond Stack */}
        <div className="relative" style={{ width: '250px', height: '350px' }}>
          {techLayers.map((layer, index) => {
            const isHovered = hoveredIndex === index;
            const isSelected = selectedIndex === index;
            const yOffset = index * 70;

            return (
              <motion.div
                key={layer.name}
                className="absolute cursor-pointer"
                style={{
                  width: '160px',
                  height: '160px',
                  left: '45px',
                  top: yOffset,
                  zIndex: isHovered || isSelected ? 100 : techLayers.length - index,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  y: isHovered ? -12 : 0,
                  scale: isSelected ? 1.08 : isHovered ? 1.04 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
              >
                {/* 3D Diamond Container */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(60deg) rotateZ(45deg)',
                  }}
                >
                  {/* Top face */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: layer.color,
                      boxShadow: isHovered || isSelected
                        ? `0 30px 60px -10px ${layer.solidColor}80`
                        : `0 20px 40px -15px ${layer.solidColor}60`,
                    }}
                  />
                  
                  {/* Front face (bottom edge) */}
                  <div
                    className="absolute w-full"
                    style={{
                      height: '15px',
                      bottom: 0,
                      left: 0,
                      background: layer.darkColor,
                      transformOrigin: 'top',
                      transform: 'translateY(100%) rotateX(-90deg)',
                    }}
                  />
                  
                  {/* Right face (side edge) */}
                  <div
                    className="absolute h-full"
                    style={{
                      width: '15px',
                      top: 0,
                      right: 0,
                      background: layer.darkColor,
                      transformOrigin: 'left',
                      transform: 'translateX(100%) rotateY(90deg)',
                      filter: 'brightness(0.8)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side - Labels */}
        <div className="flex flex-col gap-4">
          {techLayers.map((layer, index) => {
            const isHovered = hoveredIndex === index;
            const isSelected = selectedIndex === index;

            return (
              <motion.div
                key={layer.name}
                className="flex items-center gap-3 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
                animate={{
                  x: isHovered || isSelected ? 5 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Number badge */}
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: layer.solidColor }}
                >
                  {index + 1}
                </div>

                {/* Dotted line */}
                <div className="w-8 border-t-2 border-dotted border-zinc-300 dark:border-zinc-600" />

                {/* Label pill */}
                <motion.div
                  className="px-4 py-2 text-sm md:text-base rounded-full font-semibold text-white whitespace-nowrap"
                  style={{
                    backgroundColor: layer.solidColor,
                    boxShadow: isHovered || isSelected ? `0 4px 20px ${layer.solidColor}60` : 'none',
                  }}
                  animate={{
                    scale: isHovered || isSelected ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {layer.name}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded details panel */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={() => setSelectedIndex(null)}
            className="mt-8 max-w-5xl mx-auto p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 relative cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: techLayers[selectedIndex].solidColor }}
              />
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                {techLayers[selectedIndex].name}
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {techLayers[selectedIndex].items.map((item, i) => (
                <TechIconCard
                  key={item.name}
                  item={item}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}