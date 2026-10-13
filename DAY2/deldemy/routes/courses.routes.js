var express = require("express");
var router = express.Router();
const courses = require("../models/courses.model.js");

/* GET home page. */
router.get("/courses", function (req, res, next) {
  res.json(courses);
});

module.exports = router;
