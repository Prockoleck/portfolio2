"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    video: "ecommerce store.mp4",
    title: "Ecommerce Store",
    desc: "A fully responsive modern e-commerce platform with seamless checkout, product management, and payment integration built for scale.",
    tag: "E-commerce",
  },
  {
    video: "gym.mp4",
    title: "Gym & Fitness",
    desc: "A dynamic fitness brand website featuring class scheduling, trainer profiles, membership plans, and engaging visuals.",
    tag: "Health & Fitness",
  },
  {
    video: "real estate.mp4",
    title: "Real Estate",
    desc: "A premium real estate marketplace with property listings, virtual tours, mortgage calculators, and agent matching.",
    tag: "Real Estate",
  },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      <motion.div
        className="pointer-events-none absolute top-1/3 -left-10 h-40 w-40 rounded-full border border-primary/5"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 -right-8 h-28 w-28 rounded-2xl bg-accent/[0.02] rotate-45"
        animate={{ y: [0, 20, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Recent Work</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Projects I&apos;ve <span className="gradient-text">Built with Pride</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { project: (typeof projects)[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleEnter = () => setHovered(true);
  const handleLeave = () => { setHovered(false); setMousePos({ x: 0, y: 0 }); };

  const reverse = index === 2;

  return (
    <Reveal direction={reverse ? "right" : "left"} delay={index * 0.12}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouse}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="group cursor-default"
        >
          <motion.div
            animate={{
              rotateX: mousePos.y * -15,
              rotateY: mousePos.x * 15,
              scale: hovered ? 1.02 : 1,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.15 }}
            style={{ transformStyle: "preserve-3d" }}
            className={`relative rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 p-[2px] shadow-lg transition-shadow duration-300 ${
              hovered ? "shadow-xl shadow-black/10" : "shadow-black/5"
            }`}
          >
            <div className={`flex flex-col overflow-hidden rounded-[inherit] bg-white ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              {/* Video side */}
              <div className="relative aspect-video w-full shrink-0 overflow-hidden lg:w-1/2">
                <video
                  src={`/${project.video}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.tag}
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10">
                <motion.span
                  className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Featured Project
                </motion.span>
                <motion.h3
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {project.desc}
                </motion.p>
                <motion.div className="mt-6" style={{ transformStyle: "preserve-3d" }}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  );
}
