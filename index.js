const http = require("http");
const url = require("url");
const fs = require("fs/promises");

const server = http.createServer();

server.on("request", async (req, res) => {
  const parsed_url = url.parse(req.url, true);
  let filename = "./" + parsed_url.pathname;

  if ((filename = "./")) {
    filename = "./index.html";
  }

  try {
    const data = await fs.readFile(filename, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
  } catch (e) {
    const data = await fs.readFile("./404.html", { encoding: "utf-8" });
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(data);
  }

  return res.end();
});

server.listen(8080);
