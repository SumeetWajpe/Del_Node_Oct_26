var express = require("express");
var router = express.Router();
const courses = require("../models/courses.model.js");

/* GET home page. */
router.get("/courses", function (req, res, next) {
  res.json(courses);
});

router.post("/newcourse", function (req, res, next) {
  var newcourse = req.body;
  courses.push(newcourse);
  res.status(201).send("New course added successfully !");
});
module.exports = router;
