"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/917006296494"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#20bd5a]"
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        className="inline-flex"
      >
        <MessageCircle size={20} />
      </motion.span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <motion.span
        className="absolute -inset-1 rounded-full bg-[#25D366]"
        animate={{ opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: -1 }}
      />
    </motion.a>
  );
}
