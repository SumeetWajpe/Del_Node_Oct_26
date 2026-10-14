require("dotenv").config();
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

let users = [];
let id = 1;
// constants
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/login", async function (req, res) {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email & password are required !" });
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = { id: id++, email, hashedPassword };
  users.push(user);
  console.log(user);

  let payload = { email, lastLogin: "12th Oct" };
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN }, (err, token) => {
    if (err) console.log(err);
    else return res.json({ token });
  });
});

module.exports = router;
