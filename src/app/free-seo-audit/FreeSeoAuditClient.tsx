"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Copy,
  Globe,
  Loader2,
  Search,
  X,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface AuditResponse {
  error?: string;
  requestedUrl: string;
  finalUrl: string;
  status: number;
  headers: Record<string, string>;
  robots: { status: number | null; hasSitemapRef: boolean };
  sitemap: { status: number | null; isXml: boolean };
  html: string;
  htmlLength: number;
}

interface Parsed {
  title: string;
  description: string;
  viewport: string;
  h1Count: number;
  imageCount: number;
  imagesWithoutAlt: number;
  canonical: boolean;
  favicon: boolean;
  ogTitle: string;
  ogImage: string;
  ogDesc: string;
  wordCount: number;
}

interface Check {
  id: string;
  label: string;
  detail: string;
  status: "pass" | "warn" | "fail";
  weight: number;
  fix: string;
}

function parseHtml(html: string): Parsed {
  const titleMatch = html.match(/<\s*title\b[^>]*>([\s\S]*?)<\s*\/\s*title\s*>/i);
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);

  const attrContent = (tags: string[], attr: string, value: string) => {
    for (const t of tags) {
      const a = t.match(new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i"));
      if (a && a[1].toLowerCase() === value) {
        const c = t.match(/content\s*=\s*["']([^"']*)["']/i);
        return c ? c[1].trim() : "";
      }
    }
    return "";
  };

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);

  return {
    title: titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "",
    description: attrContent(metaTags, "name", "description"),
    viewport: attrContent(metaTags, "name", "viewport"),
    h1Count: (html.match(/<h1[\s>]/gi) ?? []).length,
    imageCount: images.length,
    imagesWithoutAlt: images.filter((img) => !/\balt\s*=/i.test(img)).length,
    canonical: /<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*>/i.test(html),
    favicon:
      /<link\b[^>]*rel\s*=\s*["'][^"']*icon[^"']*["'][^>]*>/i.test(html) ||
      /favicon\.ico/i.test(html),
    ogTitle: attrContent(metaTags, "property", "og:title"),
    ogImage: attrContent(metaTags, "property", "og:image"),
    ogDesc: attrContent(metaTags, "property", "og:description"),
    wordCount: html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-zA-Z#0-9]+;/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean).length,
  };
}

function buildChecks(data: AuditResponse, p: Parsed): Check[] {
  const https = data.finalUrl.startsWith("https://");
  const sizeKB = Math.round(data.htmlLength / 1024);
  const encoding = (data.headers["content-encoding"] ?? "").toLowerCase();

  return [
    {
      id: "https",
      label: "HTTPS enabled",
      detail: https ? "Site loads over a secure HTTPS connection." : "Site is not served over HTTPS — browsers and Google flag this.",
      status: https ? "pass" : "fail",
      weight: 10,
      fix: "Install an SSL certificate (most hosts offer one free).",
    },
    {
      id: "title",
      label: "Meta title",
      detail: p.title ? `"${p.title.slice(0, 60)}"${p.title.length > 60 ? "…" : ""} (${p.title.length} chars)` : "No <title> tag found.",
      status: !p.title ? "fail" : p.title.length >= 30 && p.title.length <= 60 ? "pass" : "warn",
      weight: 8,
      fix: "Use a unique 30–60 character title per page with your main keyword near the front.",
    },
    {
      id: "description",
      label: "Meta description",
      detail: p.description ? `"${p.description.slice(0, 60)}${p.description.length > 60 ? "…" : ""}" (${p.description.length} chars)` : "No meta description found.",
      status: !p.description ? "fail" : p.description.length >= 70 && p.description.length <= 160 ? "pass" : "warn",
      weight: 8,
      fix: "Write a 70–160 character description that summarises the page and invites a click.",
    },
    {
      id: "viewport",
      label: "Mobile viewport",
      detail: p.viewport ? "Mobile viewport meta tag is present." : "No viewport meta tag — page will look broken on phones.",
      status: p.viewport ? "pass" : "fail",
      weight: 5,
      fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.',
    },
    {
      id: "h1",
      label: "H1 heading",
      detail: p.h1Count === 1 ? "Exactly one H1 heading found." : p.h1Count > 1 ? `${p.h1Count} H1 tags found (keep it to one).` : "No H1 heading found.",
      status: p.h1Count === 1 ? "pass" : p.h1Count > 1 ? "warn" : "fail",
      weight: 6,
      fix: "Use exactly one H1 per page describing its main topic.",
    },
    {
      id: "images",
      label: "Image alt text",
      detail:
        p.imageCount === 0
          ? "No images found on the page."
          : p.imagesWithoutAlt === 0
            ? `All ${p.imageCount} images have alt text.`
            : `${p.imagesWithoutAlt} of ${p.imageCount} images missing alt text.`,
      status: p.imageCount === 0 || p.imagesWithoutAlt === 0 ? "pass" : p.imagesWithoutAlt < p.imageCount ? "warn" : "fail",
      weight: 7,
      fix: "Give every image descriptive alt text (and blank alt for decorative images).",
    },
    {
      id: "robots",
      label: "robots.txt",
      detail:
        data.robots.status === 200
          ? data.robots.hasSitemapRef
            ? "robots.txt found and references your sitemap."
            : "robots.txt found but doesn't reference a sitemap."
          : "No robots.txt found (404).",
      status: data.robots.status === 200 && data.robots.hasSitemapRef ? "pass" : data.robots.status === 200 ? "warn" : "fail",
      weight: 6,
      fix: "Create a robots.txt that allows crawling and points to your sitemap.",
    },
    {
      id: "sitemap",
      label: "XML sitemap",
      detail:
        data.sitemap.status === 200
          ? data.sitemap.isXml
            ? "sitemap.xml found and looks valid."
            : "sitemap.xml found but doesn't look like XML."
          : "No sitemap.xml found (404).",
      status: data.sitemap.status === 200 && data.sitemap.isXml ? "pass" : data.sitemap.status === 200 ? "warn" : "fail",
      weight: 6,
      fix: "Submit an XML sitemap in Google Search Console so pages get indexed faster.",
    },
    {
      id: "og",
      label: "Open Graph tags",
      detail:
        p.ogTitle && p.ogImage
          ? "og:title and og:image present."
          : p.ogTitle || p.ogImage
            ? "Some Open Graph tags missing (need title AND image)."
            : "No Open Graph tags found.",
      status: p.ogTitle && p.ogImage ? "pass" : p.ogTitle || p.ogImage ? "warn" : "fail",
      weight: 6,
      fix: "Add og:title, og:description and og:image so links look great when shared.",
    },
    {
      id: "canonical",
      label: "Canonical tag",
      detail: p.canonical ? "Canonical tag present." : "No canonical tag found.",
      status: p.canonical ? "pass" : "fail",
      weight: 5,
      fix: "Add a self-referencing canonical URL to avoid duplicate-content issues.",
    },
    {
      id: "favicon",
      label: "Favicon",
      detail: p.favicon ? "Favicon found." : "No favicon detected.",
      status: p.favicon ? "pass" : "fail",
      weight: 4,
      fix: "Add a favicon so your site looks professional in browser tabs.",
    },
    {
      id: "size",
      label: "Page weight",
      detail: `${sizeKB} KB of HTML${data.htmlLength >= 800_000 ? " (larger pages are truncated for this check)" : ""}.`,
      status: data.htmlLength < 500_000 ? "pass" : data.htmlLength < 3_000_000 ? "warn" : "fail",
      weight: 8,
      fix: "Trim unused CSS/JS, lazy-load images and compress assets to keep pages light.",
    },
    {
      id: "compression",
      label: "Compression",
      detail: encoding ? `Response is compressed with ${encoding}.` : "No gzip/brotli compression detected.",
      status: encoding ? "pass" : "fail",
      weight: 5,
      fix: "Enable gzip or brotli compression on your server for faster loads.",
    },
    {
      id: "content",
      label: "Content depth",
      detail: `${p.wordCount.toLocaleString()} words of text on the page.`,
      status: p.wordCount >= 300 ? "pass" : p.wordCount >= 100 ? "warn" : "fail",
      weight: 6,
      fix: "Aim for at least 300 words of useful, original content per page.",
    },
  ];
}

function gradeFor(score: number) {
  if (score >= 90) return { grade: "A+", color: "#39ff14" };
  if (score >= 80) return { grade: "A", color: "#39ff14" };
  if (score >= 70) return { grade: "B", color: "#a3e635" };
  if (score >= 55) return { grade: "C", color: "#facc15" };
  if (score >= 40) return { grade: "D", color: "#fb923c" };
  return { grade: "E", color: "#f87171" };
}

export default function FreeSeoAuditClient() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResponse | null>(null);

  const runAudit = async () => {
    const trimmed = url.trim();
    const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    if (!/^https?:\/\/[^\s]+$/i.test(normalized)) {
      setError("Please enter a valid website URL.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/audit?url=${encodeURIComponent(normalized)}`);
      const data: AuditResponse = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Couldn't reach the audit service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const checks = result ? buildChecks(result, parseHtml(result.html)) : [];
  const score = result
    ? Math.round(
        (checks.filter((c) => c.status === "pass").reduce((s, c) => s + c.weight, 0) /
          checks.reduce((s, c) => s + c.weight, 0)) *
          100
      )
    : 0;
  const grade = gradeFor(score);
  const issues = checks.filter((c) => c.status !== "pass");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden px-6 pt-40 pb-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(57,255,20,0.07),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(163,230,53,0.05),transparent_50%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              Free Tool
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Free <span className="gradient-text">SEO Audit</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Paste any website URL and get an instant SEO health score in seconds.
              Check titles, meta tags, mobile-friendliness, robots.txt, sitemap and more.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.45}>
            <div className="glass-card mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-primary/50">
                <Globe size={18} className="shrink-0 text-muted" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runAudit()}
                  placeholder="yourbusiness.com"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                />
              </div>
              <button
                onClick={runAudit}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Auditing…
                  </>
                ) : (
                  <>
                    <Search size={16} /> Run Audit
                  </>
                )}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Error */}
      {error && (
        <section className="px-6 pb-12 sm:px-8">
          <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-300">
            <X size={16} className="shrink-0" /> {error}
          </div>
        </section>
      )}

      {/* Results */}
      {result && (
        <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
              {/* Score card */}
              <Reveal direction="left">
                <div className="glass-card rounded-2xl p-8 text-center lg:sticky lg:top-40">
                  <div className="relative mx-auto h-36 w-36">
                    <svg width="144" height="144" viewBox="0 0 144 144" className="-rotate-90">
                      <circle cx="72" cy="72" r="64" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                      <motion.circle
                        cx="72"
                        cy="72"
                        r="64"
                        fill="none"
                        stroke={grade.color}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 64}
                        initial={{ strokeDashoffset: 2 * Math.PI * 64 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 64 * (1 - score / 100) }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold" style={{ color: grade.color }}>
                        {grade.grade}
                      </span>
                      <span className="mt-1 text-xs text-muted">{score}/100</span>
                    </div>
                  </div>
                  <p className="mt-4 break-all text-xs text-muted">{result.finalUrl}</p>
                  <a
                    href={`https://wa.me/919465568342?text=${encodeURIComponent(`Hi! I just ran a free SEO audit on ${result.finalUrl} and got a ${score}/100 (${grade.grade}). Can you fix these issues for me?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-primary-dark"
                  >
                    Let Me Fix It <ArrowRight size={14} />
                  </a>
                  <Link
                    href="/backlink-kit"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
                  >
                    Earn More Backlinks
                  </Link>
                </div>
              </Reveal>

              {/* Checks */}
              <Reveal direction="right" delay={0.1}>
                <div className="glass-card overflow-hidden rounded-2xl">
                  {checks.map((c, i) => (
                    <div
                      key={c.id}
                      className={`flex items-start gap-4 border-b border-white/[0.06] px-5 py-4 last:border-0 sm:px-6 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          c.status === "pass"
                            ? "bg-primary/15 text-primary"
                            : c.status === "warn"
                              ? "bg-amber-500/15 text-amber-400"
                              : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {c.status === "pass" ? (
                          <Check size={13} />
                        ) : c.status === "warn" ? (
                          <AlertTriangle size={13} />
                        ) : (
                          <X size={13} />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">{c.label}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              c.status === "pass"
                                ? "bg-primary/10 text-primary"
                                : c.status === "warn"
                                  ? "bg-amber-500/10 text-amber-400"
                                  : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {c.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{c.detail}</p>
                        {c.status !== "pass" && (
                          <p className="mt-1.5 text-xs leading-relaxed text-primary/80">
                            Fix: {c.fix}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {issues.length > 0 && (
              <Reveal direction="up" delay={0.2}>
                <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                  <h2 className="text-xl font-bold">
                    Found {issues.length} issue{issues.length > 1 ? "s" : ""}? I can fix them all.
                  </h2>
                  <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
                    Every website I build ships with all of these checks passing — SEO,
                    speed and mobile-friendliness included. Tell me what&apos;s failing and I&apos;ll sort it out.
                  </p>
                  <a
                    href="https://wa.me/919465568342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
                  >
                    Chat on WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* How it works / CTA */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              The Free Tool Is Just <span className="gradient-text">Step One</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              After your audit, grab my backlink kit — the dofollow badge for client sites,
              directory checklist, and Google Business Profile setup guide — to start building
              real authority the safe way.
            </p>
            <Link
              href="/backlink-kit"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
            >
              Open the Backlink Kit <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
