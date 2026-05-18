import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/about/Timeline";
import { Directors } from "@/components/sections/about/Directors";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-ibg-white">
      {/* Hero Section */}
      <section className="bg-ibg-navy py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Story</h1>
            <div className="w-24 h-1 bg-ibg-copper mx-auto mb-8"></div>
            <p className="text-xl text-ibg-gray-light max-w-2xl mx-auto">
              From a regional supplier to a global trading powerhouse.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Directors Section */}
      <Directors />

      {/* Vision & Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal className="bg-ibg-white p-10 border border-ibg-gray-light rounded shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ibg-copper/10 text-ibg-copper flex items-center justify-center rounded-full mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-ibg-navy mb-4">Vision</h3>
              <p className="text-ibg-gray text-lg leading-relaxed">
                To become a leading name in the global scrap
                trading and industrial supply sector, recognized for
                reliability, integrity, and operational excellence.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-ibg-navy p-10 rounded shadow-sm hover:shadow-xl transition-shadow text-white">
              <div className="w-16 h-16 bg-ibg-copper/20 text-ibg-copper flex items-center justify-center rounded-full mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Mission</h3>
              <p className="text-ibg-gray-light text-lg leading-relaxed">
                To deliver uncompromising quality, maintain 100% on-time delivery, and foster long-term partnerships through transparent and ethical trading practices worldwide.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-24 bg-ibg-gray-light">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading title="Core Strengths" align="center" theme="light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
            {['Extensive Global Network', 'Strict Quality Assurance', 'Timely Project Delivery', 'Financial Stability', 'Customs & Logistics Expertise', 'Dedicated Project Teams', 'Ethical Sourcing'].map((strength, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded border border-ibg-copper/10 flex items-start gap-3 h-full">
                  <CheckCircle2 className="text-ibg-copper shrink-0 w-6 h-6" />
                  <span className="text-ibg-navy font-medium">{strength}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}