import React from 'react';
import Card from '@/components/ui/Card';
import { Language, Storage, Cloud, Group, Devices, Speed } from '@mui/icons-material';
import type { Experience } from '@/types';
import TechIcon from './TechIcon';

interface ExperienceCardProps {
  experience: Experience;
  stripColor: string;
  isLeft: boolean; // Add this prop to determine position
}

const getTechIcon = (index: number) => {
  const icons = [Language, Storage, Cloud, Group, Devices, Speed];
  return icons[index % icons.length];
};


export default function ExperienceCard({ experience, stripColor, isLeft }: ExperienceCardProps) {

// Parse the stripColor to extract the colors
const [fromColor, toColor] = stripColor.split(' ')
.filter(part => part.includes('-500'))
.map(color => `#${getColorHex(color)}`);

// Helper function to convert Tailwind color names to hex
function getColorHex(colorClass: string) {
  const colorMap: { [key: string]: string } = {
      'blue-500': '3B82F6',
      'cyan-500': '06B6D4',
      'purple-500': 'A855F7',
      'pink-500': 'EC4899',
      'green-500': '22C55E',
      'emerald-500': '10B981',
  };
   
  const color = colorClass.split('-').slice(-2).join('-');
  return colorMap[color] || '000000';
}
  
  return (
      <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          {/* Coloured Strip */}
          <div 
                className="h-4 -mx-6 -mt-6"
                style={{ 
                    position: 'relative',
                    zIndex: 50,
                    background: `linear-gradient(to right, ${fromColor}, ${toColor})`
                }} 
          />

          <span className="text-white text-xs">{stripColor}</span>
          {/* Main content */}
          <div className="mt-4">
              <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Company/School Logo */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-zinc-100 flex items-center justify-center">
                      <img
                          src={experience.image || "/api/placeholder/48/48"}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                      />
                  </div>
                  
                  <div className={isLeft ? 'text-right' : 'text-left'}>
                      <h3 className="text-xl font-bold text-zinc-900">{experience.title}</h3>
                      <h4 className="font-medium text-zinc-700">{experience.company}</h4>
                  </div>
              </div>

              <p className={`text-zinc-600 mt-2 ${isLeft ? 'text-right' : 'text-left'}`}>
                  {experience.description}
              </p>
              
              {/* Technologies section */}
              <div className="mt-4 border-t border-zinc-100 pt-4">
                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    {experience.technologies.map((tech, techIndex) => (
                      <TechIcon
                        key={techIndex}
                        name={tech.name}
                        icon={tech.icon}
                      />
                    ))}
                  </div>
              </div>
          </div>
      </Card>
  );
}