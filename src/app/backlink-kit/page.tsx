import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ExternalLink,
  Globe,
  Link2,
  MessageSquare,
  PenLine,
  Search,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BadgeSnippet from "./BadgeSnippet";

export const metadata: Metadata = {
  title: "Backlink Kit",
  description:
    "Build real, Google-safe backlinks for your website: a dofollow client badge, directory checklist, Google Business Profile setup guide, and white-hat link building strategies.",
  openGraph: {
    title: "Backlink Kit | Website Development India",
    description:
      "Real backlinks the safe way — dofollow client badge, directories, Google Business Profile, and white-hat strategies.",
  },
};

const directories = [
  { name: "Google Business Profile", why: "The #1 local signal — your business appears in Maps + local search." },
  { name: "JustDial", why: "Massive Indian local search directory with strong domain authority." },
  { name: "IndiaMART", why: "Huge B2B marketplace in India — great for service businesses." },
  { name: "Bing Places", why: "Free listing that powers Bing search results." },
  { name: "Clutch", why: "Respected directory for agencies — strong, editorial-looking link." },
  { name: "GoodFirms", why: "Agency directory trusted for software & web services." },
  { name: "DesignRush", why: "Web design & marketing directory used by buyers." },
  { name: "BOTW.org", why: "Old, high-authority general directory." },
  { name: "LinkedIn", why: "Profile with your website link — a strong, real signal." },
  { name: "GitHub", why: "Publish your code/projects with a homepage link." },
];

const gbpSteps = [
  { title: "Claim your profile", detail: "Go to business.google.com, sign in and claim/create your business profile." },
  { title: "Fill every field", detail: "Business name, category, address, phone, website URL, and hours — complete is better." },
  { title: "Add photos", detail: "At least 5–10 clear photos of your work or workspace. Profiles with photos get more clicks." },
  { title: "Write a description", detail: "300–500 words covering what you do, who you serve, and your service area." },
  { title: "Add services", detail: "List individual services (e.g. \"Business Website\", \"E-commerce Store\") with descriptions and prices." },
  { title: "Get verified", detail: "Google will verify by postcard, phone, video or email. Finish verification to go live." },
  { title: "Post updates", detail: "Publish a post at least once a month — offers, new work, tips. Fresh activity helps." },
  { title: "Ask for reviews", detail: "Send clients your review link after delivery. 10+ reviews massively boost local trust." },
  { title: "Reply to reviews", detail: "Thank reviewers promptly — it signals you're active and responsive." },
  { title: "Track insights", detail: "Use the GBP dashboard to see searches, views and calls, then improve what's weak." },
];

const strategies = [
  {
    icon: Link2,
    title: "Client footer credits",
    detail: "The dofollow badge above on every site you ship. Compounding, free, natural.",
  },
  {
    icon: Building2,
    title: "Directories & listings",
    detail: "Set up the 10 directories below. Consistent name, address, phone across all of them.",
  },
  {
    icon: Globe,
    title: "Google Business Profile",
    detail: "Follow the 10-step setup — the single best local ranking move for an Indian business.",
  },
  {
    icon: Search,
    title: "Free audit tool",
    detail: "Share /free-seo-audit with prospects. People link to useful tools naturally.",
  },
  {
    icon: PenLine,
    title: "Guest posts",
    detail: "Write 1–2 genuinely useful posts on real marketing/tech blogs in your niche.",
  },
  {
    icon: MessageSquare,
    title: "Digital PR",
    detail: "Comment on relevant forums/communities and pitch useful answers to journalists.",
  },
];

export default function BacklinkKitPage() {
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
              Backlink Kit
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Real Backlinks, <span className="gradient-text">Zero Penalties</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Skip the fake PBN link farms. Here&apos;s how to build authority that Google
              respects — client credits, directories, your Business Profile, and content.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Badge */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                <ShieldCheck size={14} /> Client Credit Badge
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                A <span className="gradient-text">Dofollow</span> Link on Every Site You Build
              </h2>
              <p className="mt-4 text-muted">
                Every website you deliver gets a small credit line in the footer. It&apos;s a
                win-win: your client looks professional, and you earn a natural, dofollow
                backlink from each project. Do this for 10 clients and you&apos;ve built a
                portfolio of links no penalty can touch.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <ArrowRight size={15} className="mt-1 shrink-0 text-primary" /> Dofollow — passes full SEO value
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={15} className="mt-1 shrink-0 text-primary" /> 100% natural — looks exactly like an earned credit
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={15} className="mt-1 shrink-0 text-primary" /> Compounds with every project you ship
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <BadgeSnippet />
          </Reveal>
        </div>
      </section>

      {/* Directories */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Directories
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                10 Places to <span className="gradient-text">List Your Business</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Free or cheap listings that give real backlinks and local visibility. Keep your
                name, address and phone identical everywhere.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directories.map((d, i) => (
              <Reveal key={d.name} direction="up" delay={(i % 3) * 0.08}>
                <div className="glass-card h-full rounded-2xl p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold">{d.name}</h3>
                    <ExternalLink size={14} className="shrink-0 text-muted" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{d.why}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GBP checklist */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Google Business Profile
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The <span className="gradient-text">10-Step Setup</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                The single most valuable local SEO move for a business in India. Work through
                these in order.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {gbpSteps.map((s, i) => (
              <Reveal key={s.title} direction="up" delay={(i % 2) * 0.08}>
                <div className="flex gap-4 rounded-2xl bg-white/[0.02] p-5 ring-1 ring-white/[0.06] transition-all hover:ring-primary/30">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{s.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Game Plan
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Keep It <span className="gradient-text">Simple &amp; Safe</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                You don&apos;t need 1,000 links. You need 30 good ones, built slowly and naturally.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((s, i) => (
              <Reveal key={s.title} direction="up" delay={(i % 3) * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-primary/30">
                  <s.icon size={22} className="mb-3 text-primary" />
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <div className="glass-card rounded-2xl p-10">
              <BookOpen size={28} className="mx-auto mb-4 text-primary" />
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Want a Website That <span className="gradient-text">Earns Links</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Every site I build ships with clean SEO, fast load times, and a credit line that
                builds your backlink profile. Let&apos;s get yours started.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919465568342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
                >
                  Chat on WhatsApp <ArrowRight size={16} />
                </a>
                <a
                  href="/free-seo-audit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
                >
                  Run a Free Audit
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
