import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  // Replace these with your actual profile URLs
  const links = {
    github: "https://github.com/wang-h-z",
    linkedin: "https://www.linkedin.com/in/haozhen-wang-1797512b6/",
    email: "mailto:e1122534@u.nus.edu"
  };

  return (
    <div id="socials" className="flex justify-center gap-8 py-8">
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-2"
      >
        <Github 
          size={32} 
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" 
        />
      </a>
      
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-2"
      >
        <Linkedin 
          size={32} 
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" 
        />
      </a>
      
      <a
        href={links.email}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-2"
      >
        <Mail 
          size={32} 
          className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" 
        />
      </a>
    </div>
  );
};

export default SocialLinks;