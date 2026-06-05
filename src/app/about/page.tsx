import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Website Development India. Professional web developer building stunning websites for Indian businesses since 2025.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              About Me
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Building Websites That{" "}
              <span className="gradient-text">Grow Businesses</span>
            </h1>
            <p className="mt-4 text-lg text-muted">
              I help Indian small businesses establish their online presence with
              stunning, fast, and affordable websites.
            </p>
          </div>

          <div className="mt-16 space-y-8 text-base leading-relaxed text-muted">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground">My Story</h2>
              <p className="mt-3">
                I started Website Development India because I saw a huge gap:
                thousands of Indian small businesses don't have a website. Either
                they think it's too expensive, too complicated, or they don't see
                the value.
              </p>
              <p className="mt-3">
                I'm here to change that. I build professional, SEO-optimized
                websites starting at ₹4,999 — delivered in 5-7 days. No hidden
                fees, no complicated jargon, just a beautiful website that helps
                your business grow.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground">What I Do</h2>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Business websites — professional multi-page sites
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  E-commerce stores — full online stores with payments
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Landing pages — high-converting single-page sites
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Website redesign — modernize your existing site
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  SEO optimization — rank higher on Google
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground">Why Work With Me</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5">
                  <p className="text-2xl font-bold text-primary">5-7 Days</p>
                  <p className="text-sm text-muted">Average delivery time</p>
                </div>
                <div className="rounded-xl bg-white p-5">
                  <p className="text-2xl font-bold text-primary">₹4,999</p>
                  <p className="text-sm text-muted">Starting price</p>
                </div>
                <div className="rounded-xl bg-white p-5">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted">Satisfaction guaranteed</p>
                </div>
                <div className="rounded-xl bg-white p-5">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted">Projects delivered</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
              <h2 className="text-xl font-semibold text-foreground">
                Ready to Get Started?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Let's build your website today. Starting at ₹4,999.
              </p>
              <a
                href="https://wa.me/919465568342"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
