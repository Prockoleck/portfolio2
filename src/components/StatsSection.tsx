"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Smartphone, Timer, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: CheckCircle, color: "text-primary" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: TrendingUp, color: "text-accent" },
  { value: 7, suffix: " Days", label: "Avg. Delivery Time", icon: Timer, color: "text-amber-500" },
  { value: 100, suffix: "%", label: "Mobile Responsive", icon: Smartphone, color: "text-violet-500" },
];

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <>{count}</>;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const directions: ("left" | "right" | "left" | "right")[] = ["left", "right", "left", "right"];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-20 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-10 h-24 w-24 rounded-2xl border border-primary/10 rotate-12"
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [12, 20, 12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-5 h-16 w-16 rounded-full bg-primary/[0.03]"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-8 left-1/3 h-20 w-20 rounded-full border border-accent/10"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} direction={directions[i]} delay={i * 0.08}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <s.icon size={24} className={`mx-auto mb-3 ${s.color}`} />
                <div className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
                  <Counter value={s.value} inView={inView} />
                  <span className="text-primary">{s.suffix}</span>
                </div>
                <p className="text-sm text-muted">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
