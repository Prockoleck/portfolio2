"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  { name: "Basic", price: "₹4,999", popular: false, features: ["Up to 5 Pages", "Mobile Responsive Design", "Contact Form Integration", "Basic SEO Setup", "Social Media Links", "Delivery in 5-7 Days"] },
  { name: "Standard", price: "₹9,999", popular: true, features: ["Up to 10 Pages", "Mobile Responsive Design", "Advanced SEO Optimization", "Speed Optimization", "WhatsApp Integration", "Google Analytics Setup", "Delivery in 5-7 Days"] },
  { name: "Premium", price: "₹19,999", popular: false, features: ["Up to 20 Pages", "Advanced SEO Optimization", "Blog System Integration", "Speed & Security Optimization", "Priority Support", "Custom Animations", "Admin Dashboard", "Delivery in 5-7 Days"] },
];

function PricingCard({ plan, index, inView }: { plan: (typeof plans)[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setPos({ x, y });
  };
  const handleEnter = () => setHovered(true);
  const handleLeave = () => { setHovered(false); setPos({ x: 0, y: 0 }); };

  const directions: ("left" | "right" | "up")[] = ["left", "up", "right"];

  const liquidColors = [
    { body: "linear-gradient(180deg, rgba(234,179,8,0.18) 0%, rgba(234,179,8,0.06) 50%, transparent 100%)", surface: "rgba(234,179,8,0.3)" },
    { body: "linear-gradient(180deg, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.08) 50%, transparent 100%)", surface: "rgba(37,99,235,0.35)" },
    { body: "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 50%, transparent 100%)", surface: "rgba(16,185,129,0.3)" },
  ];

  return (
    <Reveal direction={directions[index]} delay={index * 0.12}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouse}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className={`relative rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 p-[2px] transition-colors duration-300 ${
            plan.popular
              ? "shadow-xl shadow-primary/5 scale-[1.02]"
              : "shadow-black/5"
          }`}
        >
          <div className={`relative rounded-[inherit] p-8 ${
            plan.popular
              ? "bg-gradient-to-b from-primary/[0.04] to-transparent"
              : "bg-white"
          }`}>
            {/* Liquid fill overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
              <motion.div
                className="absolute inset-0"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hovered ? 1 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "bottom", background: liquidColors[index].body }}
              >
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-[130%] h-4"
                  style={{ background: liquidColors[index].surface, borderRadius: "50%", filter: "blur(3px)" }}
                />
                <div
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[150%] h-2.5"
                  style={{ background: liquidColors[index].surface, borderRadius: "50%", filter: "blur(6px)", opacity: 0.5 }}
                />
              </motion.div>
            </div>

            {plan.popular && (
              <div className="absolute -top-[22px] left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  <Zap size={12} /> Most Popular
                </span>
              </div>
            )}

            <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted">/ one-time</span>
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/917006296494" target="_blank" rel="noopener noreferrer"
              className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                plan.popular
                  ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
                  : "border border-black/10 text-black hover:bg-black hover:text-white"
              }`}
            >
              Get Started <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-center text-xs text-muted">100% Satisfaction Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  );
}

export default function PricingSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      <motion.div className="pointer-events-none absolute top-20 left-10 h-40 w-40 rounded-full border border-primary/10"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="pointer-events-none absolute bottom-20 right-10 h-32 w-32 rounded-full border border-accent/10"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Pricing</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Premium Websites, <span className="gradient-text">Fair Prices</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">No hidden fees. No surprises. Just a stunning website delivered on time.</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
