"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CODE = `<a href="https://websitedevelopmentindia.online" target="_blank" rel="dofollow" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-family:Arial,sans-serif;color:#888;text-decoration:none;padding:8px 14px;border:1px solid #2a2a2a;border-radius:999px;background:#0a0a0a;">
  Website by <strong style="color:#39ff14;">WebsiteDevelopmentIndia</strong>
</a>`;

export default function BadgeSnippet() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = CODE;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <div className="border-b border-white/[0.08] px-6 py-4">
        <h3 className="text-sm font-semibold">Live Preview</h3>
        <div className="mt-4 flex items-center justify-center rounded-xl bg-[#050505] p-8">
          <a
            href="https://websitedevelopmentindia.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0a0a0a] px-3.5 py-2 text-[13px] text-muted transition-colors hover:border-white/25 hover:text-foreground"
          >
            Website by <strong className="text-primary">WebsiteDevelopmentIndia</strong>
          </a>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold">Copy-paste code</h3>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-primary-dark"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-[#050505] p-4 text-xs leading-relaxed text-primary/90 ring-1 ring-white/[0.06]">
          <code>{CODE}</code>
        </pre>
        <p className="mt-3 text-xs text-muted">
          Drop this into the footer of every website you build. The link is{" "}
          <span className="text-foreground">dofollow</span>, so it passes SEO value back to your
          portfolio — and your clients get a polished credit line for free.
        </p>
      </div>
    </div>
  );
}
