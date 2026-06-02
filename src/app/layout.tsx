import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "websitedevelopmentindia",
  description:
    "Professional web development services. Get a stunning, fast, and SEO-optimized website for your business. Starting at ₹4,999.",
  keywords: [
    "web developer",
    "website design",
    "ecommerce website",
    "business website",
    "SEO optimization",
    "React developer",
    "Next.js developer",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
  title: "websitedevelopmentindia",
    description:
      "Professional web development services. Get a stunning, fast, and SEO-optimized website for your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-foreground antialiased selection:bg-primary selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
