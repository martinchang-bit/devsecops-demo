const http = require("http");
const { exec } = require("child_process");

http.createServer((req, res) => {
  const host = new URL(req.url, "http://localhost").searchParams.get("host");
  exec("ping -c 1 " + host, (err, out) => res.end(out));
}).listen(3000);
