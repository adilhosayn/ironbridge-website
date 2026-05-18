import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Timeline = () => {
  const milestones = [
    { year: 2011, title: "Foundation", description: "Established as Abbasi and Co, focusing on regional trading and supply." },
    { year: 2015, title: "International Expansion", description: "Expanded operations to UAE, importing high-value copper and silver scrap." },
    { year: 2018, title: "Major Infrastructure", description: "Supplied critical materials to Gwadar Port and Port Qasim." },
    { year: 2024, title: "Defense Supplier", description: "Approved as an official supplier to the Pakistan Army." },
    { year: 2026, title: "Rebranding", description: "Rebranded to IronBridge Global (IBG) to reflect our expanding international presence and vision." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="relative border-l border-ibg-copper/30 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
          {milestones.map((milestone, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative group">
                <div className="absolute w-4 h-4 bg-white border-2 border-ibg-copper rounded-full -left-[42px] md:-left-[58px] top-1.5 group-hover:bg-ibg-copper transition-colors duration-300"></div>
                <div className="text-ibg-copper font-display font-bold text-2xl mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-ibg-navy mb-2">{milestone.title}</h3>
                <p className="text-ibg-gray text-base leading-relaxed">{milestone.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
