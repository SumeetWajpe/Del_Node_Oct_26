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
router.get("/coursedetails/:id", async function (req, res) {
  try {
    let courseId = +req.params.id;
    console.log(courseId);
    var theCourse = await coursesModel.getCourseById(courseId);
    if (theCourse) {
      res.json(theCourse);
    } else {
      return res.status(404).send("Course not found !");
    }
  } catch (error) {}
});

router.post("/newcourse", function (req, res) {
  var newcourse = req.body;
  courses.push(newcourse);
  res.status(201).send("New course added successfully !");
});

router.delete("/deletecourse/:id", async function (req, res) {
  try {
    let courseId = +req.params.id;
    const deleted = await coursesModel.deleteCourse(courseId);
    if (!deleted) return res.status(404).json({ error: "Course not found !" });

    res.status(204).json(courses);
  } catch (error) {}
});
module.exports = router;
