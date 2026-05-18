"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading = ({
  number,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-12",
      align === "center" ? "items-center text-center" : "items-start",
      className
    )}>
      <div className="flex items-center gap-4">
        {number && (
          <ScrollReveal delay={0.1}>
            <span className={cn(
              "text-5xl font-display font-bold opacity-20",
              theme === "dark" ? "text-ibg-white" : "text-ibg-navy"
            )}>
              {number}
            </span>
          </ScrollReveal>
        )}
        <div className="flex flex-col">
          <ScrollReveal delay={0.2}>
            <h2 className={cn(
              "text-3xl md:text-5xl font-display font-bold leading-tight",
              theme === "dark" ? "text-ibg-white" : "text-ibg-navy"
            )}>
              {title}
            </h2>
          </ScrollReveal>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-ibg-copper mt-4"
          />
        </div>
      </div>
      
      {subtitle && (
        <ScrollReveal delay={0.3}>
          <p className={cn(
            "text-lg max-w-2xl mt-4",
            theme === "dark" ? "text-ibg-gray" : "text-ibg-text opacity-80"
          )}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};
