import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Recycle, PackageSearch, Globe, Truck, ClipboardList, HardHat } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Recycle,
  PackageSearch,
  Globe,
  Truck,
  ClipboardList,
  HardHat,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-ibg-white">
      {/* Hero Section */}
      <section className="bg-ibg-navy py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-ibg-copper mx-auto mb-8"></div>
            <p className="text-xl text-ibg-gray-light max-w-2xl mx-auto">
              End-to-end supply chain solutions tailored for the global market.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;

            return (
              <div key={service.id} id={service.id} className="mb-32 last:mb-0">
                <div className={cn(
                  "flex flex-col gap-12 items-center",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Image/Icon Area */}
                  <div className="w-full md:w-1/2">
                    <ScrollReveal delay={0.2} className="relative aspect-video md:aspect-square max-h-[500px] w-full bg-ibg-navy rounded-lg overflow-hidden group">
                      <div className="absolute inset-0 bg-[url('/service-placeholder.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         {IconComponent && <IconComponent className="w-32 h-32 text-ibg-copper opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />}
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Area */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <ScrollReveal delay={0.3}>
                      <div className="w-16 h-1 bg-ibg-copper mb-6"></div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-ibg-navy mb-6">{service.title}</h2>
                      <p className="text-lg text-ibg-text opacity-80 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <h3 className="font-bold text-ibg-navy mb-4">What we offer:</h3>
                      <ul className="space-y-4 mb-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-ibg-text opacity-90">
                            <div className="w-6 h-6 rounded-full bg-ibg-copper/10 flex items-center justify-center text-ibg-copper shrink-0">
                              <span className="w-2 h-2 rounded-full bg-ibg-copper"></span>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link href={`/contact?service=${service.id}`}>
                        <Button variant="primary">Request a Quote for This Service</Button>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-ibg-copper py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold mb-6">Need a custom solution?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our team specializes in project-based sourcing and supply. Let's discuss your specific requirements.
            </p>
            <Link href="/contact">
              <Button className="bg-ibg-navy hover:bg-ibg-navy-light text-white">Contact Our Experts</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
