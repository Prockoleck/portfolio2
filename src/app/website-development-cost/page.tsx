import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Receipt, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqSection, { FaqJsonLd } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Website Development Cost in India (2026) | Starting ₹4,999",
  description:
    "Website development cost in India in 2026 — transparent prices for business websites, e-commerce stores and landing pages. From ₹4,999, no hidden fees. See what affects the price, GST and recurring costs.",
  alternates: { canonical: "/website-development-cost" },
  openGraph: {
    title: "Website Development Cost in India (2026) | Starting ₹4,999",
    description:
      "Transparent website development cost in India: business sites from ₹4,999, e-commerce from ₹19,999. No hidden fees.",
    url: "https://websitedevelopmentindia.online/website-development-cost",
  },
};

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    tagline: "Perfect for getting online fast",
    features: ["Up to 5 pages", "Mobile-responsive design", "Contact form", "Google Maps integration", "Basic on-page SEO", "Live in 5-7 days"],
    featured: false,
  },
  {
    name: "Standard",
    price: "₹9,999",
    tagline: "The most popular choice",
    features: ["Up to 10 pages", "Custom design", "Blog setup", "WhatsApp chat integration", "Advanced SEO setup", "Google Analytics + Search Console", "Live in 7-10 days"],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    tagline: "Full e-commerce & custom builds",
    features: ["E-commerce store", "Payment gateway", "Product catalog & inventory", "Admin dashboard", "Advanced SEO", "Priority support", "Live in 10-14 days"],
    featured: false,
  },
];

const factors = [
  { title: "Number of pages", desc: "A 5-page business site costs far less than a 50-page catalogue. Every page means more design and content work." },
  { title: "E-commerce features", desc: "Payment gateways, product uploads, inventory and order management add both value and cost — and they're worth every rupee." },
  { title: "Design complexity", desc: "A unique custom design with animations costs more than a clean template. Great design converts more visitors into customers." },
  { title: "Extra integrations", desc: "Booking systems, multi-language support, custom forms, CRM links — each integration adds to the total." },
  { title: "SEO work", desc: "Basic on-page SEO is included. Deep keyword research, content and ongoing optimization are priced separately." },
  { title: "Timeline", desc: "Standard builds take 5-7 days. Rush orders and very large builds cost more accordingly." },
];

const recurring = [
  { title: "Domain name", desc: "₹700-1,500/year depending on the extension (.com, .in, .online)." },
  { title: "Hosting", desc: "₹2,000-6,000/year for reliable, fast Indian or global hosting." },
  { title: "SSL certificate", desc: "Usually free with your hosting — essential for trust and rankings." },
  { title: "Maintenance", desc: "₹500-2,000/month if you want updates, backups and small fixes handled." },
];

const faqs = [
  {
    q: "How much does website development cost in India in 2026?",
    a: "A professional business website in India costs between ₹4,999 and ₹19,999 for most small and mid-sized businesses. Simple 5-page sites start at ₹4,999, standard sites at ₹9,999, and premium or e-commerce builds at ₹19,999. Large custom projects cost more and are quoted individually.",
  },
  {
    q: "Can I really get a website under ₹5,000 in India?",
    a: "Yes — our Basic plan is ₹4,999 for a professional 5-page business website, and with the current 25% discount it's ₹3,749. You get a mobile-responsive, SEO-ready site delivered in 5-7 days, with no hidden charges.",
  },
  {
    q: "How much does a small business website cost in India?",
    a: "For most small businesses in India — shops, clinics, salons, restaurants, local services — a website costs ₹4,999 to ₹9,999. That covers a professional design, mobile optimization, a contact form and basic SEO.",
  },
  {
    q: "How much does an e-commerce website cost in India?",
    a: "An e-commerce website in India typically costs ₹19,999 and up, depending on the number of products and features. That includes the online store, payment gateway, shopping cart and order management.",
  },
  {
    q: "What is the GST rate on website development services in India?",
    a: "Website development is a service, so GST applies at the standard 18% rate under SAC code 998313. We issue proper GST invoices, so you can claim input tax credit where applicable. Rates can change, so check with your CA for the latest position.",
  },
  {
    q: "What is the HSN code for website development?",
    a: "Website development services are classified under HSN Chapter 99, service code 998313 (web design and development services). Your GST invoice should mention this code.",
  },
  {
    q: "Is TDS applicable on website development charges?",
    a: "If you're a business paying a developer or development company, TDS may apply — typically 2% under Section 194C for a contract for services, once payments exceed the threshold. Individuals hiring for personal use don't need to worry about TDS. Verify with your accountant.",
  },
  {
    q: "Are domain and hosting included in the website development cost?",
    a: "Website development packages cover the design, build and on-page SEO. Domain and hosting are usually separate — roughly ₹800-3,000/year combined — unless you pick a package that includes them. We'll tell you exactly what's included before you pay.",
  },
  {
    q: "How much does website maintenance cost per month?",
    a: "Maintenance — updates, backups, security checks and small content changes — typically costs ₹500-2,000 per month in India. Many businesses start without it and add it later.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Website Development India — Cost Guide",
  description: "Transparent website development cost in India. Websites from ₹4,999 with no hidden fees.",
  url: "https://websitedevelopmentindia.online/website-development-cost",
  priceRange: "₹₹",
  offers: { "@type": "AggregateOffer", lowPrice: "4999", highPrice: "19999", priceCurrency: "INR" },
};

export default function WebsiteDevelopmentCostPage() {
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
              Website Development Cost in India
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Website Development Cost in India <span className="gradient-text">2026</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              The honest, transparent breakdown. Business websites from ₹4,999, e-commerce from
              ₹19,999 — no hidden fees, no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Packages
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What a Website <span className="gradient-text">Actually Costs</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} direction="up" delay={i * 0.1}>
                <div
                  className={`glass-card h-full rounded-2xl p-8 transition-all hover:shadow-xl ${
                    plan.featured ? "border-primary/40 shadow-lg shadow-primary/10" : "hover:border-primary/30"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-sm font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-xs text-muted">{plan.tagline}</p>
                  <p className="mt-4 text-4xl font-bold tracking-tight text-primary">{plan.price}</p>
                  <ul className="mt-6 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted">
                        <BadgeCheck size={14} className="mt-0.5 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919465568342?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} website package (${plan.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                      plan.featured
                        ? "bg-primary text-black shadow-lg shadow-primary/25 hover:bg-primary-dark"
                        : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    Get the {plan.name} Plan <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What affects cost */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                What Drives the Price
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What Affects Website Development <span className="gradient-text">Cost</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((f, i) => (
              <Reveal key={f.title} direction="up" delay={(i % 3) * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-primary/30">
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring costs */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                One-Time vs Recurring
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Plan for These <span className="gradient-text">Yearly Costs</span> Too
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {recurring.map((r, i) => (
              <Reveal key={r.title} direction="up" delay={(i % 2) * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/[0.06]">
                  <Receipt size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <div className="glass-card rounded-2xl p-10">
              <ShieldCheck size={26} className="mx-auto mb-4 text-primary" />
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                No Hidden Fees. <span className="gradient-text">Ever.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                The price we quote is the price you pay. You get a GST invoice, a 30-day tweaks
                window, and a website you actually own.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919465568342?text=Hi!%20I%27d%20like%20a%20quote%20for%20my%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
                >
                  Get a Free Quote <ArrowRight size={16} />
                </a>
                <a
                  href="/website-development"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
                >
                  See Website Development Services
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Website Development Cost — Questions Answered"
        subheading="Every pricing question business owners ask us."
        items={faqs}
      />

      <Footer />
    </>
  );
}
