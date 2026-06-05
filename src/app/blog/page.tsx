import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Web development tips, pricing guides, and business advice for Indian small businesses. Learn how to grow your business online.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              Blog
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Web Development{" "}
              <span className="gradient-text">Tips & Guides</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Practical advice for Indian small businesses on websites, digital
              marketing, and growing your online presence.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group glass-card block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight group-hover:text-primary transition-colors sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read More <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
