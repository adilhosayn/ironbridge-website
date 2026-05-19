import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { directors } from "@/data/directors";
import Link from "next/link";
import Image from "next/image";

export const AboutSnapshot = () => {
  return (
    <section className="py-24 bg-ibg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Text */}
          <div>
            <SectionHeading
              // number="01" 
              title="About IronBridge Global"
              theme="light"
            />

            <ScrollReveal delay={0.4}>
              <div className="space-y-6 text-ibg-text opacity-80 text-lg">

                {/* Origin Story */}
                <p>
                  Founded in 2011 by Owner and Director Tahir Mehmood Abbasi, the company originally began its journey as <i>Abbasi and Co</i>. In 2026, through a strategic partnership with the honourable <i>Ali Raza Mangi</i>, the leadership mutually decided to expand and rebrand the enterprise into the <strong className="font-semibold text-ibg-navy">IronBridge Global Group of Companies (IBG)</strong>.
                </p>

                {/* Company Overview */}
                <p>
                  IronBridge Global (IBG) is a specialized trading company operating in the field of scrap materials, industrial supply, and international import/export. With extensive experience across major infrastructure and government projects, the company has built a strong reputation for delivering reliable, timely, and high-quality supply solutions.
                </p>

                {/* Blockquote / Vision Statement */}
                <p className="font-serif italic font-medium text-ibg-navy border-l-4 border-ibg-copper pl-4 py-2 my-8 bg-ibg-gray-light">
                  "IBG acts as a bridge between global sourcing markets and local demand, ensuring efficient trade and long-term partnerships."
                </p>

                <Link href="/about" className="inline-block mt-4">
                  <Button variant="outline">Read Full Story &rarr;</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Directors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-ibg-gray-light rounded-xl -z-10 transform translate-x-4 translate-y-4"></div>

            {directors.map((director, index) => (
              <ScrollReveal key={director.id} delay={0.3 + index * 0.2}>
                <div className="bg-white p-8 rounded shadow-sm border border-ibg-gray-light hover:border-ibg-copper active:scale-[0.98] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    {director.image ? (
                      <div className="w-16 h-16 mb-6 rounded-full overflow-hidden relative border border-ibg-copper/20 md:group-hover:scale-110 transition-transform duration-300">
                        <Image src={director.image} alt={director.name} fill sizes="64px" className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-ibg-navy rounded-full mb-6 flex items-center justify-center text-ibg-copper md:group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-display font-bold">
                          {director.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-display font-bold text-ibg-navy mb-1">{director.name}</h3>
                    <p className="text-ibg-copper text-sm font-medium mb-4 uppercase tracking-wider">{director.title}</p>
                    <p className="text-ibg-text opacity-70 text-sm line-clamp-4">
                      {director.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
