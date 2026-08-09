import { NextRequest, NextResponse } from "next/server";
import { isIP } from "node:net";

export const dynamic = "force-dynamic";

const MAX_HTML = 800_000;
const MAX_ROBOTS = 30_000;
const TIMEOUT_MS = 10_000;

function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === "localhost" || h.endsWith(".localhost")) return true;
  if (isIP(h)) {
    if (h.includes(":")) return true;
    const p = h.split(".").map(Number);
    if (p[0] === 0 || p[0] === 10 || p[0] === 127 || p[0] >= 224) return true;
    if (p[0] === 100 && p[1] >= 64 && p[1] <= 127) return true;
    if (p[0] === 169 && p[1] === 254) return true;
    if (p[0] === 172 && p[1] >= 16 && p[1] <= 31) return true;
    if (p[0] === 192 && p[1] === 168) return true;
    if (p[0] === 198 && (p[1] === 18 || p[1] === 19)) return true;
  }
  return false;
}

async function readCapped(res: Response, cap: number) {
  const reader = res.body?.getReader();
  if (!reader) return { text: "", truncated: false, length: 0 };
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      length += value.byteLength;
      if (length > cap) {
        chunks.push(value.subarray(0, cap - (length - value.byteLength)));
        break;
      }
      chunks.push(value);
    }
  }
  return { text: Buffer.concat(chunks).toString("utf8"), truncated: length > cap, length };
}

async function fetchLimited(
  url: string,
  cap: number
): Promise<{
  status: number;
  text: string;
  length: number;
  finalUrl: string;
  headers: Record<string, string>;
}> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; WebsiteDevIndiaAudit/1.0; +https://websitedevelopmentindia.online/free-seo-audit)",
        accept: "text/html,application/xhtml+xml,application/xml,text/plain,*/*",
      },
      cache: "no-store",
    });
    const headers: Record<string, string> = {};
    res.headers.forEach((value, key) => {
      headers[key] = value;
    });
    const body = await readCapped(res, cap);
    return { status: res.status, text: body.text, length: body.length, finalUrl: res.url, headers };
  } finally {
    clearTimeout(timer);
  }
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("url")?.trim() ?? "";
  if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(raw)) {
    return NextResponse.json({ error: "Enter a valid URL, e.g. https://yourwebsite.com" }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return NextResponse.json({ error: "That doesn't look like a valid URL." }, { status: 400 });
  }

  if (isBlockedHost(target.hostname)) {
    return NextResponse.json({ error: "Private or local addresses are not allowed." }, { status: 400 });
  }

  try {
    const [page, robots, sitemap] = await Promise.all([
      fetchLimited(target.toString(), MAX_HTML),
      fetchLimited(`${target.origin}/robots.txt`, MAX_ROBOTS).catch(() => ({
        status: null,
        text: "",
        length: 0,
        finalUrl: "",
        headers: {},
      })),
      fetchLimited(`${target.origin}/sitemap.xml`, 10_000).catch(() => ({
        status: null,
        text: "",
        length: 0,
        finalUrl: "",
        headers: {},
      })),
    ]);

    return NextResponse.json({
      requestedUrl: raw,
      finalUrl: page.finalUrl || target.toString(),
      status: page.status,
      headers: page.headers,
      robots: {
        status: robots.status,
        hasSitemapRef: /sitemap\s*:/i.test(robots.text.slice(0, MAX_ROBOTS)),
      },
      sitemap: {
        status: sitemap.status,
        isXml: /^\s*(?:<\?xml\b|<\s*urlset\b)/i.test(sitemap.text.slice(0, 2000)),
      },
      html: page.text,
      htmlLength: page.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Couldn't reach that website. Check the URL and try again." },
      { status: 502 }
    );
  }
}
