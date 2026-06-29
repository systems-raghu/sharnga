import { motion } from "motion/react";
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
  const letters = children.split("");

  return (
    <span className={`inline-block whitespace-pre-wrap max-w-full ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px", once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.02, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
