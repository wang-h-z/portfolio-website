import { Experience, Project, Technology } from '@/types';

export const stripColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500',
    'from-red-500 to-rose-500',
  ] as const;

  export const technologies: { [key: string]: Technology } = {
    'React': {
      name: 'React',
      iconPath: '/assets/tech-icons/react.png'
    },
    'Node.js': {
      name: 'Node.js',
      iconPath: '/assets/tech-icons/nodejs.png'
    },
    'TypeScript': {
      name: 'TypeScript',
      iconPath: '/assets/tech-icons/typescript.png'
    },
    'MongoDB': {
      name: 'MongoDB',
      iconPath: '/assets/tech-icons/mongodb.png'
    },
    'NextJS': {
      name: 'NextJS',
      iconPath: '/assets/tech-icons/nextjs.png'
    },
    'Java': {
      name: 'Java',
      iconPath:'/assets/tech-icons/java.png'
    },
    'CodeCov': {
      name: 'CodeCov',
      iconPath:'/assets/tech-icons/codecov.png'
    },
    'JavaFX': {
      name: 'JavaFX',
      iconPath:'/assets/tech-icons/JavaFX.png'
    },
    'Gradle': {
      name:'Gradle',
      iconPath:'/assets/tech-icons/gradle.png'
    }
  };

export const experiences: Experience[] = [
  {
    year: 'Jan 2025 - Present',
    title: 'CS2030S Teaching Assistant',
    company: 'NUS School of Computing',
    description: 'Mentor students in Functional and Object-Oriented Programming in Java.',
    icon: 'school',
    image: '/assets/experiences/nus.png',
    technologies: [technologies['Java']],
    achievements: ['Team Leadership', 'System Architecture', 'CI/CD'],
  },
  {
    year: 'Jan 2025 - Present',
    title: 'CS2103T Student Mentor (Probationary)',
    company: 'NUS School of Computing',
    description: 'Assist students by resolving technical issues and providing supplemental explanations for Software Engineering concepts.',
    icon: 'school',
    image: '/assets/experiences/nus.png',
    technologies: [technologies['Java'], technologies['JavaFX'], technologies['Gradle'], technologies['CodeCov']],
    achievements: ['API Design', 'Database Architecture', 'Performance'],
  },
  {
    year: 'August 2024 - Present',
    title: 'Full Stack Developer',
    company: 'NUS RC4',
    description: 'Developed a booking website for residents to book facilities and amentities.',
    icon: 'school',
    image: '/assets/experiences/rc4.png',
    technologies: [technologies['NextJS']],
    achievements: ['UI Development', 'Responsive Design', 'Version Control'],
  }
];
  
  export const projects: Project[] = [
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
      title: 'C++ Stock Analyser',
      description: 'Cross-platform mobile application for fitness tracking',
      technologies: ['C++', 'Firebase'],
      link: '#'
    }
  ];

  export const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };