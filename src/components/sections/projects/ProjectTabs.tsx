"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectTabsProps {
  projects: Project[];
}

export const ProjectTabs = ({ projects }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState<"All" | "Domestic" | "International">("All");

  const filteredProjects = projects.filter(
    (project) => activeTab === "All" || project.type === activeTab
  );

  const tabs = ["All", "Domestic", "International"] as const;

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-ibg-gray-light p-1 rounded-full relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors z-10 outline-none",
                activeTab === tab ? "text-white" : "text-ibg-navy hover:text-ibg-copper"
              )}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-ibg-navy rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="min-h-[500px]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ibg-gray text-lg">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
