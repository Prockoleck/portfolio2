"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Reveal from "./Reveal";

function GitHubIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TwitterIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden px-6 py-24 sm:px-8">
      {/* Parallax shapes */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-16 h-48 w-48 rounded-full border border-primary/5"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/3 -right-16 h-36 w-36 rounded-full bg-accent/[0.02]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">Contact</span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s Build Your <span className="gradient-text">Dream Website</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Ready to take your online presence to the next level? Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Info */}
          <Reveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <a href="https://wa.me/917006296494" target="_blank" rel="noopener noreferrer"
                className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted">+91 70092 96494</p>
                </div>
              </a>

              <a href="mailto:proshorts71@gmail.com"
                className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted">proshorts71@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary" aria-label="GitHub">
                  <GitHubIcon size={18} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary" aria-label="Twitter">
                  <TwitterIcon size={18} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:text-primary" aria-label="LinkedIn">
                  <LinkedInIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="glass-card space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" required
                  className="w-full rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10" />
                <input type="email" placeholder="Your Email" required
                  className="w-full rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10" />
              </div>
              <input type="text" placeholder="Phone Number (optional)"
                className="w-full rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10" />
              <select defaultValue=""
                className="w-full rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm outline-none transition-all text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10">
                <option value="" disabled>Select a service</option>
                <option>Business Website</option><option>E-commerce Store</option>
                <option>Portfolio Website</option><option>Landing Page</option>
                <option>Website Redesign</option><option>Other</option>
              </select>
              <textarea rows={4} placeholder="Tell me about your project..." required
                className="w-full resize-none rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-primary/30 focus:ring-2 focus:ring-primary/10" />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark">
                {sent ? "Message Sent! ✓" : <>Send Message <Send size={14} /></>}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
