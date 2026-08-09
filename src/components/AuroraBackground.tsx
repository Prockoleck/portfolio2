"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AuroraBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: "rgba(57,255,20,0.06)" }}
        animate={{ x: [0, 120, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full blur-[140px]"
        style={{ background: "rgba(163,230,53,0.05)" }}
        animate={{ x: [0, -100, 0], y: [0, -70, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{ background: "rgba(124,255,192,0.04)" }}
        animate={{ x: [-60, 60, -60], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
