"use client";

import { useState } from "react";
import { Project } from "@/types";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div 
      className="group bg-white rounded shadow-sm border border-ibg-copper/10 overflow-hidden hover:shadow-xl active:scale-[0.98] transition-all duration-500 h-full flex flex-col lg:hover:-translate-y-2"
      onClick={() => setIsTapped(!isTapped)}
    >

      {/* Image Placeholder Area */}
      <div className="h-48 bg-ibg-navy relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-ibg-navy-light opacity-50"></div>
        <span className="text-white opacity-20 font-display text-4xl font-bold uppercase tracking-wider relative z-10">{project.name.split(' ')[0]}</span>

        {/* Location Badge (slides up on hover) */}
        <div className={`absolute bottom-0 left-0 right-0 bg-ibg-copper/90 backdrop-blur text-white text-xs py-2 px-4 transition-transform duration-300 flex items-center gap-2 ${isTapped ? 'translate-y-0' : 'translate-y-full lg:group-hover:translate-y-0'}`}>
          <MapPin size={14} />
          {project.location}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-display font-bold text-ibg-navy leading-tight pr-2">{project.name}</h3>
          <Badge variant="outline" className="whitespace-nowrap flex-shrink-0">
            {project.type}
          </Badge>
        </div>

        <p className="text-ibg-text opacity-70 text-sm mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex items-center justify-between text-xs font-medium text-ibg-gray pt-4 border-t border-ibg-gray-light">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-ibg-copper" />
            {project.year}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-ibg-copper" />
            {project.duration}
          </div>
        </div>
      </div>
    </div>
  );
};
