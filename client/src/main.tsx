import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages arrive prerendered (scripts/prerender.mjs); hydrate them instead of re-drawing.
if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app);
else createRoot(rootEl).render(app);
