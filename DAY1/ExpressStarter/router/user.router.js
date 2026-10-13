const express = require("express");
const router = express.Router();
var user = { name: "Sumeet", location: "Pune" };

router.get("/user", (req, res) => {
  res.json(user);
});

router.get("/userdetails", (req, res) => {
  res.render("index", { heading: "User info goes here !" }); // ??
});

router.post("/newuser", (req, res) => {
  console.log(req.body);
  console.log("Ur post request handled !");
  res.send("Success !!!");
});
module.exports = router;
