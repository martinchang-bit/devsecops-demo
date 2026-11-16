const http = require("http");
const { execFile } = require("child_process");

http.createServer((req, res) => {
  const host = new URL(req.url, "http://localhost").searchParams.get("host") || "";
  if (!/^[a-zA-Z0-9.-]{1,253}$/.test(host)) {
    res.statusCode = 400;
    return res.end("invalid host");
  }
  execFile("ping", ["-c", "1", host], (err, out) => res.end(out));
}).listen(3000);
