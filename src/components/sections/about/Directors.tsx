import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { directors } from "@/data/directors";

export const Directors = () => {
  return (
    <section className="py-24 bg-ibg-navy-light relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Leadership</h2>
          <div className="w-24 h-1 bg-ibg-copper mx-auto"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {directors.map((director, i) => (
            <ScrollReveal key={director.id} delay={i * 0.2}>
              <div className="bg-ibg-navy rounded-lg p-8 border border-ibg-copper/10 hover:border-ibg-copper/50 transition-colors">
                {director.image ? (
                  <div className="w-20 h-20 mb-6 rounded-full overflow-hidden aspect-square relative border border-ibg-copper/20">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className={`object-cover ${director.imagePosition || 'object-center'}`}
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-ibg-white rounded-full mb-6 flex items-center justify-center text-ibg-navy">
                    <span className="text-2xl font-display font-bold">
                      {director.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{director.name}</h3>
                <p className="text-ibg-copper font-medium uppercase tracking-widest text-sm mb-6">{director.title}</p>
                <p className="text-ibg-gray leading-relaxed">{director.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
