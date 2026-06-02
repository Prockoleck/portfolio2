"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "left" | "right" | "up" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -80 };
      case "right":
        return { opacity: 0, x: 80 };
      case "up":
        return { opacity: 0, y: 40 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitial()}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{
          duration: 4.5,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
