"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  { q: "How long does it take to build a website?", a: "Most websites are delivered within 5-7 days. Complex projects like e-commerce stores may take 7-10 days depending on requirements." },
  { q: "Do I need to provide content and images?", a: "I can help you create content and source high-quality stock images. If you have your own brand assets, I'll use those to maintain consistency." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website I build is fully responsive and looks stunning on all devices — phones, tablets, and desktops." },
  { q: "Do you offer website maintenance?", a: "Yes! I offer maintenance packages starting at ₹999/month that include updates, backups, security patches, and content changes." },
  { q: "What if I don't like the design?", a: "I include revisions in every package to make sure you're 100% satisfied. Your website isn't launched until you love it." },
  { q: "Will my website rank on Google?", a: "Yes. Every site includes SEO optimization. I follow Google's best practices for page speed, meta tags, structured data, and more." },
  { q: "Do I need hosting and a domain?", a: "I can help you set up both. I recommend reliable hosting providers and can guide you through domain registration at no extra cost." },
  { q: "Can I update the website myself after launch?", a: "Yes! I build websites with easy-to-use content management systems so you can make changes without any technical knowledge." },
];

function FAQItem({ faq, index, inView }: { faq: (typeof faqs)[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-black/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-sm font-medium sm:text-base">{faq.q}</span>
        <ChevronDown size={16} className={`shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute top-10 right-10 h-24 w-24 rounded-full border border-primary/5"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-10 h-16 w-16 rounded-2xl bg-accent/[0.02] rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl">
        <Reveal direction="up">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">FAQ</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Questions? <span className="gradient-text">I&apos;ve Got Answers</span>
            </h2>
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="glass-card rounded-2xl px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} inView={inView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
