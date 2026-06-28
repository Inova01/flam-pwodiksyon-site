"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function IntroFlame() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-charcoal text-cream"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.05, duration: 0.35 }}
      aria-hidden="true"
    >
      <motion.div
        className="h-20 w-12 rounded-full bg-gradient-to-t from-ember via-gold to-cream shadow-flame"
        initial={{ scale: 0.35, rotate: -8, borderRadius: "70% 45% 60% 40%" }}
        animate={{ scale: [0.35, 1.05, 0.96], rotate: [-8, 5, 0] }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </motion.div>
  );
}
