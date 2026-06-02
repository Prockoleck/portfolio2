"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useRef(0.5);
  const mouseY = useRef(0.5);
  const orbX = useSpring(0.5, { stiffness: 50, damping: 20 });
  const orbY = useSpring(0.5, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();
  const laptopY = useTransform(scrollY, [0, 1000], [0, 60]);
  const laptopScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.current = x;
      mouseY.current = y;
      orbX.set(x);
      orbY.set(y);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [orbX, orbY]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),transparent_50%)]" />

      {/* Parallax background shapes */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full border border-primary/5"
        style={{ y: useTransform(scrollY, [0, 800], [0, -100]) }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 -right-16 h-48 w-48 rounded-full bg-accent/[0.02]"
        style={{ y: useTransform(scrollY, [0, 800], [0, 80]) }}
      />

      {/* Cursor-following orbs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)",
          x: useTransform(orbX, [0, 1], [-80, 80]),
          y: useTransform(orbY, [0, 1], [-80, 80]),
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)",
          x: useTransform(orbX, [0, 1], [60, -60]),
          y: useTransform(orbY, [0, 1], [60, -60]),
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text */}
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <Reveal direction="left" delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Projects
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <h1 className="text-balance mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Websites That{" "}
              <span className="gradient-text">Grow Your Business</span>
            </h1>
          </Reveal>

          <Reveal direction="left" delay={0.35}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              I build stunning, lightning-fast websites that turn visitors into
              customers. From business sites to e-commerce — delivered in days,
              not months.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
              >
                Get a Website
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black/20 hover:bg-black/5"
              >
                <Play size={14} />
                View Portfolio
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.65}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                100% Satisfaction
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Mobile Responsive
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                5-7 Day Delivery
              </span>
            </div>
          </Reveal>
        </motion.div>

        {/* Right: ChatGPT Image */}
        <motion.div
          style={{ y: laptopY, scale: laptopScale }}
          className="relative hidden lg:block"
        >
          <Reveal direction="right" delay={0.3}>
            <motion.div
              className="absolute -inset-20 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl"
              style={{
                x: useTransform(orbX, [0, 1], [-20, 20]),
                y: useTransform(orbY, [0, 1], [-20, 20]),
              }}
            />
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-black/5 shadow-2xl">
                <img
                  src="/ChatGPT Image Jun 2, 2026, 05_03_13 PM.png"
                  alt="ChatGPT"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>

    </section>
  );
}
