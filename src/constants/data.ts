import { Experience, Project } from '@/types';

export const experiences: Experience[] = [
  {
    year: '2024',
    title: 'Senior Developer',
    company: 'Tech Corp',
    description: 'Led development of core products and managed team of developers',
    icon: 'work',
    technologies: ['React', 'Node.js', 'AWS'],
    achievements: ['Team Leadership', 'System Architecture', 'CI/CD'],
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'StartupX',
    description: 'Built and maintained multiple web applications using React and Node.js',
    icon: 'code',
    technologies: ['TypeScript', 'MongoDB', 'Docker'],
    achievements: ['API Design', 'Database Architecture', 'Performance'],
  },
  {
    year: '2020',
    title: 'Junior Developer',
    company: 'WebCo',
    description: 'Started career in web development focusing on frontend technologies',
    icon: 'school',
    technologies: ['JavaScript', 'HTML/CSS', 'Git'],
    achievements: ['UI Development', 'Responsive Design', 'Version Control'],
  }
];
  
  export const projects = [
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