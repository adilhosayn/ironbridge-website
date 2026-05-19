"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Recycle, PackageSearch, Globe, Truck, ClipboardList, HardHat } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Recycle,
  PackageSearch,
  Globe,
  Truck,
  ClipboardList,
  HardHat,
};

export const ServicesSection = () => {
  const [tappedId, setTappedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-ibg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ibg-copper/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ibg-navy-light rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            // number="02" 
            title="Our Services"
            subtitle="Comprehensive solutions for international trade, industrial supply, and complex procurement."
            theme="dark"
            className="mb-0"
          />
          <ScrollReveal delay={0.4} width="w-auto">
            <Link href="/services">
              <Button variant="outline" className="border-ibg-copper/50 hover:border-ibg-copper text-white hidden md:inline-flex">
                View All Services &rarr;
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div 
                  className={`group h-full bg-ibg-navy-light/50 backdrop-blur-md border p-8 rounded active:scale-[0.98] transition-all duration-300 relative overflow-hidden animate-[float_4s_ease-in-out_infinite] ${tappedId === service.id ? 'border-ibg-copper/50' : 'border-ibg-copper/10 lg:hover:border-ibg-copper/50'}`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                  onClick={() => setTappedId(tappedId === service.id ? null : service.id)}
                >

                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-ibg-copper/10 to-transparent transition-opacity duration-500 transform ${tappedId === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:group-hover:opacity-100 lg:group-hover:translate-x-0'}`}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 border flex items-center justify-center rounded-sm mb-6 transition-colors duration-300 ${tappedId === service.id ? 'bg-ibg-copper text-white rotate-6 border-transparent' : 'bg-ibg-navy border-ibg-copper/20 text-ibg-copper lg:group-hover:bg-ibg-copper lg:group-hover:text-white lg:group-hover:rotate-6'}`}>
                      {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                    </div>

                    <h3 className={`text-xl font-display font-bold mb-3 transition-colors ${tappedId === service.id ? 'text-ibg-copper-light' : 'text-white lg:group-hover:text-ibg-copper-light'}`}>{service.title}</h3>
                    <p className="text-ibg-gray text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-ibg-gray-light text-xs flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ibg-copper"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/services#${service.id}`} className={`text-sm font-medium transition-colors inline-flex items-center gap-1 ${tappedId === service.id ? 'text-white' : 'text-ibg-copper lg:hover:text-white'}`}>
                      Learn more
                      <span className={`transform transition-transform ${tappedId === service.id ? 'translate-x-1' : 'lg:group-hover:translate-x-1'}`}>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/services">
            <Button variant="primary" fullWidth>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
