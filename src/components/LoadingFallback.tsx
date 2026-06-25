import { motion } from "motion/react";

export function LoadingFallback() {
  return (
    <div className="py-32 flex flex-col items-center justify-center space-y-4">
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-[#1C3418] rounded-full shadow-sm"
            animate={{
              y: ["0%", "-70%", "0%"],
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <motion.p 
        className="text-slate-500 font-medium text-sm uppercase tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading
      </motion.p>
    </div>
  );
}
