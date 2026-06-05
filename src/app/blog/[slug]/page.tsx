import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPost, blogPosts } from "@/lib/blog/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

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

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="pt-4 text-xl font-semibold text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="pt-2 text-lg font-semibold text-foreground">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
            <h3 className="text-xl font-semibold">Need a Website for Your Business?</h3>
            <p className="mt-2 text-sm text-muted">
              Get a stunning, SEO-optimized website starting at just ₹4,999.
              Delivered in 5-7 days.
            </p>
            <a
              href="https://wa.me/919465568342"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark"
            >
              Get Started on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
