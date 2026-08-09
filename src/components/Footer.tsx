import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <img
            src="/pfp.jpg"
            alt="Logo"
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">websitedevelopmentindia</span>
        </div>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} websitedevelopmentindia. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted">
          <Link href="/free-seo-audit" className="transition-colors hover:text-primary">
            Free SEO Audit
          </Link>
          <Link href="/backlink-kit" className="transition-colors hover:text-primary">
            Backlink Kit
          </Link>
          <a href="#" className="transition-colors hover:text-primary">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
