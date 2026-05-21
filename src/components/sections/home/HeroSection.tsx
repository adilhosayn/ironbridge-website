"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<'explore' | 'services' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineText = "IronBridge Global".split(" ");

  if (!mounted) return <div className="min-h-[100dvh] bg-ibg-navy" />; // SSR placeholder

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center bg-ibg-navy overflow-hidden">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 bg-[url('/hero-bg-placeholder.jpg')] bg-cover bg-center bg-no-repeat animate-[ken-burns_10s_ease-out_forwards] opacity-30 mix-blend-overlay"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-1 bg-noise"></div>

      {/* Decorative Bridge Graphic - Left */}
      <div className="absolute right-0 bottom-0 z-0 opacity-10 w-2/3 h-2/3 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-ibg-copper fill-current">
          <path d="M0 100 L100 100 L100 0 C50 0 50 100 0 100 Z" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 mt-28 md:mt-16 pb-32 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-2 md:px-3 mb-6 border border-ibg-copper/40 text-ibg-copper text-[10px] md:text-sm font-medium tracking-wider md:tracking-widest uppercase rounded-full backdrop-blur-sm whitespace-nowrap">
            EST. 2011 · PAKISTAN · MALAYSIA · GLOBAL
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight flex flex-wrap gap-x-4">
          {headlineText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "120px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-1 bg-ibg-copper mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl text-ibg-gray-light max-w-2xl mb-12 font-light"
        >
          Bridging Global Markets with Local Demand
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            variant={hoveredButton === 'services' ? 'outline' : 'primary'}
            onClick={() => window.location.href = '/projects'}
            onMouseEnter={() => setHoveredButton('explore')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Explore Our Projects
          </Button>
          <Button 
            variant={hoveredButton === 'services' ? 'primary' : 'outline'} 
            size="lg" 
            onClick={() => window.location.href = '/services'}
            onMouseEnter={() => setHoveredButton('services')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Our Services
          </Button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-ibg-gray text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-ibg-copper w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Diagonal Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-px">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 120 0 120 1200 0 1200 120z"
            className="fill-ibg-navy-light"
          ></path>
        </svg>
      </div>
    </section>
  );
};
