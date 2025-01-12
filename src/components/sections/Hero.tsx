'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left side - Photo and caption */}
        <motion.div 
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-fit">
            <img 
              src="/api/placeholder/400/400"
              alt="Profile"
              className="w-64 h-64 rounded-3xl object-cover shadow-lg mb-4"
            />
            <div className="mt-4">
              <motion.div 
                className="bg-zinc-900 text-white px-4 py-2 rounded-lg inline-block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.div>
            </div>
            <p className="text-zinc-600 text-lg">Based in San Francisco, CA</p>
          </div>
        </motion.div>

        {/* Right side - Description */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-zinc-900">
            John Doe
          </h1>
          <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
            Crafting digital experiences with code and creativity. Specialized in building 
            modern web applications that combine beautiful design with powerful functionality.
          </p>
          <div className="flex flex-wrap gap-4 text-lg text-zinc-700 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              React.js
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              TypeScript
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Node.js
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-2 border border-zinc-900 text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}