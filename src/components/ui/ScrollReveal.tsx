"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "w-full" | "w-auto";
}

export const ScrollReveal = ({ 
  children, 
  className, 
  delay = 0,
  width = "w-full"
}: ScrollRevealProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={cn(width, className)}
    >
      {children}
    </motion.div>
  );
};
