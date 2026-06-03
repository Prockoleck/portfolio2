import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web development services. Basic websites starting at ₹4,999, Standard at ₹9,999, and Premium at ₹19,999. No hidden fees, 100% satisfaction guaranteed.",
  openGraph: {
    title: "Website Pricing | Affordable Web Development Packages",
    description:
      "Transparent pricing for web development services starting at ₹4,999. No hidden fees, 100% satisfaction guaranteed.",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
