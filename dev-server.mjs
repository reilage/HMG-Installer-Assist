// Local test server: `npm run dev`, then open http://localhost:3000
// Serves public/ and runs the api/ functions the same way Vercel does. Reads settings from .env if present.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(new URL(import.meta.url).pathname);
const pub = path.join(root, "public");
const PORT = +process.env.PORT || 3000;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".json": "application/json", ".webmanifest": "application/manifest+json",
  ".png": "image/png", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".css": "text/css" };

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  try {
    const api = url.pathname.match(/^\/api\/([a-z-]+)$/);
    if (api) {
      const file = path.join(root, "api", api[1] + ".js");
      if (!fs.existsSync(file)) { res.statusCode = 404; return res.end("Not found"); }
      const mod = await import(file);
      return await mod.default(req, res);
    }
    let p = path.normalize(path.join(pub, decodeURIComponent(url.pathname)));
    if (!p.startsWith(pub)) { res.statusCode = 403; return res.end(); }
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
    if (!fs.existsSync(p)) { res.statusCode = 404; return res.end("Not found"); }
    res.setHeader("Content-Type", TYPES[path.extname(p)] || "application/octet-stream");
    fs.createReadStream(p).pipe(res);
  } catch (e) {
    console.error(e);
    if (!res.headersSent) { res.statusCode = 500; res.end("Server error"); }
  }
}).listen(PORT, () => console.log(`HMG Installer Assistant on http://localhost:${PORT}${process.env.ANTHROPIC_API_KEY ? "" : " (no ANTHROPIC_API_KEY: Ask is off)"}`));
