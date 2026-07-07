"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds applied once the element enters the viewport. */
  delay?: number;
  /** Direction the content slides in from. */
  from?: "bottom" | "left" | "right" | "none";
}

const slideClasses: Record<NonNullable<RevealProps["from"]>, string> = {
  bottom: "motion-safe:translate-y-8",
  left: "motion-safe:-translate-x-8",
  right: "motion-safe:translate-x-8",
  none: "",
};

/**
 * Fades (and optionally slides) content in when it scrolls into view.
 * Renders content immediately when IntersectionObserver is unavailable
 * and skips movement for users who prefer reduced motion.
 */
export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", slideClasses[from]),
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
