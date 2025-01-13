import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-md">
      {/* Black strip at the top - using margin to counter Card padding */}
      <div className="-mx-6 -mt-6 h-2 bg-gradient-to-r from-zinc-700 to-zinc-900" />
      
      {/* Project Image */}
      <div className="w-full h-48 mt-6 mb-6">
        <img
          src={project.image || "/api/placeholder/400/200"}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-zinc-900 mb-4">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-zinc-600 mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="mt-auto">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full"
          >
            <Button 
              variant="outline"
              className="w-full group flex items-center justify-center gap-2"
            >
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}