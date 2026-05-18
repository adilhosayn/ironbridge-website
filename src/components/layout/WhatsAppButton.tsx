"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds to not distract initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-ibg-navy text-white text-sm rounded shadow-lg opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          {/* Arrow */}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-ibg-navy transform rotate-45"></div>
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-[pulse-ring_2s_cubic-bezier(0.215,0.61,0.355,1)_infinite]"></div>

        {/* Button */}
        <a
          href="https://wa.me/923021519571"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-transform duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};
