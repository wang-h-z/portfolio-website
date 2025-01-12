'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Work, School, Code } from '@mui/icons-material';

const Portfolio = () => {
  // Experience data
  const experiences = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Corp',
      description: 'Led development of core products and managed team of developers',
      icon: <Work />
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'StartupX',
      description: 'Built and maintained multiple web applications using React and Node.js',
      icon: <Code />
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'WebCo',
      description: 'Started career in web development focusing on frontend technologies',
      icon: <School />
    }
  ];

  // Projects data
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for fitness tracking',
      technologies: ['React Native', 'Firebase'],
      link: '#'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
<motion.section 
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  className="min-h-screen flex items-center justify-center p-8"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Left side - Photo and caption */}
    <motion.div 
      className="md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative">
        <img 
          src="/api/placeholder/400/400"
          alt="Profile"
          className="w-64 h-64 rounded-2xl object-cover shadow-lg mb-4"
        />
        <motion.div 
          className="absolute -bottom-3 -right-3 bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer
        </motion.div>
      </div>
      <p className="text-zinc-600 mt-6 text-lg">Based in San Francisco, CA</p>
    </motion.div>

    {/* Right side - Description */}
    <motion.div 
      className="md:w-1/2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
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
          className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Contact Me
        </a>
        <a 
          href="#projects" 
          className="px-6 py-3 border border-zinc-900 text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
        >
          View Projects
        </a>
      </div>
    </motion.div>
  </div>
</motion.section>

      {/* Experience Timeline Section */}
      <motion.section 
        id="experience"
        className="py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">My Journey</h2>
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-zinc-500">
                  {experience.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'rgb(24, 24, 27)' }}>
                    {experience.icon}
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector sx={{ bgcolor: 'rgb(24, 24, 27)' }} />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-zinc-900">{experience.title}</h3>
                    <h4 className="font-medium text-zinc-700 mt-1">{experience.company}</h4>
                    <p className="text-zinc-600 mt-2">{experience.description}</p>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="py-20 px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-zinc-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 text-zinc-900">{project.title}</h3>
                <p className="text-zinc-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-200 text-zinc-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-zinc-900 hover:text-zinc-600 transition-colors inline-flex items-center"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
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
      </motion.section>
    </div>
  );
};

export default Portfolio;