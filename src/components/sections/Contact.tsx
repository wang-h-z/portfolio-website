'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { contentVariants } from '@/constants/data';

export default function Contact() {
  return (
    <Section id="contact" bgColor="light">
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-zinc-900"
          variants={contentVariants}
        >
          Get in Touch
        </motion.h2>

        <motion.div variants={contentVariants}>
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                  Name
                </label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email
                </label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 px-6 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
