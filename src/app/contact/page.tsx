import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for web development services. Contact us via WhatsApp, email, or our contact form. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | Web Development India",
    description:
      "Get in touch for web development services. Contact us via WhatsApp, email, or our contact form.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
