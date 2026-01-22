'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechStackLayers from '@/components/ui/TechStackLayers';
import { contentVariants } from '@/constants/data';
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
    </>
  );
}