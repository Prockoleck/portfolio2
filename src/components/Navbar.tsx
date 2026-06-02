"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function NavLink({ label, href, onClick, mobile }: { label: string; href: string; onClick?: () => void; mobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={() => { scrollToSection(href); onClick?.(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
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
        animate={{ color: hovered ? "#fff" : undefined }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.04]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/pfp.jpg"
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            websitedevelopmentindia
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <NavLink key={l.label} label={l.label} href={l.href} />
          ))}
          <motion.a
            href="https://wa.me/917006296494"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="ml-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-primary-dark"
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
              href="https://wa.me/917006296494"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              WhatsApp Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
