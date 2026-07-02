import { motion, useReducedMotion } from "motion/react";
import React from "react";

export function BlurReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
      style={{
        // Ensure visibility if JS fails or animation doesn't trigger
        willChange: "opacity, filter, transform"
      }}
    >
      {children}
    </motion.div>
  );
}
