"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { MapPin, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const FeaturedProjects = () => {
  const [tappedId, setTappedId] = useState<string | null>(null);

  // Select top 3 featured projects
  const featured = projects.filter(p =>
    ['neelum-jhelum', 'gwadar-port', 'pakistan-army'].includes(p.id)
  );

  return (
    <section className="pt-24 md:pt-32 pb-24 bg-ibg-gray-light relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            // number="03" 
            title="Featured Projects"
            subtitle="Delivering excellence across critical infrastructure and defense sectors."
            theme="light"
            className="mb-0"
          />
          <ScrollReveal delay={0.4} width="w-auto">
            <Link href="/projects">
              <Button variant="outline" className="hidden md:inline-flex">
                View All Projects &rarr;
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.2}>
              <div 
                className="group bg-white rounded shadow-sm border border-ibg-copper/10 overflow-hidden hover:shadow-xl active:scale-[0.98] transition-all duration-500 h-full flex flex-col lg:hover:-translate-y-2"
                onClick={() => setTappedId(tappedId === project.id ? null : project.id)}
              >

                {/* Image Placeholder area */}
                <div className="h-48 bg-ibg-navy relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-ibg-navy-light opacity-50"></div>
                  {/* Real image would go here with next/image */}
                  <span className="text-white opacity-20 md:opacity-5 font-display text-xl sm:text-2xl md:text-3xl px-4 font-bold uppercase tracking-widest whitespace-nowrap relative z-10">{project.name.split(' ')[0]}</span>

                  {/* Location Badge (slides up on hover) */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-ibg-copper/90 backdrop-blur text-white text-xs py-2 px-4 transition-transform duration-300 flex items-center gap-2 ${tappedId === project.id ? 'translate-y-0' : 'translate-y-full lg:group-hover:translate-y-0'}`}>
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-bold text-ibg-navy leading-tight">{project.name}</h3>
                    <span className="bg-ibg-copper/10 text-ibg-copper text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-ibg-text opacity-70 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-medium text-ibg-gray pt-4 border-t border-ibg-gray-light">
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
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects">
            <Button variant="primary" fullWidth>
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
