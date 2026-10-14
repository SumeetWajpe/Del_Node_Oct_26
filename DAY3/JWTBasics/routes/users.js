var express = require("express");
var router = express.Router();
const authMiddleware = require("../middlewares/auth/auth.js");
/* GET users listing. */
router.get("/", authMiddleware, function (req, res, next) {
  // check for auth
  res.send("respond with a resource");
});

module.exports = router;
