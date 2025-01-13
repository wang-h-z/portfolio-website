import { Experience, Project } from '@/types';

export const stripColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500',
    'from-red-500 to-rose-500',
  ] as const;

export const experiences: Experience[] = [
  {
    year: 'Jan 2025 - Present',
    title: 'CS2030S Teaching Assistant',
    company: 'NUS School of Computing',
    description: 'Mentor students in Functional and Object-Oriented Programming in Java.',
    icon: 'school',
    technologies: ['React', 'Node.js', 'AWS'],
    achievements: ['Team Leadership', 'System Architecture', 'CI/CD'],
  },
  {
    year: 'Jan 2025 - Present',
    title: 'CS2103T Student Mentor (Probationary)',
    company: 'NUS School of Computing',
    description: 'Assist students by resolving technical issues and providing supplemental explanations for Software Engineering concepts.',
    icon: 'school',
    technologies: ['TypeScript', 'MongoDB', 'Docker'],
    achievements: ['API Design', 'Database Architecture', 'Performance'],
  },
  {
    year: 'August 2024 - Present',
    title: 'Full Stack Developer',
    company: 'NUS RC4',
    description: 'Developed a booking website for residents to book facilities and amentities.',
    icon: 'school',
    technologies: ['JavaScript', 'HTML/CSS', 'Git'],
    achievements: ['UI Development', 'Responsive Design', 'Version Control'],
  }
];
  
  export const projects: Project[] = [
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

  export const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };