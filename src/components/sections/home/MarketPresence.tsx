import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const MarketPresence = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2">
            <SectionHeading
              // number="05" 
              title="Global Market Presence"
              subtitle="Expanding our reach to source the best materials and meet growing industrial demands."
              theme="light"
            />

            <div className="grid grid-cols-2 gap-8 mt-12">
              <ScrollReveal delay={0.2}>
                <h3 className="text-xl font-display font-bold text-ibg-navy border-b-2 border-ibg-copper pb-2 mb-4 inline-block">Domestic Presence</h3>
                <ul className="space-y-3">
                  {['Islamabad / Rawalpindi', 'Karachi (Port Qasim)', 'Gwadar', 'AJK & Gilgit-Baltistan', 'Lahore'].map((loc, i) => (
                    <li key={i} className="flex items-center gap-2 
                    text-ibg-text opacity-80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-ibg-copper shrink-0"></span>
                      {loc}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <h3 className="text-xl font-display font-bold text-ibg-navy border-b-2 border-ibg-copper pb-2 mb-4 inline-block">International Markets</h3>
                <ul className="space-y-3">
                  {['United Arab Emirates', 'Singapore', 'Australia', 'Malaysia', 'China (via Partnerships)'].map((loc, i) => (
                    <li key={i} className="flex items-center gap-2 text-ibg-text opacity-80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-ibg-copper shrink-0"></span>
                      {loc}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[400px]">
            <ScrollReveal delay={0.6} className="h-full">
              {/* World Map SVG Placeholder. In production, an actual vector map with dots. */}
              <div className="w-full h-full bg-ibg-gray-light rounded-xl flex items-center justify-center border border-ibg-copper/20 relative overflow-hidden">
                <svg className="w-full h-full opacity-10 text-ibg-navy" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Simplified map shapes would go here */}
                  <rect width="100" height="100" fill="none" />
                  <path d="M10,20 Q30,10 50,30 T90,20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20,50 Q40,40 60,60 T80,50" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M10,80 Q30,70 50,90 T90,80" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-ibg-navy/20 font-display text-4xl font-bold uppercase rotate-[-10deg]">
                  Global Reach
                </div>

                {/* Simulated dots for locations */}
                <div className="absolute top-[40%] left-[65%] w-3 h-3 bg-ibg-copper rounded-full shadow-[0_0_15px_rgba(193,122,42,0.8)] animate-pulse"></div>
                <div className="absolute top-[45%] left-[62%] w-2 h-2 bg-ibg-copper rounded-full shadow-[0_0_10px_rgba(193,122,42,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-[55%] left-[75%] w-2 h-2 bg-ibg-copper rounded-full shadow-[0_0_10px_rgba(193,122,42,0.8)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[70%] left-[85%] w-2 h-2 bg-ibg-copper rounded-full shadow-[0_0_10px_rgba(193,122,42,0.8)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
