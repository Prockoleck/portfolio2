const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Vercel",
  "Framer Motion",
  "WordPress",
  "SEO",
  "Page Speed",
];

export default function TechStackMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-6"
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {techs.map((tech) => (
              <span
                key={`${dup}-${tech}`}
                className="mx-4 flex items-center gap-8 whitespace-nowrap text-sm font-medium tracking-wide text-muted"
              >
                {tech}
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
