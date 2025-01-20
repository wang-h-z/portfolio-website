import React from 'react';
import Image from 'next/image';
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
      <div className="relative w-full h-64 mt-6 mb-6">
        <Image
          src={project.image || "/api/placeholder/800/450"}
          alt={project.title}
          fill
          priority={index < 2} // Load first two images immediately
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          style={{
            objectPosition: 'center top' // This will favor the top of the image when cropping
          }}
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