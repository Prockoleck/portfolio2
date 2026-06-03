"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Zap, HelpCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const plans = [
  { name: "Basic", price: "₹4,999", popular: false, features: ["Up to 5 Pages", "Mobile Responsive Design", "Contact Form Integration", "Basic SEO Setup", "Social Media Links", "Delivery in 5-7 Days"] },
  { name: "Standard", price: "₹9,999", popular: true, features: ["Up to 10 Pages", "Mobile Responsive Design", "Advanced SEO Optimization", "Speed Optimization", "WhatsApp Integration", "Google Analytics Setup", "Delivery in 5-7 Days"] },
  { name: "Premium", price: "₹19,999", popular: false, features: ["Up to 20 Pages", "Advanced SEO Optimization", "Blog System Integration", "Speed & Security Optimization", "Priority Support", "Custom Animations", "Admin Dashboard", "Delivery in 5-7 Days"] },
];

const addons = [
  { name: "Additional Page", price: "₹499/page" },
  { name: "Content Writing", price: "₹999/page" },
  { name: "Logo Design", price: "₹1,499" },
  { name: "Email Setup", price: "₹999" },
  { name: "Monthly Maintenance", price: "₹999/month" },
  { name: "Social Media Integration", price: "₹999" },
];

const faqs = [
  { q: "What is the payment structure?", a: "I require 50% advance payment to start the project. The remaining 50% is due after completion and before the final deliverable is handed over." },
  { q: "How long does delivery take?", a: "Most websites are delivered within 5-7 days. Complex projects with extensive features may take 7-10 days." },
  { q: "Do I get revisions?", a: "Yes! Every package includes revisions to ensure you are 100% satisfied with the final result. The number of revisions depends on the package." },
  { q: "What if I need features not listed?", a: "I offer custom development work. Contact me with your requirements and I'll provide a tailored quote." },
  { q: "Do you provide hosting?", a: "I can help you set up hosting. I recommend reliable providers and can guide you through the process at no extra cost." },
  { q: "Is there a warranty?", a: "I provide 30 days of post-launch support for any bug fixes or minor adjustments. Extended maintenance packages are available." },
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
            plan.popular ? "shadow-xl shadow-primary/5 scale-[1.02]" : "shadow-black/5"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg">
                <Zap size={12} /> Most Popular
              </span>
            </div>
          )}
          <div className="relative rounded-[inherit] bg-white">
            <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
              <motion.div
                className="absolute inset-0"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hovered ? 1 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "bottom", background: liquidColors[index].body }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[130%] h-4" style={{ background: liquidColors[index].surface, borderRadius: "50%", filter: "blur(3px)" }} />
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[150%] h-2.5" style={{ background: liquidColors[index].surface, borderRadius: "50%", filter: "blur(6px)", opacity: 0.5 }} />
              </motion.div>
            </div>

            <div className={`relative z-10 ${plan.popular ? "pt-12" : ""} p-8`}>
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
                href="https://wa.me/919465568342" target="_blank" rel="noopener noreferrer"
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

export default function PricingPageClient() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const addonRef = useRef<HTMLElement>(null);
  const addonInView = useInView(addonRef, { once: true, margin: "-80px" });
  const faqRef = useRef<HTMLElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden px-6 pt-32 pb-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),transparent_50%)]" />
        <motion.div className="pointer-events-none absolute top-1/4 -left-20 h-48 w-48 rounded-full border border-primary/5" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Pricing</span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Premium Websites, <span className="gradient-text">Fair Prices</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              No hidden fees. No surprises. Just a stunning website delivered on time.
              All packages include responsive design, SEO optimization, and 5-7 day delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="relative px-6 pb-24 sm:px-8">
        <motion.div className="pointer-events-none absolute top-20 left-10 h-40 w-40 rounded-full border border-primary/10"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="pointer-events-none absolute bottom-20 right-10 h-32 w-32 rounded-full border border-accent/10"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section ref={addonRef} className="relative overflow-hidden px-6 py-24 sm:px-8">
        <motion.div className="pointer-events-none absolute top-10 -right-10 h-24 w-24 rounded-full border border-accent/5"
          animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Add-ons</span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Customize Your <span className="gradient-text">Package</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Need something extra? Add these options to any package.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon, i) => (
              <Reveal key={addon.name} direction="up" delay={i * 0.05}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={addonInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass-card flex items-center justify-between rounded-xl px-5 py-4 transition-all hover:shadow-md"
                >
                  <span className="text-sm font-medium">{addon.name}</span>
                  <span className="text-sm font-semibold text-primary">{addon.price}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="relative overflow-hidden px-6 py-24 sm:px-8">
        <motion.div className="pointer-events-none absolute top-10 right-10 h-20 w-20 rounded-full border border-primary/5"
          animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative mx-auto max-w-3xl">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">FAQ</span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Pricing <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="glass-card rounded-2xl px-6">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="border-b border-black/[0.06] last:border-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
                  >
                    <span className="text-sm font-medium sm:text-base">{faq.q}</span>
                    <HelpCircle size={16} className={`shrink-0 text-muted transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Not Sure Which Plan? <span className="gradient-text">Let&apos;s Talk</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              I&apos;ll help you choose the right package for your needs. No pressure, just honest advice.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919465568342"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black/20 hover:bg-black/5"
              >
                Send an Email
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
