import { motion } from "motion/react";
import React from "react";

export function LetterReveal({ children, className = "" }: { children: string; className?: string }) {
  const letters = children.split("");

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10%" }}
          transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
