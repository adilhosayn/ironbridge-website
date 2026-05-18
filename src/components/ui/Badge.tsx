import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-ibg-copper text-white hover:bg-ibg-copper-light",
        variant === "outline" && "border border-ibg-copper text-ibg-copper",
        className
      )}
    >
      {children}
    </span>
  );
};
