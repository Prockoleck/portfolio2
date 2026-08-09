import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Search, Sparkles } from "lucide-react";
import { cities } from "@/lib/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqSection, { FaqJsonLd } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Website Development Services in India | Websites from ₹4,999",
  description:
    "Professional website development services in India. Business websites, e-commerce stores and landing pages from ₹4,999 — mobile-responsive, SEO-optimized, delivered in 5-7 days. Serving every major Indian city.",
  alternates: { canonical: "/website-development" },
  openGraph: {
    title: "Website Development Services in India | Websites from ₹4,999",
    description:
      "Professional website development services across India. Fast, mobile-responsive, SEO-optimized websites delivered in 5-7 days.",
    url: "https://websitedevelopmentindia.online/website-development",
  },
};

const services = [
  { title: "Business Websites", desc: "Professional multi-page websites that build trust and pull in leads 24/7." },
  { title: "E-commerce Stores", desc: "Online stores with secure payments, inventory and a checkout that converts." },
  { title: "Landing Pages", desc: "Conversion-focused pages for ads, launches and one clear call to action." },
  { title: "Website Redesign", desc: "Modernize an old, slow site into something fast, current and credible." },
  { title: "SEO Optimization", desc: "On-page and technical SEO so customers in your city can find you." },
  { title: "Maintenance & Support", desc: "Updates, backups and fixes so your website keeps working perfectly." },
];

const included = [
  "Custom mobile-responsive design",
  "5-7 day delivery",
  "Fast loading speed",
  "SEO-optimized structure",
  "Contact form & lead capture",
  "Google Maps & WhatsApp integration",
  "SSL + security best practices",
  "Free minor tweaks for 30 days",
];

const platforms = [
  { name: "WordPress", desc: "Great for blogs and content-heavy sites that you edit yourself." },
  { name: "Shopify", desc: "The fastest route to a full e-commerce store." },
  { name: "Next.js / React", desc: "Blazing-fast, modern sites with the best SEO." },
  { name: "Wix", desc: "Simple drag-and-drop builds for very basic needs." },
];

const faqs = [
  {
    q: "What is website development?",
    a: "Website development is the process of planning, designing, coding and launching a website. It includes everything from the layout and design to the code that makes the site fast, secure and easy to use — so your business can be found and contacted online.",
  },
  {
    q: "What is the meaning of website development?",
    a: "In simple terms, website development means building a website for your business: the pages, text, images, forms and technology that let customers find you on Google, learn about your services and contact you. It covers both how the site looks and how it works.",
  },
  {
    q: "How much does website development cost in India?",
    a: "Website development cost in India depends on what you need. A professional business website starts at ₹4,999, a standard website at ₹9,999, and a premium or e-commerce website at ₹19,999. Larger custom builds cost more. See our full cost breakdown on the website development cost page.",
  },
  {
    q: "Can AI tools really develop my website?",
    a: "AI website builders can create a basic page quickly, but they can't design for your brand, write real content about your business, fix performance issues or do the SEO that actually gets you found. We use AI tools to speed up development, then combine them with professional design and strategy — the result is far better than any AI-only website.",
  },
  {
    q: "Do you offer website development courses or training?",
    a: "We focus on building websites for businesses, not teaching courses. But if you're just starting out, free resources from freeCodeCamp, W3Schools and YouTube are excellent places to learn website development free. And if you'd rather leave it to a professional, we'll build the whole thing for you in 5-7 days.",
  },
  {
    q: "Is website development near me or remote better?",
    a: "It doesn't matter where your developer sits — a great website is a great website. We work with clients in every Indian city over WhatsApp and email, share design previews as we build, and deliver your finished website remotely. You get the same result with none of the overhead.",
  },
  {
    q: "Which platform should I use — WordPress, Shopify or custom?",
    a: "For most small businesses we recommend WordPress for content-heavy sites, Shopify for stores, and Next.js/React for fast, SEO-friendly custom builds. Tell us what you sell and we'll recommend — and build — the right one for your budget.",
  },
  {
    q: "Does website development include SEO?",
    a: "Every website we build ships with on-page SEO basics: clean structure, fast load times, meta tags, mobile optimization and an XML sitemap. That's the foundation. Ongoing SEO to push you higher is available as an add-on.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Website Development India",
  description: "Professional website development services in India. Websites from ₹4,999, delivered in 5-7 days.",
  url: "https://websitedevelopmentindia.online/website-development",
  areaServed: "IN",
  priceRange: "₹₹",
  offers: { "@type": "Offer", price: "4999", priceCurrency: "INR", description: "Website development starting at ₹4,999" },
};

export default function WebsiteDevelopmentPage() {
  const regions = ["North", "South", "East", "West", "Central"] as const;

  return (
    <>
      <FaqJsonLd items={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 pt-40 pb-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(57,255,20,0.07),transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(163,230,53,0.05),transparent_50%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              Website Development Services
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Website Development in <span className="gradient-text">India</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              A stunning, lightning-fast website for your business — from ₹4,999, delivered in
              5-7 days. Mobile-responsive, SEO-optimized and built to bring you customers.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919465568342?text=Hi!%20I%27d%20like%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Get My Website <ArrowRight size={16} />
              </a>
              <a
                href="/free-seo-audit"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                <Search size={15} /> Run a Free SEO Audit
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                What We Do
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Complete Website Development <span className="gradient-text">Services</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Everything your business needs online — designed, built and launched by one team.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} direction="up" delay={(i % 3) * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-primary/30">
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                What&apos;s Included
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Every Website Ships With <span className="gradient-text">Everything</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item} direction="up" delay={(i % 2) * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl bg-white/[0.02] p-4 ring-1 ring-white/[0.06]">
                  <CheckCircle2 size={16} className="shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Website Development Company Near You
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Serving Every <span className="gradient-text">Major Indian City</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Looking for a website development company near you? We build websites for businesses
                across India — pick your city.
              </p>
            </div>
          </Reveal>
          <div className="space-y-8">
            {regions.map((region) => {
              const regionCities = cities.filter((c) => c.region === region);
              if (regionCities.length === 0) return null;
              return (
                <div key={region}>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">{region} India</h3>
                  <div className="flex flex-wrap gap-2">
                    {regionCities.map((c) => (
                      <a
                        key={c.slug}
                        href={`/website-development/${c.slug}`}
                        className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-muted ring-1 ring-white/10 transition-all hover:text-primary hover:ring-primary/40"
                      >
                        Website Development in {c.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Tech & Platforms
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Built on the <span className="gradient-text">Right Technology</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((p, i) => (
              <Reveal key={p.name} direction="up" delay={i * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-primary/30">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{p.desc}</p>
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
              <Sparkles size={26} className="mx-auto mb-4 text-primary" />
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Your Website Could Be Live in <span className="gradient-text">5 Days</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Flat 25% off this month — websites from ₹3,749. No hidden fees, no surprises, just a
                website that brings you customers.
              </p>
              <a
                href="https://wa.me/919465568342?text=Hi!%20I%27d%20like%20to%20claim%20the%2025%25%20off%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Website Development — Questions Answered"
        subheading="Everything business owners ask us before getting a website."
        items={faqs}
      />

      <Footer />
    </>
  );
}
