import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Web Development Services | Business Websites & E-commerce from ₹4,999",
  description:
    "Web design and development services in India: business websites, e-commerce stores, portfolio sites, landing pages, redesign, SEO and website maintenance. Starting at ₹4,999, delivered in 5-7 days.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Design & Development Services | Business Websites & E-commerce",
    description:
      "Professional website design and development services: business websites, e-commerce stores, portfolio sites, landing pages, redesign and SEO.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
