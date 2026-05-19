"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, children, ...props }, ref) => {
    const variants = {
      primary: "bg-ibg-copper text-white hover:bg-ibg-copper-light active:bg-ibg-copper-light border border-transparent shadow-md",
      outline: "bg-transparent text-ibg-copper border border-ibg-copper hover:bg-ibg-copper hover:text-white active:bg-ibg-copper active:text-white",
      ghost: "bg-transparent text-ibg-text hover:bg-ibg-gray-light active:bg-ibg-gray-light dark:text-ibg-white dark:hover:bg-ibg-navy-light dark:active:bg-ibg-navy-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-medium",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ibg-copper focus:ring-offset-2 active:scale-95 active:opacity-80",
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
