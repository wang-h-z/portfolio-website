import { IconType } from 'react-icons';

export interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    icon: string;
    image: string;
    technologies: Technology[];
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string; 
  }

export interface Technology {
  name: string;
  icon: React.ComponentType;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  readTime: string;
  tags: string[];
  project: string;
}