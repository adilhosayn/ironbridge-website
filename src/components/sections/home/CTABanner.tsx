import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ibg-copper to-ibg-gold z-0"></div>
      
      {/* Decorative noise and patterns */}
      <div className="absolute inset-0 z-10 bg-noise opacity-30"></div>
      <div className="absolute inset-0 z-10 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 py-24 text-center">
        <ScrollReveal delay={0.2} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ibg-navy mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-ibg-navy/80 mb-10 font-medium">
            Let's discuss how IronBridge Global can fulfill your supply chain and procurement needs with unmatched reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-ibg-navy text-white hover:bg-ibg-navy-light w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-ibg-navy text-ibg-navy hover:bg-ibg-navy hover:text-white w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
