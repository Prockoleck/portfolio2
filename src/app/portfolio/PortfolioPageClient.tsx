"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Code } from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["All", "E-commerce", "Health & Fitness", "Real Estate", "Business"];

const projects = [
  {
    video: "ecommerce store.mp4",
    title: "Ecommerce Store",
    desc: "A fully responsive modern e-commerce platform with seamless checkout, product management, and payment integration built for scale.",
    longDesc: "Built a complete online shopping experience with product catalog, secure payment gateway, order tracking, inventory management, and customer accounts. The store handles hundreds of products across multiple categories with advanced search and filtering.",
    tag: "E-commerce",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
  },
  {
    video: "gym.mp4",
    title: "Gym & Fitness",
    desc: "A dynamic fitness brand website featuring class scheduling, trainer profiles, membership plans, and engaging visuals.",
    longDesc: "Designed for a premium fitness brand with class booking system, trainer portfolio pages, membership plan comparison, and integration with fitness tracking tools. The site drives member signups and class registrations.",
    tag: "Health & Fitness",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
  },
  {
    video: "real estate.mp4",
    title: "Real Estate",
    desc: "A premium real estate marketplace with property listings, virtual tours, mortgage calculators, and agent matching.",
    longDesc: "Created a feature-rich real estate platform with property search and filtering, interactive maps, virtual tour integration, mortgage calculator, and agent profiles. The platform connects buyers with agents seamlessly.",
    tag: "Real Estate",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API"],
  },
];

export default function PortfolioPageClient() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.tag === activeCategory);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden px-6 pt-32 pb-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),transparent_50%)]" />
        <motion.div className="pointer-events-none absolute top-1/3 -left-16 h-48 w-48 rounded-full border border-primary/5" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Recent Work</span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Projects I&apos;ve <span className="gradient-text">Built with Pride</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Each project represents a unique challenge solved with clean code, thoughtful design,
              and a focus on delivering real business results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-black/[0.03] text-muted hover:bg-black/[0.06] hover:text-black"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section ref={ref} className="relative overflow-hidden px-6 py-20 sm:px-8">
        <motion.div className="pointer-events-none absolute top-1/3 -left-10 h-40 w-40 rounded-full border border-primary/5"
          animate={{ y: [0, -25, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="pointer-events-none absolute bottom-1/4 -right-8 h-28 w-28 rounded-2xl bg-accent/[0.02] rotate-45"
          animate={{ y: [0, 20, 0], rotate: [45, 55, 45] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <div className="py-20 text-center text-muted">
                  <p className="text-lg">No projects found in this category.</p>
                  <p className="mt-2 text-sm">Check back soon for new additions.</p>
                </div>
              ) : (
                <div className="space-y-16">
                  {filtered.map((p, i) => (
                    <ProjectCard key={p.title} project={p} index={i} inView={inView} onDemoClick={() => setSelectedProject(p)} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Want a Website Like <span className="gradient-text">These?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Let&apos;s build something amazing together. Get your free quote today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                View Pricing <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/919465568342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black/20 hover:bg-black/5"
              >
                Start a Project
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-2 sm:p-3">
                <div className="aspect-video overflow-hidden rounded-xl border border-black/[0.06] shadow-sm">
                  <video
                    src={`/${selectedProject.video}`}
                    autoPlay
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {selectedProject.tag}
                </div>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{selectedProject.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{selectedProject.longDesc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-muted">
                      <Code size={10} /> {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

function TypewriterText({ text, startDelay }: { text: string; startDelay: number }) {
  const chars = text.split("");
  return (
    <span>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: startDelay + i * 0.06, duration: 0.01 }}
          className="inline"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function ProjectCard({ project, index, inView, onDemoClick }: { project: (typeof projects)[0]; index: number; inView: boolean; onDemoClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardInViewRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardInViewRef, { once: true, margin: "-100px" });

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

  const reverse = index === 1;
  const slideFrom = reverse ? 1 : -1;

  return (
    <div ref={cardInViewRef}>
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
              <motion.div
                className="relative aspect-video w-full shrink-0 overflow-hidden lg:w-1/2"
                initial={{ x: `${slideFrom * 120}%` }}
                animate={cardInView ? { x: "0%" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <video src={`/${project.video}`} autoPlay muted loop playsInline className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {project.tag}
                </div>
              </motion.div>

              <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-8">
                <motion.span className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary" style={{ transformStyle: "preserve-3d" }}>
                  <TypewriterText text="Featured Project" startDelay={1.3 + index * 0.15} />
                </motion.span>
                <motion.h3 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ transformStyle: "preserve-3d" }}>
                  <TypewriterText text={project.title} startDelay={1.6 + index * 0.15} />
                </motion.h3>
                <motion.p className="mt-2 text-sm leading-relaxed text-muted" style={{ transformStyle: "preserve-3d" }}>
                  <TypewriterText text={project.desc} startDelay={2.0 + index * 0.15} />
                </motion.p>
                <motion.div
                  className="mt-4"
                  style={{ transformStyle: "preserve-3d" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 3.0 + index * 0.15, duration: 0.5 }}
                >
                  <button onClick={onDemoClick} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl">
                    Live Demo <ExternalLink size={14} />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
