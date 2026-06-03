import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development services including business websites, e-commerce stores, portfolio sites, landing pages, redesign, and SEO optimization. Starting at ₹4,999.",
  openGraph: {
    title: "Web Development Services | Business Websites & E-commerce",
    description:
      "Professional web development services including business websites, e-commerce stores, portfolio sites, landing pages, redesign, and SEO optimization.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
