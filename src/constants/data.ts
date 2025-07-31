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

  export const technologies: { [key: string]: Technology } = {
    'Java': {
      name: 'Java',
      icon: DiJava
    },
    'Gradle': {
      name: 'Gradle',
      icon: SiGradle
    },
    'CodeCov': {
      name: 'CodeCov',
      icon: SiCodecov
    },
    'NextJS': {
      name: 'NextJS',
      icon: SiNextdotjs
    },
    'React': {
      name: 'React',
      icon: SiReact
    },
    'Node.js': {
      name: 'Node.js',
      icon: SiNodedotjs
    },
    'TypeScript': {
      name: 'TypeScript',
      icon: SiTypescript
    },
    'MongoDB': {
      name: 'MongoDB',
      icon: SiMongodb
    },
    'TailWind': {
      name: 'TailwindCSS',
      icon: SiTailwindcss
    },
    'Python': {
      name: 'Python',
      icon: SiPython
    },
    'Flask': {
      name: 'Flask',
      icon: SiFlask
    },
    'Telegram': {
      name: 'Telegram',
      icon: SiTelegram
    },
    'OpenAI': {
      name: 'OpenAI',
      icon: SiOpenai
    }
  };

export const experiences: Experience[] = [
  {
    year: 'May 2025 - Present',
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
  {
    year: 'August 2024 - May 2025',
    title: 'Full Stack Developer',
    company: 'NUS RC4',
    description: 'Developed a booking website for residents to book facilities and amentities.',
    icon: 'school',
    image: '/assets/experiences/rc4.png',
    technologies: [technologies['NextJS'], technologies['TailWind']],
  }
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