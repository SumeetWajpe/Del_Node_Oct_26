const express = require("express");
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
app.use(express.json()); // parses json body in the incoming request

app.get("/user", (req, res) => {
  var user = { name: "Sumeet", location: "Pune" };
  res.json(user);
});

app.post("/newuser", (req, res) => {
  console.log(req.body);
  console.log("Ur post request handled !");
  res.send("Success !!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
