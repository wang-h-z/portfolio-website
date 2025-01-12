'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-8" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">Get in Touch</h2>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
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
        </div>
      </div>
    </section>
  );
}