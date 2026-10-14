const http = require("http");
const fs = require("fs");
const socket = require("socket.io");

const hostname = "127.0.0.1";
const port = 3000;

const readStream = fs.createReadStream("src/Index.html", "utf-8");
const server = http.createServer((req, res) => {
  readStream.pipe(res);
});

var io = socket(server);
io.sockets.on("connection", skt => {
  setInterval(() => {
    let dataToBeSent = new Date();
    console.log(dataToBeSent);
    skt.emit("msg_from_server_peer", dataToBeSent);
  }, 2000);
});

server.listen(port, hostname, () => {
  console.log(`Server running @ port - ${port}`);
});
