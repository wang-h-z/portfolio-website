'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TechStackLayers from '@/components/ui/TechStackLayers';
import { contentVariants, experiences } from '@/constants/data';
import { useTheme } from '@/lib/ThemeContext';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const { theme } = useTheme();

  const fullText = "hi there!";

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

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
    <>
      {/* Subsection 1: Intro + About */}
      <section
        id="hero"
        className={`relative min-h-screen flex items-center justify-center ${
          theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
        }`}
      >
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center px-4 z-10"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <h1 className="text-5xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center justify-center gap-4">
              <span className="flex items-center gap-4">
                <span>
                  {typedText}
                  {showCursor && typedText.length < fullText.length && (
                    <span className="animate-pulse text-zinc-400">|</span>
                  )}
                </span>
                {typedText === fullText && (
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: [0, 14, -8, 14, -4, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                      rotate: {
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "loop" as const,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    👋
                  </motion.span>
                )}
              </span>
            </h1>
            <motion.p
              className="text-xl text-zinc-600 dark:text-zinc-300 mb-8"
              style={{ lineHeight: '1.5' }}
              variants={textVariants}
            >
              i'm haozhen, a cs undergrad from national university of singapore.
              <br />
              i enjoy making useful, impactful applications and learning new, challenging technologies.
              <br />
              please take a look around my website!
              <br />
              thanks for visiting! :D
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Subsection 2: Tech Stack */}
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
        }`}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto px-4 z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TechStackLayers />
        </motion.div>
      </section>

      {/* Subsection 3: Experience */}
      <section
        className={`relative min-h-screen flex items-center justify-center ${
          theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
        }`}
      >
        <motion.div
          className="w-full max-w-4xl mx-auto px-4 z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white">
            digital footprint
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot with image */}
                  <div className="absolute left-0 top-2">
                    <div className="relative w-12 h-12 rounded-full border-4 border-white dark:border-zinc-950 shadow-md overflow-hidden">
                      {experience.image && (
                        <Image
                          src={experience.image}
                          alt={experience.company}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`
                      p-6 rounded-xl
                      ${theme === 'dark' ? 'bg-zinc-800/80' : 'bg-white'}
                      shadow-lg dark:shadow-zinc-900/50
                      hover:shadow-xl dark:hover:shadow-zinc-800/50
                      transition-all duration-300
                      border border-zinc-200 dark:border-zinc-600/50
                      hover:border-zinc-300/20 dark:hover:border-zinc-600
                    `}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-300">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 text-sm font-medium sm:text-right">
                        {experience.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}