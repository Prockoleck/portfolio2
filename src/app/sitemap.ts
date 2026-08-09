import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";

const BASE = "https://websitedevelopmentindia.online";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
  { path: "/free-seo-audit", priority: 0.9 },
  { path: "/backlink-kit", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date ?? Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
