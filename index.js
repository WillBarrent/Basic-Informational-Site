const http = require("http");
const url = require("url");
const fs = require("fs/promises");

const server = http.createServer();

server.on("request", async (req, res) => {
  const parsed_url = url.parse(req.url, true);
  let pathname = parsed_url.pathname;

  if ((pathname === "/")) {
    pathname = "./index.html";
  } else if (pathname === '/about') {
    pathname = "./about.html";
  } else if (pathname === '/contact') {
    pathname = "./contact-me.html";
  } else {
    pathname = "./404.html";
  }

  try {
    const data = await fs.readFile(pathname, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
  } catch (e) {
    console.error(e);
  }

  return res.end();
});

server.listen(8080);
