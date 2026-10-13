const express = require("express");
const userRouter = require("./router/user.router.js");
const app = express();
const port = 3000;
// GET / POST / PUT / DELETE
// app.get("/", (req, res) => {
//   //res.send("<h1>Hello World - Express!</h1>");
//   res.sendFile("Index.html", { root: __dirname });
// });

// app.get("/stylesheet.css", (req, res) => {
//   //res.send("<h1>Hello World - Express!</h1>");
//   res.sendFile("stylesheet.css", { root: __dirname });
// });
// Middleware
app.use(express.static("public"));
app.use(express.json()); // parses json body in the incoming request populates req.body
app.use("/", userRouter);

// view engine
app.set("view engine", "pug");
app.set("views", "views");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
