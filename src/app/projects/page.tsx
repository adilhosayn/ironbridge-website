import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectTabs } from "@/components/sections/projects/ProjectTabs";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-24 bg-ibg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ibg-navy py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Projects</h1>
            <div className="w-24 h-1 bg-ibg-copper mx-auto mb-8"></div>
            <p className="text-xl text-ibg-gray-light max-w-2xl mx-auto">
              A showcase of our supply and procurement capabilities across the globe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <ScrollReveal>
            <ProjectTabs projects={projects} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
