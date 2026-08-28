/* Minimal static server for the MFA wireframe pack.
   Node built-ins only - no dependencies to install. */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("ok");
  }
  fs.readFile(FILE, (err, buf) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("index.html could not be read");
    }
    // single-page app: every route serves the same document
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff"
    });
    res.end(buf);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("MFA wireframes listening on port " + PORT);
});
