const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization; // Bearer token
  const token = authHeader?.split(" ")[1] || "";
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) return res.status(500).json({ err: "Invalid Token" });
      if (decodedToken) {
        console.log(decodedToken);
        next(); // proceed to the next action item in the pipeline (which is execution of the handler)
      }
    });
  } else {
    return res.status(401).json({ err: "Token not found !" });
  }
}
module.exports = authMiddleware;
