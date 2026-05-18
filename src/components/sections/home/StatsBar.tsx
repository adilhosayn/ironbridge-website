"use client";

import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const StatsBar = () => {
  return (
    <section className="bg-ibg-navy-light relative z-20 -mt-1 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-ibg-copper/20">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={stat.id} 
              delay={index * 0.1}
              className="flex flex-col items-center justify-center text-center p-6 md:p-8"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-ibg-white mb-2 flex items-baseline">
                <AnimatedCounter value={stat.value} duration={2} />
                <span className="text-ibg-copper ml-1">{stat.suffix}</span>
              </div>
              <p className="text-ibg-gray text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
