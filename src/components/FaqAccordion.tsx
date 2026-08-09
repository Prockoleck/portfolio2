export interface FaqItem {
  q: string;
  a: string;
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function FaqSection({
  items,
  heading,
  subheading,
}: {
  items: FaqItem[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            FAQ
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {heading ?? "Frequently Asked Questions"}
          </h2>
          {subheading && <p className="mx-auto mt-4 max-w-2xl text-muted">{subheading}</p>}
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="glass-card group rounded-2xl p-5 open:ring-1 open:ring-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
