'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-end gap-4">
          {/* Social Links - Bottom Right */}
          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}