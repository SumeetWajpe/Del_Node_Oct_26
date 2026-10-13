const pool = require("../db/connection.js");
async function getAllCourses() {
  // connect & query
  const [rows] = await pool.query("SELECT * FROM courses ORDER BY id");

  // return resultset
  return rows;
}

module.exports = {
  getAllCourses,
};
