"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: MessageSquare, title: "Discussion", desc: "We talk about your vision, goals, and requirements. I answer all your questions and propose the best solution.", color: "from-blue-500 to-blue-600" },
  { icon: Palette, title: "Design", desc: "I create a custom design tailored to your brand. You get to review and request changes until it's perfect.", color: "from-violet-500 to-violet-600" },
  { icon: Code, title: "Development", desc: "I build your website with clean, optimized code. You get regular updates on the progress throughout.", color: "from-emerald-500 to-emerald-600" },
  { icon: Rocket, title: "Launch", desc: "I deploy your site, configure everything, and hand it over with full documentation and training.", color: "from-rose-500 to-rose-600" },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const directions: ("left" | "right" | "left" | "right")[] = ["left", "right", "left", "right"];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute top-1/4 right-10 h-20 w-20 rounded-full bg-primary/[0.03]"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 left-10 h-16 w-16 rounded-2xl border border-accent/10 rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">How It Works</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              From Idea to Launch in <span className="gradient-text">4 Simple Steps</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} direction={directions[i]} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-5xl font-bold text-black/[0.03]">0{i + 1}</div>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <s.icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
