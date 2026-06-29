import { motion } from "motion/react";
import React from "react";

export function BlurReveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  [key: string]: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
