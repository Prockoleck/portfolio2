"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, ShoppingCart, User, Layout, RefreshCw, Search,
  CheckCircle, ArrowRight, Code, Palette, Rocket,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional multi-page websites that establish your brand identity and drive leads 24/7. Perfect for startups, small businesses, and established companies looking to build a strong online presence.",
    features: ["Custom design tailored to your brand", "Up to 10 pages", "Contact form & lead capture", "Google Maps integration", "Social media integration", "Fast loading speed"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    desc: "Full-featured online stores with secure payment processing, inventory management, and a seamless checkout experience that converts visitors into customers.",
    features: ["Product catalog with categories", "Secure payment gateway", "Shopping cart & checkout", "Order management system", "Customer accounts", "Mobile-optimized shopping"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    desc: "Showcase your work with stunning galleries, detailed case studies, and client testimonials. Ideal for photographers, designers, agencies, and creative professionals.",
    features: ["Visual project gallery", "Case study sections", "Client testimonials", "Contact inquiry form", "Blog integration", "Social proof elements"],
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "High-converting single-page websites optimized for marketing campaigns, product launches, event signups, and lead generation with clear call-to-action.",
    features: ["Conversion-optimized design", "A/B testing ready", "Analytics integration", "Fast load under 2 seconds", "Lead capture forms", "Social proof & trust badges"],
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Modernize your existing website with a fresh user interface, better user experience, improved performance, and the latest design trends.",
    features: ["UI/UX audit", "Modern design overhaul", "Performance optimization", "Mobile responsiveness", "SEO improvement", "Content restructuring"],
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "On-page and technical SEO services to help your website rank higher on Google, drive organic traffic, and reach more customers.",
    features: ["Keyword research & strategy", "Meta tags & structured data", "Speed optimization", "Mobile optimization", "XML sitemap setup", "Google Analytics & Search Console"],
    color: "from-cyan-500 to-cyan-600",
  },
];

const techStack = [
  { name: "Next.js", desc: "React framework for production" },
  { name: "React", desc: "Component-based UI library" },
  { name: "TypeScript", desc: "Type-safe JavaScript" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
  { name: "Framer Motion", desc: "Production-ready animations" },
  { name: "Node.js", desc: "Server-side JavaScript" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
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
        <p className="mb-4 text-sm leading-relaxed text-muted" style={{ transform: "translateZ(10px)" }}>{service.desc}</p>
        <ul className="space-y-1.5" style={{ transform: "translateZ(8px)" }}>
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-muted">
              <CheckCircle size={12} className="mt-0.5 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesPageClient() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const techRef = useRef<HTMLElement>(null);
  const techInView = useInView(techRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 pt-32 pb-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),transparent_50%)]" />
        <motion.div className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full border border-primary/5" />
        <motion.div className="pointer-events-none absolute bottom-1/4 -right-16 h-48 w-48 rounded-full bg-accent/[0.02]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              What I Offer
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Web Development <span className="gradient-text">Services</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              From business websites to full-featured e-commerce stores, I build custom web solutions
              that help your brand stand out and grow online. Every project is crafted with performance,
              SEO, and user experience in mind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
        <motion.div className="pointer-events-none absolute top-10 right-10 h-36 w-36 rounded-full border border-primary/5"
          animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="pointer-events-none absolute bottom-10 left-10 h-24 w-24 rounded-2xl border border-accent/5 rotate-12"
          animate={{ y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything You Need to <span className="gradient-text">Succeed Online</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                I handle every aspect of your web presence — from concept to launch — so you can focus on running your business.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section ref={techRef} className="relative overflow-hidden px-6 py-24 sm:px-8">
        <motion.div className="pointer-events-none absolute top-20 left-10 h-20 w-20 rounded-full bg-primary/[0.03]"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="pointer-events-none absolute bottom-20 right-10 h-16 w-16 rounded-2xl border border-accent/10 rotate-45"
          animate={{ y: [0, 15, 0], rotate: [45, 50, 45] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Tech Stack</span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Built with <span className="gradient-text">Modern Technology</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                I use cutting-edge tools and frameworks to build fast, scalable, and maintainable websites.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, i) => (
              <Reveal key={tech.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Code size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{tech.name}</h3>
                    <p className="text-xs text-muted">{tech.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Let&apos;s discuss your requirements and I&apos;ll provide a free quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919465568342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black/20 hover:bg-black/5"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
