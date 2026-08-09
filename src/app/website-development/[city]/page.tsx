import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Rocket } from "lucide-react";
import { cities, getCity } from "@/lib/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FaqSection, { FaqJsonLd } from "@/components/FaqAccordion";

interface Props {
  params: Promise<{ city: string }>;
}

const SITE = "https://websitedevelopmentindia.online";

const services = [
  { title: "Business Websites", desc: "Professional multi-page sites that build trust and pull in leads 24/7." },
  { title: "E-commerce Stores", desc: "Online stores with payments, inventory and a checkout that converts." },
  { title: "Landing Pages", desc: "Single-page pages built for ads, launches and one clear action." },
  { title: "Website Redesign", desc: "Modernize an old, slow site into something fast and current." },
  { title: "SEO Optimization", desc: "On-page and technical SEO so your city searches find you." },
  { title: "Maintenance & Support", desc: "Updates, backups and fixes so your site keeps working." },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn your business, your customers and your goals." },
  { step: "02", title: "Design", desc: "You get a mobile-first design that matches your brand." },
  { step: "03", title: "Develop", desc: "We build with modern tech — fast, secure, SEO-ready." },
  { step: "04", title: "Launch", desc: "We put it live, connect your domain and set up analytics." },
  { step: "05", title: "Grow", desc: "Ongoing tweaks and SEO so enquiries keep coming." },
];

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `Website Development Company in ${city.name} | Websites from ₹4,999`;
  const description = `Professional website development company in ${city.name}. ${city.angle} Fast, mobile-responsive, SEO-optimized websites from ₹4,999 — delivered in 5-7 days.`;
  return {
    title,
    description,
    alternates: { canonical: `/website-development/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/website-development/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug);
  const waLink = `https://wa.me/919465568342?text=${encodeURIComponent(
    `Hi! I'm looking for a website development company in ${city.name}. Can you share more details?`
  )}`;

  const faqs = [
    {
      q: `How much does website development cost in ${city.name}?`,
      a: `Websites in ${city.name} start from ₹4,999 for a professional business website, ₹9,999 for a standard site, and ₹19,999 for a premium or e-commerce build. There are no hidden fees — the price you see is what you pay.`,
    },
    {
      q: `Do you really build websites for businesses in ${city.name}?`,
      a: `Yes. We work with clients across ${city.name} — from ${city.areas.slice(0, 3).join(", ")} to the rest of the city — and across India. Everything is done online: we discuss on WhatsApp, share design previews, and deliver your completed website remotely.`,
    },
    {
      q: `How long does it take to build a website in ${city.name}?`,
      a: `Most business websites in ${city.name} are delivered in 5-7 days. E-commerce stores and larger custom builds usually take 7-10 days. You'll see progress every step of the way.`,
    },
    {
      q: `Will my ${city.name} website work on mobile phones?`,
      a: `Every website we build is fully mobile-responsive — it looks great and loads fast on the phones most of your ${city.name} customers use to search.`,
    },
    {
      q: `Does the price include hosting, domain and SEO?`,
      a: `Our packages include the website design, development and on-page SEO basics. Domain and hosting are separate (usually ₹800-3,000/year combined) unless you choose a package that includes them.`,
    },
    {
      q: `Which businesses in ${city.name} do you work with?`,
      a: `We build websites for businesses across ${city.industries.slice(0, 4).join(", ")} and more — whatever you sell, we'll give you a website that sells it for you.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Website Development Company in ${city.name}`,
    description: `Professional website development services in ${city.name}, India. Websites from ₹4,999, delivered in 5-7 days.`,
    url: `${SITE}/website-development/${city.slug}`,
    areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
    priceRange: "₹₹",
    offers: { "@type": "Offer", price: "4999", priceCurrency: "INR", description: "Website development starting at ₹4,999" },
  };

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
              Website Development Company in {city.name}
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Website Development Company in <span className="gradient-text">{city.name}</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {city.angle} Fast, mobile-friendly and SEO-optimized websites from ₹4,999,
              delivered in 5-7 days.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Get a Quote for {city.name} <ArrowRight size={16} />
              </a>
              <a
                href="/website-development-cost"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                See Website Costs
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why need a website */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Why It Matters
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Your {city.name} Business Needs a Website
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Your customers in {city.name} search Google before they call. If you don&apos;t show up,
                your competitors do.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Get found on Google", desc: `When someone searches "${city.name} ${city.industries[0].toLowerCase()} services" or "website development near me", a professional site puts you in front of them.` },
              { title: "Look more trustworthy", desc: "A polished website makes a small business look established. Customers judge your credibility by your website before they ever visit you." },
              { title: "Work while you sleep", desc: "Your website takes enquiries 24/7 — while you serve customers, sleep, or run your business. It never takes a day off." },
            ].map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 0.08}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all hover:border-primary/30">
                  <CheckCircle2 size={20} className="mb-3 text-primary" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Web Development Services in {city.name}
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything a Business in {city.name} Needs Online
              </h2>
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

      {/* Process */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                How It Works
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                From Idea to Launch in <span className="gradient-text">5 Days</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} direction="up" delay={i * 0.06}>
                <div className="glass-card h-full rounded-2xl p-5">
                  <span className="text-2xl font-bold text-primary">{p.step}</span>
                  <h3 className="mt-2 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + industries */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal direction="left">
            <div className="glass-card h-full rounded-2xl p-8">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                <MapPin size={14} /> Areas We Serve
              </span>
              <h3 className="text-xl font-bold tracking-tight">All of {city.name}, Not Just the Centre</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We build websites for businesses right across {city.name} — including{" "}
                {city.areas.join(", ")} and every neighbourhood in between. If you&apos;re in {city.name},
                we can work with you.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {city.areas.map((area) => (
                  <span key={area} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-muted ring-1 ring-white/10">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="glass-card h-full rounded-2xl p-8">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                <Rocket size={14} /> Who We Help
              </span>
              <h3 className="text-xl font-bold tracking-tight">Industries We Work With in {city.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                From {city.industries[0].toLowerCase()} to {city.industries[1].toLowerCase()}, we understand
                what businesses in {city.name} need to win customers online.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {city.industries.map((ind) => (
                  <span key={ind} className="rounded-full bg-primary/5 px-3 py-1.5 text-xs text-primary ring-1 ring-primary/20">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              Pricing
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Websites in {city.name} from <span className="gradient-text">₹4,999</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Transparent pricing — no hidden fees. Compare every package and see exactly what&apos;s
              included for your {city.name} business.
            </p>
            <a
              href="/website-development-cost"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
            >
              Website Development Cost in India <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading={`Website Development Questions in ${city.name}`}
        subheading="Straight answers about websites for businesses in the city."
        items={faqs}
      />

      {/* Other cities */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                Across India
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Website Development in <span className="gradient-text">Every Major City</span>
              </h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCities.map((c) => (
              <a
                key={c.slug}
                href={`/website-development/${c.slug}`}
                className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-muted ring-1 ring-white/10 transition-all hover:border-primary/30 hover:text-primary"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
