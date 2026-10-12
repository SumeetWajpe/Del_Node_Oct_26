const express = require("express");
const app = express();
const port = 3000;
// GET / POST / PUT / DELETE
app.get("/", (req, res) => {
  //res.send("<h1>Hello World - Express!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.get("/user", (req, res) => {
  var user = { name: "Sumeet", location: "Pune" };
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
