import { Experience, Project, Technology } from '@/types';
import { 
  DiJava } from 'react-icons/di';  // Devicons
import { 
  SiGradle,
  SiCodecov,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiOpenai,
  SiFlask,
  SiTelegram,
} from 'react-icons/si'; 

// For JavaFX we might need to use a different icon since there's no direct JavaFX icon
import { DiCode } from 'react-icons/di';  // Using this as a substitute for JavaFX

export const stripColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500',
    'from-red-500 to-rose-500',
  ] as const;

  export const technologies = {
    'Java': {
      name: 'Java',
      icon: DiJava
    } as Technology,
    'Gradle': {
      name: 'Gradle',
      icon: SiGradle
    } as Technology,
    'CodeCov': {
      name: 'CodeCov',
      icon: SiCodecov
    } as Technology,
    'NextJS': {
      name: 'NextJS',
      icon: SiNextdotjs
    } as Technology,
    'React': {
      name: 'React',
      icon: SiReact
    } as Technology,
    'Node.js': {
      name: 'Node.js',
      icon: SiNodedotjs
    } as Technology,
    'TypeScript': {
      name: 'TypeScript',
      icon: SiTypescript
    } as Technology,
    'MongoDB': {
      name: 'MongoDB',
      icon: SiMongodb
    } as Technology,
    'TailWind': {
      name: 'TailwindCSS',
      icon: SiTailwindcss
    } as Technology,
    'Python': {
      name: 'Python',
      icon: SiPython
    } as Technology,
    'Flask': {
      name: 'Flask',
      icon: SiFlask
    } as Technology,
    'Telegram': {
      name: 'Telegram',
      icon: SiTelegram
    } as Technology,
    'OpenAI': {
      name: 'OpenAI',
      icon: SiOpenai
    } as Technology
  } satisfies Record<string, Technology>;

export const experiences: Experience[] = [
  {
    year: 'Jan 2026 - Present',
    title: 'Software Engineer Intern',
    company: 'Monetary Authority of Singapore', 
    description: 'Supervision Platforms',
    icon: 'work',
    image: '/assets/experiences/mas.jpeg',
    technologies: [],
  },
  {
    year: 'May 2025 - Dec 2025',
    title: 'Full Stack Developer Intern',
    company: 'Synapxe', 
    description: 'Integrate Computer Vision and GenAI into Full Stack Systems.',
    icon: 'work',
    image: '/assets/experiences/synapxe.jpg',
    technologies: [],
  },
  {
    year: 'Jan 2025 - May 2025',
    title: 'CS2030S Teaching Assistant',
    company: 'NUS School of Computing',
    description: 'Mentor students in Functional and Object-Oriented Programming in Java.',
    icon: 'school',
    image: '/assets/experiences/nus.png',
    technologies: [technologies['Java']],
  },
];
  
  export const projects: Project[] = [
    {
      title: 'ShowerBreak',
      description: 'NUS HackNRoll 2025 submission. A Telegram Bot with a built in Chrome Extension to make daily shower reminders, shower tracking and content accessibility.',
      technologies: ['Python', 'JavaScript', 'Flask', 'Supabase', 'OpenAI'],
      link:'https://devpost.com/software/showerbreak',
      image: '/assets/projects/showerbreak.png',
    },
    {
      title: 'SwipeStyle',
      description: 'A clothing commerce IOS/Android app with a Tinder-esque UI built for shoppaholics to make faster and better purchasing decisions by leveraging a collaborative filtering recommendation system.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase', 'Axios', 'Jest', 'TensorFlow Keras', 'Stripe'],
      link: 'https://github.com/wang-h-z/SwipeStyle',
      image: '/assets/projects/swipestyle-poster.png'
    },
    {
      title: 'CS2103T Team Project',
      description: 'A property management CLI based application built for property agents.',
      technologies: ['Java', 'JavaFX', 'Gradle', 'CodeCov', 'Github Pages'],
      link: 'https://github.com/wang-h-z/tp',
      image: '/assets/projects/cs2103t.png'
    },
    {
      title: 'Full Stack Open',
      description: 'My solutions for Full Stack Open course from the University of Helsinki.',
      technologies: ['React', 'ExpressJS', 'NodeJS', 'MongoDB', 'Postman', 'PlayWright' ,'Redux'],
      link: 'https://github.com/wang-h-z/fullstackopen',
      image: '/assets/projects/certificate-fullstack.png'
    }
  ];

  export const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };