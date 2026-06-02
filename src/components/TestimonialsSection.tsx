"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  { quote: "He built our e-commerce store in just 5 days and it looks better than what other agencies quoted us ₹50,000 for. Highly recommend!", author: "Rajesh Mehta", role: "Founder, UrbanCart" },
  { quote: "Our bounce rate dropped by 45% after the redesign. The site loads in under a second and our sales have doubled since launch.", author: "Ananya Sharma", role: "CEO, MediFlow" },
  { quote: "Professional, fast, and incredibly talented. He understood exactly what we needed and delivered beyond expectations.", author: "Vikram Patel", role: "CTO, EduSpark" },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute -top-10 right-1/4 h-32 w-32 rounded-full border border-primary/5"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 left-1/4 h-20 w-20 rounded-2xl bg-accent/[0.02] rotate-12"
        animate={{ y: [0, 15, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Testimonials</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Clients <span className="gradient-text">Say About Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} direction={directions[i]} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote size={24} className="mb-4 text-primary/30" />
                <p className="mb-6 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-black/[0.04] pt-4">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
