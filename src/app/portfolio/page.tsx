import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of web development projects including e-commerce stores, business websites, and real estate platforms. See the quality and craftsmanship behind every site we build.",
  openGraph: {
    title: "Web Development Portfolio | Recent Projects",
    description:
      "View our portfolio of web development projects including e-commerce stores, business websites, and real estate platforms.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
