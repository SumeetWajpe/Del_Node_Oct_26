var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");
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
      // send html + course details ??
      res.render("coursedetails", { theCourse });
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

router.get("/video", (req, res) => {
  // access to the video
  const videoPath = path.resolve(path.dirname(".") + "/videos", "bunny.mp4");
  const videoSize = fs.statSync(videoPath).size; // 5.4 MB
  const CHUNK_SIZE = 10 ** 6; // 1MB
  console.log(videoSize);

  // range
  const range = req.headers.range;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;

  const headers = {
    "Content-Type": "video/mp4",
    "content-range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

module.exports = router;
