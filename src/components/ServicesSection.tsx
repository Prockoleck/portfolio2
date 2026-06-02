"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, ShoppingCart, User, Layout, RefreshCw, Search,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Globe, title: "Business Websites", desc: "Professional multi-page websites that establish your brand and drive leads 24/7.", color: "from-blue-500 to-blue-600" },
  { icon: ShoppingCart, title: "E-commerce Stores", desc: "Full-featured online stores with secure payments, inventory, and seamless checkout.", color: "from-emerald-500 to-emerald-600" },
  { icon: User, title: "Portfolio Websites", desc: "Showcase your work with stunning galleries, case studies, and client testimonials.", color: "from-violet-500 to-violet-600" },
  { icon: Layout, title: "Landing Pages", desc: "High-converting single-page sites optimized for campaigns, launches, and signups.", color: "from-rose-500 to-rose-600" },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your existing site with fresh UI, better UX, and improved performance.", color: "from-amber-500 to-amber-600" },
  { icon: Search, title: "SEO Optimization", desc: "On-page SEO, speed optimization, and structured data to rank higher on Google.", color: "from-cyan-500 to-cyan-600" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;
  };
  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <motion.div variants={cardVariants}>
      <div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className="group glass-card rounded-2xl p-6 transition-all duration-200 hover:shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
          style={{ transform: "translateZ(20px)" }}
        >
          <service.icon size={20} />
        </div>
        <h3 className="mb-2 text-lg font-semibold" style={{ transform: "translateZ(15px)" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted" style={{ transform: "translateZ(10px)" }}>{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute top-10 right-10 h-36 w-36 rounded-full border border-primary/5"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-10 h-24 w-24 rounded-2xl border border-accent/5 rotate-12"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">What I Offer</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything You Need to <span className="gradient-text">Succeed Online</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              From concept to launch, I handle every aspect of your web presence so you can focus on growing your business.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
