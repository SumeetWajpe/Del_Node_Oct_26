const express = require("express");
const app = express();
const port = 3000;
// GET / POST / PUT / DELETE
app.get("/", (req, res) => {
  res.send("Hello World - Express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
