const http = require("http"); // http -> builtin module
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("Index.html", (err, dataFromFile) => {
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(dataFromFile);
    }
  });
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
