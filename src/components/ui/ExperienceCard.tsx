import React from 'react';
import Card from '@/components/ui/Card';
import { Language, Storage, Cloud, Group, Devices, Speed } from '@mui/icons-material';
import type { Experience } from '@/types';

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
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-zinc-100">
                      <img
                          src={experience.image || "/api/placeholder/48/48"}
                          alt={experience.company}
                          className="w-full h-full object-cover"
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
                  <div className={`flex flex-wrap gap-2 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      {experience.technologies.map((tech, techIndex) => (
                          <span 
                              key={techIndex}
                              className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full"
                          >
                              {tech}
                          </span>
                      ))}
                  </div>
                  
                  {/* Achievements with icons */}
                  <div className={`flex flex-wrap gap-4 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      {experience.achievements.map((achievement, achIndex) => {
                          const IconComponent = getTechIcon(achIndex);
                          return (
                              <div key={achIndex} className="flex items-center gap-1 text-zinc-600">
                                  <IconComponent className="w-4 h-4" />
                                  <span className="text-sm">{achievement}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </Card>
  );
}