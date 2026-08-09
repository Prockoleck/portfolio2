"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Free Audit", href: "/free-seo-audit" },
];

const tickerItems = [
  "Flat 25% Off This Month",
  "Websites From ₹3,749",
  "Offer Valid This Month Only",
];

function NavLink({ label, href, onClick, mobile }: { label: string; href: string; onClick?: () => void; mobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden text-sm font-medium ${mobile ? "w-full rounded-xl px-4 py-3 text-left" : "rounded-full px-4 py-2"}`}
    >
      <motion.span
        className="absolute inset-0 rounded-[inherit] bg-primary"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="relative z-10"
        animate={{ color: hovered ? "#052e16" : undefined }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/pfp.jpg"
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            websitedevelopmentindia
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.label} label={l.label} href={l.href} />
          ))}
          <motion.a
            href="https://wa.me/919465568342"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="ml-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-black transition-all hover:bg-primary-dark"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            WhatsApp Me
          </motion.a>
        </div>

        <button
          className="relative z-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className="relative flex items-center overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="marquee-track py-2.5">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
              {tickerItems.map((item, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="mx-4 flex items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-primary"
                >
                  <Sparkles size={12} aria-hidden />
                  {item}
                  <span aria-hidden className="text-primary/30">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 z-10 flex items-center bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pl-16">
          <a
            href="https://wa.me/919465568342?text=Hi!%20I%27d%20like%20to%20claim%20the%2025%25%20off%20offer"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-black transition-colors hover:bg-primary-dark"
          >
            Claim 25% Off <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card absolute top-full left-0 right-0 mx-4 rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.label} label={l.label} href={l.href} onClick={() => setOpen(false)} mobile />
            ))}
            <a
              href="https://wa.me/919465568342"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-black"
            >
              WhatsApp Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
