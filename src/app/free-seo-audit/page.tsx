import type { Metadata } from "next";
import FreeSeoAuditClient from "./FreeSeoAuditClient";

export const metadata: Metadata = {
  title: "Free SEO Audit",
  description:
    "Run a free instant SEO audit on any website. Checks titles, meta descriptions, mobile viewport, images, robots.txt, sitemap, page speed signals and more.",
  openGraph: {
    title: "Free SEO Audit | Website Development India",
    description:
      "Get an instant SEO health score for any website — titles, meta, mobile, images, robots.txt, sitemap and more.",
  },
};

export default function FreeSeoAuditPage() {
  return <FreeSeoAuditClient />;
}
