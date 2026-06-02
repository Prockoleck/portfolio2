"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  { title: "UrbanCart", desc: "Modern e-commerce platform with real-time inventory and AI-powered recommendations.", tag: "E-commerce", gradient: "from-emerald-500 to-teal-600", initials: "UC" },
  { title: "MediFlow", desc: "Patient portal with telemedicine, appointment scheduling, and EHR integration.", tag: "Healthcare", gradient: "from-blue-500 to-indigo-600", initials: "MF" },
  { title: "EduSpark", desc: "Interactive learning platform with live classes, quizzes, and progress tracking.", tag: "EdTech", gradient: "from-violet-500 to-purple-600", initials: "ES" },
  { title: "PropView", desc: "Real estate marketplace with 3D tours, mortgage calculator, and agent matching.", tag: "Real Estate", gradient: "from-rose-500 to-pink-600", initials: "PV" },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
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

        <div className="grid gap-6 sm:grid-cols-2">
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

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouse}
          onMouseLeave={handleLeave}
          style={{ transformStyle: "preserve-3d" }}
          className="transition-transform duration-200 ease-out"
        >
          <div className={`relative mb-4 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} sm:h-64`}>
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.08 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="text-6xl font-bold text-white/20 sm:text-7xl"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.initials}
            </motion.span>
            <div className="absolute top-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {project.tag}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90">
                Live Demo <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.desc}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}
