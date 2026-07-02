import { motion, useReducedMotion } from "motion/react";
import React from "react";

export function LetterReveal({
  children,
  className = "",
  delay = 0
}: {
  children: string;
  className?: string;
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion();
  const letters = children.split("");

  if (prefersReducedMotion) {
    return <span className={`inline-block whitespace-pre-wrap ${className}`}>{children}</span>;
  }

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: delay + i * 0.02, ease: "easeOut" }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
