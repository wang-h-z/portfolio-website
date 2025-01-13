'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Add this import
import Section from '@/components/ui/Section';
import { contentVariants } from '@/constants/data';

export default function Hero() {
 return (
   <Section id="hero" bgColor="white">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
       <motion.div 
         className="md:w-1/2 text-left"
         variants={contentVariants}
       >
         {/* Left Side */}
         <div className="w-fit">
           <div className="relative w-96 h-96 mb-4">
             <Image 
               src="/assets/hero/pfp.jpg"
               alt="Profile"
               fill 
               className="rounded-3xl object-cover shadow-lg"
               priority 
               sizes="(max-width: 768px) 100vw, 384px" 
             />
           </div>
           <p className="text-zinc-600 text-lg pl-4">Y2 CS @ NUS</p>
         </div>
       </motion.div>
       
       <motion.div 
         className="md:w-1/2"
         variants={contentVariants}
       >
         {/* Right Side */}
         <h1 className="text-5xl font-bold mb-6 text-zinc-900">
           Hi there! 👋
         </h1>
         <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
           I'm Haozhen, a CS undergrad from National University of Singapore.
           I enjoy making useful applications and learning new technologies!
         </p>
         <div className="flex gap-4">
           <a 
             href="#contact" 
             className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
           >
             Let's connect!
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
   </Section>
 );
}