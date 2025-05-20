'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { contentVariants } from '@/constants/data';
import { useTheme } from '@/lib/ThemeContext'; // Add this import

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme(); // Add this to access current theme

  // Image hover animation variant
  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  // Background animation variant
  const backgroundVariants = {
    hidden: { 
      scale: 1,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    animate: {
      scale: [1, 1.02, 1],
      opacity: 1,
      transition: {
        scale: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop" as const
        }
      }
    }
  };

  // Wave animation for emoji
  const waveVariants = {
    initial: { rotate: 0 },
    wave: {
      rotate: [0, 14, -8, 14, -4, 0],
      transition: {
        duration: 1.5,
        repeat: isHovering ? Infinity : 0,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  return (
    <Section id="hero" bgColor={theme === 'dark' ? 'dark' : 'white'}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[80vh]">
        <motion.div 
          className="md:w-1/2 text-left"
          variants={contentVariants}
        >
          {/* Left Side */}
          <div className="w-fit relative">
            <motion.div 
              className="relative w-96 h-96 mb-4"
              whileHover="hover"
              variants={imageHoverVariants}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <Image 
                src="/assets/hero/pfp.jpg"
                alt="Profile"
                fill 
                className="rounded-3xl object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl"
                priority 
                sizes="(max-width: 768px) 100vw, 384px" 
              />
              {/* Decorative elements */}
              <motion.div 
                className="absolute -z-10 w-full h-full bg-zinc-200 dark:bg-zinc-700 rounded-3xl -right-3 -bottom-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="absolute -z-20 w-full h-full border-2 border-zinc-300 dark:border-zinc-600 rounded-3xl right-6 bottom-6"
                variants={backgroundVariants}
                initial="hidden"
                animate={isHovering ? "animate" : "hidden"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md absolute bottom-8 left-4"
            >
              <p className="text-zinc-600 dark:text-zinc-300 text-lg">Y2 CS @ NUS</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex flex-col justify-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Right Side */}
          <motion.div variants={textVariants}>
            <h1 className="text-5xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center gap-4">
              Hi there!
              <motion.span 
                className="inline-block"
                variants={waveVariants}
                initial="initial"
                animate={isHovering ? "wave" : "initial"}
              >
                👋
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed"
              variants={textVariants}
            >
              I'm Haozhen, a CS undergrad from National University of Singapore.
              I enjoy making useful applications and learning new technologies!
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={textVariants}
            >
              <a 
                href="#projects" 
                className="group relative px-6 py-3 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 w-0 bg-zinc-700 dark:bg-zinc-600 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}