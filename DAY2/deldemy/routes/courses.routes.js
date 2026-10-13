var express = require("express");
var router = express.Router();
const coursesModel = require("../models/courses.model.js");

/* GET home page. */
router.get("/courses", async function (req, res) {
  // Get the data from DB
  try {
    const courses = await coursesModel.getAllCourses();
    res.json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch courses !" });
  }
});
router.get("/coursedetails/:id", function (req, res) {
  let courseId = +req.params.id;
  console.log(courseId);
  var theCourse = courses.find(c => c.id == courseId);
  if (theCourse) {
    res.json(theCourse);
  } else {
    return res.status(404).send("Course not found !");
  }
});

router.post("/newcourse", function (req, res) {
  var newcourse = req.body;
  courses.push(newcourse);
  res.status(201).send("New course added successfully !");
});

router.delete("/deletecourse/:id", function (req, res) {
  let courseId = +req.params.id;
  let index = courses.findIndex(c => c.id == courseId);
  courses.splice(index, 1);
  res.json(courses);
});
module.exports = router;
