// Build step: render every real route to static HTML so crawlers, link previews and
// carrier (A2P) checks see the page content without running JavaScript.
// Output: dist/prerender/<route>.html + dist/prerender/routes.json (the list the server trusts).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const template = fs.readFileSync(path.join(root, "dist/public/index.html"), "utf-8");
const ssr = await import(pathToFileURL(path.join(root, "dist/ssr/entry-server.js")).href);

const pages = [
  "/", "/custom-ironwork", "/services", "/portfolio", "/before-after", "/our-team",
  "/cost-estimator", "/reviews", "/faq", "/areas-we-serve", "/blog", "/about",
  "/contact", "/privacy", "/terms",
  ...ssr.SERVICES.map((s) => `/services/${s.slug}`),
  ...ssr.CITIES.map((c) => `/areas/${c.slug}`),
  ...ssr.BLOG_ARTICLES.map((a) => `/blog/${a.slug}`),
];
const routes = [
  ...["", "/es", "/pt"].flatMap((prefix) =>
    pages.map((p) => (prefix ? (p === "/" ? prefix : prefix + p) : p)),
  ),
  ...Object.keys(ssr.PROPOSALS).map((id) => `/proposal/${id}`),
];

const outDir = path.join(root, "dist/prerender");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const fileFor = (route) => (route === "/" ? "index.html" : route.slice(1).replace(/\//g, "__") + ".html");
const write = (route, file) => {
  const body = ssr.render(route);
  if (!body || body.length < 200) throw new Error(`Empty render for ${route}`);
  const html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (html === template) throw new Error("index.html has no empty #root to fill");
  fs.writeFileSync(path.join(outDir, file), html);
};

for (const route of routes) write(route, fileFor(route));
// The 404 page (any unknown path renders the NotFound route).
write("/__not-found__", "404.html");

fs.writeFileSync(
  path.join(outDir, "routes.json"),
  JSON.stringify(Object.fromEntries(routes.map((r) => [r, fileFor(r)]))),
);
// Page titles/descriptions from the content data, used by the server's meta injection.
const pageMeta = {};
for (const a of ssr.BLOG_ARTICLES) {
  const full = `${a.title} | Innovate Building`;
  pageMeta[`/blog/${a.slug}`] = {
    title: full.length <= 60 ? full : a.title,
    description: a.metaDescription || a.excerpt,
    type: "article",
  };
}
fs.writeFileSync(path.join(outDir, "meta.json"), JSON.stringify(pageMeta));

// Sitemap from the same route list (English pages; /es and /pt are linked via hreflang).
const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .map((p) => `  <url><loc>https://innovatebuildinginc.com${p}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(root, "dist/public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`Prerendered ${routes.length} routes + 404`);
