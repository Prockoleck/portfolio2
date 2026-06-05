import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Website Development India - ₹4,999 Websites in 5 Days",
    default: "Website Development India | Professional Websites Starting at ₹4,999",
  },
  description:
    "Get a stunning, lightning-fast website for your business from ₹4,999. 5-7 day delivery, mobile responsive, SEO-optimized. Web development services across India.",
  metadataBase: new URL("https://websitedevelopmentindia.online"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Website Development India | ₹4,999 Websites in 5 Days",
    description:
      "Get a stunning, lightning-fast website for your business from ₹4,999. 5-7 day delivery, mobile responsive, SEO-optimized.",
    type: "website",
    locale: "en_IN",
    siteName: "Website Development India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development India | ₹4,999 Websites in 5 Days",
    description:
      "Get a stunning, lightning-fast website for your business from ₹4,999. 5-7 day delivery, mobile responsive, SEO-optimized.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <body className="bg-white text-foreground antialiased selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Website Development India",
              description:
                "Professional web development services in India. Stunning, fast, and SEO-optimized websites.",
              url: "https://websitedevelopmentindia.online",
              areaServed: "IN",
              priceRange: "₹₹",
              offers: {
                "@type": "Offer",
                price: "4999",
                priceCurrency: "INR",
                description: "Website development starting at ₹4,999",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
  {children}
  <WhatsAppCTA />
</Providers>
      </body>
    </html>
  );
}
