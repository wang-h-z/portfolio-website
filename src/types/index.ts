export interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    icon: string;
    image?: string; 
    technologies: string[];
    achievements: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image?: string; 
  }