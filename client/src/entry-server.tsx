import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

/** Render one route to HTML at build time (prerender). Effects do not run here. */
export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}

export { SERVICES } from "./data/services";
export { CITIES } from "./data/cities";
export { BLOG_ARTICLES } from "./data/blog";
export { proposals as PROPOSALS } from "./data/proposals";
