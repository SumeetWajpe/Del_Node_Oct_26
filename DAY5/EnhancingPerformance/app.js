const cluster = require("node:cluster");
const http = require("node:http");
const numCPUs = require("node:os").availableParallelism();
const hostname = "127.0.0.1";
const port = 3000;
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const server = http
    .createServer((req, res) => {
      console.log(`Worker ${process.pid} handling the request !`);

      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
  server.listen(port, hostname, () => {
    console.log(`Server running at port 3000 !`);
  });
}
// const cluster = require("cluster");
// const http = require("http");

// const os = require("os");

// let numOfCores = os.cpus().length;
// console.log(numOfCores);
// const hostname = "127.0.0.1";
// const port = 3000;

// if (cluster.isPrimary) {
//   console.log(`Primary process ${process.pid} running !`);
//   cluster.fork();
// } else {
//   console.log(`Worker process ${process.pid} running !`);
//   const server = http.createServer((req, res) => {
//     if (req.url == "/non-blocking") {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/plain");
//       res.end("Non blocking response !");
//     } else if (req.url == "/blocking") {
//       setTimeout(function () {
//         for (let index = 0; index < 6000000000; index++) {}
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Blocking response !");
//       });
//     }
//   });
//   server.listen(port, hostname, () => {
//     console.log(`Server running at port 3000 !`);
//   });
// }
