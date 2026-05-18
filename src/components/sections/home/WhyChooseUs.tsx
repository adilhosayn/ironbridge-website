import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Target, Clock, Globe2 } from "lucide-react";

export const WhyChooseUs = () => {
  const strengths = [
    {
      icon: ShieldCheck,
      title: "Trusted by the Best",
      description: "Official supplier to the Pakistan Army and major infrastructure projects, maintaining the highest compliance and security standards."
    },
    {
      icon: Clock,
      title: "100% On-Time Delivery",
      description: "A flawless track record of meeting strict deadlines across our 15-year history in both domestic and international markets."
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Expertise",
      description: "Operating across 6 countries with deep local knowledge, allowing us to bridge international markets seamlessly."
    },
    {
      icon: Target,
      title: "Financial Discipline",
      description: "Rigorous financial and quality management ensuring cost-effective solutions without compromising on standards."
    }
  ];

  return (
    <section className="py-24 bg-ibg-navy text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          // number="04" 
          title="Why Choose IBG"
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 p-6 rounded-lg hover:bg-ibg-navy-light/50 active:bg-ibg-navy-light/70 active:scale-[0.98] transition-all duration-300 border border-transparent hover:border-ibg-copper/20">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-ibg-copper/10 flex items-center justify-center border border-ibg-copper/30">
                      <Icon className="text-ibg-copper w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3">{strength.title}</h3>
                    <p className="text-ibg-gray leading-relaxed text-sm">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
