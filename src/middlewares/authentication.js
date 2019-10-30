const jwt = require("jsonwebtoken");

const vertifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, err => {
      if (err) {
        reject(err);
      } else {
        resolve("Token Verified");
      }
    });
  });

const authMiddleWare = async (req, res, next) => {
  const token =
    req.body.token || req.query.access_token || req.headers["x-access-token"];

  if (token) {
    try {
      await vertifyToken(token);
      const { id } = jwt.decode(token);
      req.userId = id;
      await next();
    } catch (err) {
      res.status(403).json({ message: "Failed to authenticate token." });
    }
  } else {
    res.status(403).json({ message: "No token provided." });
  }
};

module.exports = authMiddleWare;
