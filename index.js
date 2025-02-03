const https = require("https");
const url = require("url");
const fs = require("fs/promises");

const server = https.createServer();

server.on("request", (req, res) => {

});

server.listen(8080);