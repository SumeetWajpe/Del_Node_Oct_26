const http = require("http"); // http -> builtin module
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.readFile("Index.html", (err, dataFromFile) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(dataFromFile);
      }
    });
  } else if (req.url == "/stylesheet.css") {
    fs.readFile("stylesheet.css", (err, dataFromFile) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(dataFromFile);
      }
    });
  } else if (req.url == "/user") {
    var user = { name: "Sumeet", location: "Pune" };
    var JSONuser = JSON.stringify(user);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSONuser);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Content not found !");
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
